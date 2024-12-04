'use client';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid } from "@mui/material";
import { motion } from "motion/react";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import {useRouter} from "next/navigation";
// Styled Motion Card for animations
const MotionCard = styled(motion.div)({
    maxWidth: "100%",
    margin: "1rem",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
});

const exampleData = [
    {
        title: "Example 1: Landing Page",
        description: "A landing page with smooth animations using Framer Motion(COOL BUBBLES).",
        link: "/examples/landing-page",
        motionEffect: "BUBBLE BOUNCING AND SUBTITLE MOVING IN TO MAKE IT EYE-CATCHING",
    },
    {
        title: "Example 2:DOWNLOAD NOW button",
        description: "Button that makes you want to download something even though it may be a virus",
        link: "/examples/bouncing-button",
        motionEffect: "Bouncing button with flashing colors",
    },
    {
        title: "Example 3: Navbar",
        description: "A sliding navbar that smoooothly comes into the picture to make an app with a little bit of tang",
        link: "/examples/navbar",
        motionEffect: "Slide-in animations for navbar",
    },
];

export default function Examples() {
    const router = useRouter();
    return (
        <Box
            sx={{
                minHeight: "100vh",
                padding: "2rem",
                background: "linear-gradient(to bottom right, #fafafa, #eceff1)",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    fontSize: { xs: "2rem", md: "3rem" },
                }}
            >
                Examples of Framer Motion
            </Typography>
            <Grid
                container
                justifyContent="center"
                spacing={4}
                sx={{ padding: "0 1rem" }}
            >
                {exampleData.map((example, index) => (
                    <Grid item key={index}>
                        <MotionCard
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card sx={{ background: "#ffffff" }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ marginBottom: "0.5rem" }}>
                                        {example.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {example.description}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ marginTop: "1rem", fontStyle: "italic" }}
                                    >
                                        {example.motionEffect}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        variant="contained"
                                        href={example.link}
                                        sx={{
                                            margin: "0 auto",
                                            backgroundColor: "#1976d2",
                                            "&:hover": { backgroundColor: "#115293" },
                                        }}
                                    >
                                        View Example
                                    </Button>
                                </CardActions>
                            </Card>
                        </MotionCard>
                    </Grid>
                ))}
            </Grid>
            <IconButton
                onClick={() => router.back()} // Navigate to the previous page
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    color: "white",
                    backgroundColor: "blue",
                    backdropFilter: "blur(4px)",
                }}
            >
                <HomeIcon fontSize="large" />
            </IconButton>
        </Box>

    );
}
