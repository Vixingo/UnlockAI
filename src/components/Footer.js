import {
    Box,
    Container,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
function Footer() {
    const footerMenu = [
        {
            title: "Home",
            url: "#",
        },
        {
            title: "About Us",
            url: "#",
        },
        {
            title: "Contact Us",
            url: "#",
        },
        {
            title: "Career",
            url: "#",
        },
    ];
    return (
        <>
            <section className="Footer">
                <Container maxWidth={"xl"}>
                    <Grid
                        container
                        alignItems={"center"}
                        sx={{
                            borderBottom: "1px solid #464748",
                            marginBottom: "10px",
                            paddingBottom: "10px",
                        }}
                    >
                        {" "}
                        <Grid item xs={4}>
                            <Box>
                                <img
                                    src="/img/logo.png"
                                    alt=""
                                    width={"240px"}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>
                                <Stack
                                    flexDirection={"row"}
                                    justifyContent={"center"}
                                >
                                    {footerMenu.map((data) => {
                                        return (
                                            <Typography
                                                sx={{
                                                    paddingRight: "25px",
                                                    color: "#fff",
                                                }}
                                            >
                                                {data.title}
                                            </Typography>
                                        );
                                    })}
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Stack
                                flexDirection={"row"}
                                justifyContent={"flex-end"}
                            >
                                <IconButton>
                                    <FacebookOutlinedIcon />
                                </IconButton>
                                <IconButton>
                                    <i class="fa-brands fa-twitter"></i>
                                </IconButton>
                                <IconButton>
                                    <i class="fa-brands fa-instagram"></i>{" "}
                                </IconButton>
                                <IconButton>
                                    <i class="fa-brands fa-linkedin"></i>{" "}
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Typography
                        sx={{
                            color: "#fff",
                            textAlign: "center",
                            fontSize: "14px",
                            mb: 3,
                        }}
                    >
                        © 2021 vizion All Rights Reserved.
                    </Typography>
                </Container>
            </section>
        </>
    );
}

export default Footer;
