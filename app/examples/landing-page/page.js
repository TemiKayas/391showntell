'use client';
import { motion } from "motion/react";
import { useRouter } from "next/navigation"; // For navigation
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

export default function LandingPage() {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
                overflow: "hidden",
                color: "white",
                textAlign: "center",
            }}
        >
            {/* Home Icon Button */}
            <IconButton
                onClick={() => router.back()} // Navigate to the previous page
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(4px)",
                }}
            >
                <HomeIcon fontSize="large" />
            </IconButton>

            {/* Animated Title */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                    fontSize: "3rem",
                    margin: "0",
                    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
                }}
            >
                Welcome to Your Animated Journey
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                style={{
                    fontSize: "1.5rem",
                    margin: "1rem 0",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
                }}
            >
                Explore Framer Motion in Action
            </motion.p>

            {/* Animated Button with Hover Effect */}
            <motion.a
                href="/examples"
                whileHover={{
                    scale: 1.1,
                    backgroundColor: "#ffffff",
                    color: "#3a7bd5",
                    transition: { duration: 0.3 },
                }}
                style={{
                    marginTop: "1rem",
                    padding: "1rem 2rem",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    backgroundColor: "#ffffff33",
                    color: "white",
                    border: "2px solid white",
                    borderRadius: "50px",
                    textDecoration: "none",
                    cursor: "pointer",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
                }}
            >
                Example Button
            </motion.a>

            {/* Animated Background Elements */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                }}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "20%",
                    width: "10%",
                    height: "20%",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    zIndex: 1,
                }}
            />
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    delay: 1,
                    ease: "easeInOut",
                }}
                style={{
                    position: "absolute",
                    bottom: "15%",
                    right: "10%",
                    width: "200px",
                    height: "200px",
                    background: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "50%",
                    zIndex: 1,
                }}
            />
        </motion.div>
    );
}
