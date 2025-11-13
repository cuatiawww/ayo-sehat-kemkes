import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Article {
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  alt: string;
  imgTitle: string;
}

interface ArticleSectionProps {
  onNavigateArtikel: () => void;
  onNavigateHome?: () => void;
}

export default function ArticleSection({ onNavigateArtikel }: ArticleSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const articles: Article[] = [
    {
      image:
        "https://images.unsplash.com/photo-1631507623121-eaaba8d4e7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc2ljayUyMHBlcnNvbnxlbnwxfHx8fDE3NjIzMzU5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Kesehatan Umum",
      title: "Tips Menjaga Kesehatan di Musim Hujan: Hindari Penyakit Flu dan Demam",
      date: "5 Nov 2024",
      readTime: "5 Menit",
      alt: "Pasien sakit di rumah sakit saat musim hujan",
      imgTitle: "Tips Kesehatan Musim Hujan",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584362917165-526a968579e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzfGVufDF8fHx8MTc2MjMzNjAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Nutrisi",
      title: "Panduan Lengkap Vitamin dan Suplemen untuk Meningkatkan Imunitas Tubuh",
      date: "3 Nov 2024",
      readTime: "4 Menit",
      alt: "Berbagai jenis pil dan kapsul vitamin untuk imunitas",
      imgTitle: "Panduan Vitamin dan Suplemen",
    },
    {
      image:
        "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNjaW5lJTIwaW5qZWN0aW9ufGVufDF8fHx8MTc2MjMzNjA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Vaksinasi",
      title: "Pentingnya Vaksinasi untuk Anak: Jadwal dan Jenis Vaksin yang Wajib",
      date: "1 Nov 2024",
      readTime: "6 Menit",
      alt: "Dokter memberikan suntikan vaksin kepada anak",
      imgTitle: "Jadwal Vaksinasi Anak",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjIzMzYxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Konsultasi Dokter",
      title: "Kapan Harus ke Dokter? Kenali Gejala yang Memerlukan Perhatian Medis",
      date: "30 Okt 2024",
      readTime: "4 Menit",
      alt: "Dokter sedang memeriksa pasien di rumah sakit",
      imgTitle: "Konsultasi dengan Dokter",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVzdHxlbnwxfHx8fDE3NjIzMzYxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Pemeriksaan Kesehatan",
      title: "Medical Check Up Rutin: Mengapa Penting dan Apa Saja yang Diperiksa?",
      date: "28 Okt 2024",
      readTime: "7 Menit",
      alt: "Pasien sedang menjalani medical check up di laboratorium",
      imgTitle: "Medical Check Up Rutin",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const visibleArticles = [
    articles[currentIndex],
    articles[(currentIndex + 1) % articles.length],
    articles[(currentIndex + 2) % articles.length],
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 sm:mb-6 lg:mb-8 gap-3 sm:gap-4">
          <h2 className="font-medium text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[40px] leading-[1.3] sm:leading-[1.2] text-[#18b3ab]">
            Artikel Terbaru
          </h2>
          <button
            onClick={onNavigateArtikel}
            className="border border-[#18b3ab] rounded-[8px] sm:rounded-[9px] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 hover:bg-[#18b3ab] hover:text-white transition-all duration-300 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.15)] group active:scale-95"
            aria-label="Lihat semua artikel"
          >
            <span className="font-normal text-[14px] sm:text-[15px] lg:text-[18px] leading-[1.4] sm:leading-[26px] lg:leading-[30px] text-neutral-600 group-hover:text-white transition-colors duration-300">
              Lihat Artikel Lainnya
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#d9d9d9] mb-6 sm:mb-8 lg:mb-10 xl:mb-12"></div>

        {/* Kontainer */}
        <div className="relative">
          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
              {visibleArticles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          </div>

          {/* Tablet */}
          <div className="hidden md:block lg:hidden relative">
            <div className="grid grid-cols-2 gap-6">
              {visibleArticles.slice(0, 2).map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>

            {/* Tablet Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-[36px] h-[36px] bg-white rounded-full shadow-lg hover:bg-[#18b3ab] hover:text-white transition-all duration-300 z-10 active:scale-95"
              aria-label="Artikel sebelumnya"
            >
              <ChevronDown className="w-5 h-5 rotate-90" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 flex items-center justify-center w-[36px] h-[36px] bg-white rounded-full shadow-lg hover:bg-[#18b3ab] hover:text-white transition-all duration-300 z-10 active:scale-95"
              aria-label="Artikel berikutnya"
            >
              <ChevronDown className="w-5 h-5 -rotate-90" />
            </button>

            {/* Tablet Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 h-2 bg-[#18b3ab] shadow-sm"
                      : "w-2 h-2 bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Ke artikel ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {articles.map((article, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <ArticleCard article={article} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-[#18b3ab] rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-40"
              aria-label="Artikel sebelumnya"
              disabled={currentIndex === 0}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-[#18b3ab] rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-40"
              aria-label="Artikel berikutnya"
              disabled={currentIndex === articles.length - 1}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-10 h-2 bg-[#18b3ab] shadow-md"
                      : "w-2 h-2 bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Ke artikel ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Arrows */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute -left-8 xl:-left-12 top-1/2 -translate-y-1/2 items-center justify-center w-[40px] h-[40px] xl:w-[44px] xl:h-[44px] bg-white rounded-full shadow-lg hover:bg-[#18b3ab] hover:text-white hover:scale-110 transition-all duration-300 z-10 active:scale-95"
            aria-label="Artikel sebelumnya"
          >
            <ChevronDown className="w-5 h-5 xl:w-6 xl:h-6 rotate-90" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute -right-8 xl:-right-12 top-1/2 -translate-y-1/2 items-center justify-center w-[40px] h-[40px] xl:w-[44px] xl:h-[44px] bg-white rounded-full shadow-lg hover:bg-[#18b3ab] hover:text-white hover:scale-110 transition-all duration-300 z-10 active:scale-95"
            aria-label="Artikel berikutnya"
          >
            <ChevronDown className="w-5 h-5 xl:w-6 xl:h-6 -rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Article Card
function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="group cursor-pointer w-full">
      <div className="relative w-full">
        {/* Image */}
        <div className="relative bg-[#18b3ab] h-[180px] sm:h-[210px] lg:h-[248px] overflow-hidden rounded-[12px] sm:rounded-[15px] mb-0">
          <img
            src={article.image}
            alt={article.alt}
            title={article.imgTitle}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>

        {/* Content */}
        <div className="relative h-auto sm:h-[110px] lg:h-[122px] pt-3 sm:pt-4 lg:pt-5">
          <div className="border-b border-[#cccccc] pb-3 sm:pb-4 lg:pb-5">
            <div className="mb-2 sm:mb-3">
              <span className="font-normal not-italic text-[10px] sm:text-[11px] lg:text-[12px] leading-[14px] sm:leading-[16px] lg:leading-[18px] text-[#18b3ab] group-hover:text-[#16a199] transition-colors duration-300">
                {article.category}
              </span>
            </div>

            <h3 className="font-medium not-italic text-[14px] sm:text-[15px] lg:text-[17px] leading-[17px] sm:leading-[18px] lg:leading-[20.4px] text-[#212121] mb-3 sm:mb-4 lg:mb-6 group-hover:text-[#18b3ab] transition-colors duration-300 line-clamp-2">
              {article.title}
            </h3>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] leading-[16px] sm:leading-[18px] lg:leading-[19.5px] text-dimgray">
                {article.date}
              </span>
              <div className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] rounded-full bg-dimgray"></div>
              <span className="font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] leading-[16px] sm:leading-[18px] lg:leading-[19.5px] text-dimgray">
                Waktu Baca {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}