"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    link?: string;
}

export function ProjectCard({ title, description, image, link }: ProjectProps) {
    return (
        <motion.div
            className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-semibold text-purple-300 mb-1">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

                {link && (
                    <Link
                        href={link}
                        target="_blank"
                        className="mt-3 inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm transition"
                    >
                        <ExternalLink className="w-4 h-4" /> Projekt ansehen
                    </Link>
                )}
            </div>

            {/* sanfter Glow unter der Karte */}
            <motion.div
                className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>
    );
}
