"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PartnerCardProps {
    id: string;
    name: string;
    description: string;
    logo: string;
    website?: string;
}

export function PartnerCard({ id, name, description, logo, website }: PartnerCardProps) {
    return (
        <motion.div
            key={id}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 text-gray-200 hover:bg-white/10 transition backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <img src={logo} alt={name} className="w-20 h-20 object-contain mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-purple-300 text-center mb-2">{name}</h3>
            <p className="text-gray-400 text-sm text-center mb-4">{description}</p>
            {website && (
                <div className="text-center">
                    <Link
                        href={website}
                        target="_blank"
                        className="text-purple-400 text-sm hover:underline"
                    >
                        Visit Website ↗
                    </Link>
                </div>
            )}
        </motion.div>
    );
}
