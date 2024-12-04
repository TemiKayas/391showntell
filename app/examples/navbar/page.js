'use client'
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import {useRouter} from "next/navigation";
export default function Navbar() {
    const videoId = "obib4ka06y0"; // Replace this with your YouTube video ID
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    const router =useRouter();
    return (

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <iframe
                width="560"
                height="315"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ maxWidth: '100%' }}
            ></iframe>
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
        </div>
    );
}
