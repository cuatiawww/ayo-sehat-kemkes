import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const imgLogo = "../assets/logo.png";
const iconPaths = {
  info: "../assets/info.svg",
  category: "../assets/category.svg",
  user: "../assets/user.svg",
  heart: "../assets/heart.svg",
  calendar: "../assets/calendar.svg",
  download: "../assets/paper.svg",
  activity: "../assets/Activity.svg",
  document: "../assets/Document.svg",
};

function InfoCircleIcon() {
  return (
    <div className="relative size-[42px] rounded-full flex items-center justify-center" aria-hidden="true">
      <img
        src={iconPaths.info}
        alt="Ikon Informasi"
        title="Informasi tentang Ayo Sehat"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

function CategoryIcon() {
  return (
    <div className="relative size-[42px] rounded-full flex items-center justify-center" aria-hidden="true">
      <img
        src={iconPaths.category}
        alt="Ikon Kategori Topik"
        title="Jelajahi topik kesehatan"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

function UserIcon() {
  return (
    <div className="relative size-[42px] rounded-full flex items-center justify-center" aria-hidden="true">
      <img
        src={iconPaths.user}
        alt="Ikon Siklus Hidup"
        title="Informasi berdasarkan tahap kehidupan"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

function HeartIcon() {
  return (
    <div className="relative size-[42px] rounded-full flex items-center justify-center" aria-hidden="true">
      <img
        src={iconPaths.heart}
        alt="Ikon Hidup Sehat"
        title="Tips gaya hidup sehat"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative size-[42px] rounded flex items-center justify-center" aria-hidden="true">
      <img
        src={iconPaths.calendar}
        alt="Ikon Kegiatan"
        title="Agenda dan acara kesehatan"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

function DownloadIcon() {
  return (
    <div className="relative size-[42px] rounded flex items-center justify-center" aria-hidden="true">
      <img
        src={iconPaths.download}
        alt="Ikon Unduh Materi"
        title="Unduh materi kesehatan"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

function ActivityIcon() {
  return (
    <div className="relative size-[42px] rounded flex items-center justify-center" aria-hidden="true">
      <img
        src={iconPaths.activity}
        alt="Ikon Kampanye"
        title="Kampanye kesehatan nasional"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

function DocumentIcon() {
  return (
    <div className="relative size-[42px] rounded flex items-center justify-center" aria-hidden="true">
      <img
        src={iconPaths.document}
        alt="Ikon Kemitraan"
        title="Informasi kemitraan dan kerjasama"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function Navbar({
  onNavigateHome,
  onNavigateSiklusHidup,
  onNavigateTopikKesehatan,
  isHomePage = false,
}: {
  onNavigateHome: () => void;
  onNavigateSiklusHidup: () => void;
  onNavigateTopikKesehatan: () => void;
  isHomePage?: boolean;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Tentang", icon: InfoCircleIcon, onClick: () => {}, href: "/tentang" },
    { label: "Topik", icon: CategoryIcon, onClick: onNavigateTopikKesehatan, href: "/topik" },
    { label: "Siklus Hidup", icon: UserIcon, onClick: onNavigateSiklusHidup, href: "/siklus-hidup" },
    { label: "Hidup Sehat", icon: HeartIcon, onClick: () => {}, href: "/hidup-sehat" },
    { label: "Kegiatan", icon: CalendarIcon, onClick: () => {}, href: "/kegiatan" },
    { label: "Download", icon: DownloadIcon, onClick: () => {}, href: "/download" },
    { label: "Kampanye", icon: ActivityIcon, onClick: () => {}, href: "/kampanye" },
    { label: "Kemitraan", icon: DocumentIcon, onClick: () => {}, href: "/kemitraan" },
  ];

  return (
    <nav
      className={`bg-white border-b border-[#bcbcbc] transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''}`}
      aria-label="Navigasi utama"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      lang="id"
    >
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="relative py-2 lg:py-3">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {isHomePage ? (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="block w-[150px] xl:w-[180px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
                rel="home"
                itemProp="url"
                aria-label="Beranda Kemenkes Ayo Sehat"
              >
                <img
                  src={imgLogo}
                  alt="Kemenkes Ayo Sehat - Beranda"
                  title="Kemenkes Ayo Sehat - Platform Kesehatan Resmi"
                  className="w-full h-auto object-contain"
                  itemProp="logo"
                  loading="eager"
                />
              </a>
            ) : (
              <div className="shrink-0">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateHome();
                  }}
                  className="block w-[150px] xl:w-[180px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
                  rel="home"
                  itemProp="url"
                  aria-label="Kembali ke beranda Kemenkes Ayo Sehat"
                >
                  <img
                    src={imgLogo}
                    alt="Kemenkes Ayo Sehat"
                    title="Kemenkes Ayo Sehat - Kembali ke Beranda"
                    className="w-full h-auto object-contain"
                    itemProp="logo"
                    loading="eager"
                  />
                </a>
              </div>
            )}

            <div className="flex-1 flex justify-end gap-4 xl:gap-5 2xl:gap-6">
              {menuItems.map((item, index) => {
                const isActive = activeMenu === index;
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMenu(index);
                      item.onClick();
                    }}
                    className={`flex flex-col items-center justify-center gap-2 cursor-pointer shrink-0 rounded-[12px] w-[85px] h-[85px] xl:w-[95px] xl:h-[95px] transition-all duration-300 no-underline group ${
                      isActive
                        ? "bg-[#18b3ab] shadow-lg"
                        : "bg-transparent hover:bg-[#e9fffe] hover:shadow-md"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    itemProp="url"
                    role="link"
                  >
                    <meta itemProp="name" content={item.label} />
                    <div
                      className={`transition-all duration-300 scale-[0.85] xl:scale-95 ${
                        isActive ? "brightness-0 invert" : "group-hover:scale-110"
                      }`}
                    >
                      <item.icon />
                    </div>
                    <span
                      className={`font-semibold text-[10px] xl:text-[11px] 2xl:text-[12px] leading-tight text-center transition-colors duration-300 whitespace-normal break-words ${
                        isActive ? "text-white" : "text-[#00b6a3] group-hover:text-[#18b3ab]"
                      }`}
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden items-center justify-between gap-3">
            {isHomePage ? (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="block w-[130px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
                rel="home"
                aria-label="Beranda Kemenkes Ayo Sehat"
              >
                <img
                  src={imgLogo}
                  alt="Kemenkes Ayo Sehat - Beranda"
                  title="Kemenkes Ayo Sehat - Platform Kesehatan Resmi"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </a>
            ) : (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="block w-[130px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
                rel="home"
                aria-label="Kembali ke beranda"
              >
                <img
                  src={imgLogo}
                  alt="Kemenkes Ayo Sehat"
                  title="Kemenkes Ayo Sehat - Kembali ke Beranda"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </a>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00b6a3] p-1.5 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between">
            {isHomePage ? (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="block w-[100px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
                rel="home"
                aria-label="Beranda Kemenkes Ayo Sehat"
              >
                <img
                  src={imgLogo}
                  alt="Kemenkes Ayo Sehat - Beranda"
                  title="Kemenkes Ayo Sehat - Platform Kesehatan Resmi"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </a>
            ) : (
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="block w-[100px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
                rel="home"
                aria-label="Kembali ke beranda"
              >
                <img
                  src={imgLogo}
                  alt="Kemenkes Ayo Sehat"
                  title="Kemenkes Ayo Sehat - Kembali ke Beranda"
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </a>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00b6a3] p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden pb-3 space-y-2 border-t border-gray-200 pt-3 bg-white"
            role="region"
            aria-label="Menu mobile"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {menuItems.map((item, index) => {
                const isActive = activeMenu === index;
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMenu(index);
                      setMobileMenuOpen(false);
                      item.onClick();
                    }}
                    className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer rounded-[12px] w-full aspect-square transition-all duration-300 no-underline ${
                      isActive
                        ? "bg-[#18b3ab] shadow-lg"
                        : "bg-transparent hover:bg-[#e9fffe]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <div className={`scale-[0.6] ${isActive ? "brightness-0 invert" : ""}`}>
                      <item.icon />
                    </div>
                    <span
                      className={`font-semibold text-[10px] leading-[14px] text-center transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#00b6a3]"
                      }`}
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}