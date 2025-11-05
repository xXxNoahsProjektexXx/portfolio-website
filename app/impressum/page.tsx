"use client";

import { motion } from "framer-motion";

export default function Impressum() {
    return (
        <motion.section
            className="max-w-4xl mx-auto mt-16 px-4 text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 shadow-xl">
                <h1 className="text-4xl font-bold text-purple-400 mb-6">Impressum</h1>

                <p className="text-gray-400 mb-4">
                    Angaben gemäß § 5 TMG
                </p>

                <div className="space-y-3">
                    <p>
                        <span className="font-semibold text-purple-300">Betreiber:</span><br />
                        Marcel Noah Weixelbaum<br />
                        Leo-Mathauser-Gasse 72<br />
                        1230 Wien, Österreich
                    </p>

                    <p>
                        <span className="font-semibold text-purple-300">Kontakt:</span><br />
                        E-Mail: <a href="mailto:kontakt@weixelbaum.pro" className="text-purple-400 hover:underline">
                        kontakt@weixelbaum.pro
                    </a><br />
                        Website: <a href="https://portfolio.weixelbaum.pro" className="text-purple-400 hover:underline">
                        portfolio.weixelbaum.pro
                    </a>
                    </p>

                    <p>
                        <span className="font-semibold text-purple-300">Umsatzsteuer-ID:</span><br />
                        Wird gemäß §19 UStG nicht ausgewiesen (Kleinunternehmerregelung)
                    </p>

                    <p className="text-sm text-gray-500 pt-4 border-t border-white/10">
                        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
                        Marcel Noah Weixelbaum, Wien
                    </p>
                </div>
            </div>

            <motion.div
                className="mt-12 text-center text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <p>
                    <a href="/terms" className="text-purple-400 hover:underline">
                        → Zu den Nutzungsbedingungen
                    </a>
                </p>
            </motion.div>
        </motion.section>
    );
}
