"use client";

import { motion } from "framer-motion";

const sections = [
    {
        title: "1. Geltungsbereich",
        content:
            "Diese Bedingungen gelten für alle angebotenen Dienstleistungen und digitalen Produkte dieser Website.",
    },
    {
        title: "2. Vertragsabschluss",
        content:
            "Ein Vertrag tritt in Kraft, sobald du eine Bestellung tätigst oder unsere Dienste aktiv nutzt.",
    },
    {
        title: "3. Nutzungsrechte",
        content:
            "Inhalte und Designs sind urheberrechtlich geschützt. Nutzung nur mit schriftlicher Erlaubnis.",
    },
    {
        title: "4. Haftung",
        content:
            "Die Nutzung erfolgt auf eigene Verantwortung. Für indirekte Schäden wird keine Haftung übernommen.",
    },
    {
        title: "5. Änderungen",
        content:
            "Die AGB können jederzeit angepasst werden, um rechtliche oder technische Änderungen widerzuspiegeln.",
    },
    {
        title: "6. Kontakt",
        content: "Fragen? Discord oder E-Mail - kontakt@weixelbaum.edv",
    },
];

export default function Terms() {
    return (
        <motion.section
            className="max-w-3xl mx-auto mt-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="text-4xl font-bold text-purple-400 mb-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Terms of Service
            </motion.h1>

            <div className="space-y-5">
                {sections.map((section, i) => (
                    <motion.div
                        key={i}
                        className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                    >
                        <h2 className="text-xl font-semibold text-purple-300 mb-1">
                            {section.title}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {section.content}
                        </p>
                    </motion.div>
                ))}
            </div>

            <p className="text-center text-xs text-gray-500 mt-10">
                Stand: 07.11.2025
            </p>
        </motion.section>
    );
}
