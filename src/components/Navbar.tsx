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
    <div className="relative size-[42px] rounded-full flex items-center justify-center">
      <img
        src={iconPaths.info}
        alt="Info"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function CategoryIcon() {
  return (
    <div className="relative size-[42px] rounded-full flex items-center justify-center">
      <img
        src={iconPaths.category}
        alt="Category"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function UserIcon() {
  return (
    <div className="relative size-[42px] rounded-full flex items-center justify-center">
      <img
        src={iconPaths.user}
        alt="User"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function HeartIcon() {
  return (
    <div className="relative size-[42px] rounded-full flex items-center justify-center">
      <img
        src={iconPaths.heart}
        alt="Heart"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative size-[42px] rounded flex items-center justify-center">
      <img
        src={iconPaths.calendar}
        alt="Calendar"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function DownloadIcon() {
  return (
    <div className="relative size-[42px] rounded flex items-center justify-center">
      <img
        src={iconPaths.download}
        alt="Download"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function ActivityIcon() {
  return (
    <div className="relative size-[42px] rounded flex items-center justify-center">
      <img
        src={iconPaths.activity}
        alt="Activity"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

function DocumentIcon() {
  return (
    <div className="relative size-[42px] rounded flex items-center justify-center">
      <img
        src={iconPaths.document}
        alt="Document"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default function Navbar({ 
  onNavigateHome, 
  onNavigateSiklusHidup,
  onNavigateTopikKesehatan
}: { 
  onNavigateHome: () => void;
  onNavigateSiklusHidup: () => void;
  onNavigateTopikKesehatan: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "TENTANG", icon: InfoCircleIcon, onClick: () => { } },
    { label: "TOPIK", icon: CategoryIcon, onClick: onNavigateTopikKesehatan },
    { label: "SIKLUS HIDUP", icon: UserIcon, onClick: () => { onNavigateSiklusHidup(); } },
    { label: "PERILAKU HIDUP SEHAT", icon: HeartIcon, onClick: () => { } },
    { label: "KEGIATAN", icon: CalendarIcon, onClick: () => {  } },
    { label: "DOWNLOAD", icon: DownloadIcon, onClick: () => { } },
    { label: "KAMPANYE", icon: ActivityIcon, onClick: () => { } },
    { label: "KEMITRAAN", icon: DocumentIcon, onClick: () => {  } },
  ];

  return (
    <nav className={`bg-white border-b border-[#bcbcbc] ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="relative py-2 lg:py-3">
          {/* Desktop Layout */}
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center justify-between">
            {/* Logo */}
            <button
              onClick={onNavigateHome}
              className="shrink-0 w-[150px] xl:w-[180px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                alt="Logo"
                className="w-full h-auto object-contain"
                src={imgLogo}
              />
            </button>

            {/* Daftar menu navigasi */}
            <div className="flex gap-2 xl:gap-3 2xl:gap-4 items-center justify-end flex-1">
              {menuItems.map((item, index) => {
                const isActive = activeMenu === index;
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveMenu(index);
                      item.onClick();
                    }}
                    className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer shrink-0 rounded-[12px] w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] transition-all duration-300 ${
                      isActive
                        ? "bg-[#18b3ab] shadow-lg"
                        : "bg-transparent hover:bg-[#e9fffe] hover:shadow-md"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`transition-all duration-300 scale-[0.65] xl:scale-75 ${isActive ? "brightness-0 invert" : ""}`}
                    >
                      <item.icon />
                    </div>
                    {/* Label */}
                    <div
                      className={`font-semibold text-[10px] xl:text-[11px] 2xl:text-[12px] leading-tight text-center transition-colors duration-300 whitespace-normal break-words ${
                        isActive ? "text-white" : "text-[#00b6a3]"
                      }`}
                      style={{
                        fontVariationSettings: "'wdth' 100",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tablet Layout*/}
          <div className="hidden md:flex lg:hidden items-center justify-between gap-3">
            <button
              onClick={onNavigateHome}
              className="shrink-0 w-[130px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                alt="Logo"
                className="w-full h-auto object-contain"
                src={imgLogo}
              />
            </button>

            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#00b6a3] p-1.5 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between">
            <button
              onClick={onNavigateHome}
              className="shrink-0 w-[100px] h-auto cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img
                alt="Logo"
                className="w-full h-auto object-contain"
                src={imgLogo}
              />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00b6a3] p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-3 space-y-2 border-t border-gray-200 pt-3 bg-white">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {menuItems.map((item, index) => {
                const isActive = activeMenu === index;
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveMenu(index);
                      setMobileMenuOpen(false);
                      item.onClick();
                    }}
                    className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer rounded-[12px] w-full aspect-square transition-all duration-300 ${
                      isActive
                        ? "bg-[#18b3ab] shadow-lg"
                        : "bg-transparent hover:bg-[#e9fffe]"
                    }`}
                  >
                    <div
                      className={`scale-[0.6] ${isActive ? "brightness-0 invert" : ""}`}
                    >
                      <item.icon />
                    </div>
                    <span
                      className={`font-semibold text-[10px] leading-[14px] text-center transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#00b6a3]"
                      }`}
                      style={{
                        fontVariationSettings: "'wdth' 100",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}