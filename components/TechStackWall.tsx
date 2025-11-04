"use client";
import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiDocker, SiNodedotjs, SiPython, SiTailwindcss } from "react-icons/si";

const tech = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "Docker", icon: SiDocker },
    { name: "TailwindCSS", icon: SiTailwindcss },
];

export function TechStackWall() {
    return (
        <section className="max-w-5xl mx-auto my-16 text-center">
            <h2 className="text-3xl font-bold text-purple-400 mb-8">Tech-Stack</h2>
            <div className="flex flex-wrap justify-center gap-10">
                {tech.map((t, i) => {
                    const Icon = t.icon;
                    return (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center gap-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                        >
                            <Icon className="text-5xl text-purple-400 drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]" />
                            <p className="text-gray-300 text-sm">{t.name}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
