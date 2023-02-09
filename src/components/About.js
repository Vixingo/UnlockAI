import {
    Box,
    Container,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
function About() {
    return (
        <>
            <Box
                className="About"
                sx={{
                    backgroundImage: "url(/img/earth.png)",
                    paddingBottom: "350px",
                    pt: "88px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                }}
            >
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={6}>
                            <Box sx={{ paddingTop: "100px" }}>
                                <Typography
                                    sx={{
                                        color: "#976353",
                                        letterSpacing: "5px",
                                        textTransform: "uppercase",
                                        mb: "8px",
                                        fontWeight: "500",
                                    }}
                                >
                                    our services
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        color: "#fff",
                                        mb: "16px",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    soutions for all your needs
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#6f7f92",
                                        lineHeight: "1.75",
                                        padding: "10px",
                                        mb: "40px",
                                    }}
                                >
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud
                                    amet.
                                </Typography>
                                <Stack flexDirection={"row"}>
                                    <Box
                                        sx={{
                                            color: "#000",
                                            background: "#6F7F92",
                                            display: "inline-block",
                                            borderRadius: "50%",
                                            height: "24px",
                                            mr: "8px",
                                        }}
                                    >
                                        <ChevronRightRoundedIcon />
                                    </Box>
                                    <Typography sx={{ color: "#6F7F92" }}>
                                        Ut venenatis dui in congue
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box>
                                <img src="/img/fly.png" alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default About;
