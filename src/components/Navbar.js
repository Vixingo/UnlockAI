import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
function Navbar() {
    const menu = [
        { title: "API", url: "#" },
        { title: "RESEARCH", url: "#" },
        { title: "BLOG", url: "#" },
        { title: "ABOUT", url: "#" },
    ];
    return (
        <>
            <section className="Navbar">
                <Box
                    sx={{
                        backdropFilter: "blur(1.5rem)",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#fff",
                        }}
                    >
                        Introducing ICE research release {"  "}
                        <Button href="#">
                            Try <ArrowOutwardIcon fontSize="14px" />
                        </Button>
                    </Typography>
                </Box>
                <Container maxWidth="xl">
                    <Stack
                        alignItems={"center"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                    >
                        <Box>
                            <img src="/img/logo.png" alt="" width={"140px"} />
                        </Box>
                        <Box>
                            <Stack flexDirection={"row"}>
                                {menu.map((data) => {
                                    return (
                                        <a
                                            href={data.url}
                                            style={{
                                                color: "#fff",
                                                marginLeft: "2.45rem",
                                            }}
                                        >
                                            <Typography>
                                                {data.title}
                                            </Typography>
                                        </a>
                                    );
                                })}
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </section>
        </>
    );
}

export default Navbar;
