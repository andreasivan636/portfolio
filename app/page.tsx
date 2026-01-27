"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// --- DATA PROYEK ---
const projects = [
  {
    title: "Redesign Fore Coffee",
    desc: "Landing page scrollytelling mewah dengan animasi Framer Motion & Next.js.",
    img: "/fore.jpg",
    link: "https://fore-redesign.vercel.app", // <--- GANTI JADI INI
    tag: "Creative Dev",
  },
  {
    title: "Website Cupang Ndasmu",
    desc: "Katalog produk ikan hias dengan tampilan modern dan responsif.",
    img: "/logocupangndasmu.jpg",
    link: "https://dreas30.github.io/Produk-Cupang-Ndasmu/",
    tag: "Frontend",
  },
  {
    title: "Sistem Login Flask",
    desc: "Backend auth system menggunakan Python Flask dan SQLAlchemy.",
    img: "/loginui.jpg",
    link: "https://github.com/dreas30/SQLAlchemy-Login",
    tag: "Backend",
  },
];

// --- SKILLS (Gabungan Terbaik: Modern + Data) ---
const skills = [
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Python Flask",
  "SQL / MySQL",     // <-- Penting buat anak SI (Data)
  "Graphic Design",
  "AI Prompting"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white">

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Effect */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 flex flex-col items-center"
        >
          {/* FOTO PROFIL */}
          <div className="relative w-48 h-48 mb-8 border-4 border-blue-500/30 rounded-full overflow-hidden shadow-2xl shadow-blue-500/20 group">
            <Image
              src="/profile.jpg"
              alt="Andreas Ivan"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            Andreas Ivan
          </h1>

          {/* TAGLINE BARU */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm md:text-lg text-slate-300 font-light tracking-wide">
            <span className="px-3 py-1 bg-slate-900/50 rounded-full border border-slate-800">Creative Developer</span>
            <span className="hidden md:block text-slate-600">•</span>
            <span className="px-3 py-1 bg-slate-900/50 rounded-full border border-slate-800">AI Enthusiast</span>
            <span className="hidden md:block text-slate-600">•</span>
            <span className="px-3 py-1 bg-slate-900/50 rounded-full border border-slate-800">Graphic Designer</span>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/30"
          >
            Lihat Karya Saya
          </motion.a>
        </motion.div>
      </section>

      {/* ABOUT SECTION - COPYWRITING BARU */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Tentang Saya</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Sebagai <span className="text-white font-semibold">Mahasiswa Sistem Informasi</span>, saya tidak hanya belajar koding, tapi juga seni visual.
            Saya menggabungkan logika pemrograman dengan estetika desain grafis untuk menciptakan website yang tidak hanya canggih, tapi juga indah.
            Saat ini sedang mendalami integrasi <span className="text-blue-400">AI (Artificial Intelligence)</span> untuk mempercepat proses development.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-12 border-y border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-8">Tech Stack & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -5 }}
                className="px-6 py-3 bg-slate-900 rounded-xl text-slate-300 border border-slate-800 text-sm font-medium hover:border-blue-500 hover:text-blue-400 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-800">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-xs px-3 py-1 rounded-full border border-white/10 font-bold text-blue-400">
                    {project.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {project.desc}
                  </p>
                  <a href={project.link} target="_blank" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Lihat Detail &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-center">
        <p className="text-slate-500 mb-3">Tertarik berkolaborasi?</p>
        <a href="mailto:andreasivang3447@gmail.com" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          andreasivang3447@gmail.com
        </a>
        <div className="mt-8 text-sm text-slate-600">
          © 2026 Andreas Ivan. Built with Next.js, Tailwind & Vercel.
        </div>
      </footer>
    </main>
  );
}