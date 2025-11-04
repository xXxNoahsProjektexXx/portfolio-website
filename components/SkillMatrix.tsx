"use client";
import { motion } from "framer-motion";

const skills = [
    { category: "Frontend", items: ["Next.js", "React", "TailwindCSS", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express", "Flask", "FastAPI"] },
    { category: "DevOps", items: ["Docker", "Proxmox", "Cloudflare", "NGINX"] },
    { category: "Design", items: ["Figma", "Photoshop", "Premiere Pro"] },
];

export function SkillMatrix() {
    return (
        <section className="max-w-4xl mx-auto my-10">
            <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Skill-Matrix</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                {skills.map((group, i) => (
                    <motion.div
                        key={i}
                        className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <h3 className="text-xl font-semibold text-purple-300 mb-2">{group.category}</h3>
                        <ul className="space-y-1 text-gray-300 text-sm">
                            {group.items.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
