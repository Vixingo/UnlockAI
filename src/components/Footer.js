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
                <div className="container">
                    <Box sx={{ margin: "20px" }}>
                        <img src="/img/logo.png" alt="" width={"140px"} />
                    </Box>

                    <div className="row">
                        <div className="col-md-3">
                            <h2>Featured</h2>
                            <ul>
                                <li>Whisper</li>
                                <li>Alignment</li>
                                <li>Startup Fund</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h2>API</h2>
                            <ul>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Examples</li>
                                <li>Docs</li>
                                <li>Terms & Policies</li>
                                <li>Status</li>
                                <li>Log in</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h2>BLOG</h2>
                            <ul>
                                <li>Index</li>
                                <li>Research</li>
                                <li>Announcements</li>
                                <li>Events</li>
                                <li>Milestones</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h2>Information</h2>
                            <ul>
                                <li>About Us</li>
                                <li>Our Charter</li>
                                <li>Our Research</li>
                                <li>Publications</li>
                                <li>Newsroom</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copy">
                        <div className="">
                            <a href="#">UnlockAI © 2015-2023</a>{" "}
                            <a href="#">Privacy Policy</a>{" "}
                            <a href="#">Terms of Use</a>
                        </div>
                        <div className="icons">
                            <a href="#">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
