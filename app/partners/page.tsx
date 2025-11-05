"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const partners = [
    {
        id: "skrime",
        name: "Skrime Hosting",
        logo: "https://skrime.eu/data/marketing/icon/primary.png",
        description: "Premium Gamehosting für Minecraft, BeamMP und mehr.",
    },
    {
        id: "datalix",
        name: "Datalix",
        logo: "https://cdn.datalix.de/images/header.png",
        description: "Das Hosting-Unternehmen für kostengünstige KVM-Server",
    },
    {
        id: "flamefm",
        name: "FlameFM",
        logo: "https://via.placeholder.com/400x200?text=FlameFM",
        description: "Das Online-Radio für Gamer und Creator.",
    },
];

export default function Partners() {
    return (
        <motion.section
            className="max-w-5xl mx-auto mt-10 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">
                Partner & Kooperationen
            </h1>

            <div className="grid gap-8 sm:grid-cols-2">
                {partners.map((partner, i) => (
                    <Link
                        key={i}
                        href={`/partners/${partner.id}`}
                        className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-md flex flex-col items-center text-center group"
                    >
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                        />
                        <h3 className="text-xl font-semibold text-purple-300 mb-2">
                            {partner.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{partner.description}</p>
                    </Link>
                ))}
            </div>
        </motion.section>
    );
}
