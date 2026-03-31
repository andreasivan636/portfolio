"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// --- 1. MESIN OUTSIDE CLICK ---
export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: Function
) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
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

// --- 2. DATA PROYEK KAMU ---
const cards = [
    {
        description: "Creative Dev",
        title: "Redesign Fore Coffee",
        src: "/fore.jpg",
        ctaText: "Lihat Web",
        ctaLink: "https://fore-redesign.vercel.app",
        content: () => {
            return <p>Landing page scrollytelling mewah dengan animasi Framer Motion & Next.js. Memberikan pengalaman visual yang interaktif saat di-scroll.</p>;
        },
    },
    {
        description: "Frontend",
        title: "Website Cupang Ndasmu",
        src: "/logocupangndasmu.jpg",
        ctaText: "Lihat Web",
        ctaLink: "https://dreas30.github.io/Produk-Cupang-Ndasmu/",
        content: () => {
            return <p>Katalog produk ikan hias dengan tampilan modern dan responsif. Dirancang untuk memudahkan pembeli melihat detail produk UMKM.</p>;
        },
    },
    {
        description: "Fullstack",
        title: "Sistem Laporan Warga",
        src: "/laporan.jpg",
        ctaText: "Lihat GitHub",
        ctaLink: "https://github.com/andreasivan636/laporan-warga-surabaya",
        content: () => {
            return <p>Aplikasi Fullstack CRUD untuk pelaporan warga tingkat RT/RW. Sudah mencakup Login System yang aman dan integrasi Database.</p>;
        },
    },
    {
        description: "3D Experience",
        title: "iPhone 13 3D Website",
        src: "/iphone.jpg",
        ctaText: "Lihat Web",
        ctaLink: "https://iphone13-showcase.vercel.app",
        content: () => {
            return <p>Web showcase interaktif dengan animasi 3D model iPhone yang sangat halus. Memiliki performa tinggi meskipun menggunakan aset 3D.</p>;
        },
    },
    {
        description: "Business",
        title: "Ascendia Creative",
        src: "/ascendia.jpg",
        ctaText: "Lihat Web",
        ctaLink: "https://ascendiacreative.vercel.app",
        content: () => {
            return <p>Platform jasa pembuatan website digital profesional. Proyek ini bertujuan untuk membantu branding dan digitalisasi bisnis UMKM.</p>;
        },
    },
    {
        description: "E-Commerce",
        title: "Treadix",
        src: "/treadix.jpg",
        ctaText: "Lihat Web",
        ctaLink: "https://treadix.vercel.app",
        content: () => {
            return <p>Website e-commerce sepatu modern dengan desain hero section interaktif dan responsif.</p>
        },
    },
];

// --- 3. MESIN UTAMA EXPANDABLE CARDS ---
export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") setActive(false);
        }
        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref as any, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        // OPTIMASI 1: Matikan backdrop-blur di layar kecil (HP) agar tidak lag
                        className="fixed inset-0 bg-black/80 md:bg-black/60 md:backdrop-blur-sm h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-4 right-4 items-center justify-center bg-slate-800 text-white rounded-full h-8 w-8 hover:bg-slate-700"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            // OPTIMASI 2: Ringankan bayangan (shadow) di layar kecil & tambah will-change-transform
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-slate-900 border border-slate-800 sm:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl md:shadow-blue-900/20 will-change-transform"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={500}
                                    height={500}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-64 sm:rounded-tr-3xl sm:rounded-tl-3xl object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-6">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-white text-xl"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-blue-400 font-medium text-sm mt-1"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-5 py-2 text-sm rounded-full font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-2 relative px-6 pb-8">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-slate-300 text-sm md:text-base leading-relaxed h-40 md:h-fit flex flex-col items-start gap-4 overflow-auto"
                                    >
                                        {typeof active.content === "function" ? active.content() : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row items-center gap-6 bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 rounded-2xl cursor-pointer hover:bg-slate-800/50 transition-colors"
                    >
                        <motion.div layoutId={`image-${card.title}-${id}`} className="w-full md:w-40 shrink-0">
                            <Image
                                width={200}
                                height={200}
                                src={card.src}
                                alt={card.title}
                                className="h-40 w-full md:w-40 rounded-xl object-cover object-top border border-slate-800/50"
                            />
                        </motion.div>
                        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full">
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-bold text-white text-xl mb-2"
                            >
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-slate-400 text-sm mb-4"
                            >
                                {card.description}
                            </motion.p>
                            <span className="text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors">
                                Lihat Detail &rarr;
                            </span>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
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