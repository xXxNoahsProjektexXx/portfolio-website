"use client";
import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaYoutube, FaTiktok, FaTwitch, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export function SocialSection() {
    const socials = [
        { name: "Discord", icon: FaDiscord, link: "https://discord.gg/ByteShare" },
        { name: "GitHub", icon: FaGithub, link: "https://github.com/AustrianNoah" },
        { name: "YouTube", icon: FaYoutube, link: "https://youtube.com/@JavaSnippetsDE" },
        { name: "TikTok", icon: FaTiktok, link: "https://tiktok.com/@eynoah" },
        { name: "X", icon: FaTwitter, link: "https://x.com/NoahLikesPMMP"},
    ];

    return (
        <motion.section
            className="max-w-3xl mx-auto my-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Connect with me</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {socials.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <Link
                            key={i}
                            href={s.link}
                            target="_blank"
                            className="group flex flex-col items-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="p-3 rounded-full bg-white/10 hover:bg-purple-600/30 border border-white/10 backdrop-blur-md transition"
                            >
                                <Icon className="text-3xl text-purple-400" />
                            </motion.div>
                            <p className="text-xs text-gray-400 mt-1 group-hover:text-purple-300">{s.name}</p>
                        </Link>
                    );
                })}
            </div>
        </motion.section>
    );
}
