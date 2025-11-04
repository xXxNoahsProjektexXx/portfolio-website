"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
    id: string;
    name: string;
    description: string;
    type: "spigot" | "pmmp";
    version: string;
    image: string;
}

export function PluginCard({ id, name, description, type, version, image }: Props) {
    return (
        <motion.div
            className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
        >
            <img src={image} alt={name} className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-5">
                <h3 className="text-xl font-semibold text-purple-300 mb-1">{name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{description}</p>

                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <span className="uppercase tracking-wider">{type}</span>
                    <span>v{version}</span>
                </div>

                <div className="flex gap-3 mt-4">
                    <Link
                        href={`/plugins/${id}`}
                        className="px-3 py-1 rounded-md bg-purple-600/80 hover:bg-purple-500 transition text-sm font-semibold"
                    >
                        Details
                    </Link>
                    <Link
                        href={`/downloads/${id}`}
                        className="px-3 py-1 rounded-md bg-blue-600/80 hover:bg-blue-500 transition text-sm font-semibold"
                    >
                        Download
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
