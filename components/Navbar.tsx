"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "Über mich" },
        { href: "/impressum", label: "Impressum" },
        { href: "/projects", label: "Projekte" },
    ];

    return (
        <nav className="backdrop-blur-md bg-white/10 sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href={"/"}><h1 className="text-xl font-bold tracking-wide">
                    Typisch<span className="text-purple-400">Noah</span>
                </h1></Link>
                <div className="flex gap-6">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="relative group">
              <span
                  className={`text-sm font-medium transition ${
                      pathname === link.href ? "text-purple-400" : "text-gray-300"
                  }`}
              >
                {link.label}
              </span>
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 h-[2px] bg-purple-400 bottom-[-3px]"
                                />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
