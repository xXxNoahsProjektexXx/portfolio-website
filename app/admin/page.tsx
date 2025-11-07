"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminPage() {
    const [data, setData] = useState<{ contacts: any[]; orders: any[] }>({
        contacts: [],
        orders: [],
    });
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetch("/api/admin/forms")
            .then((r) => r.json())
            .then((d) => (d.error ? setError(d.error) : setData(d)));
    }, []);

    async function handleDecision(id: number, decision: "accepted" | "rejected") {
        const message = prompt(
            `Nachricht an den Kunden (${decision === "accepted" ? "Bestätigung" : "Ablehnung"})`
        );
        if (!message) return;
        const res = await fetch("/api/admin/orders/decision", {
            method: "POST",
            body: JSON.stringify({ id, decision, message }),
        });
        if (res.ok) {
            setMsg(`Auftrag ${decision === "accepted" ? "akzeptiert" : "abgelehnt"}!`);
            setTimeout(() => window.location.reload(), 1000);
        } else setMsg("Fehler beim Senden");
    }

    if (error)
        return <p className="text-center text-red-400 mt-20 font-semibold">{error}</p>;

    return (
        <motion.section
            className="max-w-6xl mx-auto mt-16 px-4 text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 mb-8 text-center">
                Admin Dashboard
            </h1>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Kontakte */}
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md">
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">Kontaktformulare</h2>
                    {data.contacts.map((c) => (
                        <div key={c.id} className="border-b border-white/10 pb-2 mb-2">
                            <p className="font-semibold">
                                {c.name} <span className="text-gray-400 text-sm">({c.email})</span>
                            </p>
                            <p className="text-sm text-gray-400">{c.message}</p>
                        </div>
                    ))}
                </div>

                {/* Aufträge */}
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md">
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">Auftragsanfragen</h2>
                    {data.orders.map((o) => (
                        <div key={o.id} className="border-b border-white/10 pb-2 mb-2">
                            <p className="font-semibold">
                                {o.name} <span className="text-gray-400 text-sm">({o.email})</span>
                            </p>
                            <p className="text-sm text-gray-400">Projekt: {o.project}</p>
                            <p className="text-sm text-gray-400 mb-2">{o.details}</p>
                            {o.status ? (
                                <p className="text-sm text-gray-400 italic">
                                    Status: {o.status === "accepted" ? "✅ Akzeptiert" : "❌ Abgelehnt"}
                                </p>
                            ) : (
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleDecision(o.id, "accepted")}
                                        className="px-3 py-1 bg-green-600/70 hover:bg-green-600 rounded"
                                    >
                                        Akzeptieren
                                    </button>
                                    <button
                                        onClick={() => handleDecision(o.id, "rejected")}
                                        className="px-3 py-1 bg-red-600/70 hover:bg-red-600 rounded"
                                    >
                                        Ablehnen
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {msg && <p className="text-center mt-6 text-purple-300">{msg}</p>}
        </motion.section>
    );
}
