"use client";

import { motion } from "framer-motion";
import { PluginCard } from "@/components/PluginCard";
import { PluginStats } from "@/components/PluginStats";

const plugins = [
    {
        id: "economyapi",
        name: "EconomyAPI",
        description: "Ein einfaches Wirtschaftssystem für PMMP-Server mit Multi-Currency Support.",
        type: "pmmp",
        version: "5.3.2",
        image: "https://via.placeholder.com/600x300?text=EconomyAPI",
    },
    {
        id: "73355",
        name: "ItemsAdder v2",
        description: "Ein umfangreiches Job-System für Spigot-Netzwerke mit MySQL & Booster-Support.",
        type: "spigot",
        version: "1.4.1",
        image: "public/ItemsAdderHeader.png",
    },
    {
        id: "boosterplugin",
        name: "BoosterPlugin",
        description: "Dynamisches Booster-System mit GUI, Permissions und Economy-Integration.",
        type: "pmmp",
        version: "3.0.0",
        image: "https://via.placeholder.com/600x300?text=BoosterPlugin",
    },
];

export default function Plugins() {
    // @ts-ignore
    return (
        <motion.section
            className="max-w-6xl mx-auto mt-10 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">
                Meine Plugins
            </h1>

            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
                Hier findest du eine Auswahl meiner veröffentlichten Plugins für Minecraft (Spigot & PMMP).
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {plugins.map((plugin, i) => (
                    <PluginCard key={i} {...plugin} />
                ))}
            </div>

            {/* Optional: Live Stats */}
            <div className="mt-16">
                <h2 className="text-2xl text-purple-300 mb-6 text-center">Live Statistiken</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <PluginStats pluginId="EconomyAPI" type="pmmp" />
                    <PluginStats pluginId="12345" type="spigot" />
                    <PluginStats pluginId="boosterplugin" type="pmmp" />
                </div>
            </div>
        </motion.section>
    );
}
