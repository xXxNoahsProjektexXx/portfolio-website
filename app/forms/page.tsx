"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FormsPage() {
    const [contact, setContact] = useState({ name: "", email: "", message: "" });
    const [order, setOrder] = useState({ name: "", email: "", project: "", budget: "", details: "" });
    const [status, setStatus] = useState("");

    async function submit(e: any, path: string, data: any) {
        e.preventDefault();
        const res = await fetch(`/api/forms/${path}`, {
            method: "POST",
            body: JSON.stringify(data),
        });
        setStatus(res.ok ? "✅ Gesendet!" : "❌ Fehler beim Senden");
    }

    return (
        <motion.section
            className="max-w-6xl mx-auto mt-20 px-4 text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 text-center mb-10">
                Kontakt & Auftragsanfrage
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                <form
                    onSubmit={(e) => submit(e, "contact", contact)}
                    className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-lg"
                >
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">Kontaktformular</h2>
                    <input type="text" placeholder="Name" required
                           className="w-full mb-3 p-2 rounded bg-white/10"
                           onChange={(e) => setContact({ ...contact, name: e.target.value })}/>
                    <input type="email" placeholder="E-Mail" required
                           className="w-full mb-3 p-2 rounded bg-white/10"
                           onChange={(e) => setContact({ ...contact, email: e.target.value })}/>
                    <textarea placeholder="Nachricht" required
                              className="w-full mb-3 p-2 rounded bg-white/10"
                              onChange={(e) => setContact({ ...contact, message: e.target.value })}/>
                    <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded font-semibold">Absenden</button>
                </form>

                <form
                    onSubmit={(e) => submit(e, "order", order)}
                    className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-lg"
                >
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">Auftragsanfrage</h2>
                    <input type="text" placeholder="Name" required
                           className="w-full mb-3 p-2 rounded bg-white/10"
                           onChange={(e) => setOrder({ ...order, name: e.target.value })}/>
                    <input type="email" placeholder="E-Mail" required
                           className="w-full mb-3 p-2 rounded bg-white/10"
                           onChange={(e) => setOrder({ ...order, email: e.target.value })}/>
                    <input type="text" placeholder="Projektname" required
                           className="w-full mb-3 p-2 rounded bg-white/10"
                           onChange={(e) => setOrder({ ...order, project: e.target.value })}/>
                    <input type="text" placeholder="Budget (optional)"
                           className="w-full mb-3 p-2 rounded bg-white/10"
                           onChange={(e) => setOrder({ ...order, budget: e.target.value })}/>
                    <textarea placeholder="Details / Anforderungen" required
                              className="w-full mb-3 p-2 rounded bg-white/10"
                              onChange={(e) => setOrder({ ...order, details: e.target.value })}/>
                    <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded font-semibold">Absenden</button>
                </form>
            </div>

            {status && <p className="text-center mt-6 text-purple-300">{status}</p>}
        </motion.section>
    );
}
