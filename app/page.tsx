"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
// Import mesin 3D Marquee (Visual)
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
// Import mesin Expandable Cards (Detail)
import { ExpandableCardDemo } from "@/components/ui/expandable-cards";
import {
  IconHome,
  IconBriefcase,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

const marqueeImages = Array(10).fill([
  "/fore.jpg",
  "/logocupangndasmu.jpg",
  "/laporan.jpg",
  "/iphone.jpg",
  "/ascendia.jpg",
  "/treadix.jpg"
]).flat();

// --- DATA FLOATING DOCK ---
const dockItems = [
  { title: "Home", icon: <IconHome className="h-full w-full text-slate-300" />, href: "#" },
  { title: "Projects", icon: <IconBriefcase className="h-full w-full text-slate-300" />, href: "#portfolio" },
  { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-slate-300" />, href: "https://github.com/andreasivan636" },
  { title: "Email", icon: <IconMail className="h-full w-full text-slate-300" />, href: "mailto:andreasivang3447@gmail.com" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white overflow-hidden relative">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />

        <div className="container mx-auto max-w-6xl z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Andreas Ivan</span>
            </h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-sm md:text-base text-slate-300 font-light tracking-wide">
              <span className="px-3 py-1 bg-slate-900/50 rounded-full border border-slate-800">Creative Developer</span>
              <span className="hidden md:block text-slate-600">•</span>
              <span className="px-3 py-1 bg-slate-900/50 rounded-full border border-slate-800">AI Enthusiast</span>
              <span className="hidden md:block text-slate-600">•</span>
              <span className="px-3 py-1 bg-slate-900/50 rounded-full border border-slate-800">Graphic Designer</span>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              Sebagai Mahasiswa Sistem dan Teknologi Informasi, saya menggabungkan logika pemrograman dengan estetika desain grafis untuk menciptakan website yang tidak hanya canggih, tapi juga indah. Saat ini saya juga aktif mendalami integrasi AI untuk mempercepat proses development.
            </p>

            <div className="mb-10">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Tech Stack & Tools</h3>
              <div className="flex flex-wrap justify-center md:justify-start">
                <img
                  src="https://skillicons.dev/icons?i=nextjs,react,tailwind,python,flask,mysql,figma,ps,ai,vscode,github,vercel"
                  alt="Tech Stack"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/30"
            >
              Lihat Karya Saya ↓
            </motion.a>
          </motion.div>

          {/* FOTO PROFIL (3D Card Effect) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="shrink-0 relative mt-10 md:mt-0 z-20"
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-64 h-64 md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.3)] bg-slate-900 p-0">
                <CardItem translateZ="50" className="w-full h-full relative">
                  <Image src="/profile.jpg" alt="Andreas Ivan" fill className="object-cover group-hover/card:scale-110 transition-transform duration-500" />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>

        </div>
      </section>

      {/* --- PORTFOLIO SECTION KOMBO --- */}
      <section id="portfolio" className="py-24 w-full bg-slate-950 relative z-10 border-t border-slate-900 overflow-hidden">

        {/* BAGIAN 1: 3D MARQUEE (Visual Teaser) */}
        <div className="container mx-auto max-w-6xl px-6 mb-8 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Karya Terbaik Saya</h2>
          <p className="text-slate-400 max-w-2xl">
            Kumpulan cuplikan antarmuka dari proyek yang saya bangun menggunakan teknologi terbaru.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-24">
          <ThreeDMarquee images={marqueeImages} />
        </div>

        {/* BAGIAN 2: EXPANDABLE CARDS (Detail & Klik) */}
        <div className="container mx-auto max-w-6xl px-6 mb-8 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">Detail Proyek</h3>
          <p className="text-slate-400 max-w-2xl mb-8">
            Klik pada setiap proyek di bawah ini untuk membaca penjelasan teknis dan mengunjungi websitenya secara langsung.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
          <ExpandableCardDemo />
        </div>

      </section>

      {/* --- FOOTER --- */}
      <footer className="pt-24 pb-32 bg-slate-950 text-center relative z-10">
        <p className="text-slate-500 mb-3">Tertarik berkolaborasi?</p>
        <a href="mailto:andreasivang3447@gmail.com" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          andreasivang3447@gmail.com
        </a>
        <div className="mt-8 text-sm text-slate-600">
          © 2026 Andreas Ivan. Built with Next.js, Tailwind & Vercel.
        </div>
      </footer>

      {/* --- FLOATING DOCK DARI ACETERNITY --- */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>

    </main>
  );
}