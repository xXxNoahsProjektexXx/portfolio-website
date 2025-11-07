"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminPage() {
    const [data, setData] = useState<{ contacts: any[]; orders: any[] }>({
        contacts: [],
        orders: [],
    });
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/admin/forms")
            .then((r) => r.json())
            .then((d) => (d.error ? setError(d.error) : setData(d)));
    }, []);

    if (error)
        return (
            <p className="text-center text-red-400 mt-20 font-semibold">{error}</p>
        );

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
                <FormList title="Kontaktformulare" data={data.contacts} />
                <FormList title="Auftragsanfragen" data={data.orders} />
            </div>
        </motion.section>
    );
}

function FormList({ title, data }: { title: string; data: any[] }) {
    return (
        <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md">
            <h2 className="text-xl font-semibold text-purple-300 mb-4">{title}</h2>
            {data.length === 0 && <p className="text-gray-400">Keine Einträge.</p>}
            {data.map((x) => (
                <div key={x.id} className="border-b border-white/10 pb-2 mb-2">
                    <p className="font-semibold">
                        {x.name}{" "}
                        <span className="text-gray-400 text-sm">
              ({x.email || "keine E-Mail"})
            </span>
                    </p>
                    <p className="text-sm text-gray-400">
                        {x.project ? `Projekt: ${x.project}` : ""}
                    </p>
                    <p className="text-sm text-gray-400">
                        {x.details || x.message || ""}
                    </p>
                </div>
            ))}
        </div>
    );
}
