"use client";

import { motion } from "framer-motion";

export default function TermsEN() {
    const sections = [
        {
            title: "1. General Information",
            text: "These Terms of Service govern the use of all content, services, and products provided by weixelbaum.pro and its associated projects. By using this website, you agree to these terms.",
        },
        {
            title: "2. Liability for Content",
            text: "All contents were created with the utmost care. However, we assume no liability for accuracy, completeness, or timeliness of the content.",
        },
        {
            title: "3. External Links",
            text: "This website may contain links to external websites. We have no influence on their content and therefore assume no liability for them.",
        },
        {
            title: "4. Copyright",
            text: "All content and works on this website are subject to Austrian copyright law. Duplication or distribution beyond the scope of copyright law requires written consent.",
        },
        {
            title: "5. Data Protection",
            text: "Personal data is handled confidentially and in accordance with statutory data protection regulations. See the privacy policy for details.",
        },
        {
            title: "6. Final Provisions",
            text: "Should any provision of these terms be invalid, the validity of the remaining provisions shall remain unaffected. Place of jurisdiction is Vienna, Austria.",
        },
    ];

    return (
        <motion.section
            className="max-w-5xl mx-auto mt-16 px-4 text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 mb-10 text-center">
                Terms of Service
            </h1>

            <div className="grid gap-8">
                {sections.map((s, i) => (
                    <motion.div
                        key={i}
                        className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md shadow-lg hover:bg-white/10 transition"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                    >
                        <h2 className="text-xl font-semibold text-purple-300 mb-3">{s.title}</h2>
                        <p className="text-gray-400 leading-relaxed">{s.text}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mt-16 text-center text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <p>
                    <a href="/en/impressum" className="text-purple-400 hover:underline">
                        ← Back to Legal Notice
                    </a>
                </p>
            </motion.div>
        </motion.section>
    );
}
