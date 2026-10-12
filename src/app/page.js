"use client";

import { useState, useEffect } from "react";
import { FileText, ArrowUpRight, Sparkles, Menu, X, ChevronRight } from "lucide-react";
import Projects from "@/components/projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact"; // Impor Komponen Contact

// --- KOMPONEN NAVBAR ---
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Sertifikasi", href: "#certifications" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Contact", href: "#contact" }, // Mengarah ke id="contact"
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070913]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex justify-between items-center">
        {/* Nama / Logo Kiri */}
        <a href="#" className="flex items-center gap-3 text-white font-semibold text-base sm:text-lg tracking-tight">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xs">
            IM
          </div>
          <span className="font-bold text-white">Ikhwan Marditya Nurhidayat</span>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 border border-white/5 p-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Tombol Kanan */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 rounded-full backdrop-blur-md transition"
          >
            Get in touch
          </a>

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-white/10 text-slate-300"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden mt-2 px-5">
          <div className="bg-[#0b0e1b] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

// --- HALAMAN UTAMA ---
export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 overflow-x-hidden font-sans">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <Navbar />

      <main className="relative pt-36 sm:pt-44 pb-20 px-5 sm:px-8 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for opportunities</span>
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
        </div>

        {/* Nama Judul Utama */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl">
          Crafting web experiences with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            precision & scale.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-400 font-normal leading-relaxed max-w-2xl mb-10">
          I&apos;m <strong className="text-slate-200 font-semibold">Ikhwan Marditya Nurhidayat</strong>, a Full Stack Developer specializing in building modern web applications.
        </p>

        {/* Tombol Action */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <a
            href="/resume.pdf"
            target="_blank"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-200 text-slate-950 font-semibold text-sm px-7 py-3.5 rounded-full transition shadow-lg"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Social Icons SVG Manual */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
            {/* GitHub SVG */}
            <a
              href="https://github.com/ikhwaDEV1528"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-full text-slate-300 hover:text-white transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn SVG */}
            <a
              href="https://www.linkedin.com/in/ikhwan-marditya-nurhidayat-a0b5ba429"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-full text-slate-300 hover:text-white transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Komponen Projects */}
        <Projects />

        {/* Komponen Sertifikasi */}
        <Certifications />

        {/* Tech Stack Bar */}
        <div id="skills" className="mt-20 sm:mt-28 w-full border-t border-white/5 pt-10 scroll-mt-24">
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["Next.js", "React", "JavaScript", "Tailwind CSS", "Node.js", "Git", "TypeScript", "MySQL", "CSS", "HTML", "Management state Redux", "React Native", "REST API"].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-xs font-medium text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Komponen Contact (Dipanggil di sini dengan id="contact") */}
        <Contact />
      </main>
    </div>
  );
}