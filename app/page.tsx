"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import Hero from "@/components/sections/Hero";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import Photography from "@/components/sections/Photography";
import {
  IconHome,
  IconBriefcase,
  IconCamera,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

// ─── Floating dock items ──────────────────────────────────────────────────

const dockItems = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-zinc-600 dark:text-zinc-400" />,
    href: "#",
  },
  {
    title: "Work",
    icon: <IconBriefcase className="h-full w-full text-zinc-600 dark:text-zinc-400" />,
    href: "#work",
  },
  {
    title: "Photography",
    icon: <IconCamera className="h-full w-full text-zinc-600 dark:text-zinc-400" />,
    href: "#photography",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-zinc-600 dark:text-zinc-400" />,
    href: "https://github.com/andreasivan636",
  },
  {
    title: "Email",
    icon: <IconMail className="h-full w-full text-zinc-600 dark:text-zinc-400" />,
    href: "mailto:andreasivang3447@gmail.com",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans overflow-x-hidden">

      {/* 1. Hero + Profile + Tech Stack */}
      <Hero />

      {/* 2. Project Showcase — Web Dev tab + UI/UX & Design tab */}
      <ProjectShowcase />

      {/* 3. Photography Gallery */}
      <Photography />

      {/* 4. Footer */}
      <footer className="py-16 border-t border-zinc-200 dark:border-zinc-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-2">
              Available for work
            </p>
            <a
              href="mailto:andreasivang3447@gmail.com"
              className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
            >
              andreasivang3447@gmail.com
            </a>
          </div>
          <div className="text-xs text-zinc-400 dark:text-zinc-600 text-left md:text-right">
            <p>Andreas Ivan</p>
            <p className="mt-1">
              Built with Next.js, Tailwind CSS, Framer Motion
            </p>
            <p className="mt-1">© 2026</p>
          </div>
        </motion.div>
      </footer>

      {/* 5. Floating navigation dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>

    </main>
  );
}