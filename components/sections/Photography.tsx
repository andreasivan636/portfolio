"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Gallery item type ─────────────────────────────────────────────────────

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

// ─── Gallery data ──────────────────────────────────────────────────────────

const galleryItems: GalleryItem[] = [
  {
    src: "/galery/apple-academy.png",
    title: "Apple Developer Academy Event (WWDC26 Stories)",
    category: "Community & Milestone",
  },
  {
    src: "/galery/google-event.jpg",
    title: "Google Community Gathering",
    category: "Tech Milestone",
  },
  {
    src: "/galery/behind-the-scene.jpg",
    title: "Production & Tech Setup",
    category: "Behind the Scenes",
  },
  {
    src: "/galery/behind-the-scene2.jpg",
    title: "Content & Media Capture",
    category: "Behind the Scenes",
  },
  {
    src: "/galery/behind-the-scene3.jpg",
    title: "Workspace & Development Session",
    category: "Behind the Scenes",
  },
];

// ─── Component ────────────────────────────────────────────────────────────

export default function Photography() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -460 : 460,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="photography"
      className="py-24 w-full border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="container mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-4">
            Beyond the Code
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Journey &amp;
              <br />
              Milestones.
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
              className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed"
            >
              Tech events, community building, and moments in action.
            </motion.p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          style={{ originX: 0 }}
          className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-12"
        />

        {/* Horizontal scroll gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Navigation arrows — top-right */}
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="group/btn flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 bg-transparent hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400 dark:text-zinc-500 group-hover/btn:text-zinc-700 dark:group-hover/btn:text-zinc-300 transition-colors"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="group/btn flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 bg-transparent hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400 dark:text-zinc-500 group-hover/btn:text-zinc-700 dark:group-hover/btn:text-zinc-300 transition-colors"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className={cn(
              "flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8",
              "[&::-webkit-scrollbar]:hidden",
              "[-ms-overflow-style:none]",
              "[scrollbar-width:none]",
            )}
          >
            {galleryItems.map((item) => (
              <div
                key={item.src}
                className="w-[85vw] sm:w-[450px] shrink-0 snap-start group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300"
              >
                {/* Image container — fixed height, no cropping */}
                <div className="relative w-full h-[400px] bg-zinc-100 dark:bg-zinc-900/30 flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
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
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
