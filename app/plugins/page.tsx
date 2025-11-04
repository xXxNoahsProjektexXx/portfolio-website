"use client";

import { motion } from "framer-motion";
import { PluginCard } from "@/components/PluginCard";
import { PluginStats } from "@/components/PluginStats";

const plugins: {
    id: string;
    name: string;
    description: string;
    type: "spigot" | "pmmp";
    version: string;
    image: string;
}[] = [
    {
        id: "73355",
        name: "ItemsAdder",
        description:
            "✨ItemsAdder⭐Emotes, Mobs, Items, Armors, HUD, GUI, Emojis, Blocks, Wings, Hats, Liquids",
        type: "spigot",
        version: "4.0.14",
        image: "https://via.placeholder.com/600x300?text=JobsSystem",
    },
];

export default function Plugins() {
    return (
        <motion.section
            className="max-w-6xl mx-auto mt-10 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* HEADER */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-purple-400 mb-4">
                    Meine Plugins
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Hier findest du eine Auswahl meiner veröffentlichten Minecraft-Plugins
                    für Spigot und PocketMine-MP. Alle sind aktiv gepflegt, performant
                    und kostenlos zum Download verfügbar.
                </p>
            </div>

            {/* PLUGIN GRID */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {plugins.map((plugin, i) => (
                    <PluginCard key={i} {...plugin} />
                ))}
            </div>

            {/* LIVE STATS SECTION */}
            <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl text-purple-300 mb-6 text-center">
                    Live-Statistiken
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <PluginStats pluginId="73355" type="spigot" />
                </div>
            </motion.div>
        </motion.section>
    );
}
