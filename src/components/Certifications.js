"use client";

import { Award, CalendarDays, Building2 } from "lucide-react";

export default function Certifications() {
  // DATA MOCK SERTIFIKASI (Ganti dengan data aslimu)
  const certificationList = [
    {
      title: "Webinar AI dan IoT Sebagai Pendorong Utama Transformasi Digital untuk Keunggulan Kompetitif",
      issuer: "Google via Coursera",
      date: "15-Januari-2025 s/d 15-Januari-2025",
      description: "AI dan IoT Sebagai Pendorong Utama Transformasi Digital untuk Keunggulan Kompetitif",
      image: "/sertifIOT.png", // Taruh di public/certs/google-it.png
      credentialLink: "https://coursera.org/verify/your-id", // Opsional, hapus jika tidak ada
    },
    {
      title: "Seminar Kelas Coding Dan Festival Coding 2022",
      issuer: "Festival coding",
      date: "Desember 2023",
      description: "Mengikut rangkaian acara festival coding. dalam hal ini mengikuti materi coding, pemecahana masalah terhadap kasus-kasus tertentu",
      image: "/sertiffes.png", // Taruh di public/certs/aws-cloud.png
      credentialLink: "#",
    },
    {
      title: "Webinar Nasional Blockchain Dan Sistem Komputer: Mengubah Landskap Teknologi Informasi",
      issuer: "Webinar Nasional Blockchain Dan Sistem Komputer: Mengubah Landskap Teknologi Informasi",
      date: "09-Juli-2024 s/d 09-Juli-2024",
      description: "Membahasa seputar BlockChain dalam dunia Web3 untuk perkembangan dunia web development yang akan mendatang",
      image: "/sertifblok.png", // Taruh di public/certs/freecodecamp-jsx.png
      credentialLink: "#",
    },
  ];

  return (
    <section id="certifications" className="w-full mt-20 sm:mt-28 border-t border-white/5 pt-16 scroll-mt-24">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-blue-400 mb-3 shadow-inner">
          <Award className="w-4 h-4" />
          <span>Accomplishments</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Sertifikasi
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-md text-center leading-relaxed">
          Pengakuan formal atas keahlian dan pengetahuan yang saya peroleh melalui pembelajaran berkelanjutan.
        </p>
      </div>

      {/* Grid List Sertifikat */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {certificationList.map((cert, index) => (
          <div
            key={index}
            className="group relative bg-[#0b0e1b] border border-white/10 hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Bagian Gambar/Logo (Aspect Ratio 16:9) */}
              <div className="relative w-full aspect-[16/9] bg-slate-950 overflow-hidden border-b border-white/5 flex items-center justify-center p-4">
                <img
                  src={cert.image}
                  alt={`${cert.title} badge`}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  // Fallback jika gambar tidak ditemukan
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400/0f172a/fff?text=Sertifikat";
                  }}
                />
                {/* Overlay gelap tipis saat hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Konten Teks */}
              <div className="p-5 sm:p-6">
                {/* Metadata (Penerbit & Tanggal) */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 text-[11px] mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-600" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5 text-slate-600" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Judul */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug mb-3">
                  {cert.title}
                </h3>

                {/* Deskripsi (Dibatasi 3 baris agar rapi) */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 hover:line-clamp-none transition-all duration-300">
                  {cert.description}
                </p>
              </div>
            </div>

            {/* Tombol Lihat Kredensial (Jika ada link) */}
            {cert.credentialLink && cert.credentialLink !== "#" && (
              <div className="px-5 sm:px-6 pb-5 pt-2">
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all active:scale-95"
                >
                  Lihat Kredensial
                  <Award className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}