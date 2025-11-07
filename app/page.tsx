"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
    const [currentWord, setCurrentWord] = useState("");

    const words = ["Developer", "aus Wien", "CEO@ByteShare.tf"];

    useEffect(() => {
        const interval = setInterval(() => {
            // erzeugt kleinen "Glow"-Effekt bei jedem Wortwechsel
            setCurrentWord(words[Math.floor(Math.random() * words.length)]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex flex-col items-center justify-center h-[80vh] text-center select-none relative">
            {/* Titel */}
            <motion.h1
                className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 mb-6 drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                Willkommen!
            </motion.h1>

            {/* Typewriter mit animiertem Wortwechsel */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="text-xl text-gray-300 mb-6"
            >
                Ich bin{" "}
                <span className="relative font-semibold text-purple-400">
          <Typewriter
              words={["Developer", "aus Wien", "CEO@ByteShare.tf"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1200}
          />
                    {/* sanfter Glow */}
                    <motion.span
                        className="absolute inset-0 blur-md bg-purple-500/40 rounded-md -z-10"
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />
        </span>
            </motion.div>

            {/* Untertext */}
            <AnimatePresence mode="wait">
                <motion.p
                    key={currentWord}
                    className="text-gray-400 max-w-md"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                >
                    Als Fullstack-Developer erschaffe ich moderne digitale
                    Erlebnisse – von interaktiven Websites über kreative Inhalte bis hin
                    zu eigenen Online-Shops.
                </motion.p>
            </AnimatePresence>
        </section>
    );
}
