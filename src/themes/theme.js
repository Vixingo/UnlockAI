import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#976353",
        },
    },
    typography: {
        fontFamily: "Roboto",
        h1: {
            fontSize: "3rem",
        },
        h2: { fontSize: "2.5rem" },
        h5: {
            fontSize: "1.33rem",
            fontWeight: "500",
        },
    },
});
