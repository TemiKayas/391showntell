"use client"
import { useState } from 'react';
import { motion } from 'motion/react';

const components = {
    rotatingBox: (
        <motion.div
            key="rotatingBox"
            style={{ marginBottom: '20px', width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            Rotating Box
        </motion.div>
    ),
    fadeInBox: (
        <motion.div
            key="fadeInBox"
            style={{ marginBottom: '20px', width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            Fade In Box
        </motion.div>
    ),
    hoverScaleBox: (
        <motion.div
            key="hoverScaleBox"
            style={{ marginBottom: '20px', width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            whileHover={{ scale: 1.2 }}
        >
            Hover to Scale Box
        </motion.div>
    ),
    draggableBox: (
        <motion.div
            key="draggableBox"
            style={{ marginBottom: '20px', width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            drag
        >
            Draggable Box
        </motion.div>
    ),
    bouncingBox: (
        <motion.div
            key="bouncingBox"
            style={{ marginBottom: '20px', width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
        >
            Bouncing Box
        </motion.div>
    ),
    slidingBox: (
        <motion.div
            key="slidingBox"
            style={{ marginBottom: '20px', width: '100px', height: '100px', backgroundColor: 'blue', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
        >
            Sliding Box
        </motion.div>
    ),
};

export default function DemoPage() {
    const [selectedComponent, setSelectedComponent] = useState('rotatingBox');

    return (
        <div style={{ backgroundColor: 'gray', height: '100vh', padding: '20px' }}>
            <select
                onChange={(e) => setSelectedComponent(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px' }}
            >
                <option value="rotatingBox">Rotating Box</option>
                <option value="fadeInBox">Fade In Box</option>
                <option value="hoverScaleBox">Hover to Scale Box</option>
                <option value="draggableBox">Draggable Box</option>
                <option value="bouncingBox">Bouncing Box</option>
                <option value="slidingBox">Sliding Box</option>
            </select>
            {components[selectedComponent]}
        </div>
    );
}