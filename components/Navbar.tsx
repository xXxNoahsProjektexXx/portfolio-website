"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
                <Link href="/" className="text-xl font-bold text-purple-400">
                    Noah<span className="text-gray-300">Portfolio</span>
                </Link>

                <div className="flex items-center gap-6 text-gray-300">
                    <Link href="/" className="hover:text-purple-400 transition">Home</Link>
                    <Link href="/about" className="hover:text-purple-400 transition">About</Link>
                    <Link href="/projects" className="hover:text-purple-400 transition">Projects</Link>
                    <Link href="/plugins" className="hover:text-purple-400 transition">Plugins</Link>

                    {/* LEGAL DROPDOWN */}
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="hover:text-purple-400 transition flex items-center gap-1"
                        >
                            Legal
                            <motion.span
                                animate={{ rotate: open ? 180 : 0 }}
                                className="inline-block text-xs ml-1"
                            >
                                ▼
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-48 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md shadow-lg"
                                    onMouseLeave={() => setOpen(false)}
                                >
                                    <Link
                                        href="/impressum"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 rounded-t-xl"
                                        onClick={() => setOpen(false)}
                                    >
                                        Impressum
                                    </Link>
                                    <Link
                                        href="/terms"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 rounded-b-xl"
                                        onClick={() => setOpen(false)}
                                    >
                                        Terms of Service
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </nav>
    );
}
