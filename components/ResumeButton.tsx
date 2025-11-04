"use client";
import { motion } from "framer-motion";

export function ResumeButton() {
    const download = () => {
        window.open("/api/resume", "_blank");
    };

    return (
        <motion.button
            onClick={download}
            className="mt-6 px-6 py-3 bg-purple-600/80 hover:bg-purple-500 text-white rounded-lg shadow-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            📄 Lebenslauf herunterladen
        </motion.button>
    );
}
