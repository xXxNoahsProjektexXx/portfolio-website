"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, LogOut, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SessionUser {
    name?: string;
    email?: string;
    image?: string;
    role?: string;
}

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [session, setSession] = useState<{ user?: SessionUser } | null>(null);

    // Session aus NextAuth-API laden
    useEffect(() => {
        fetch("/api/auth/session")
            .then((res) => res.json())
            .then((data) => {
                if (data?.user) setSession(data);
            })
            .catch(() => {});
    }, []);

    const handleLogin = () => {
        window.location.href = "/api/auth/signin";
    };

    const handleLogout = () => {
        window.location.href = "/api/auth/signout";
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-purple-400">
                    Noah<span className="text-gray-300">Portfolio</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 text-gray-300">
                    <Link href="/" className="hover:text-purple-400 transition">Home</Link>
                    <Link href="/about" className="hover:text-purple-400 transition">About</Link>
                    <Link href="/projects" className="hover:text-purple-400 transition">Projects</Link>
                    <Link href="/plugins" className="hover:text-purple-400 transition">Plugins</Link>
                    <Link href="/forms" className="hover:text-purple-400 transition">Forms</Link>

                    {/* User Status */}
                    {session?.user ? (
                        <div className="relative group">
                            <button className="flex items-center gap-2 hover:text-purple-400 transition">
                                {session.user.image && (
                                    <img
                                        src={session.user.image}
                                        alt="avatar"
                                        className="w-7 h-7 rounded-full border border-purple-500"
                                    />
                                )}
                                <span>{session.user.name}</span>
                            </button>
                            <div className="absolute right-0 hidden group-hover:block bg-white/10 backdrop-blur-md border border-white/10 rounded-xl mt-2 overflow-hidden">
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-purple-600/20 w-full text-left"
                                >
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={handleLogin}
                            className="flex items-center gap-2 bg-purple-600/80 hover:bg-purple-500 text-white px-3 py-2 rounded-lg transition"
                        >
                            <LogIn size={16} /> Login mit Discord
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-300 hover:text-purple-400 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="flex flex-col items-start p-6 gap-4 text-gray-300">
                            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Home</Link>
                            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">About</Link>
                            <Link href="/projects" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Projects</Link>
                            <Link href="/plugins" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Plugins</Link>
                            <Link href="/forms" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">Forms</Link>

                            <div className="border-t border-white/10 w-full mt-3 pt-3">
                                {session?.user ? (
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                                    >
                                        <LogOut size={16} /> Logout
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleLogin}
                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
                                    >
                                        <LogIn size={16} /> Login mit Discord
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
