import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
function Services() {
    const serviceData = [
        {
            img: "/img/book.png",
            title: "Study",
            detail: "It is a long established fact that a reader will be distracted by the readable content of a page whe...",
        },
        {
            img: "/img/brain.png",
            title: "Remember",
            detail: "It is a long established fact that a reader will be distracted by the readable content of a page whe...",
        },
        {
            img: "/img/rocket.png",
            title: "Take off",
            detail: "It is a long established fact that a reader will be distracted by the readable content of a page whe...",
        },
    ];
    return (
        <>
            <section className="Services">
                <Box
                    sx={{
                        backgroundColor: "#000",
                        textAlign: "center",
                        padding: "100px 0",
                    }}
                >
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
                            mb: "70px",
                            textTransform: "capitalize",
                        }}
                    >
                        soutions for all your needs
                    </Typography>
                    <Container maxWidth="xl">
                        <Grid container spacing={2}>
                            {serviceData.map((data) => {
                                return (
                                    <Grid item xs={4}>
                                        <Box
                                            sx={{
                                                backgroundColor: "#090A10",
                                                borderRadius: "5px",
                                                padding: "0 32px ",
                                                minHeight: "310px",
                                            }}
                                        >
                                            <Box sx={{ p: "30px" }}>
                                                <img src={data.img} alt="" />
                                            </Box>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    paddingTop: "12px",
                                                    color: "#fff",
                                                }}
                                            >
                                                {data.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    margin: "15px 0",
                                                    color: "#6f7f92",
                                                }}
                                            >
                                                {data.detail}
                                            </Typography>
                                            <IconButton
                                                sx={{
                                                    backgroundColor: "#976353",
                                                    position: "relative",
                                                    top: "20px",
                                                }}
                                            >
                                                <ArrowForwardRoundedIcon
                                                    sx={{ color: "#fff" }}
                                                />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Container>
                </Box>
            </section>
        </>
    );
}

export default Services;
