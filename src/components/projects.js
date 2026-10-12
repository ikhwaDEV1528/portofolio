"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, FolderGit2, ChevronLeft, ChevronRight } from "lucide-react";

// --- KOMPONEN IMAGE CAROUSEL/SLIDER PER CARD ---
function ImageSlider({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handler Touch Swipe untuk HP
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    
    // Swipe Kiri (Next)
    if (distance > 50) {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
    // Swipe Kanan (Prev)
    if (distance < -50) {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div 
      className="relative w-full h-52 sm:h-56 bg-slate-950 overflow-hidden group/slider touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Gambar Aktif */}
      <img
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        className="w-full h-full object-cover object-top transition-all duration-500 ease-out select-none"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/600x400/0f172a/fff?text=Preview+Project";
        }}
      />

      {/* Overlay Gradient untuk Estetika */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e1b] via-transparent to-black/20 pointer-events-none" />

      {/* Badge Indicator Jumlah Gambar (Contoh: 1/3) */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-slate-950/70 border border-white/10 text-[10px] font-semibold text-slate-300 backdrop-blur-md z-10 pointer-events-none">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Tombol Panah Geser (Desktop Hover / Always visible di mobile) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-slate-200 border border-white/10 opacity-80 sm:opacity-0 group-hover/slider:opacity-100 hover:bg-blue-600 hover:text-white transition-all z-10 shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 text-slate-200 border border-white/10 opacity-80 sm:opacity-0 group-hover/slider:opacity-100 hover:bg-blue-600 hover:text-white transition-all z-10 shadow-lg active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Indikator Dots di Bawah Gambar */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-blue-500 w-5"
                    : "bg-white/40 hover:bg-white/70 w-1.5"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// --- KOMPONEN UTAMA PROJECTS ---
export default function Projects() {
  const projectList = [
    {
      title: "E-Commerce Platform Modern",
      description:
        "Platform toko online responsif dengan sistem keranjang belanja, manajemen stok, dan integrasi payment gateway, Tracking Pesanan, fitur Chat antar pengguna.",
      tech: ["Next.js", "Tailwind CSS", "Redux", "REST API", "node js", "firebase cloud", "mysql"],
      images: [
        "/homeEc.png",
        "/mapsEc.png",
        "/chatEc.png",
      ],
      demoLink: "https://fe-ta-xi.vercel.app/",
      githubLink: "https://github.com/ikhwaDEV1528/-FE_TA.git",
    },
    {
      title: "Web POS (Point of Sale)",
      description:
        "NOTE: Masih dalam tahap testing. Sistem informasi kasir terintegrasi yang dirancang untuk mengoptimalkan operasional bisnis ritel dan grosir. Aplikasi ini mencakup pencatatan transaksi penjualan secara real-time, manajemen stok barang dan inventory, cetak faktur/struk otomatis, hingga pemrosesan retur barang. Dilengkapi pula dengan modul Laporan Keuangan otomatis yang menyajikan analisis omset, laba rugi, dan arus kas harian untuk membantu pemilik bisnis mengambil keputusan strategis secara cepat dan akurat.",
      tech: ["Next.js", "Js", "Node.js", "MySQL"],
      images: [
        "/produkPs.jpeg",
        "/penjualanPs.png",
        "/projects/ecommerce-3.png",
      ],
      demoLink: "https://familybrs.vercel.app",
      githubLink: "https://github.com/ikhwaDEV1528/Fetoken.git",
    },
    {
      title: "Intern Frontend Developer Aplikasi Polres Bangli",
      description:
        "Website Polres Bangli menampilkan pelaku kriminal serta membuat pengajuan SKCK",
      tech: ["React Js", "JavaScript", "talwind CSS", "JSX"],
      images: [
        "/homePol.png",
        "/projects/ecommerce-2.png",
        "/projects/ecommerce-3.png",
      ],
     
      githubLink: "https://github.com/ikhwaDEV1528/web-magang.git",
    },
  ];

  return (
    <section id="projects" className="w-full mt-20 sm:mt-28 border-t border-white/5 pt-16 scroll-mt-24">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-blue-400 mb-3 shadow-inner">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Featured Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Selected Projects
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-md text-center leading-relaxed">
          Beberapa project terbaik yang pernah saya bangun menggunakan tech stack modern.
        </p>
      </div>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[#0b0e1b] border border-white/10 hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-950/20"
          >
            <div>
              {/* Image Carousel */}
              <ImageSlider images={project.images} title={project.title} />

              {/* Konten Card */}
              <div className="p-5 sm:p-6">
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Actions Links */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {/* GitHub Link */}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}

                    {/* Live Demo Link */}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Demo"
                        className="p-2 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="px-5 sm:px-6 pb-5 pt-3 flex flex-wrap gap-1.5 border-t border-white/5 bg-slate-950/30">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-medium bg-slate-900/90 text-slate-300 px-2.5 py-1 rounded-md border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}