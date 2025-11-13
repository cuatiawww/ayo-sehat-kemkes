import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function CategorySection() {
  const categories = [
    {
      image: "../assets/image.png",
      name: "Bayi dan Balita",
      age: "< 5 Tahun",
    },
    {
      image: "../assets/Image (4).png",
      name: "Anak-Anak",
      age: "5-9 Tahun",
    },
    {
      image: "../assets/Image (1).png",
      name: "Remaja",
      age: "10-18 Tahun",
    },
    {
      image: "../assets/Image (2).png",
      name: "Dewasa",
      age: "18-59 Tahun",
    },
    {
      image: "../assets/Image (3).png",
      name: "Lansia",
      age: "60+ Tahun",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    const newScroll = direction === "left"
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount;

    scrollRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 xl:py-20 pb-12 sm:pb-16 lg:pb-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="not-italic text-[28px] sm:text-[36px] lg:text-[50px] leading-[1.2] sm:leading-[1.1] lg:leading-[30px] text-[#18b3ab] mb-4 sm:mb-6">
            Menu Siklus Hidup
          </h2>
          <div className="not-italic text-[16px] sm:text-[18px] lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-neutral-600 px-4">
            <p className="mb-0">
              Pendekatan menjaga kesehatan sejak lahir hingga lansia,
            </p>
            <p>
              dengan perhatian khusus sesuai kebutuhan di setiap tahap usia.
            </p>
          </div>
        </div>

        {/* Mobile: Horizontal Scroll + Nav Buttons */}
        <div className="lg:hidden relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all"
            aria-label="Scroll kiri"
          >
            <ChevronLeft size={24} className="text-[#18b3ab]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-all"
            aria-label="Scroll kanan"
          >
            <ChevronRight size={24} className="text-[#18b3ab]" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-10"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-none w-[240px] snap-center group cursor-pointer flex flex-col items-center"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square mx-auto transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                  <div className="absolute inset-0 bg-[#18b3ab] rounded-[25px] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(24,179,171,0.6)]" />

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-[25px] border-2 border-[#d5dd23] animate-pulse"></div>
                  </div>

                  {/* Image */}
                  <div className="absolute inset-0 rounded-[25px] overflow-hidden transition-all duration-500 group-hover:rotate-1">
                    <img
                      src={category.image}
                      alt={`Ilustrasi kategori kesehatan: ${category.name} usia ${category.age}`}
                      title={`${category.name} - Usia ${category.age}`}
                      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none rounded-[25px] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  </div>

                  {/* Text Label */}
                  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-[#d5dd23] rounded-[18px] h-[70px] w-[180px] flex flex-col items-center justify-center transition-all duration-500 ease-out group-hover:bg-[#c5cd13] group-hover:shadow-[0_10px_30px_rgba(213,221,35,0.4)] group-hover:-translate-y-2 group-hover:scale-105 z-10 px-2">
                    <p className="not-italic font-semibold text-[18px] leading-[24px] text-[#383838] text-center transition-all duration-300 group-hover:scale-110">
                      {category.name}
                    </p>
                    <p className="not-italic font-thin text-[10px] leading-[19px] text-[#302e2e] text-center transition-all duration-300 group-hover:text-[#1a1a1a]">
                      {category.age}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid grid-cols-5 gap-6 pb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative w-full max-w-[272px] aspect-square mx-auto transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                <div className="absolute inset-0 bg-[#18b3ab] rounded-[25px] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(24,179,171,0.6)]" />

                <div className="absolute inset-0 rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-[25px] border-2 border-[#d5dd23] animate-pulse"></div>
                </div>

                <div className="absolute inset-0 rounded-[25px] overflow-hidden transition-all duration-500 group-hover:rotate-1">
                  <img
                    src={category.image}
                    alt={`Ilustrasi kategori kesehatan: ${category.name} usia ${category.age}`}
                    title={`${category.name} - Usia ${category.age}`}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none rounded-[25px] transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>

                <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-[#d5dd23] rounded-[18px] h-[84px] w-[222px] flex flex-col items-center justify-center transition-all duration-500 ease-out group-hover:bg-[#c5cd13] group-hover:shadow-[0_10px_30px_rgba(213,221,35,0.4)] group-hover:-translate-y-2 group-hover:scale-105 z-10 px-2">
                  <p className="not-italic font-semibold text-[23px] leading-[30px] text-[#383838] text-center transition-all duration-300 group-hover:scale-110">
                    {category.name}
                  </p>
                  <p className="not-italic font-thin text-[14px] leading-[30px] text-[#302e2e] text-center transition-all duration-300 group-hover:text-[#1a1a1a]">
                    {category.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}