import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <div className="relative size-[46px] rounded-full flex items-center justify-center">
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
    <div className="relative size-[36px] rounded flex items-center justify-center">
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
    <div className="relative size-[48px] rounded-full flex items-center justify-center">
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
    <div className="relative size-[43px] rounded flex items-center justify-center">
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
    <div className="relative size-[41px] rounded flex items-center justify-center">
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

  const menuItems = [
    { label: "MENU 1", icon: InfoCircleIcon },
    { label: "MENU 2", icon: CategoryIcon },
    { label: "MENU 3", icon: UserIcon },
    { label: "MENU 4", icon: HeartIcon },
    { label: "MENU 5", icon: CalendarIcon },
    { label: "MENU 6", icon: DownloadIcon },
    { label: "MENU 7", icon: ActivityIcon },
    { label: "MENU 8", icon: DocumentIcon },
  ];

  return (
    <div className="relative">
      {/* Top Bar - Social Media & Login */}
      <TopBar />

      {/* Navigation -   */}
      <nav className="bg-white border-b border-[#bcbcbc]">
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
          <div className="relative py-2 lg:py-3">
            {/* Desktop Layout */}
            <div className="hidden lg:flex gap-4 xl:gap-6 items-center justify-between">
              {/* Logo */}
              <div className="shrink-0 w-[150px] xl:w-[180px] h-auto">
                <img
                  alt="Logo"
                  className="w-full h-auto object-contain"
                  src={imgLogo}
                />
              </div>

              {/* Menu Items - no overflow scroll */}
              <div className="flex gap-2 xl:gap-3 2xl:gap-4 items-center justify-end flex-1">
                {menuItems.map((item, index) => {
                  const isActive = activeMenu === index;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveMenu(index)}
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
                        className={`font-['Roboto:SemiBold',sans-serif] font-semibold text-[10px] xl:text-[11px] 2xl:text-[12px] leading-[14px] transition-colors duration-300 whitespace-nowrap ${
                          isActive
                            ? "text-white"
                            : "text-[#00b6a3]"
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

            {/* Tablet Layout */}
            <div className="hidden md:flex lg:hidden items-center justify-between gap-3">
              <div className="shrink-0 w-[130px] h-auto">
                <img
                  alt="Logo"
                  className="w-full h-auto object-contain"
                  src={imgLogo}
                />
              </div>
              <div className="flex gap-1.5 items-center">
                {menuItems.slice(0, 4).map((item, index) => {
                  const isActive = activeMenu === index;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveMenu(index)}
                      className={`flex flex-col items-center justify-center gap-0.5 cursor-pointer shrink-0 rounded-[12px] w-[65px] h-[65px] transition-all duration-300 ${
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
                      <div
                        className={`font-['Roboto:SemiBold',sans-serif] font-semibold text-[9px] leading-[12px] whitespace-nowrap transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-[#00b6a3]"
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
              <button
                onClick={() =>
                  setMobileMenuOpen(!mobileMenuOpen)
                }
                className="text-[#00b6a3] p-1.5 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
              >
                <Menu size={24} />
              </button>
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
                        className={`font-['Roboto:SemiBold',sans-serif] font-semibold text-[10px] leading-[14px] text-center transition-colors duration-300 ${
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
      </nav>

      {/* Hero Content -   Frame247 */}
      <div className="relative bg-[#18b3ab] h-[500px] sm:h-[650px] lg:h-[858px] overflow-hidden">
        {/* Background Image -   */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[108.92%] left-[-1.09%] max-w-none top-[0.24%] w-[113.69%] object-cover"
              src={imgHeroBackground}
            />
          </div>
        </div>

        {/* Content Container - exact positioning from   */}
        <div className="relative h-full">
          {/* Main Heading -  : top-231px with translate-y-[-50%] */}
          <div className="absolute left-[5%] sm:left-[8%] lg:left-[127px] top-[15%] sm:top-[20%] lg:top-[231px] lg:translate-y-[-50%]">
            <h1 className="font-['Poppins:Bold',sans-serif] not-italic text-[36px] sm:text-[60px] lg:text-[100px] leading-[1.1] sm:leading-[1.1] lg:leading-[30px] text-white whitespace-nowrap">
              Lorem Ipsum
            </h1>
          </div>

          {/* Subheading -  : top-354px with translate-y-[-50%], w-510px */}
          <div className="absolute left-[5%] sm:left-[8%] lg:left-[127px] top-[28%] sm:top-[33%] lg:top-[354px] lg:translate-y-[-50%] w-[90%] sm:w-[450px] lg:w-[510px]">
            <h2 className="font-['Poppins:Medium',sans-serif] not-italic text-[22px] sm:text-[36px] lg:text-[50px] leading-[1.2] sm:leading-[1.2] lg:leading-[60px] text-white">
              Lorem Ipsum Dolor Sit Amet
            </h2>
          </div>

          {/* Description -  : top-489px with translate-y-[-50%], w-640px */}
          <div className="absolute left-[5%] sm:left-[8%] lg:left-[131px] top-[45%] sm:top-[50%] lg:top-[489px] lg:translate-y-[-50%] w-[90%] sm:w-[550px] lg:w-[640px]">
            <p className="font-['Poppins:Regular',sans-serif] not-italic text-[13px] sm:text-[16px] lg:text-[20px] leading-[1.4] sm:leading-[1.5] lg:leading-[30px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Button -  : left-131px, top-583px, w-300px, h-80px */}
          <div className="absolute left-[5%] sm:left-[8%] lg:left-[131px] top-[72%] sm:top-[72%] lg:top-[583px]">
            <button className="bg-[#d5dd23] hover:bg-[#c5cd13] transition-all duration-300 hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.25)] rounded-[100px] w-[220px] sm:w-[270px] lg:w-[300px] h-[55px] sm:h-[70px] lg:h-[80px] border-[0.5px] border-[#fcffbe] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.15)] flex items-center justify-center">
              <span
                className="font-['Roboto:Medium',sans-serif] font-medium text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.2] text-[#383838]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Lorem Ipsum
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}