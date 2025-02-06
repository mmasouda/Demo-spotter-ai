import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = (props) => {
    return (
        <div>
            <Header />
            <Box
                component="main"
                sx={{
                    maxWidth: "1024px",
                    paddingTop: "65px",
                    marginInline: "auto"
                }}
            >
                {props.children}
            </Box>
            <Footer />
        </div>
    )
}