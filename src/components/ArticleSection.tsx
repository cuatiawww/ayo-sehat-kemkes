import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ArticleSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const articles = [
    {
      image: "https://images.unsplash.com/photo-1631507623121-eaaba8d4e7dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc2ljayUyMHBlcnNvbnxlbnwxfHx8fDE3NjIzMzU5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Lorem Ipsum",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      date: "11 Jul 2025",
      readTime: "3 Menit",
    },
    {
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2luZSUyMHBpbGxzfGVufDF8fHx8MTc2MjMzNjAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Lorem Ipsum",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      date: "11 Jul 2025",
      readTime: "3 Menit",
    },
    {
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNjaW5lJTIwaW5qZWN0aW9ufGVufDF8fHx8MTc2MjMzNjA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Lorem Ipsum",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      date: "11 Jul 2025",
      readTime: "3 Menit",
    },
    {
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjIzMzYxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Lorem Ipsum",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      date: "11 Jul 2025",
      readTime: "3 Menit",
    },
    {
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVzdHxlbnwxfHx8fDE3NjIzMzYxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Lorem Ipsum",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      date: "11 Jul 2025",
      readTime: "3 Menit",
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
          <h2 className="font-['Roboto:Medium',sans-serif] font-medium text-[24px] sm:text-[28px] lg:text-[36px] xl:text-[40px] leading-[1.3] sm:leading-[1.2] text-[#18b3ab]">
            Artikel Terbaru
          </h2>
          <button className="border border-[#18b3ab] rounded-[8px] sm:rounded-[9px] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 hover:bg-[#18b3ab] hover:text-white transition-all duration-300 shadow-[0px_5px_10px_0px_rgba(0,0,0,0.15)] group">
            <span className="font-['Roboto:Regular',sans-serif] font-normal text-[14px] sm:text-[15px] lg:text-[18px] leading-[1.4] sm:leading-[26px] lg:leading-[30px] text-neutral-600 group-hover:text-white transition-colors duration-300">
              Lihat Artikel Lainnya
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#d9d9d9] mb-6 sm:mb-8 lg:mb-10 xl:mb-12"></div>

        {/* Articles Container with Navigation */}
        <div className="relative">
          {/* Desktop Slider - 3 columns */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
              {visibleArticles.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          </div>

          {/* Tablet - 2 columns static */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
            {articles.slice(0, 2).map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          {/* Mobile - 1 column slider */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {articles.map((article, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <ArticleCard article={article} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile dots */}
            <div className="flex justify-center gap-2 mt-6">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-[4px] transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-[#18b3ab] w-[8px] h-[8px]"
                      : "bg-black opacity-20 hover:opacity-40 w-[8px] h-[8px]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Desktop only */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute -left-8 xl:-left-12 top-1/2 -translate-y-1/2 items-center justify-center w-[36px] h-[36px] hover:scale-110 transition-transform duration-300 z-10 bg-white rounded-full shadow-md"
            aria-label="Previous articles"
          >
            <ChevronDown className="w-5 h-5 rotate-90" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute -right-8 xl:-right-12 top-1/2 -translate-y-1/2 items-center justify-center w-[36px] h-[36px] hover:scale-110 transition-transform duration-300 z-10 bg-white rounded-full shadow-md"
            aria-label="Next articles"
          >
            <ChevronDown className="w-5 h-5 -rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ArticleCard({ article }: { article: any }) {
  return (
    <div className="group cursor-pointer w-full">
      {/* Container - 456px */}
      <div className="relative w-full">
        {/* Image Section - */}
        <div className="relative bg-[#18b3ab] h-[180px] sm:h-[210px] lg:h-[248px] overflow-hidden rounded-[12px] sm:rounded-[15px] mb-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content Section -   HorizontalBorder */}
        <div className="relative h-auto sm:h-[110px] lg:h-[122px] pt-3 sm:pt-4 lg:pt-5">
          <div className="border-b border-[#cccccc] pb-3 sm:pb-4 lg:pb-5">
            {/* Category */}
            <div className="mb-2 sm:mb-3">
              <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[10px] sm:text-[11px] lg:text-[12px] leading-[14px] sm:leading-[16px] lg:leading-[18px] text-[#18b3ab] group-hover:text-[#16a199] transition-colors duration-300">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-['Inter:Medium',sans-serif] font-medium not-italic text-[14px] sm:text-[15px] lg:text-[17px] leading-[17px] sm:leading-[18px] lg:leading-[20.4px] text-[#212121] mb-3 sm:mb-4 lg:mb-6 group-hover:text-[#18b3ab] transition-colors duration-300 line-clamp-2">
              {article.title}
            </h3>

            {/* Date and Read Time */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] leading-[16px] sm:leading-[18px] lg:leading-[19.5px] text-[dimgrey]">
                {article.date}
              </span>
              <div className="w-[3px] h-[3px] sm:w-[4px] sm:h-[4px] rounded-[2px] bg-[dimgrey]"></div>
              <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] leading-[16px] sm:leading-[18px] lg:leading-[19.5px] text-[dimgrey]">
                Waktu Baca {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
