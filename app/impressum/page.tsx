"use client";
import { motion } from "framer-motion";

export default function Impressum() {
    return (
        <motion.section
            className="max-w-3xl mx-auto mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            <h2 className="text-3xl font-semibold text-purple-400 mb-4">Impressum</h2>
            <p className="text-gray-300 leading-relaxed">
                Angaben gemäß § 5 TMG
                <br />
                Noah Mustermann
                <br />
                Musterstraße 1, 1010 Wien
                <br />
                E-Mail: kontakt@noah.dev
            </p>
        </motion.section>
    );
}
