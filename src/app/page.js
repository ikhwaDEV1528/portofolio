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
    { name: "Contact", href: "#contact" },
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

  const techStack = [
    {
      name: "Next.js",
      svg: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 180 180">
          <path d="M152.128 165.75L71.597 60.106v57.859H54.004V32.25h17.593l80.531 105.644V32.25h17.593v133.5h-17.593z" />
          <path d="M117.89 32.25h17.593v49.117L117.89 32.25z" />
        </svg>
      ),
    },
    {
      name: "React",
      svg: (
        <svg className="w-4 h-4 text-[#61DAFB] fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" />
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      svg: (
        <svg className="w-4 h-4 text-[#F7DF1E] fill-current" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm12.55 13.6c.46.77 1.12 1.28 2.21 1.28 1.05 0 1.71-.53 1.71-1.28 0-.9-.72-1.22-1.93-1.74l-.66-.28c-1.92-.82-3.18-1.84-3.18-4.07 0-2.45 1.87-4.13 4.82-4.13 2.1 0 3.5.76 4.41 2.36l-1.9 1.22c-.44-.76-.98-1.07-1.85-1.07-.84 0-1.4.52-1.4 1.17 0 .8.58 1.13 1.72 1.62l.66.28c2.25.96 3.49 1.95 3.49 4.24 0 2.8-2.15 4.38-5.26 4.38-2.73 0-4.43-1.2-5.32-2.91l2.06-1.15zM8.38 16.65c.42.7.92 1.23 1.83 1.23.8 0 1.28-.35 1.28-1.68v-8.4H14v8.43c0 2.5-1.45 3.7-3.66 3.7-2.06 0-3.35-1.02-4.04-2.4l2.08-1.28z" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      svg: (
        <svg className="w-4 h-4 text-[#38BDF8] fill-current" viewBox="0 0 24 24">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      svg: (
        <svg className="w-4 h-4 text-[#5FA04E] fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2zm-1 18.5l-6-3.4V10.8l6 3.4v6.3zm2 0v-6.3l6-3.4v6.3l-6 3.4zm7-10.4l-7 4-7-4 7-4 7 4z" />
        </svg>
      ),
    },
    {
      name: "Git",
      svg: (
        <svg className="w-4 h-4 text-[#F05032] fill-current" viewBox="0 0 24 24">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.9l2.647 2.647c.64-.226 1.383-.087 1.9.428.718.718.718 1.88 0 2.598-.717.718-1.88.718-2.598 0-.537-.538-.67-1.3-.404-1.95l-2.47-2.47v6.4c.2.113.38.267.525.45.718.718.718 1.88 0 2.598-.717.718-1.88.718-2.598 0-.718-.718-.718-1.88 0-2.598.225-.224.494-.378.783-.464v-6.47c-.29-.086-.558-.24-.783-.464-.54-.538-.672-1.302-.403-1.954L6.28 6.014 1.454 10.84c-.604.604-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.188 0l10.48-10.478c.604-.604.604-1.582 0-2.188z" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      svg: (
        <svg className="w-4 h-4 text-[#3178C6] fill-current" viewBox="0 0 24 24">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-1.285-.436 7.422 7.422 0 00-1.312-.115c-.71 0-1.229.14-1.557.421-.328.28-.492.677-.492 1.19 0 .344.089.626.267.847.178.221.436.407.774.558.338.151.748.298 1.23.441l.707.214c.82.25 1.464.603 1.933 1.06.469.457.703 1.077.703 1.86 0 .964-.356 1.72-1.068 2.268-.712.548-1.741.822-3.087.822-.756 0-1.488-.066-2.196-.198a9.423 9.423 0 01-1.782-.505v-2.617c.692.35 1.397.608 2.115.773.718.165 1.385.248 2.001.248.72 0 1.258-.135 1.614-.405.356-.27.534-.668.534-1.193 0-.377-.097-.68-.291-.908-.194-.228-.48-.425-.858-.59-.378-.165-.838-.332-1.38-.501l-.578-.178c-.85-.262-1.5-.615-1.95-1.06-.45-.445-.675-1.047-.675-1.806 0-.92.348-1.644 1.044-2.172.696-.528 1.67-.792 2.922-.792zm-8.232.195v2.304H7.668V21.75H4.783v-9.497H2.196V9.945h8.06z" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      svg: (
        <svg className="w-4 h-4 text-[#4479A1] fill-current" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm-4 0a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      svg: (
        <svg className="w-4 h-4 text-[#1572B6] fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.09 4.413H5.41l.365 4.127h11.23l-.403 4.542-4.632 1.25-4.63-1.25-.295-3.32h-2.73l.534 5.996 7.121 1.975 7.124-1.975.952-11.345z" />
        </svg>
      ),
    },
    {
      name: "HTML",
      svg: (
        <svg className="w-4 h-4 text-[#E34F26] fill-current" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.09 4.413H5.41l.365 4.127h11.23l-.403 4.542-4.632 1.25-4.63-1.25-.295-3.32h-2.73l.534 5.996 7.121 1.975 7.124-1.975.952-11.345z" />
        </svg>
      ),
    },
    {
      name: "Redux",
      svg: (
        <svg className="w-4 h-4 text-[#764ABC] fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z" />
        </svg>
      ),
    },
    {
      name: "React Native",
      svg: (
        <svg className="w-4 h-4 text-[#61DAFB] fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" />
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      ),
    },
    {
      name: "REST API",
      svg: (
        <svg className="w-4 h-4 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

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
            href="https://drive.google.com/file/d/157AD7noGRPeowDnYgjwAGFBwACjUZVUT/view?usp=drive_link"
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
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition"
              >
                {tech.svg}
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Komponen Contact */}
        <Contact />
      </main>
    </div>
  );
}