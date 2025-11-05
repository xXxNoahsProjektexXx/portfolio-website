"use client";

import { motion } from "framer-motion";
import { PluginCard } from "@/components/PluginCard";
import { PluginStats } from "@/components/PluginStats";

const plugins: {
    id: string;
    dl_name: string;           // 🔥 Download-Dateiname oder Link
    name: string;
    description: string;
    type: "spigot" | "pmmp";
    version: string;
    image: string;
}[] = [
    {
        id: "economyapi",
        dl_name: "EconomyAPI.phar",
        name: "EconomyAPI",
        description:
            "Ein einfaches Wirtschaftssystem für PMMP-Server mit Multi-Currency Support und API Hooks.",
        type: "pmmp",
        version: "5.3.2",
        image: "https://via.placeholder.com/600x300?text=EconomyAPI",
    },
    {
        id: "73355",
        dl_name: "ItemsAdder_4.0.14.jar",
        name: "ItemsAdder",
        description:
            "Resource-Addon-System für Spigot/Bukkit, um eigene Items und Blöcke zu registrieren.",
        type: "spigot",
        version: "4.0.14",
        image: "https://via.placeholder.com/600x300?text=ItemsAdder",
    },
    {
        id: "boosterplugin",
        dl_name: "BoosterPlugin.phar",
        name: "BoosterPlugin",
        description:
            "Dynamisches Booster-System mit GUI, Permissions und Economy-Integration für PMMP.",
        type: "pmmp",
        version: "3.0.0",
        image: "https://via.placeholder.com/600x300?text=BoosterPlugin",
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
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-purple-400 mb-4">Meine Plugins</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Hier findest du eine Auswahl meiner veröffentlichten Minecraft-Plugins
                    für Spigot und PocketMine-MP.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {plugins.map((plugin, i) => (
                    <PluginCard key={i} {...plugin} />
                ))}
            </div>

            <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl text-purple-300 mb-6 text-center">Live-Statistiken</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <PluginStats pluginId="EconomyAPI" type="pmmp" />
                    <PluginStats pluginId="73355" type="spigot" />
                    <PluginStats pluginId="boosterplugin" type="pmmp" />
                </div>
            </motion.div>
        </motion.section>
    );
}
