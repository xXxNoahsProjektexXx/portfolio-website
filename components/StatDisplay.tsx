"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function StatDisplay() {
    const [stats, setStats] = useState<any>(null);

    useEffect(() => {
        fetch("/api/stats")
            .then((res) => res.json())
            .then((data) => setStats(data));
    }, []);

    if (!stats) return null;

    return (
        <section className="max-w-3xl mx-auto my-16 text-center">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Vercel/Next.JS Stats</h2>
            <motion.div
                className="flex justify-center gap-10 flex-wrap text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div>
                    <p className="text-2xl font-semibold text-purple-300">{stats.stars}</p>
                    <p className="text-sm">⭐ Stars</p>
                </div>
                <div>
                    <p className="text-2xl font-semibold text-purple-300">{stats.forks}</p>
                    <p className="text-sm">🍴 Forks</p>
                </div>
                <div>
                    <p className="text-2xl font-semibold text-purple-300">{stats.watchers}</p>
                    <p className="text-sm">👁 Watchers</p>
                </div>
            </motion.div>
        </section>
    );
}
