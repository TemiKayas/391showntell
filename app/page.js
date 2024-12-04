'use client';
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
    margin: "1rem 0",
    padding: "1rem 2rem",
    fontSize: "1.2rem",
    textTransform: "none",
    backgroundColor: "#1976d2",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#115293",
    },
});

export default function Home() {
    return (
        <Box
            sx={{
                height: "100vh", // Full viewport height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "2rem", // Responsive padding
                background: "linear-gradient(to bottom right, #eceff1, #cfd8dc)",
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    marginBottom: "2rem",
                    fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
                    color: "#333",
                }}
            >
                Get Started With Framer Motion
            </Typography>

            <Box>
                <Link href="/demo" passHref>
                    <StyledButton variant="contained">Go to Demo Page</StyledButton>
                </Link>
                <Link href="/examples" passHref>
                    <StyledButton variant="contained">Go to Examples</StyledButton>
                </Link>
            </Box>
        </Box>
    );
}
