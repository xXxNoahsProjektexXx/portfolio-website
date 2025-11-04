"use client";

import { motion } from "framer-motion";
import { SkillMatrix } from "@/components/SkillMatrix";
import { TechStackWall } from "@/components/TechStackWall";
import { SocialSection } from "@/components/SocialSection";
import { StatDisplay } from "@/components/StatDisplay";
import {PluginStats} from "@/components/PluginStats";
import {ResumeButton} from "@/components/ResumeButton";

export default function About() {
    return (
        <motion.section
            className="max-w-5xl mx-auto mt-10 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-4xl font-bold text-purple-400 mb-4 text-center">
                Über mich
            </h1>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
                Ich bin Noah – Full-Stack Entwickler, Designer & Content Creator.
                Ich liebe es, komplexe Systeme zu bauen, visuell starke Interfaces zu
                gestalten und digitale Projekte mit Performance & Stil umzusetzen.
            </p>


            <SkillMatrix />
            <ResumeButton />
            <TechStackWall />
            <StatDisplay />
            <PluginStats pluginId={"GroupSystem"} type={"pmmp"} />
            <PluginStats pluginId={"126753"} type={"spigot"} />
            <SocialSection />
        </motion.section>
    );
}
