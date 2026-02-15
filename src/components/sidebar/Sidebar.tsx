import { Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Maps } from "@types/Map";
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

const CollapseButton = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    top: 0;
    left: ${props => props.$isOpen ? '300px' : '0'};
    width: 3rem;
    height: 3rem;
    opacity: 0.9;
    z-index: 999;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.palette.secondary.main};
    cursor: pointer;
    transition: left 0.3s ease;
    &:hover {
        opacity: 1;
    }
`

const StyledSidebar = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    z-index: 999;
    background-color: ${props => props.theme.palette.secondary.main};
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    opacity: 0.9;
    padding: 1rem;
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
    overflow-y: auto;
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
        <Box sx={{ position: "relative" }} >
            <StyledSidebar $isOpen={isOpen}>
                <h2>Project: Gorgon Interactive Map</h2>
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
                        <Divider />
                        <Button variant="contained" color="primary" fullWidth onClick={() => dispatch(setIsMarkerProposalOpen(true))}>
                            Propose new marker
                        </Button></>
                }
                {
                    isMarkerProposalOpen && <MarkerProposalSidebar />
                }

            </StyledSidebar>
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
            type: Object.keys(globalData.markerGroups)[0],
            map: currentMapData.slug,
            position: [mapClickPosition?.y ?? 0, mapClickPosition?.x ?? 0],
        },
        resolver: joiResolver(Joi.object({
            name: Joi.string().required(),
            type: Joi.string().valid(...Object.keys(globalData.markerGroups)).required(),
            map: Joi.string().required(),
            position: Joi.array().items(Joi.number()).length(2).required(),
        })),
        mode: "onChange",
    })

    const onSubmit = (data: FormData) => {
        console.log(data);
        fetch(`https://master-project-gorgon-marker-worker.onmogeloos.workers.dev/save-marker`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }

    return (
        <FlexColumn $gapY="1rem">
            <Typography variant="h6">Propose a new marker</Typography>
            <Typography variant="body1">Click on the map to select the position.</Typography>
            <Form onSubmit={form.handleSubmit(onSubmit)}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <TextField label="Name" variant="filled" {...form.register("name")} />
                    <TextField
                        select
                        label="Type"
                        defaultValue=""
                    >
                        {
                            Object.entries(globalData.markerGroups).map(([key, group]) => (
                                <MenuItem key={key} value={key}>{group.label}</MenuItem>
                            ))
                        }
                    </TextField>
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