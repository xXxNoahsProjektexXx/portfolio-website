"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { PluginStats } from "@/components/PluginStats";
import Link from "next/link";

const plugins = {
    economyapi: {
        name: "EconomyAPI",
        dl_name: "EconomyAPI.phar",
        type: "pmmp",
        version: "5.3.2",
        description:
            "EconomyAPI ist ein einfaches Wirtschaftssystem für PocketMine-MP Server.",
    },
    "73355": {
        name: "ItemsAdder",
        dl_name: "ItemsAdder_4.0.14.jar",
        type: "spigot",
        version: "4.0.14",
        description:
            "ItemsAdder ermöglicht es, eigene Items, Blöcke und Texturen in Minecraft Spigot zu integrieren.",
    },
    boosterplugin: {
        name: "BoosterPlugin",
        dl_name: "BoosterPlugin.phar",
        type: "pmmp",
        version: "3.0.0",
        description: "BoosterPlugin bietet ein dynamisches Boost-System für PMMP.",
    },
};

export default function PluginDetail() {
    const { id } = useParams();
    const plugin = (plugins as any)[id as string];

    if (!plugin) {
        return <p className="text-center text-gray-400 mt-20">Plugin nicht gefunden.</p>;
    }

    return (
        <motion.section
            className="max-w-4xl mx-auto mt-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 mb-3">{plugin.name}</h1>
            <p className="text-gray-400 mb-3">
                Typ: {plugin.type.toUpperCase()} | Version: {plugin.version}
            </p>
            <p className="text-gray-300 mb-8">{plugin.description}</p>

            <PluginStats pluginId={id as string} type={plugin.type} />

            <Link
                href={`/downloads/${plugin.dl_name}`}
                className="inline-block mt-6 px-6 py-3 rounded-lg bg-purple-600/80 hover:bg-purple-500 text-white font-semibold transition"
            >
                ⬇️ Plugin herunterladen
            </Link>

            <div className="mt-10">
                <Link href="/plugins" className="text-sm text-purple-400 hover:underline">
                    ← Zurück zur Übersicht
                </Link>
            </div>
        </motion.section>
    );
}
