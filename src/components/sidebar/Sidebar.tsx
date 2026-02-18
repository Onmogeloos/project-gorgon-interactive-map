import logo from "@assets/images/logo.png";
import { Form } from "@base-ui-components/react";
import { joiResolver } from "@hookform/resolvers/joi";
import { Autocomplete, Button, Drawer, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Joi from "joi";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import styled, { useTheme } from "styled-components";
import { MapContext } from "../../main";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setIsMarkerProposalOpen } from "../../store/mapSlice";
import { FlexColumn } from "../Flex";
import MarkerToggles from "./MarkerToggles";
import SearchBar from "./SearchBar";
import SidebarFooter from "./SidebarFooter";

const sidebarWidth = 350;

const CollapseButton = styled.div<{ $isOpen: boolean }>`
    z-index: 99999999;
    width: 3rem;
    height: 3rem;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.palette.secondary.main};
    opacity: 0.9;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: ${props => props.$isOpen ? `${sidebarWidth}px` : "0"};
    // Equals the drawer transition
    transition: left 225ms cubic-bezier(0, 0, 0.2, 1);

    @media (max-width: ${sidebarWidth + 3 * 16}px) {
        left: ${props => props.$isOpen ? `calc(100vw - 3rem)` : "0"};
    }
`


const DrawerContainer = styled.div`
    width: ${sidebarWidth}px;
    max-width: calc(100vw - 3rem);
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    opacity: 0.9;
    padding: 1rem;
    overflow-y: auto;
    background-color: ${props => props.theme.palette.secondary.main};
    h2 {
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 0.5rem;
    }
`

const Logo = styled.img`
    width: 100%;
    margin-bottom: 1rem;
`

export default function Sidebar() {
    const { mapData, currentMapData } = useContext(MapContext);
    const isMarkerProposalOpen = useAppSelector((state) => state.map.isMarkerProposalOpen);
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const theme = useTheme();
    // Sort areas by group first, then by name to avoid duplicated headers in Autocomplete
    const areas = Object.values(mapData)
        .sort((a, b) => {
            const groupA = a.group || "";
            const groupB = b.group || "";
            if (groupA !== groupB) {
                return groupA.localeCompare(groupB);
            }
            return a.name.localeCompare(b.name);
        });
    return (
        <Box>
            <Drawer
                slotProps={{
                    paper: {
                        sx: {
                            background: "transparent",
                            border: "none",
                            borderStartEndRadius: 0
                        }
                    }
                }}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                variant="persistent">
                <DrawerContainer>
                    <Logo src={logo} alt="Logo" />
                    <FlexColumn $gapY="0.5rem" $alignHorizontal="center">
                        <Typography variant="subtitle1">Project: Gorgon Interactive Map</Typography>
                    </FlexColumn>
                    {/* Custom divider to avoid input label clipping */}
                    <Box sx={{ width: "100%", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", marginTop: "1rem" }} />
                    <FlexColumn $gapY="0.5rem">
                        <Autocomplete
                            disableClearable={true}
                            value={areas.find(area => area.slug === currentMapData.slug)}
                            options={areas}
                            getOptionLabel={(option) => option.name}
                            groupBy={(option) => option.group}
                            renderInput={(params) => <TextField {...params} label="Zone" />}
                            onChange={(_, map) => navigate(`/${map.slug}`)}
                            slotProps={{
                                listbox: {
                                    sx: {
                                        maxHeight: "60vh"
                                    }
                                }
                            }}
                            renderGroup={
                                (params) => <Box key={params.group}>
                                    <Box sx={{ padding: "0.5rem", backgroundColor: theme.palette.secondary.main }}>
                                        <Typography variant="subtitle2">{params.group}</Typography>
                                    </Box>
                                    {params.children}
                                </Box>
                            }
                        />
                    </FlexColumn>
                    <Divider />

                    {
                        !isMarkerProposalOpen && <>
                            <SearchBar />
                            <Divider />
                            <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
                                <MarkerToggles />
                            </Box>

                            <Divider />
                            <SidebarFooter />
                        </>
                    }
                    {
                        isMarkerProposalOpen && <MarkerProposalSidebar />
                    }
                </DrawerContainer>
            </Drawer>
            <CollapseButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "<" : ">"}
            </CollapseButton>
        </Box>
    );
}

function Divider() {
    return <Box sx={{ width: "100%", borderBottom: "1px solid rgba(255, 255, 255, 0.2)", margin: "1rem 0" }} />
}

type FormData = {
    name: string;
    type: string;
    map: string;
    position: [number, number];
}

function MarkerProposalSidebar() {
    const { globalData, currentMapData } = useContext(MapContext);
    const dispatch = useAppDispatch();
    const { mapClickPosition } = useAppSelector((state) => state.map);
    const form = useForm<FormData>({
        defaultValues: {
            name: "",
            type: undefined
        },
        resolver: joiResolver(Joi.object({
            name: Joi.string().required(),
            type: Joi.string().disallow("").required()
        })),
        mode: "onChange",
    });

    const onSubmit = async (data: FormData) => {
        try {
            if (!mapClickPosition) {
                window.alert("Please click on the map to select the marker position before submitting.");
                return
            }
            await fetch(`https://master-project-gorgon-marker-worker.onmogeloos.workers.dev/save-marker`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    position: [mapClickPosition.y, mapClickPosition.x],
                    map: currentMapData.slug
                })
            });
            window.alert("Thank you for your submission! Your marker proposal has been received and will be reviewed as soon as possible.");
        } catch (_error) {
            window.alert(`Failed to submit marker. Please try again later.`);
        } finally {
            dispatch(setIsMarkerProposalOpen(false));
        }
    }

    return (
        <FlexColumn $gapY="1rem">
            <Typography variant="h6">Propose a new marker</Typography>
            <Typography variant="body1">Submitted markers are manually reviewed before being added to the map.</Typography>
            <Typography variant="body2">Click on the map to select the position.</Typography>
            <Form onSubmit={form.handleSubmit(onSubmit, (err) => console.error(err))}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <Box sx={{ width: "100%" }}>
                        <TextField label="Name" variant="filled" {...form.register("name")} fullWidth />
                        {
                            form.formState.errors.name && <Typography color="error">{form.formState.errors.name.message}</Typography>
                        }
                    </Box>
                    <Box sx={{ width: "100%" }}   >
                        <TextField
                            select
                            label="Type"
                            defaultValue=""
                            fullWidth
                            {...form.register("type")}
                        >
                            {
                                Object.entries(globalData.markerGroups).map(([key, group]) => (
                                    <MenuItem key={key} value={key}>{group.label}</MenuItem>
                                ))
                            }
                        </TextField>
                        {
                            form.formState.errors.type && <Typography color="error">{form.formState.errors.type.message}</Typography>
                        }
                    </Box>
                    <TextField
                        label="Map"
                        disabled
                        variant="filled"
                        value={currentMapData.name}
                    />
                    <TextField
                        label="Position"
                        disabled
                        variant="filled"
                        value={mapClickPosition ? `[${mapClickPosition.y}, ${mapClickPosition.x}]` : "[0, 0]"}
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: "1rem" }}>
                    Submit
                </Button>
            </Form>
            <Button variant="outlined" color="inherit" fullWidth onClick={() => dispatch(setIsMarkerProposalOpen(false))}>
                Cancel
            </Button>
        </FlexColumn>
    )
}