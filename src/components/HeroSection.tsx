import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import TopBar from "./TopBar";

const imgLogo = "../assets/logo.png";
const imgHeroBackground = "../assets/hero.png";
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

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const menuItems = [
    { label: "TENTANG", icon: InfoCircleIcon },
    { label: "TOPIK", icon: CategoryIcon },
    { label: "SIKLUS HIDUP", icon: UserIcon },
    { label: "PERILAKU HIDUP SEHAT", icon: HeartIcon },
    { label: "KEGIATAN", icon: CalendarIcon },
    { label: "DOWNLOAD", icon: DownloadIcon },
    { label: "KAMPANYE", icon: ActivityIcon },
    { label: "KEMITRAAN", icon: DocumentIcon },
  ];

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
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Top Bar - Social Media & Login */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <TopBar />
      </motion.div>

      {/* Navigasi utama */}
      <motion.nav
        className={`bg-white border-b border-[#bcbcbc] transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 shadow-lg"
            : "relative"
        }`}
        animate={{
          y: isSticky ? 0 : 0,
          boxShadow: isSticky
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
          <div className="relative py-2 lg:py-3">
            {/* Desktop Layout */}
            <div className="hidden lg:flex gap-4 xl:gap-6 items-center justify-between">
              {/* Logo */}
              <motion.div
                className="shrink-0 w-[150px] xl:w-[180px] h-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                <img
                  alt="Logo"
                  className="w-full h-auto object-contain"
                  src={imgLogo}
                />
              </motion.div>

              {/* Daftar menu navigasi */}
              <div className="flex gap-2 xl:gap-3 2xl:gap-4 items-center justify-end flex-1">
                {menuItems.map((item, index) => {
                  const isActive = activeMenu === index;
                  return (
                    <motion.div
                      key={index}
                      onClick={() => setActiveMenu(index)}
                      className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer shrink-0 rounded-[12px] w-[70px] h-[70px] xl:w-[80px] xl:h-[80px] transition-all duration-300 ${
                        isActive
                          ? "bg-[#18b3ab] shadow-lg"
                          : "bg-transparent hover:bg-[#e9fffe] hover:shadow-md"
                      }`}
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.08,
                        ease: "easeOut",
                      }}
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

                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Tablet Layout*/}
            <div className="hidden md:flex lg:hidden items-center justify-between gap-3">
              <div className="shrink-0 w-[130px] h-auto">
                <img
                  alt="Logo"
                  className="w-full h-auto object-contain"
                  src={imgLogo}
                />
              </div>

              {/* overvload */}
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
              <div className="shrink-0 w-[100px] h-auto">
                <img
                  alt="Logo"
                  className="w-full h-auto object-contain"
                  src={imgLogo}
                />
              </div>
              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="text-[#00b6a3] p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
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
                          isActive
                            ? "text-white"
                            : "text-[#00b6a3]"
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
      </motion.nav>

      {isSticky && <div className="h-[72px] lg:h-[88px]" />}

      {/* Konten bagian utama */}
      <div className="relative bg-[#18b3ab] h-[500px] sm:h-[650px] lg:h-[858px] overflow-hidden">
        {/* Gambar latar belakang */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[108.92%] left-[-1.09%] max-w-none top-[0.24%] w-[113.69%] object-cover"
              src={imgHeroBackground}
            />
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="relative h-full">
          {/* Main Heading */}
          <motion.div
            className="absolute left-[5%] sm:left-[8%] lg:left-[127px] top-[15%] sm:top-[20%] lg:top-[231px] lg:translate-y-[-50%]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: "easeOut",
            }}
          >
            <h1 className="not-italic text-[36px] sm:text-[60px] lg:text-[100px] leading-[1.1] sm:leading-[1.1] lg:leading-[30px] text-white whitespace-nowrap">
              Ayo Sehat
            </h1>
          </motion.div>

          {/* Subheading  */}
          <motion.div
            className="absolute left-[5%] sm:left-[8%] lg:left-[127px] top-[28%] sm:top-[33%] lg:top-[324px] lg:translate-y-[-50%] w-[90%] sm:w-[450px] lg:w-[510px]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.0,
              ease: "easeOut",
            }}
          >
            <h2 className="not-italic text-[22px] sm:text-[36px] lg:text-[50px] leading-[1.2] sm:leading-[1.2] lg:leading-[60px] text-white">
             Kementerian Kesehatan
Republik Indonesia
            </h2>
          </motion.div>

          {/* Description  */}
          <motion.div
            className="absolute left-[5%] sm:left-[8%] lg:left-[131px] top-[45%] sm:top-[50%] lg:top-[429px] lg:translate-y-[-50%] w-[90%] sm:w-[550px] lg:w-[640px]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.2,
              ease: "easeOut",
            }}
          >
            <p className="not-italic text-[13px] sm:text-[16px] lg:text-[20px] leading-[1.4] sm:leading-[1.5] lg:leading-[30px] text-white">
             Ayo Sehat Kemenkes RI merupakan platform/saluran sumber informasi,
edukasi kesehatan, serta gaya hidup sehat resmi dari Kementerian
Kesehatan sehingga dapat dipertanggungjawabkan dan informasi yang diberikan sejalan dengan program pemerintah.
            </p>
          </motion.div>

          {/* Button  */}
          <motion.div
            className="absolute left-[5%] sm:left-[8%] lg:left-[131px] top-[72%] sm:top-[72%] lg:top-[620px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.4,
              type: "spring",
              stiffness: 200,
            }}
          >
            <button className="bg-[#d5dd23] hover:bg-[#c5cd13] transition-all duration-300 hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.25)] rounded-[100px] w-[220px] sm:w-[270px] lg:w-[300px] h-[55px] sm:h-[70px] lg:h-[80px] border-[0.5px] border-[#fcffbe] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.15)] flex items-center justify-center">
              <span
                className="font-medium text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.2] text-[#383838]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Mulai Konsultasi
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}