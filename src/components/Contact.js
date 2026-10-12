"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Copy, Check, MessageSquare } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState("");
  const [year, setYear] = useState(2026); // Default year

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const contactList = [
    {
      id: "email",
      label: "Email",
      value: "ikhwanmarditya1522@gmail.com",
      href: "mailto:ikhwanmarditya1522@gmail.com",
      type: "lucide",
      icon: Mail,
      color: "from-blue-500/20 to-indigo-500/20 border-blue-500/30",
    },
    {
      id: "whatsapp",
      label: "WhatsApp / Phone",
      value: "081399549218",
      href: "https://wa.me/6281399549218",
      type: "lucide",
      icon: Phone,
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@ikhwanmarditya",
      href: "https://instagram.com/ikhwanmarditya",
      type: "svg",
      svgPath: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
      color: "from-pink-500/20 to-purple-500/20 border-pink-500/30",
    },
    {
      id: "twitter",
      label: "Twitter / X",
      value: "@ikhwanmarditya",
      href: "https://twitter.com/ikhwanmarditya",
      type: "svg",
      svgPath: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
      color: "from-sky-500/20 to-blue-500/20 border-sky-500/30",
    },
  ];

  return (
    <section id="contact" className="w-full mt-20 sm:mt-28 border-t border-white/5 pt-16 pb-12 scroll-mt-24">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-blue-400 mb-3 shadow-inner">
          <MessageSquare className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Hubungi Saya
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-md text-center leading-relaxed">
          Punya tawaran project, kerja sama, atau ingin berdiskusi? Silakan hubungi saya melalui platform di bawah ini.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
        {contactList.map((item) => {
          const LucideIcon = item.icon;
          return (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-br ${item.color} bg-slate-950/80 border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md shadow-xl flex items-center justify-between gap-4`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 text-white shrink-0 group-hover:scale-105 transition-transform">
                  {item.type === "lucide" ? (
                    <LucideIcon className="w-5 h-5 text-blue-400" />
                  ) : (
                    <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 24 24">
                      {item.svgPath}
                    </svg>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-200 hover:text-white transition truncate block"
                  >
                    {item.value}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                {(item.id === "email" || item.id === "whatsapp") && (
                  <button
                    onClick={() => handleCopy(item.value, item.id)}
                    aria-label={`Copy ${item.label}`}
                    className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-400 hover:text-white transition active:scale-95"
                    title="Copy"
                  >
                    {copied === item.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.label}`}
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-blue-600 border border-white/10 text-slate-400 hover:text-white transition active:scale-95"
                  title="Open Link"
                >
                  {item.type === "lucide" ? (
                    <LucideIcon className="w-4 h-4" />
                  ) : (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      {item.svgPath}
                    </svg>
                  )}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Copy */}
      <div className="mt-16 text-center text-xs text-slate-500 border-t border-white/5 pt-8">
        © {year} Ikhwan Marditya Nurhidayat. All rights reserved.
      </div>
    </section>
  );
}