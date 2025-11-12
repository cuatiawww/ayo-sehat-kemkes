import { useState } from "react";
import { CircleArrowRight } from "lucide-react";
import SearchSidebar from "../components/SearchSidebar";
import { motion, AnimatePresence } from "framer-motion";
import CustomBreadcrumb from "../components/CustomBreadcrump";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

export default function SearchResultsPage({ 
  searchQuery, 
  onNavigateHome 
}: { 
  searchQuery: string;
  onNavigateHome: () => void;
}) {
  // State for active categories
  const [activeCategories, setActiveCategories] = useState<string[]>([
    "articles", "download", "topics", "agenda"
  ]);

  // Check if category is active
  const isCategoryActive = (category: string) => {
    return activeCategories.includes(category);
  };

  // Toggle category
  const toggleCategory = (category: string) => {
    setActiveCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Sample articles based on search query
  const articles: Article[] = [
    {
      id: 1,
      title: "Panduan Lengkap Manajemen Diabetes",
      description: "Pelajari cara mengontrol kadar gula darah dan menjalani hidup sehat dengan diabetes mellitus.",
      image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2MjY3MzE4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "8 Nov 2025",
      category: "Artikel Kesehatan",
    },
    {
      id: 2,
      title: "Pentingnya Pemeriksaan Kesehatan Keluarga",
      description: "Mengapa medical check-up rutin penting untuk menjaga kesehatan seluruh anggota keluarga.",
      image: "https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZmFtaWx5fGVufDF8fHx8MTc2MjY3NzQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "7 Nov 2025",
      category: "Info Kesehatan",
    },
    {
      id: 3,
      title: "Deteksi Dini dan Pencegahan Penyakit",
      description: "Kenali gejala awal penyakit dan lakukan tindakan pencegahan yang tepat untuk kesehatan optimal.",
      image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2hlY2t1cHxlbnwxfHx8fDE3NjI2MzIyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "6 Nov 2025",
      category: "Artikel Kesehatan",
    },
    {
      id: 4,
      title: "Kesehatan Bayi: Nutrisi dan Perkembangan",
      description: "Panduan lengkap nutrisi dan tahap perkembangan bayi untuk tumbuh kembang optimal.",
      image: "https://images.unsplash.com/flagged/photo-1551049215-23fd6d2ac3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwaGVhbHRofGVufDF8fHx8MTc2MjY3NzQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "5 Nov 2025",
      category: "Info Kesehatan",
    },
    {
      id: 5,
      title: "Diagnosis Medis Modern dan Akurat",
      description: "Teknologi terbaru dalam diagnosis medis untuk hasil yang lebih cepat dan tepat.",
      image: "https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGlhZ25vc2lzfGVufDF8fHx8MTc2MjY3NzQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "4 Nov 2025",
      category: "Tips Kesehatan",
    },
    {
      id: 6,
      title: "Konsultasi dengan Dokter Spesialis",
      description: "Kapan waktu yang tepat untuk berkonsultasi dengan dokter spesialis dan bagaimana mempersiapkannya.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwZG9jdG9yfGVufDF8fHx8MTc2MjY3NzQwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "3 Nov 2025",
      category: "Artikel Kesehatan",
    },
  ];

  const downloadItems = [
    {
      id: 1,
      title: "Buku Peduan Kesehatan Ibu dan Anak (KIA)",
      description: "Panduan lengkap kesehatan untuk ibu hamil dan balita",
      date: "1 Nov 2025",
    },
    {
      id: 2,
      title: "Leaflet Imunisasi Rutin Lengkap",
      description: "Informasi jadwal dan jenis imunisasi untuk anak",
      date: "30 Okt 2025",
    },
    {
      id: 3,
      title: "Panduan Pencegahan Penyakit Menular",
      description: "Cara mencegah dan menangani penyakit menular",
      date: "28 Okt 2025",
    },
  ];

  const topicItems = [
    {
      id: 1,
      title: "Asma",
      description: "Penyakit pernapasan kronis yang menyebabkan kesulitan bernapas",
      image: "https://images.unsplash.com/photo-1676890578150-03af781f60e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGNhcmluZ3xlbnwxfHx8fDE3NjI2Nzc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "2 Nov 2025",
    },
    {
      id: 2,
      title: "Anemia",
      description: "Kondisi kekurangan sel darah merah atau hemoglobin",
      image: "https://images.unsplash.com/photo-1598519308220-094dbe75ff4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNjaW5lJTIwaW1tdW5pemF0aW9ufGVufDF8fHx8MTc2MjY3NzQyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "1 Nov 2025",
    },
  ];

  const campaignItems = [
    {
      id: 1,
      title: "Gerakan Hidup Sehat",
      description: "Kampanye nasional untuk meningkatkan kesadaran masyarakat akan pentingnya pola hidup sehat",
      image: "https://images.unsplash.com/photo-1746190351529-6d19fa55de45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wYWlnbnxlbnwxfHx8fDE3NjI2Nzc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "5 Nov 2025",
    },
  ];

  const totalResults = articles.length + downloadItems.length + topicItems.length + campaignItems.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <CustomBreadcrumb
        onNavigateHome={onNavigateHome}
        currentPage={searchQuery ? `Pencarian: ${searchQuery}` : "Pencarian"}
      />
      
      {/* Search Results Header */}
      <div className="bg-white py-4 lg:py-5 border-b border-gray-100">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Result Count */}
          <div className="flex items-center justify-between">
            <p className="font-['Poppins'] text-[13px] sm:text-[14px] text-gray-600">
              <span className="font-semibold text-gray-900">Hasil ({totalResults})</span>
            </p>
            <div className="flex items-center gap-2">
              <span className="font-['Poppins'] text-[13px] sm:text-[14px] text-gray-600">Sortir:</span>
              <select className="font-['Poppins'] text-[13px] sm:text-[14px] text-[#18b3ab] bg-white border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#18b3ab]">
                <option>Terbaru</option>
                <option>Terlama</option>
                <option>Terpopuler</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] gap-6 lg:gap-8">
          {/* Left Sidebar - Search Panel */}
          <aside className="lg:sticky lg:top-6 self-start">
            <SearchSidebar
              searchQuery={searchQuery}
              activeCategories={activeCategories}
              onToggleCategory={toggleCategory}
              onSearch={(query: string) => {
                // Re-navigate with new query (simple behavior for demo)
                console.log("Search requested:", query);
                window.location.reload();
              }}
            />
          </aside>

          {/* Main Content */}
          <main>
            <AnimatePresence mode="wait">
              {/* Articles Grid - Only show if "articles" category is active */}
              {isCategoryActive("articles") && articles.length > 0 && (
                <motion.section
                  key="articles"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-10 lg:mb-12"
                >
                  <div className="mb-6">
                    <h2 className="font-['Poppins'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-[#18b3ab] mb-2">
                      Pencarian "{searchQuery}" dalam Artikel Siklus Hidup
                    </h2>
                    <p className="font-['Poppins'] text-[14px] text-gray-600">
                      Menampilkan 6 dari 15 hasil pencarian
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:gap-x-[50px] lg:gap-y-[45px]">
                    {articles.map((article) => (
                      <article
                        key={article.id}
                        className="cursor-pointer group"
                      >
                        {/* Image */}
                        <div className="relative h-[208px] rounded-[14px] overflow-hidden mb-1">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content with Border */}
                        <div className="relative min-h-[122px] border-b border-[#cccccc] pb-4">
                          <div className="flex flex-col gap-[8px] pt-[20px]">
                            {/* Tag */}
                            <div className="flex flex-col h-[15px] justify-center">
                              <p className="font-['Poppins'] text-[12px] text-[#18b3ab] leading-[18px]">
                                Dewasa (18-59 Tahun)
                              </p>
                            </div>

                            {/* Title */}
                            <div>
                              <h3 className="font-['Poppins'] font-medium text-[17px] text-[#212121] leading-[20.4px] group-hover:text-[#18b3ab] transition-colors line-clamp-2">
                                {article.title}
                              </h3>
                            </div>

                            {/* Meta Info */}
                            <div className="flex items-center gap-[12px]">
                              <div className="flex flex-col h-[19.5px] justify-center">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  {article.date}
                                </p>
                              </div>
                              <div className="bg-[dimgrey] rounded-[2px] size-[4px]" />
                              <div className="flex flex-col h-[19px] justify-center">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  Waktu Baca 3 Menit
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* View All Link */}
                  <div className="mt-6 flex justify-end">
                    <button className="inline-flex items-center gap-2 text-[#18b3ab] hover:opacity-80 transition-opacity font-['Poppins'] text-[14px] font-medium">
                      Selengkapnya
                      <CircleArrowRight size={20} className="text-[#18b3ab]" />
                    </button>
                  </div>
                </motion.section>
              )}

              {/* Download Section - Only show if "download" category is active */}
              {isCategoryActive("download") && downloadItems.length > 0 && (
                <motion.section
                  key="download"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-10 lg:mb-12"
                >
                  <div className="mb-5">
                    <div>
                      <h2 className="font-['Poppins'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-[#18b3ab]">
                        Pencarian "{searchQuery}" dalam Media Download
                      </h2>
                      <p className="font-['Poppins'] text-[14px] text-gray-600 mt-1">
                        Menampilkan 3 dari 3 hasil pencarian
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:gap-x-[50px] lg:gap-y-[47px]">
                    {downloadItems.map((item) => (
                      <article
                        key={item.id}
                        className="cursor-pointer group"
                      >
                        {/* Image */}
                        <div className="relative h-[208px] rounded-[14px] overflow-hidden mb-1">
                          <img
                            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcG9zdGVyfGVufDF8fHx8MTc2MjY3NzQyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content with Border */}
                        <div className="relative min-h-[105px] border-b border-[#cccccc] pb-4">
                          <div className="flex flex-col gap-[8px] pt-[20px]">
                            {/* Tag */}
                            <div className="flex flex-col h-[15px] justify-center">
                              <p className="font-['Poppins'] text-[12px] text-[#18b3ab] leading-[18px]">
                                Dewasa (18-59 Tahun)
                              </p>
                            </div>

                            {/* Title */}
                            <div>
                              <h3 className="font-['Poppins'] font-medium text-[17px] text-[#212121] leading-[20.4px] group-hover:text-[#18b3ab] transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                            </div>

                            {/* Meta Info */}
                            <div className="flex gap-[9px] items-center">
                              <div className="flex flex-col h-[20px] justify-center">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  {item.date}
                                </p>
                              </div>
                              <div className="bg-[dimgrey] rounded-[2px] size-[4px]" />
                              <div className="flex flex-col h-[19px] justify-center">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  1000 kali diunduh
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* View All Link */}
                  <div className="mt-6 flex justify-end">
                    <button className="inline-flex items-center gap-2 text-[#18b3ab] hover:opacity-80 transition-opacity font-['Poppins'] text-[14px] font-medium">
                      Selengkapnya
                      <CircleArrowRight size={20} className="text-[#18b3ab]" />
                    </button>
                  </div>
                </motion.section>
              )}

              {/* Topic A-Z Section - Only show if "topics" category is active */}
              {isCategoryActive("topics") && topicItems.length > 0 && (
                <motion.section
                  key="topics"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-10 lg:mb-12"
                >
                  <div className="mb-5">
                    <div>
                      <h2 className="font-['Poppins'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-[#18b3ab]">
                        Pencarian "{searchQuery}" dalam Topik Kesehatan A-Z
                      </h2>
                      <p className="font-['Poppins'] text-[14px] text-gray-600 mt-1">
                        Menampilkan 2 dari 4 hasil pencarian
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:gap-x-[50px] lg:gap-y-[47px]">
                    {topicItems.map((topic) => (
                      <article
                        key={topic.id}
                        className="cursor-pointer group"
                      >
                        {/* Image */}
                        <div className="relative h-[208px] rounded-[14px] overflow-hidden mb-1">
                          <img
                            src={topic.image}
                            alt={topic.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content with Border */}
                        <div className="relative min-h-[102px] border-b border-[#cccccc] pb-4">
                          <div className="flex flex-col gap-[8px] pt-[20px]">
                            {/* Tags */}
                            <div className="flex gap-[8px] items-start flex-wrap">
                              <div className="bg-white border border-[#cccccc] rounded-[5px] px-[12px] py-[8px] h-[21px] flex items-center justify-center">
                                <p className="font-['Poppins'] text-[11px] text-[#18b3ab] whitespace-nowrap">
                                  Dewasa
                                </p>
                              </div>
                              <div className="bg-white border border-[#cccccc] rounded-[5px] px-[12px] py-[8px] h-[21px] flex items-center justify-center">
                                <p className="font-['Poppins'] text-[11px] text-[#18b3ab] whitespace-nowrap">
                                  Remaja
                                </p>
                              </div>
                              <div className="bg-[#18b3ab] rounded-[5px] px-[12px] py-[8px] h-[21px] flex items-center justify-center">
                                <p className="font-['Poppins'] text-[11px] text-white whitespace-nowrap">
                                  {topic.title}
                                </p>
                              </div>
                            </div>

                            {/* Title */}
                            <div>
                              <h3 className="font-['Poppins'] font-medium text-[17px] text-[#212121] leading-[20.4px] group-hover:text-[#18b3ab] transition-colors line-clamp-2">
                                {topic.title}
                              </h3>
                            </div>

                            {/* Meta Info */}
                            <div className="flex gap-[12px] items-center">
                              <div className="flex flex-col justify-center h-[20px]">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  {topic.date}
                                </p>
                              </div>
                              <div className="bg-[dimgrey] rounded-[2px] size-[4px]" />
                              <div className="flex flex-col justify-center h-[19px]">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  1000 kali dilihat
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* View All Link */}
                  <div className="mt-6 flex justify-end">
                    <button className="inline-flex items-center gap-2 text-[#18b3ab] hover:opacity-80 transition-opacity font-['Poppins'] text-[14px] font-medium">
                      Selengkapnya
                      <CircleArrowRight size={20} className="text-[#18b3ab]" />
                    </button>
                  </div>
                </motion.section>
              )}

              {/* Campaign/Agenda Section - Only show if "agenda" category is active */}
              {isCategoryActive("agenda") && campaignItems.length > 0 && (
                <motion.section
                  key="agenda"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-10 lg:mb-12"
                >
                  <div className="mb-5">
                    <div>
                      <h2 className="font-['Poppins'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-[#18b3ab]">
                        Pencarian "{searchQuery}" dalam Agenda Kegiatan
                      </h2>
                      <p className="font-['Poppins'] text-[14px] text-gray-600 mt-1">
                        Menampilkan 1 dari 1 hasil pencarian
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:gap-x-[50px] lg:gap-y-[47px]">
                    {campaignItems.map((campaign) => (
                      <article
                        key={campaign.id}
                        className="cursor-pointer group"
                      >
                        {/* Image */}
                        <div className="relative h-[208px] rounded-[14px] overflow-hidden mb-1">
                          <img
                            src={campaign.image}
                            alt={campaign.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Content with Border */}
                        <div className="relative min-h-[102px] border-b border-[#cccccc] pb-4">
                          <div className="flex flex-col gap-[8px] pt-[20px]">
                            {/* Tag */}
                            <div className="flex flex-col h-[15px] justify-center">
                              <p className="font-['Poppins'] text-[12px] text-[#18b3ab] leading-[18px]">
                                Kampanye Prioritas
                              </p>
                            </div>

                            {/* Title */}
                            <div>
                              <h3 className="font-['Poppins'] font-medium text-[17px] text-[#212121] leading-[20.4px] group-hover:text-[#18b3ab] transition-colors line-clamp-2">
                                {campaign.title}
                              </h3>
                            </div>

                            {/* Meta Info */}
                            <div className="flex items-center gap-[12px]">
                              <div className="flex flex-col h-[19.5px] justify-center">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  {campaign.date}
                                </p>
                              </div>
                              <div className="bg-[dimgrey] rounded-[2px] size-[4px]" />
                              <div className="flex flex-col h-[19px] justify-center">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  10,000 kali dilihat
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* View All Link */}
                  <div className="mt-6 flex justify-end">
                    <button className="inline-flex items-center gap-2 text-[#18b3ab] hover:opacity-80 transition-opacity font-['Poppins'] text-[14px] font-medium">
                      Selengkapnya
                      <CircleArrowRight size={20} className="text-[#18b3ab]" />
                    </button>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}