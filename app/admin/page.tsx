"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminPage() {
    const [data, setData] = useState<{ contacts: any[]; orders: any[] }>({ contacts: [], orders: [] });
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/admin/forms")
            .then((r) => r.json())
            .then((d) => (d.error ? setError(d.error) : setData(d)));
    }, []);

    if (error) return <p className="text-center text-red-400 mt-20">{error}</p>;

    return (
        <motion.section
            className="max-w-6xl mx-auto mt-16 px-4 text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 mb-8 text-center">Admin Dashboard</h1>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md">
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">Kontaktformulare</h2>
                    {data.contacts.map((c) => (
                        <div key={c.id} className="border-b border-white/10 pb-2 mb-2">
                            <p className="font-semibold">{c.name} <span className="text-gray-400 text-sm">({c.email})</span></p>
                            <p className="text-sm text-gray-400">{c.message}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md">
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">Auftragsanfragen</h2>
                    {data.orders.map((o) => (
                        <div key={o.id} className="border-b border-white/10 pb-2 mb-2">
                            <p className="font-semibold">{o.name} <span className="text-gray-400 text-sm">({o.email})</span></p>
                            <p className="text-sm text-gray-400">Projekt: {o.project} | Budget: {o.budget}</p>
                            <p className="text-sm text-gray-400">{o.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
