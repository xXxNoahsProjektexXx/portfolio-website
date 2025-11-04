"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

const projects = [
    {
        title: "Enhanced-Loop.net",
        description:
            "Ein modernes Hosting-Dashboard mit Next.js, API-Anbindung und Tailwind-UI. Fokus auf Performance und Branding.",
        image: "https://via.placeholder.com/800x400?text=Enhanced-Loop",
        link: "https://enhanced-loop.dev",
    },
    {
        title: "ByteShare.tf",
        description:
            "Ein digitaler Marktplatz für Discord-Bots, Minecraft-Plugins und Design-Services mit Payment-Integration.",
        image: "https://i.imgur.com/M92sXsu.png",
        link: "https://store.byteshare.tf",
    },
];

export default function Projects() {
    const [selected, setSelected] = useState<any>(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (p: any) => {
        setSelected(p);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <motion.section
            className="max-w-6xl mx-auto mt-10 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 mb-6 text-center">
                Meine Projekte
            </h1>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p, i) => (
                    <div key={i} onClick={() => handleOpen(p)} className="cursor-pointer">
                        <ProjectCard {...p} />
                    </div>
                ))}
            </div>

            <ProjectModal open={open} onClose={handleClose} project={selected} />
        </motion.section>
    );
}