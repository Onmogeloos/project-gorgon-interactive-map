import { Button, Dialog, Drawer, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { MapContext } from "../../main";
import { FlexColumn } from "../Flex";
import { Box } from "@mui/system";
import { useState } from "react";
import MarkerToggles from "./MarkerToggles";
import SearchBar from "./SearchBar";
import { Form } from "@base-ui-components/react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setIsMarkerProposalOpen } from "../../store/mapSlice";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import ZoneToggles from "./ZoneToggles";
import { Maps } from "@localtypes/Map";

const sidebarWidth = 300;

const CollapseButton = styled.div<{ $isOpen: boolean }>`
    z-index: 1000;
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
`


const DrawerContainer = styled.div`
    width: ${sidebarWidth}px;
    display: flex;
    flex-direction: column;
    opacity: 0.9;
    padding: 1rem;
    overflow-y: auto;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
    background-color: ${props => props.theme.palette.secondary.main};
    h2 {
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 0.5rem;
    }
`

export default function Sidebar() {
    const { mapData, currentMapData } = useContext(MapContext);
    const dispatch = useAppDispatch();
    const isMarkerProposalOpen = useAppSelector((state) => state.map.isMarkerProposalOpen);
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    return (
        <Box>
            <Drawer slotProps={{
                paper: {
                    sx: {
                        background: "transparent",
                        border: "none",
                        borderStartEndRadius: 0,
                    }
                }
            }} open={isOpen} onClose={() => setIsOpen(false)} variant="persistent">
                <DrawerContainer>
                    <Typography variant="h4">Project: Gorgon</Typography>
                    <Typography sx={{ paddingBottom: "1rem" }} variant="h5">Interactive map</Typography>
                    <Box sx={{ paddingBottom: "1rem", flexGrow: 1, overflowY: "auto", minHeight: "8rem" }}>
                        <FlexColumn $gapY="0.5rem">
                            {(Object.keys(mapData) as Maps[]).map((mapKey) => {
                                const map = mapData[mapKey];
                                const isActive = currentMapData.slug === map.slug;
                                return (
                                    <Button
                                        key={map.slug}
                                        color={isActive ? "primary" : "inherit"}
                                        onClick={() => navigate(`/${map.slug}`)}
                                    >
                                        {map.name}
                                    </Button>
                                );
                            })}
                        </FlexColumn>
                    </Box>
                    <Divider />
                    {
                        !isMarkerProposalOpen && <>
                            <SearchBar />
                            <Divider />
                            <MarkerToggles />
                            <ZoneToggles />
                            <Divider />
                            <Button variant="contained" color="primary" fullWidth onClick={() => dispatch(setIsMarkerProposalOpen(true))}>
                                Propose new marker
                            </Button></>
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
        console.log(data);
        try {
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
        } catch (error) {
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