"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  IconHome,
  IconBriefcase,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

// --- DATA PROYEK UNTUK PARALLAX ---
const parallaxProducts = [
  { title: "Redesign Fore Coffee", link: "https://fore-redesign.vercel.app", thumbnail: "/fore.jpg" },
  { title: "Cupang Ndasmu", link: "https://dreas30.github.io/Produk-Cupang-Ndasmu/", thumbnail: "/logocupangndasmu.jpg" },
  { title: "Laporan Warga", link: "https://github.com/andreasivan636/laporan-warga-surabaya", thumbnail: "/laporan.jpg" },
  { title: "iPhone 13 3D", link: "https://iphone13-showcase.vercel.app", thumbnail: "/iphone.jpg" },
  { title: "Ascendia Creative", link: "https://ascendiacreative.vercel.app", thumbnail: "/ascendia.jpg" },
  // Duplicate 1
  { title: "Laporan Warga Backend", link: "https://github.com/andreasivan636/laporan-warga-surabaya", thumbnail: "/laporan.jpg" },
  { title: "Fore Coffee Scrollytelling", link: "https://fore-redesign.vercel.app", thumbnail: "/fore.jpg" },
  { title: "iPhone 13 Showcase", link: "https://iphone13-showcase.vercel.app", thumbnail: "/iphone.jpg" },
  { title: "Ascendia Digital", link: "https://ascendiacreative.vercel.app", thumbnail: "/ascendia.jpg" },
  { title: "Cupang Ndasmu Web", link: "https://dreas30.github.io/Produk-Cupang-Ndasmu/", thumbnail: "/logocupangndasmu.jpg" },
  // Duplicate 2
  { title: "Ascendia Agency", link: "https://ascendiacreative.vercel.app", thumbnail: "/ascendia.jpg" },
  { title: "Laporan Warga App", link: "https://github.com/andreasivan636/laporan-warga-surabaya", thumbnail: "/laporan.jpg" },
  { title: "Fore Coffee UI", link: "https://fore-redesign.vercel.app", thumbnail: "/fore.jpg" },
  { title: "Cupang Ndasmu Catalog", link: "https://dreas30.github.io/Produk-Cupang-Ndasmu/", thumbnail: "/logocupangndasmu.jpg" },
  { title: "iPhone 3D Experience", link: "https://iphone13-showcase.vercel.app", thumbnail: "/iphone.jpg" },
];

// --- DATA FLOATING DOCK ---
const dockItems = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-slate-300" />,
    href: "#",
  },
  {
    title: "Projects",
    icon: <IconBriefcase className="h-full w-full text-slate-300" />,
    href: "#portfolio",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-slate-300" />,
    href: "https://github.com/andreasivan636",
  },
  {
    title: "Email",
    icon: <IconMail className="h-full w-full text-slate-300" />,
    href: "mailto:andreasivang3447@gmail.com",
  },
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

          {/* BAGIAN KANAN: FOTO PROFIL DENGAN EFEK 3D TILT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="shrink-0 relative mt-10 md:mt-0 z-20"
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-64 h-64 md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.3)] bg-slate-900 p-0">
                <CardItem translateZ="50" className="w-full h-full relative">
                  <Image
                    src="/profile.jpg"
                    alt="Andreas Ivan"
                    fill
                    className="object-cover group-hover/card:scale-110 transition-transform duration-500"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>

        </div>
      </section>

      {/* --- PORTFOLIO SECTION (PARALLAX ACETERNITY) --- */}
      <section id="portfolio" className="w-full">
        <HeroParallax products={parallaxProducts} />
      </section>

      {/* --- FOOTER --- */}
      <footer className="pt-12 pb-32 bg-slate-950 border-t border-slate-900 text-center relative z-10 mt-20">
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