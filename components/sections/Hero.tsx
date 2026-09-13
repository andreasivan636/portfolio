"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ─── Tech stack data ────────────────────────────────────────────────────────

const techCategories = [
  {
    label: "Development",
    tools: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Python",
      "Flask",
      "MySQL",
      "VS Code",
      "GitHub",
      "Vercel",
    ],
  },
  {
    label: "Design",
    tools: ["Figma", "Canva", "Photoshop", "Illustrator"],
  },
];

// ─── Animation constants ────────────────────────────────────────────────────

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const VIEWPORT = { once: true, margin: "-100px" as const };

// Container variant for staggered children
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

// Child variant for staggered items
const staggerChild = {
  hidden: { opacity: 0, y: 12 } as const,
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── Left: text content ─────────────────────────────────── */}
          <div className="order-2 md:order-1">

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-6"
            >
              Systems &amp; Information Technology
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.05] mb-6"
            >
              Andreas
              <br />
              Ivan
            </motion.h1>

            {/* Role pills — staggered */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["Creative Developer", "Graphic Designer", "AI Enthusiast"].map(
                (role) => (
                  <motion.span
                    key={role}
                    variants={staggerChild}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900"
                  >
                    {role}
                  </motion.span>
                ),
              )}
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-md"
            >
              I build interfaces where programming logic meets visual craft.
              Currently studying Systems and Information Technology, with active
              work in full-stack development, graphic design, and AI integration.
            </motion.p>

            {/* Tech stack — staggered pills per category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
              className="mb-10 space-y-4"
            >
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-zinc-400 dark:text-zinc-500">
                Tech Stack &amp; Tools
              </p>
              {techCategories.map((cat) => (
                <div key={cat.label} className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500 w-20 shrink-0 pt-0.5">
                    {cat.label}
                  </span>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    className="flex flex-wrap gap-1.5"
                  >
                    {cat.tools.map((tool) => (
                      <motion.span
                        key={tool}
                        variants={staggerChild}
                        className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium border border-zinc-200 dark:border-zinc-700"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              className="flex items-center gap-6"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 border-b border-zinc-900 dark:border-zinc-100 pb-0.5 hover:gap-3 transition-all duration-200"
              >
                View My Work
                <span aria-hidden>&#8594;</span>
              </a>
              <a
                href="mailto:andreasivang3447@gmail.com"
                className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              >
                andreasivang3447@gmail.com
              </a>
            </motion.div>
          </div>

          {/* ── Right: profile image ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-80 md:w-[340px] md:h-[400px] lg:w-[380px] lg:h-[460px]">
              {/* Thin architectural border frame */}
              <div className="absolute inset-0 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="/profile.jpg"
                  alt="Andreas Ivan"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Offset accent line */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
