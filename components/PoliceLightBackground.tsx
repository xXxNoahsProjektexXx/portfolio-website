"use client";

import { motion } from "framer-motion";

export function PoliceLightBackground() {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden">
            {/* Hintergrund-Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />

            {/* Blurred Light Orbs */}
            <motion.div
                className="absolute w-[400px] h-[400px] bg-red-600/30 blur-[180px] rounded-full"
                animate={{
                    x: [0, 100, -80, 0],
                    y: [0, -60, 80, 0],
                    opacity: [0.5, 0.8, 0.6, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] bg-blue-500/40 blur-[180px] rounded-full top-1/2 right-0"
                animate={{
                    x: [0, -100, 80, 0],
                    y: [0, 50, -60, 0],
                    opacity: [0.5, 0.9, 0.6, 0.5],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-[350px] h-[350px] bg-purple-500/30 blur-[150px] rounded-full top-1/4 left-1/3"
                animate={{
                    x: [0, 60, -60, 0],
                    y: [0, -40, 40, 0],
                    opacity: [0.4, 0.7, 0.5, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
