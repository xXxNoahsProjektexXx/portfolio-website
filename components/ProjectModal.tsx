"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProjectModalProps {
    open: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        image: string;
        link?: string;
    } | null;
}

export function ProjectModal({ open, onClose, project }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative bg-white/10 border border-white/20 rounded-2xl max-w-lg w-[90%] overflow-hidden backdrop-blur-md text-gray-100"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
                        >
                            <X size={24} />
                        </button>

                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-purple-300 mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-300 mb-4">{project.description}</p>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="inline-block px-4 py-2 rounded-md bg-purple-600/80 hover:bg-purple-500 transition text-sm font-semibold"
                                >
                                    Projekt öffnen
                                </a>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
