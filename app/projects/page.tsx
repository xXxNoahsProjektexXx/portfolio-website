"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";

const projects = [
    {
        title: "VexaByte.shop",
        description:
            "Ein digitaler Marktplatz für Discord-Bots, Minecraft-Plugins und Design-Services mit Payment-Integration.",
        image: "https://media.discordapp.net/attachments/1429787203088809999/1436394583595417790/image.png?ex=690f7233&is=690e20b3&hm=8fcad9d9f022535a4142b12a7489d4e908def817b082414db5ebd5a6f1cd2c8d&=&format=webp&quality=lossless&width=1752&height=838",
        link: "https://store.byteshare.tf",
    },
    {
        title: "SpigotMC",
        description: "My Plugins for Minecraft",
        image: "https://media.discordapp.net/attachments/1429787203088809999/1436404239902576650/image.png?ex=690f7b31&is=690e29b1&hm=45644e18b4399a79024d07dcb26fe23580d98fa8da0d3913b09c737aea90f7ad&=&format=webp&quality=lossless&width=1134&height=953"
    }
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