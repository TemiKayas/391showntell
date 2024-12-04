'use client';

import { motion } from "motion/react";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation"; // For navigation


export default function LandingPage() {
    const router = useRouter();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f0f8ff',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {/* Home Icon Button */}
            <IconButton
                onClick={() => router.back()} // Navigate to the previous page
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    color: "blue",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(4px)",
                }}
            >
                <HomeIcon fontSize="large" />
            </IconButton>
            <motion.button
                whileHover={{
                    scale: 1.2,
                    backgroundColor: [
                        "#ff0000", "#ff7f00", "#ffff00",
                        "#00ff00", "#0000ff", "#4b0082", "#8b00ff"
                    ],
                    transition: {
                        duration: 1,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    },
                }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                }}
                style={{
                    width: '40%',
                    height: '10%',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    backgroundColor: '#1e90ff',
                    border: 'none',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                }}
            >
               Free V-Bucks!!CLAIM NOW
            </motion.button>
        </div>
    );
}
