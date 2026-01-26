"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// --- DATA PROYEK KAMU ---
const projects = [
  {
    title: "Website Cupang Ndasmu",
    desc: "Website katalog produk ikan cupang dengan tampilan modern.",
    img: "/logocupangndasmu.jpg", // Pastikan nama file ini sesuai dgn yg di folder public
    link: "https://dreas30.github.io/Produk-Cupang-Ndasmu/",
    tag: "Frontend",
  },
  {
    title: "Sistem Login Flask",
    desc: "Proyek backend menggunakan Python Flask dan SQLAlchemy.",
    img: "/loginui.jpg",
    link: "https://github.com/dreas30/SQLAlchemy-Login",
    tag: "Backend",
  },
  {
    title: "Aplikasi Laporan Warga",
    desc: "Aplikasi pelaporan warga berbasis web dengan fitur CRUD modern.",
    img: "/laporan.jpg",
    link: "#",
    tag: "Fullstack",
  },
];

const skills = ["HTML & CSS", "Bootstrap", "Python Flask", "SQL / MySQL", "Next.js", "Tailwind"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white">

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Effect */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 flex flex-col items-center"
        >
          {/* FOTO PROFIL */}
          <div className="relative w-40 h-40 mb-6 border-4 border-blue-500/50 rounded-full overflow-hidden shadow-2xl shadow-blue-500/20">
            <Image
              src="/profile.jpg"  // Pastikan ada file profile.jpg di folder public
              alt="Andreas Ivan"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Andreas Ivan
          </h1>
          <p className="text-xl text-slate-400 max-w-lg mx-auto mb-8">
            Mahasiswa Sistem Informasi | Mengubah ide menjadi aplikasi & website modern.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-600/30"
          >
            Lihat Karya Saya
          </motion.a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Tentang Saya</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Saya adalah mahasiswa Sistem Informasi yang memiliki ketertarikan mendalam pada pengembangan website,
            teknologi, dan bisnis modern. Berpengalaman mengerjakan proyek nyata menggunakan teknologi
            klasik maupun modern seperti <span className="text-white font-semibold">Next.js & Python Flask</span>.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-10 border-y border-slate-800 bg-slate-950">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-6">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="px-6 py-2 bg-slate-800 rounded-full text-slate-300 border border-slate-700 text-sm hover:border-blue-500 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Proyek Unggulan</h2>

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
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-xs px-3 py-1 rounded-full border border-white/10">
                    {project.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {project.desc}
                  </p>
                  <a href={project.link} target="_blank" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
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
        <p className="text-slate-500 mb-2">Ingin berkolaborasi?</p>
        <a href="mailto:andreasivang3447@gmail.com" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          andreasivang3447@gmail.com
        </a>
        <div className="mt-8 text-sm text-slate-600">
          © 2026 Andreas Ivan. Built with Next.js & Tailwind.
        </div>
      </footer>
    </main>
  );
}