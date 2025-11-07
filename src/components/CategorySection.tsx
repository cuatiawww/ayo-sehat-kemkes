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
            <p> dengan perhatian khusus
sesuai kebutuhan di setiap tahap usia.</p>
          </div>
        </div>

  {/* Categories Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 [@media(min-width:1080px)]:grid-cols-5 gap-6 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-[26px] pb-8">

          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[240px] lg:max-w-[220px] xl:max-w-[272px] aspect-square mx-auto transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                <div className="absolute inset-0 bg-[#18b3ab] rounded-[20px] sm:rounded-[25px] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(24,179,171,0.6)]" />

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-[20px] sm:rounded-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-[20px] sm:rounded-[25px] border-2 border-[#d5dd23] animate-pulse"></div>
                </div>

                {/* Image */}
                <div className="absolute inset-0 rounded-[20px] sm:rounded-[25px] overflow-hidden transition-all duration-500 group-hover:rotate-1">
                  <img
                    alt={`${category.name}, ${category.age}`}
                    className="absolute inset-0 max-w-none object-cover object-center pointer-events-none rounded-[20px] sm:rounded-[25px] size-full transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    src={category.image}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>

                {/* Text Label  */} 
                <div className="absolute bottom-[-16px] sm:bottom-[-20px] lg:bottom-[-14px] left-1/2 -translate-x-1/2 bg-[#d5dd23] rounded-[14px] sm:rounded-[18px] h-[62px] sm:h-[70px] lg:h-[72px] xl:h-[84px] w-[160px] sm:w-[180px] md:w-[200px] lg:w-[180px] xl:w-[222px] flex flex-col items-center justify-center transition-all duration-500 ease-out group-hover:bg-[#c5cd13] group-hover:shadow-[0_10px_30px_rgba(213,221,35,0.4)] group-hover:-translate-y-2 group-hover:scale-105 z-10 px-2">
                  <p className="not-italic font-semibold text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[23px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] text-[#383838] text-center transition-all duration-300 group-hover:scale-110">
                    {category.name}
                  </p>
                  <p className="not-italic font-thin text-[10px] sm:text-[10px] md:text-[12px] lg:text-[12px] xl:text-[14px] leading-[16px] sm:leading-[19px] md:leading-[18px] lg:leading-[18px] xl:leading-[30px] text-[#302e2e] text-center transition-all duration-300 group-hover:text-[#1a1a1a]">
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
