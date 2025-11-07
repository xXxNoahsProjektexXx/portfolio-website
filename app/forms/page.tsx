"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FormsPage() {
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
            className="max-w-5xl mx-auto mt-20 px-4 text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 mb-10 text-center">
                Kontakt & Auftragsanfrage
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                <FormBlock
                    title="Kontaktformular"
                    fields={["name", "email", "message"]}
                    onSubmit={(data) => submit(data.e, "contact", data.values)}
                />
                <FormBlock
                    title="Auftragsanfrage"
                    fields={["name", "email", "project", "budget", "details"]}
                    onSubmit={(data) => submit(data.e, "order", data.values)}
                />
            </div>

            {status && <p className="text-center mt-6 text-purple-300">{status}</p>}
        </motion.section>
    );
}

function FormBlock({
                       title,
                       fields,
                       onSubmit,
                   }: {
    title: string;
    fields: string[];
    onSubmit: (data: any) => void;
}) {
    const [values, setValues] = useState<any>({});
    return (
        <form
            onSubmit={(e) => onSubmit({ e, values })}
            className="bg-white/5 p-6 rounded-xl backdrop-blur-md border border-white/10 shadow-lg"
        >
            <h2 className="text-xl font-semibold text-purple-300 mb-4">{title}</h2>
            {fields.map((f) =>
                f === "details" || f === "message" ? (
                    <textarea
                        key={f}
                        placeholder={f}
                        required
                        className="w-full mb-3 p-2 rounded bg-white/10"
                        onChange={(e) => setValues({ ...values, [f]: e.target.value })}
                    />
                ) : (
                    <input
                        key={f}
                        type="text"
                        placeholder={f}
                        required={f !== "budget"}
                        className="w-full mb-3 p-2 rounded bg-white/10"
                        onChange={(e) => setValues({ ...values, [f]: e.target.value })}
                    />
                )
            )}
            <button className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded font-semibold">
                Absenden
            </button>
        </form>
    );
}
