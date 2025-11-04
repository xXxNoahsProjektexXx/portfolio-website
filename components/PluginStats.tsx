"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
    pluginId: string;
    type: "spigot" | "pmmp";
}

export function PluginStats({ pluginId, type }: Props) {
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        fetch(`/api/pluginStats?pluginId=${pluginId}&type=${type}`)
            .then((r) => r.json())
            .then((d) => setStats(d));
    }, [pluginId, type]);

    if (!stats) return <p className="text-gray-400 text-center">Lade {type}-Statistiken…</p>;
    if (stats.error) return <p className="text-red-400 text-center">{stats.error}</p>;

    const d = stats.data;

    return (
        <motion.div
            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-gray-200 my-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-xl font-bold text-purple-400 mb-3">
                {type === "spigot" ? "Spigot Plugin" : "Poggit Plugin"} – {d.name || d.plugin}
            </h3>

            {type === "spigot" && (
                <ul className="text-sm space-y-1">
                    <li>⭐ Downloads: {d.downloads.toLocaleString()}</li>
                    <li>👤 Author: {d.author}</li>
                    <li>📦 Updates: {new Date(d.updates * 1000).toLocaleDateString("de-DE")}</li>
                    <li>💬 Bewertung: {d.rating.toFixed(1)} / 5</li>
                </ul>
            )}

            {type === "pmmp" && (
                <ul className="text-sm space-y-1">
                    <li>📦 Releases: {d.releases}</li>
                    <li>💾 Gesamt-Downloads: {d.totalDownloads.toLocaleString()}</li>
                    <li>🔖 Letzte Version: {d.lastRelease}</li>
                </ul>
            )}
        </motion.div>
    );
}
