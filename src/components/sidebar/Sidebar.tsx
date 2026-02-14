import { Button, Typography } from "@mui/material";
import { Maps } from "@types/Map";
import { useContext } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { MapContext } from "../../main";
import { FlexColumn } from "../Flex";
import { Box } from "@mui/system";
import { useState } from "react";
import MarkerToggles from "./MarkerToggles";

const CollapseButton = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    top: 0;
    left: ${props => props.$isOpen ? '300px' : '0'};
    width: 2rem;
    height: 2rem;
    opacity: 0.9;
    z-index: 1;
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
    h2 {
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 0.5rem;
    }

`

export default function Sidebar() {
    const { mapData, currentMapData } = useContext(MapContext);
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    return (
        <Box sx={{ position: "relative" }} >
            <StyledSidebar $isOpen={isOpen}>
                <Box sx={{paddingBottom: "1rem"}}>
                    <h2>Project: Gorgon Interactive Map</h2>
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
                {/* <SearchBar/> */}
                <Divider />
                <MarkerToggles />
                <Divider />
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