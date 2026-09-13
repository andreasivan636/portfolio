"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import {
  ExpandableCardList,
  webDevCards,
  posterItems,
} from "@/components/ui/expandable-cards";
import type { PosterItem } from "@/components/ui/expandable-cards";
import { cn } from "@/lib/utils";

// ─── Marquee images (web project images only) ──────────────────────────────

const marqueeImages = Array(8)
  .fill([
    "/fore.jpg",
    "/logocupangndasmu.jpg",
    "/laporan.jpg",
    "/iphone.jpg",
    "/ascendia.jpg",
    "/treadix.jpg",
    "/weding.jpg",
  ])
  .flat();

// ─── Tab definition ────────────────────────────────────────────────────────

type TabId = "web" | "design";

const tabs: { id: TabId; label: string; sub: string }[] = [
  {
    id: "web",
    label: "Web Development",
    sub: "Full-stack, frontend, and interactive experiences",
  },
  {
    id: "design",
    label: "UI/UX & Graphic Design",
    sub: "Posters, brand identity, and visual systems",
  },
];

// ─── Poster Grid ───────────────────────────────────────────────────────────

function PosterGrid({ items }: { items: PosterItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {items.map((item, idx) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.08 }}
          className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300"
        >
          {/* Image */}
          <div
            className={cn(
              "relative w-full overflow-hidden",
              item.aspect === "poster" ? "aspect-[4/5]" : "aspect-video",
            )}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Caption */}
          <div className="px-4 py-3.5">
            <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium tracking-wide mb-1">
              {item.category}
            </p>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
              {item.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("web");

  return (
    <section
      id="work"
      className="py-24 w-full border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="container mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Projects
          </h2>
        </motion.div>

        {/* 3D Marquee — visual teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative w-full overflow-hidden mb-16 rounded-2xl border border-zinc-200 dark:border-zinc-800"
        >
          <ThreeDMarquee images={marqueeImages} className="w-full" />
        </motion.div>

        {/* Tab switcher */}
        <div className="mb-10">
          <div
            className="flex gap-0 border-b border-zinc-200 dark:border-zinc-800"
            role="tablist"
            aria-label="Project categories"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                id={`tab-${tab.id}`}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-0 mr-8 pb-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none",
                  activeTab === tab.id
                    ? "text-zinc-900 dark:text-zinc-100"
                    : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300",
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-zinc-900 dark:bg-zinc-100"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-4 text-sm text-zinc-400 dark:text-zinc-500"
            >
              {tabs.find((t) => t.id === activeTab)?.sub}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tab panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            {activeTab === "web" && <ExpandableCardList cards={webDevCards} />}
            {activeTab === "design" && <PosterGrid items={posterItems} />}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
