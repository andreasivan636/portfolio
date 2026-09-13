"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// --- OUTSIDE CLICK HOOK ---
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      callback(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

// --- CARD TYPE ---
export interface ProjectCard {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

// --- WEB DEVELOPMENT PROJECTS ---
export const webDevCards: ProjectCard[] = [
  {
    description: "Scrollytelling / Next.js",
    title: "Fore Coffee Redesign",
    src: "/fore.jpg",
    ctaText: "Visit Site",
    ctaLink: "https://fore-redesign.vercel.app",
    content: () => (
      <p>
        A luxury scrollytelling landing page built with Next.js and Framer Motion.
        Focuses on fluid animation choreography and immersive scroll-driven storytelling.
      </p>
    ),
  },
  {
    description: "Frontend / Static",
    title: "Cupang Ndasmu",
    src: "/logocupangndasmu.jpg",
    ctaText: "Visit Site",
    ctaLink: "https://dreas30.github.io/Produk-Cupang-Ndasmu/",
    content: () => (
      <p>
        A modern, responsive product catalogue for an ornamental fish UMKM.
        Designed to make product browsing simple and visually clear for buyers.
      </p>
    ),
  },
  {
    description: "Fullstack / CRUD",
    title: "Community Report System",
    src: "/laporan.jpg",
    ctaText: "View GitHub",
    ctaLink: "https://github.com/andreasivan636/laporan-warga-surabaya",
    content: () => (
      <p>
        A fullstack CRUD application for neighbourhood-level civic reporting.
        Includes secure login, role-based access, and database integration.
      </p>
    ),
  },
  {
    description: "3D Experience / WebGL",
    title: "iPhone 13 3D Showcase",
    src: "/iphone.jpg",
    ctaText: "Visit Site",
    ctaLink: "https://iphone13-showcase.vercel.app",
    content: () => (
      <p>
        Interactive web showcase featuring a high-fidelity 3D iPhone model with
        smooth animation. Optimised for performance despite heavy 3D assets.
      </p>
    ),
  },
  {
    description: "Business / Branding",
    title: "Ascendia Creative",
    src: "/ascendia.jpg",
    ctaText: "Visit Site",
    ctaLink: "https://ascendiacreative.vercel.app",
    content: () => (
      <p>
        A professional web services platform aimed at helping SMEs establish
        their digital presence with clean branding and modern web builds.
      </p>
    ),
  },
  {
    description: "E-Commerce / Fashion",
    title: "Treadix",
    src: "/treadix.jpg",
    ctaText: "Visit Site",
    ctaLink: "https://treadix.vercel.app",
    content: () => (
      <p>
        A modern sneaker e-commerce site with an interactive hero section,
        responsive layout, and clean product presentation.
      </p>
    ),
  },
  {
    description: "Wedding / Interactive",
    title: "Digital Wedding Invitation",
    src: "/weding.jpg",
    ctaText: "Visit Site",
    ctaLink: "https://wedding-invitation-azure-nine.vercel.app/",
    content: () => (
      <p>
        An interactive digital wedding invitation with custom animations and
        dynamic RSVP handling. Built for elegance and mobile-first responsiveness.
      </p>
    ),
  },
];

// --- POSTER / DESIGN ITEMS (for poster grid) ---
export interface PosterItem {
  src: string;
  title: string;
  category: string;
  aspect: "poster" | "landscape";
}

export const posterItems: PosterItem[] = [
  {
    src: "/1.png",
    title: "Business Promotion Poster",
    category: "Poster Design",
    aspect: "poster",
  },
  {
    src: "/5.png",
    title: "Website Showcase Graphic",
    category: "Digital Design",
    aspect: "landscape",
  },
  {
    src: "/TIMNASDAY.png",
    title: "Timnas Day Matchday Poster",
    category: "Graphic Design",
    aspect: "poster",
  },
  {
    src: "/Cover depan.png",
    title: "Publication Cover Design",
    category: "Layout & Typography",
    aspect: "poster",
  },
  {
    src: "/17-ags.png",
    title: "Independence Day Poster",
    category: "Graphic Design",
    aspect: "poster",
  },
];

// --- CARD COMPONENT (reusable for both tabs) ---
interface CardListProps {
  cards: ProjectCard[];
}

export function ExpandableCardList({ cards }: CardListProps) {
  const [active, setActive] = useState<ProjectCard | null>(null);
  const ref = useRef<HTMLDivElement>(null!);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-6 right-6 lg:top-4 lg:right-4 items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-full h-9 w-9 z-50 border border-zinc-200 dark:border-zinc-700"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-[92%] md:w-full max-w-[500px] max-h-[85vh] md:h-fit flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-40"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-60 md:h-64 rounded-t-2xl object-cover object-top"
                />
              </motion.div>

              <div className="flex flex-col flex-1 overflow-hidden">
                <div className="flex justify-between items-start p-5 md:p-6 shrink-0">
                  <div className="pr-4">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-zinc-400 text-xs mt-1 font-medium tracking-wide"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs rounded-full font-semibold bg-zinc-900 hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 text-white dark:text-zinc-900 transition-colors whitespace-nowrap"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="relative px-5 md:px-6 pb-6 overflow-y-auto">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card) => (
          <motion.li
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row items-center gap-5 bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 rounded-2xl cursor-pointer transition-colors group"
          >
            <motion.div
              layoutId={`image-${card.title}-${id}`}
              className="w-full md:w-36 shrink-0"
            >
              <Image
                width={200}
                height={200}
                src={card.src}
                alt={card.title}
                className="h-36 w-full md:w-36 rounded-xl object-cover object-top border border-zinc-100 dark:border-zinc-800"
              />
            </motion.div>

            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-zinc-400 text-xs mb-1.5 font-medium tracking-wide"
              >
                {card.description}
              </motion.p>
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-semibold text-zinc-900 dark:text-zinc-100 text-base mb-3"
              >
                {card.title}
              </motion.h3>
              <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                View details &rarr;
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

// Legacy export kept for any existing import references
export function ExpandableCardDemo() {
  return <ExpandableCardList cards={webDevCards} />;
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};