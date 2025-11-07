"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <footer className="relative mt-16 py-10 bg-gradient-to-t from-black/60 via-black/40 to-transparent border-t border-white/10 backdrop-blur-md overflow-hidden">
            {/* Sanfter Glow / bewegtes Licht */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl"
                animate={{
                    x: ["0%", "100%", "-50%"],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <motion.h2
                    className="text-lg font-semibold text-purple-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    © {new Date().getFullYear()} TypischNoaah — Portfolio
                </motion.h2>

                <motion.div
                    className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Link
                        href="/terms"
                        className="hover:text-purple-400 transition-colors"
                    >
                        Terms of Service
                    </Link>

                    <Link
                        href="/partners"
                        className="hover:text-purple-400 transition-colors">Partner</Link>

                    <Link href={"/impressum"}
                          className="hover:text-purple-400 transition-colors">Impressum</Link>
                </motion.div>

                <motion.p
                    className="text-xs text-gray-500 mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Designed & built with 💜 using Next.js, Tailwind & Framer Motion
                </motion.p>
            </div>
        </footer>
    );
}
