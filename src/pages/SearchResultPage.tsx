import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CircleArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

// Lazy load komponen
const SearchSidebarLazy = lazy(() => import("../components/SearchSidebar"));
const CustomBreadcrumbLazy = lazy(() => import("../components/CustomBreadcrump"));

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

interface DownloadItem {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface TopicItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

interface CampaignItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export default function SearchResultsPage({
  searchQuery,
  onNavigateHome,
}: {
  searchQuery: string;
  onNavigateHome: () => void;
}) {
  // State for active categories
  const [activeCategories, setActiveCategories] = useState<string[]>([
    "articles",
    "download",
    "topics",
    "agenda",
  ]);

  // Toggle category
  const toggleCategory = (category: string) => {
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const isCategoryActive = (category: string) => activeCategories.includes(category);

  // Sample data
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

  const downloadItems: DownloadItem[] = [
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

  const topicItems: TopicItem[] = [
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
      image: "https://images.unsplash.com/photo-1598519308220-094dbe75ff4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWRpY2FsJTIwaW1tdW5pemF0aW9ufGVufDF8fHx8MTc2MjY3NzQyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      date: "1 Nov 2025",
    },
  ];

  const campaignItems: CampaignItem[] = [
    {
      id: 1,
      title: "Gerakan Hidup Sehat",
      description: "Kampanye nasional untuk meningkatkan kesadaran masyarakat akan pentingnya pola hidup sehat",
      image: "https://images.unsplash.com/photo-1746190351529-6d19fa55de45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBjYW1wYWlnbnxlbnwxfHx8fDE3NjI2Nzc0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      date: "5 Nov 2025",
    },
  ];

  const totalResults =
    articles.length + downloadItems.length + topicItems.length + campaignItems.length;

  // Dynamic SEO
  const pageTitle = searchQuery
    ? `Hasil Pencarian: "${searchQuery}" - Ayo Sehat`
    : "Pencarian - Ayo Sehat";
  const pageDescription = searchQuery
    ? `Temukan ${totalResults} hasil untuk "${searchQuery}" di artikel, download, topik, dan agenda kesehatan.`
    : "Cari informasi kesehatan terlengkap di Ayo Sehat.";

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    name: pageTitle,
    description: pageDescription,
    url: `https://staging-ayo-sehat.vercel.app/search?q=${encodeURIComponent(searchQuery)}`,
    query: searchQuery,
    numberOfItems: totalResults,
    itemListElement: [
      ...articles.slice(0, 3).map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.title,
        url: `https://staging-ayo-sehat.vercel.app/artikel/${a.id}`,
      })),
    ],
  };

  return (
    <>
      {/* SEO HEAD */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://staging-ayo-sehat.vercel.app/search?q=${encodeURIComponent(searchQuery)}`}
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href={`https://staging-ayo-sehat.vercel.app/search?q=${encodeURIComponent(searchQuery)}`}
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-white"
      >
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-32">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#18b3ab]"></div>
            </div>
          }
        >
          {/* Breadcrumb */}
          <CustomBreadcrumbLazy
            onNavigateHome={onNavigateHome}
            currentPage={searchQuery ? `Pencarian: ${searchQuery}` : "Pencarian"}
          />

          {/* Header */}
          <div className="bg-white py-4 lg:py-5 border-b border-gray-100">
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <p className="font-['Poppins'] text-[13px] sm:text-[14px] text-gray-600">
                  <span className="font-semibold text-gray-900">Hasil ({totalResults})</span>
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-['Poppins'] text-[13px] sm:text-[14px] text-gray-600">
                    Sortir:
                  </span>
                  <select className="font-['Poppins'] text-[13px] sm:text-[14px] text-[#18b3ab] bg-white border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#18b3ab]">
                    <option>Terbaru</option>
                    <option>Terlama</option>
                    <option>Terpopuler</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Layout */}
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] gap-6 lg:gap-8">
              {/* Sidebar */}
              <aside className="lg:sticky lg:top-6 self-start">
                <SearchSidebarLazy
                  searchQuery={searchQuery}
                  activeCategories={activeCategories}
                  onToggleCategory={toggleCategory}
                  onSearch={(query: string) => {
                    if (typeof window !== "undefined") {
                      window.location.href = `/search?q=${encodeURIComponent(query)}`;
                    }
                  }}
                />
              </aside>

              {/* Main Content */}
              <main>
                <AnimatePresence mode="wait">
                  {/* Articles */}
                  {isCategoryActive("articles") && articles.length > 0 && (
                    <ResultSection
                      key="articles"
                      title={`Pencarian "${searchQuery}" dalam Artikel Siklus Hidup`}
                      subtitle="Menampilkan 6 dari 15 hasil pencarian"
                      items={articles}
                      renderItem={(item: Article) => (
                        <article key={item.id} className="cursor-pointer group">
                          <div className="relative h-[208px] rounded-[14px] overflow-hidden mb-1">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="relative min-h-[122px] border-b border-[#cccccc] pb-4">
                            <div className="flex flex-col gap-[8px] pt-[20px]">
                              <p className="font-['Poppins'] text-[12px] text-[#18b3ab] leading-[18px]">
                                Dewasa (18-59 Tahun)
                              </p>
                              <h3 className="font-['Poppins'] font-medium text-[17px] text-[#212121] leading-[20.4px] group-hover:text-[#18b3ab] transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <div className="flex items-center gap-[12px]">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  {item.date}
                                </p>
                                <div className="bg-[dimgrey] rounded-[2px] size-[4px]" />
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  Waktu Baca 3 Menit
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      )}
                    />
                  )}

                  {/* Download */}
                  {isCategoryActive("download") && downloadItems.length > 0 && (
                    <ResultSection
                      key="download"
                      title={`Pencarian "${searchQuery}" dalam Media Download`}
                      subtitle="Menampilkan 3 dari 3 hasil pencarian"
                      items={downloadItems}
                      renderItem={(item: DownloadItem) => (
                        <article key={item.id} className="cursor-pointer group">
                          <div className="relative h-[208px] rounded-[14px] overflow-hidden mb-1">
                            <img
                              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcG9zdGVyfGVufDF8fHx8MTc2MjY3NzQyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="relative min-h-[105px] border-b border-[#cccccc] pb-4">
                            <div className="flex flex-col gap-[8px] pt-[20px]">
                              <p className="font-['Poppins'] text-[12px] text-[#18b3ab] leading-[18px]">
                                Dewasa (18-59 Tahun)
                              </p>
                              <h3 className="font-['Poppins'] font-medium text-[17px] text-[#212121] leading-[20.4px] group-hover:text-[#18b3ab] transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <div className="flex gap-[9px] items-center">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  {item.date}
                                </p>
                                <div className="bg-[dimgrey] rounded-[2px] size-[4px]" />
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  1000 kali diunduh
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      )}
                    />
                  )}

                  {/* Topics */}
                  {isCategoryActive("topics") && topicItems.length > 0 && (
                    <ResultSection
                      key="topics"
                      title={`Pencarian "${searchQuery}" dalam Topik Kesehatan A-Z`}
                      subtitle="Menampilkan 2 dari 4 hasil pencarian"
                      items={topicItems}
                      renderItem={(item: TopicItem) => (
                        <article key={item.id} className="cursor-pointer group">
                          <div className="relative h-[208px] rounded-[14px] overflow-hidden mb-1">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="relative min-h-[102px] border-b border-[#cccccc] pb-4">
                            <div className="flex flex-col gap-[8px] pt-[20px]">
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
                                    {item.title}
                                  </p>
                                </div>
                              </div>
                              <h3 className="font-['Poppins'] font-medium text-[17px] text-[#212121] leading-[20.4px] group-hover:text-[#18b3ab] transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <div className="flex gap-[12px] items-center">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  {item.date}
                                </p>
                                <div className="bg-[dimgrey] rounded-[2px] size-[4px]" />
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  1000 kali dilihat
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      )}
                    />
                  )}

                  {/* Agenda */}
                  {isCategoryActive("agenda") && campaignItems.length > 0 && (
                    <ResultSection
                      key="agenda"
                      title={`Pencarian "${searchQuery}" dalam Agenda Kegiatan`}
                      subtitle="Menampilkan 1 dari 1 hasil pencarian"
                      items={campaignItems}
                      renderItem={(item: CampaignItem) => (
                        <article key={item.id} className="cursor-pointer group">
                          <div className="relative h-[208px] rounded-[14px] overflow-hidden mb-1">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="relative min-h-[102px] border-b border-[#cccccc] pb-4">
                            <div className="flex flex-col gap-[8px] pt-[20px]">
                              <p className="font-['Poppins'] text-[12px] text-[#18b3ab] leading-[18px]">
                                Kampanye Prioritas
                              </p>
                              <h3 className="font-['Poppins'] font-medium text-[17px] text-[#212121] leading-[20.4px] group-hover:text-[#18b3ab] transition-colors line-clamp-2">
                                {item.title}
                              </h3>
                              <div className="flex items-center gap-[12px]">
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  {item.date}
                                </p>
                                <div className="bg-[dimgrey] rounded-[2px] size-[4px]" />
                                <p className="font-['Poppins'] text-[13px] text-[dimgrey] leading-[19.5px]">
                                  10,000 kali dilihat
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      )}
                    />
                  )}
                </AnimatePresence>
              </main>
            </div>
          </div>
        </Suspense>
      </motion.div>
    </>
  );
}

// Reusable Result Section
function ResultSection<T>({
  title,
  subtitle,
  items,
  renderItem,
}: {
  title: string;
  subtitle: string;
  items: T[];
  renderItem: (item: T) => JSX.Element;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="mb-10 lg:mb-12"
    >
      <div className="mb-6">
        <h2 className="font-['Poppins'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-[#18b3ab] mb-2">
          {title}
        </h2>
        <p className="font-['Poppins'] text-[14px] text-gray-600">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 lg:gap-x-[50px] lg:gap-y-[45px]">
        {items.map(renderItem)}
      </div>

      <div className="mt-6 flex justify-end">
        <button className="inline-flex items-center gap-2 text-[#18b3ab] hover:opacity-80 transition-opacity font-['Poppins'] text-[14px] font-medium">
          Selengkapnya
          <CircleArrowRight size={20} className="text-[#18b3ab]" />
        </button>
      </div>
    </motion.section>
  );
}