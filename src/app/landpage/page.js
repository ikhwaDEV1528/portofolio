"use client";

import { useState } from "react";
import { Menu, X, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 px-6 py-4 transition-all">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Nama di sebelah kiri */}
        <a href="#" className="text-lg font-bold text-white tracking-wide hover:text-blue-400 transition">
          Ikhwan Mardita
        </a>

        {/* Menu & Theme Toggle di sebelah kanan */}
        <div className="flex items-center gap-4">
          <button 
            aria-label="Toggle Theme"
            className="p-2 text-slate-300 hover:text-white transition"
          >
            <Moon className="w-5 h-5" />
          </button>

          {/* Tombol Menu / Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-white font-medium bg-slate-900 border border-slate-700/60 px-3 py-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            <span>Menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full right-6 mt-2 w-56 bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl backdrop-blur-lg overflow-hidden py-2 animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col text-slate-200">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 hover:bg-blue-600/20 hover:text-blue-400 text-sm font-medium transition"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 hover:bg-blue-600/20 hover:text-blue-400 text-sm font-medium transition"
            >
              About Me
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 hover:bg-blue-600/20 hover:text-blue-400 text-sm font-medium transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 hover:bg-blue-600/20 hover:text-blue-400 text-sm font-medium transition"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 hover:bg-blue-600/20 hover:text-blue-400 text-sm font-medium transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}