export default function CategorySection() {
  const categories = [
    {
      image: "../assets/image.png",
      name: "Baby Arjuna",
      age: "8 Bulan",
    },
    {
      image: "../assets/Image (4).png",
      name: "Sarah Wijaya",
      age: "7 Tahun",
    },
    {
      image: "../assets/Image (1).png",
      name: "Michael Pratama",
      age: "22 Tahun",
    },
    {
      image: "../assets/Image (2).png",
      name: "Diana Kusuma",
      age: "35 Tahun",
    },
    {
      image: "../assets/Image (3).png",
      name: "Pak Budi Santoso",
      age: "68 Tahun",
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 xl:py-20 pb-12 sm:pb-16 lg:pb-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="not-italic text-[28px] sm:text-[36px] lg:text-[50px] leading-[1.2] sm:leading-[1.1] lg:leading-[30px] text-[#18b3ab] mb-4 sm:mb-6">
            Pasien Kami dari Berbagai Usia
          </h2>
          <div className="not-italic text-[16px] sm:text-[18px] lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-neutral-600 px-4">
            <p className="mb-0">
              Melayani kesehatan keluarga Indonesia dari bayi hingga lansia
            </p>
            <p>dengan penuh kasih dan profesionalisme.</p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-[26px] pb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Container with Overlay Text */}
              <div className="relative w-full max-w-[272px] aspect-square mx-auto transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                {/* Background placeholder with glow effect */}
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
                  {/* Hover Overlay with gradient animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>

                {/* Text Label - Positioned at bottom with lift animation */}
                <div className="absolute bottom-[-20px] sm:bottom-[-25px] left-1/2 -translate-x-1/2 bg-[#d5dd23] rounded-[15px] sm:rounded-[20px] h-[70px] sm:h-[84px] w-[180px] sm:w-[222px] flex flex-col items-center justify-center transition-all duration-500 ease-out group-hover:bg-[#c5cd13] group-hover:shadow-[0_10px_30px_rgba(213,221,35,0.4)] group-hover:-translate-y-2 group-hover:scale-105 z-10 px-2">
                  <p className="not-italic text-[18px] sm:text-[20px] lg:text-[23px] leading-[24px] sm:leading-[28px] lg:leading-[30px] text-[#383838] text-center transition-all duration-300 group-hover:scale-110">
                    {category.name}
                  </p>
                  <p className="not-italic text-[14px] sm:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[26px] lg:leading-[30px] text-[#302e2e] text-center transition-all duration-300 group-hover:text-[#1a1a1a]">
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
