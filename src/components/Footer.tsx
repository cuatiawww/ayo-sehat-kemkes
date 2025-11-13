import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#d2d2d2]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Column 1 - Logo & Info */}
          <div>
            <div className="mb-6">
              <div className="mb-3 sm:mb-4">
                <img
                  src="../assets/logo.png"
                  alt="Logo Ayo Sehat - Kementerian Kesehatan RI"
                  title="Ayo Sehat - Platform Kesehatan Resmi Kemenkes"
                  className="w-[120px] sm:w-[140px] lg:w-[160px] object-contain"
                  loading="lazy"
                />
              </div>
              <div className="leading-[1.2] mb-3 sm:mb-4">
                <p className="font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121]">
                  Ayo Sehat
                </p>
                <p className="font-medium not-italic text-[12px] sm:text-[13px] lg:text-[14px] text-[#212121]">
                  Kementerian Kesehatan Republik Indonesia
                </p>
              </div>
              <p className="font-normal text-[12px] sm:text-[13px] lg:text-[14px] text-[#212121] mb-3 sm:mb-4">
                Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Jakarta Selatan, DKI Jakarta
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal not-italic text-[12px] sm:text-[13px] lg:text-[14px] text-[#18b3ab] mb-3 sm:mb-4 hover:text-[#16a199] transition-colors duration-300 inline-flex items-center gap-1"
              >
                Chatbot WhatsApp Ayo Sehat
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-medium not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4">
                Media Sosial
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/ayosehat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[30px] h-[30px] rounded-[5px] bg-[#3d8581] flex items-center justify-center hover:bg-[#2d6561] transition-all duration-300 hover:scale-110"
                  aria-label="Facebook Ayo Sehat"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://twitter.com/ayosehat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[30px] h-[30px] rounded-[5px] bg-[#3d8581] flex items-center justify-center hover:bg-[#2d6561] transition-all duration-300 hover:scale-110"
                  aria-label="Twitter Ayo Sehat"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://instagram.com/ayosehat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[30px] h-[30px] rounded-[5px] bg-[#3d8581] flex items-center justify-center hover:bg-[#2d6561] transition-all duration-300 hover:scale-110"
                  aria-label="Instagram Ayo Sehat"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://youtube.com/ayosehat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[30px] h-[30px] rounded-[5px] bg-[#3d8581] flex items-center justify-center hover:bg-[#2d6561] transition-all duration-300 hover:scale-110"
                  aria-label="YouTube Ayo Sehat"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 uppercase">
              Layanan Kami
            </h3>
            <ul className="space-y-2">
              {["Konsultasi Online", "Medical Check-Up", "Laboratorium"].map((item) => (
                <li key={item}>
                  <a
                    href="/layanan"
                    className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 mt-6 sm:mt-8 uppercase">
              Spesialis
            </h3>
            <ul className="space-y-2">
              {["Dokter Umum", "Dokter Gigi"].map((item) => (
                <li key={item}>
                  <a
                    href="/spesialis"
                    className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 uppercase">
              Informasi
            </h3>
            <ul className="space-y-2">
              {["Tentang Kami", "Tim Medis", "Karir"].map((item) => (
                <li key={item}>
                  <a
                    href="/info"
                    className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 mt-6 sm:mt-8 uppercase">
              Artikel Kesehatan
            </h3>
            <ul className="space-y-2">
              {[
                "Tips Kesehatan",
                "Pencegahan Penyakit",
                "Gaya Hidup Sehat",
                "Nutrisi & Gizi",
                "Kesehatan Mental",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/artikel"
                    className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 uppercase">
              Hubungi Kami
            </h3>
            <ul className="space-y-2">
              {["Customer Service", "WhatsApp", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href="/kontak"
                    className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d2d2d2]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#212121] text-center sm:text-left">
              © 2025 Kementerian Kesehatan Republik Indonesia. All rights reserved.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="/privacy"
                className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] hover:text-[#16a199] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] hover:text-[#16a199] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}