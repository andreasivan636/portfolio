"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ─── Photography placeholder data ──────────────────────────────────────────
// Replace these src values with actual photography file paths when available.

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

const photos: Photo[] = [
  { src: "/fore.jpg",            alt: "Photography 1", caption: "Available Light" },
  { src: "/ascendia.jpg",        alt: "Photography 2", caption: "Urban Geometry" },
  { src: "/treadix.jpg",         alt: "Photography 3", caption: "Texture Study" },
  { src: "/logocupangndasmu.jpg",alt: "Photography 4", caption: "Still Life" },
  { src: "/laporan.jpg",         alt: "Photography 5", caption: "Documentary" },
  { src: "/iphone.jpg",          alt: "Photography 6", caption: "Product" },
];

// ─── Masonry-ish column split ─────────────────────────────────────────────

function splitIntoColumns<T>(arr: T[], cols: number): T[][] {
  return Array.from({ length: cols }, (_, i) =>
    arr.filter((_, idx) => idx % cols === i),
  );
}

// ─── Component ────────────────────────────────────────────────────────────

export default function Photography() {
  const columns = splitIntoColumns(photos, 3);

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
            Photography
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Light, Composition,
              <br />
              Moment.
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
              className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed"
            >
              Photography informs how I design. Reading light, constructing
              frames, and isolating what matters translates directly into
              visual hierarchy and spatial thinking on screen.
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

        {/* Masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {col.map((photo, photoIdx) => (
                <motion.div
                  key={photo.src + photoIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: colIdx * 0.1 + photoIdx * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900"
                >
                  <div
                    className={`relative w-full ${
                      (colIdx + photoIdx) % 3 === 0
                        ? "aspect-[4/5]"
                        : (colIdx + photoIdx) % 3 === 1
                          ? "aspect-[4/3]"
                          : "aspect-square"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Caption overlay */}
                    {photo.caption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <span className="text-white text-xs font-medium tracking-wide">
                          {photo.caption}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Note about placeholders */}
        <p className="mt-8 text-xs text-zinc-400 dark:text-zinc-600 text-center">
          Photography gallery — replace placeholder images with your own shots when ready.
        </p>

      </div>
    </section>
  );
}
