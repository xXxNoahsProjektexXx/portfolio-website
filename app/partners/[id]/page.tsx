"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const partners = {
    skrime: {
        name: "Skrime Hosting",
        description:
            "Skrime bietet performantes Hosting für Minecraft, BeamMP, ETS2 und mehr – mit intuitivem Webinterface und globalen Standorten.",
        logo: "https://skrime.eu/data/marketing/logo/primary.png",
        link: "https://skrime.eu/a/ByteShare",
    },
    datalix: {
        "name": "Datalix",
        "description": "Datalix bietet ein kostengünstiges Hosting für Minecraft-Server.",
        "logo": "https://cdn.datalix.de/images/header.png",
        "link": "https://datalix.de/a/weixelbaum",
    }
};

export default function PartnerDetail() {
    const { id } = useParams();
    const partner = (partners as any)[id as string];

    if (!partner) {
        return (
            <div className="text-center text-gray-400 mt-20">
                Partner nicht gefunden.
            </div>
        );
    }

    return (
        <motion.section
            className="max-w-4xl mx-auto mt-10 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <img
                src={partner.logo}
                alt={partner.name}
                className="w-full rounded-xl mb-6 object-cover"
            />

            <h1 className="text-4xl font-bold text-purple-400 mb-3">
                {partner.name}
            </h1>

            <p className="text-gray-300 mb-6">{partner.description}</p>

            <Link
                href={partner.link}
                target="_blank"
                className="inline-block px-4 py-2 rounded-md bg-purple-600/80 hover:bg-purple-500 transition text-sm font-semibold"
            >
                Zur Website
            </Link>

            <div className="mt-10">
                <Link href="/partners" className="text-sm text-purple-400 hover:underline">
                    ← Zurück zur Übersicht
                </Link>
            </div>
        </motion.section>
    );
}
