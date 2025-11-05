import { useState, useEffect } from "react";
import CustomCalendar from "./CustomCalendar";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function TopicSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerSlide, setBannerSlide] = useState(0);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Health topics organized by letter
  const topicsByLetter: Record<string, string[]> = {
    A: ["Asma", "Alergi", "Anemia", "Artritis", "Asam Urat", "Autisme"],
    B: ["Batuk", "Bronkitis", "Batu Ginjal", "Batuk Rejan", "Bulimia"],
    C: ["COVID-19", "Cacar Air", "Celiac", "Campak", "Cemas"],
    D: ["Diabetes", "Demam", "Depresi", "Darah Tinggi", "Demam Berdarah", "Dermatitis"],
    E: ["Epilepsi", "Eksim", "Endometriosis", "Emfisema"],
    F: ["Flu", "Fibromyalgia", "Fistula", "Fatty Liver"],
    G: ["GERD", "Gastritis", "Gangren", "Glaukoma", "Gout"],
    H: ["Hipertensi", "Hepatitis", "HIV/AIDS", "Hernia", "Hemofilia", "Hemoroid"],
    I: ["Infeksi Saluran Kemih", "Insomnia", "Impotensi", "Influenza"],
    J: ["Jantung Koroner", "Jerawat", "Jaundice"],
    K: ["Kanker", "Kolesterol", "Katarak", "Keputihan", "Konstipasi", "Kista"],
    L: ["Lupus", "Leukemia", "Limfoma", "Liver"],
    M: ["Migrain", "Maag", "Malaria", "Meningitis", "Myopia"],
    N: ["Nefritis", "Neuralgia", "Neuropati"],
    O: ["Obesitas", "Osteoporosis", "Otitis Media"],
    P: ["Pneumonia", "PCOS", "Psoriasis", "Parkinson", "Paru-paru"],
    Q: [""],
    R: ["Rematik", "Rhinitis", "Radang Tenggorokan"],
    S: ["Stroke", "Sinusitis", "Skoliosis", "Stress", "Sipilis"],
    T: ["TBC", "Tifus", "Tiroid", "Tinnitus", "Tuberculosis"],
    U: ["Ulkus", "Uremia", "Urtikaria"],
    V: ["Varikokel", "Vertigo", "Vitiligo"],
    W: [""],
    X: [""],
    Y: [""],
    Z: ["Zika Virus"],
    "#": ["123 Konsultasi Dokter", "24/7 Emergency", "911 Ambulance"],
  };

  const bannerSlides = [
    "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2MjMzMTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1740410643780-883b33ee1b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwxfHx8fDE3NjIzMzUzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjMzNDkzNHww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2MjMzMTM5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Konsultasi Dokter Spesialis Online",
    },
    {
      image: "https://images.unsplash.com/photo-1740410643780-883b33ee1b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwcGF0aWVudHxlbnwxfHx8fDE3NjIzMzUzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Pemeriksaan Kesehatan Rutin",
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjMzNDkzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Layanan Home Care 24/7",
    },
    {
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjIzMDQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Fasilitas Medis Modern",
    },
    {
      image: "https://images.unsplash.com/photo-1758691462493-120a069304e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwd2VsbG5lc3MlMjBmaXRuZXNzfGVufDF8fHx8MTc2MjMzNTc4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Program Wellness & Fitness",
    },
  ];

  // Auto-play banner slider
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  // Auto-play card slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleLetterClick = (letter: string) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null); // Collapse if already selected
    } else {
      setSelectedLetter(letter); // Expand new letter
    }
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-[#f0f4f5]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[967px_auto] gap-6 lg:gap-12 xl:gap-[49px]">
          {/* Left Column - Topik A-Z */}
          <div className="relative bg-white rounded-[15px] sm:rounded-[20px] border border-[#cccccc] w-full lg:w-[967px] h-auto px-4 sm:px-6 lg:px-[82px] py-6 sm:py-8 lg:py-12">
            <h2 className="font-['Poppins:Medium',sans-serif] not-italic text-[24px] sm:text-[32px] lg:text-[50px] leading-[1.2] sm:leading-[1.1] lg:leading-[30px] text-[#18b3ab] mb-3 sm:mb-5 lg:mb-20">
              Topik A-Z
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] not-italic text-[13px] sm:text-[15px] lg:text-[20px] leading-[20px] sm:leading-[24px] lg:leading-[30px] text-neutral-600 mb-5 sm:mb-6 lg:mb-16 max-w-full lg:max-w-[691px]">
              Temukan informasi kesehatan yang Anda butuhkan dengan mudah. Pilih huruf untuk melihat
              daftar topik kesehatan, penyakit, dan kondisi medis yang tersedia.
            </p>

            {/* Grid alfabet */}
            <div className="grid grid-cols-7 gap-[12px] sm:gap-[18px] lg:gap-[25px] mb-5 sm:mb-6 lg:mb-8 max-w-full lg:max-w-[610px]">
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  className={`w-full aspect-square max-w-[42px] sm:max-w-[52px] lg:max-w-[65px] lg:w-[65px] lg:h-[65px] rounded-[7px] sm:rounded-[8px] lg:rounded-[9px] flex items-center justify-center font-['Poppins:Regular',sans-serif] text-[18px] sm:text-[22px] lg:text-[28px] leading-[1] transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                    selectedLetter === letter
                      ? "bg-[#18b3ab] text-white font-['Poppins:Bold',sans-serif] shadow-md"
                      : "bg-white text-black border border-transparent hover:border-[#18b3ab]"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Bagian topik yang bisa diperluas */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out mb-5 sm:mb-6 lg:mb-8 max-w-full lg:max-w-[806px] ${
                selectedLetter ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {selectedLetter && (
                <div className="bg-gradient-to-br from-[#f8fffe] to-[#f0f9f8] border-2 border-[#18b3ab] rounded-[12px] sm:rounded-[15px] p-4 sm:p-5 lg:p-6 animate-[slideDown_0.5s_ease-out]">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="font-['Poppins:SemiBold',sans-serif] text-[18px] sm:text-[20px] lg:text-[24px] text-[#18b3ab] flex items-center gap-2">
                      <span className="bg-[#18b3ab] text-white w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px] rounded-full flex items-center justify-center text-[16px] sm:text-[18px] lg:text-[20px]">
                        {selectedLetter}
                      </span>
                      Topik Kesehatan
                    </h3>
                    <button
                      onClick={() => setSelectedLetter(null)}
                      className="text-gray-400 hover:text-[#18b3ab] transition-colors duration-300"
                    >
                      <ChevronDown className="w-5 h-5 rotate-180" />
                    </button>
                  </div>

                  {topicsByLetter[selectedLetter]?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {topicsByLetter[selectedLetter].map((topic, index) => (
                        <button
                          key={index}
                          className="group text-left bg-white hover:bg-[#18b3ab] border border-gray-200 hover:border-[#18b3ab] rounded-[8px] sm:rounded-[10px] px-3 sm:px-4 py-2 sm:py-3 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                        >
                          <div className="flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-[#18b3ab] group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                            <span className="font-['Poppins:Regular',sans-serif] text-[13px] sm:text-[14px] lg:text-[16px] text-gray-700 group-hover:text-white transition-colors duration-300">
                              {topic}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 font-['Poppins:Regular',sans-serif] text-[14px] sm:text-[15px] lg:text-[16px] py-4">
                      Belum ada topik untuk huruf {selectedLetter}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="h-px bg-[#d9d9d9] mb-5 sm:mb-6 lg:mb-12 max-w-full lg:max-w-[806px]"></div>

            {/* Slider banner otomatis */}
            <div className="relative h-[90px] sm:h-[110px] lg:h-[145px] rounded-[12px] sm:rounded-[15px] overflow-hidden bg-[#18b3ab] cursor-pointer max-w-full lg:max-w-[786px]">
              <div className="relative h-full overflow-hidden">
                <div
                  className="flex h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${bannerSlide * 100}%)` }}
                >
                  {bannerSlides.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full relative group">
                      <img
                        src={image}
                        alt={`Healthcare Banner ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Calendar & Slider */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-0 w-full lg:w-[452px]">
            {/* Calendar Section with Title OUTSIDE */}
            <div className="relative">
              {/* Title outside card */}
              <h3 className="font-['Poppins:Medium',sans-serif] not-italic text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.3] text-[#18b3ab] mb-3 sm:mb-4 lg:mb-5">
                Jadwal Konsultasi
              </h3>
              
              {/* Calendar Card */}
              <div className="w-full lg:w-auto">
                <CustomCalendar />
              </div>
            </div>

            {/* Slider Section with Title OUTSIDE */}
            <div className="relative mt-4 sm:mt-6 lg:mt-16">
              {/* Title outside card */}
              <h3 className="font-['Poppins:Medium',sans-serif] not-italic text-[15px] sm:text-[17px] lg:text-[20px] leading-[1.3] text-[#18b3ab] mb-3 sm:mb-4 lg:mb-5">
                Layanan Unggulan
              </h3>

              {/* Slider Card - Border and rounded on container */}
              <div className="bg-white rounded-[12px] sm:rounded-[15px] border border-[#d2d2d2] overflow-hidden w-full lg:w-[452px] lg:h-[338px]">
                <div className="relative group h-full">
                  <div className="overflow-hidden h-full">
                    <div
                      className="flex transition-transform duration-700 ease-in-out h-full"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 h-full">
                          {/* Card with exact shadow from   */}
                          <div className="bg-white rounded-[3.75px] shadow-[1px_3px_6px_0px_rgba(0,0,0,0.2)] overflow-hidden cursor-pointer hover:shadow-[2px_4px_8px_0px_rgba(0,0,0,0.25)] transition-shadow duration-300 h-full flex flex-col">
                            {/* Image - menyatu dengan card, no padding */}
                            <div className="relative h-[140px] sm:h-[180px] lg:h-[220px] overflow-hidden flex-shrink-0">
                              <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                            {/* Text area - bg white, exact height from   */}
                            <div className="p-3 sm:p-4 lg:p-6 bg-white flex items-center justify-center flex-1 min-h-[60px] sm:min-h-[75px] lg:min-h-[98px]">
                              <h4 className="font-['Inter:Medium',sans-serif] font-medium not-italic text-[12px] sm:text-[13px] lg:text-[16px] leading-[16px] sm:leading-[17px] lg:leading-[18px] text-[#18b3ab] text-center hover:text-[#16a199] transition-colors duration-300">
                                {slide.title}
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Arrows - Hidden on mobile, show on hover */}
                  <button
                    onClick={prevSlide}
                    className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 items-center justify-center z-10"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 items-center justify-center z-10"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Dots Indicator - Exact from   */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`rounded-[4px] transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-[#18b3ab] w-[8px] h-[8px]"
                            : "bg-black opacity-20 hover:opacity-40 w-[8px] h-[8px]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
