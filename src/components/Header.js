import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
function Header() {
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    width: "100%",
                    height: "100vh",
                    minHeight: "100vh",
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
                        width: "auto",
                        minHeight: "100vh",
                        height: "100vh",
                        zIndex: "-1",
                    }}
                />

                <Navbar />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "20px",
                        left: "0",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#fff",
                            maxWidth: "600px",
                            margin: "20px",
                        }}
                    >
                        Join us in shaping the future of technology.
                    </Typography>
                    <Stack flexDirection={"row"}>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<PlayArrowRoundedIcon />}
                            sx={{
                                color: "#fff",
                                borderRadius: "3rem",
                                margin: "20px",
                            }}
                        >
                            Watch Video
                        </Button>
                        <Button size="large" sx={{ color: "#fff" }}>
                            {" "}
                            View Career <KeyboardArrowRightIcon />{" "}
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}

export default Header;
