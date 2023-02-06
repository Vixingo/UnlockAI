import { Box } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: "100%",
                    width: "100%",
                    maxWidth: "100%",
                    minHeight: "100dvh",
                    minWidth: "100%",
                    overflow: "hidden",
                    background: "rgba(0,0,0,0.1)",
                }}
            >
                <video
                    src="/img/bg.mp4"
                    loop
                    autoPlay
                    muted
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        minWidth: "100%",
                        minHeight: "100%",
                        zIndex: "-1",
                    }}
                />

                <Navbar />
            </Box>
        </>
    );
}

export default Header;
