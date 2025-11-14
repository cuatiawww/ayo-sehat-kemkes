import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Share2, Facebook, Twitter, Link2, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import CustomBreadcrumb from "../components/CustomBreadcrump";
import RightSidebar from "../components/RightSidebar";


// Import data dari JSON
import data from "../data/siklushidupData.json";

// === TIPE DATA ===
interface Stage {
  id: number;
  name: string;
  age: string;
  slug: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  color?: string;
}

interface StageTopic {
  id: number;
  title: string;
  image: string;
  category: string;
  alt: string;
  width: number;
  height: number;
}

interface StageArticle {
  id: number;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
  date?: string;
  readTime?: string;
}

interface StageContent {
  title: string;
  description: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;
  description7?: string;
  articles?: StageArticle[];
  topics?: StageTopic[];
}

interface Publication {
  id: number;
  title: string;
  type: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

interface Disease {
  id: number;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

interface SiklusHidupData {
  lifecycleStages: Stage[];
  stageContent: Record<string, StageContent>;
  publications: Publication[];
  diseases: Disease[];
}

// === DESTRUCTURING DENGAN TIPE ===
const {
  lifecycleStages,
  stageContent: rawStageContent,
  publications,
  diseases,
} = data as SiklusHidupData;

const stageContent: Record<string, StageContent> = rawStageContent;

// === KOMPONEN UTAMA ===
export default function SiklusHidupPage({
  onNavigateHome,
  initialStage = "remaja",
}: {
  onNavigateHome: () => void;
  initialStage?: string;
}) {
  const [selectedStage, setSelectedStage] = useState(initialStage);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentDiseaseIndex, setCurrentDiseaseIndex] = useState(0);

  const currentContent = stageContent[selectedStage] ?? stageContent["remaja"];
  const currentStageData = lifecycleStages.find(s => s.slug === selectedStage) ?? lifecycleStages[2];

  // === SEO DATA ===
  const baseUrl = "https://staging-ayo-sehat.vercel.app";
  const canonicalUrl = `${baseUrl}/page/siklus-hidup`;
  const pageTitle = `${currentStageData.name} (${currentStageData.age}) - Panduan Kesehatan | Ayo Sehat Kemenkes`;
  const pageDescription = `Informasi lengkap kesehatan untuk kelompok usia ${currentStageData.name}. Gizi, imunisasi, pencegahan penyakit, dan tips hidup sehat dari Kementerian Kesehatan RI.`;
  const ogImage = currentStageData.image;

  const breadcrumb = [
    { name: "Beranda", url: baseUrl },
    { name: "Siklus Hidup", url: `${baseUrl}/siklus-hidup` },
    { name: currentStageData.name, url: canonicalUrl },
  ];

  // === CAROUSEL LOGIC ===
  const topics = currentContent.topics ?? [];
  const visibleCount = 3;
  const maxTopicIndex = Math.max(0, topics.length - visibleCount);
  const maxDiseaseIndex = Math.max(0, diseases.length - visibleCount);

  return (
    <>
      {/* === SEO & METADATA === */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Ayo Sehat Kemenkes" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageTitle,
          description: pageDescription,
          url: canonicalUrl,
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: breadcrumb.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              item: item.url,
            })),
          },
        })}
      </script>

      {/* === PAGE CONTENT === */}
      <div className="min-h-screen bg-white">
        <CustomBreadcrumb onNavigateHome={onNavigateHome} currentPage={`Siklus Hidup - ${currentStageData.name}`} />

        {/* Hero Section */}
        <div className="relative">
          <section className="relative bg-gradient-to-b from-white to-[#f8f9fa] pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -left-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gray-100/40 blur-3xl" />
              <div className="absolute -top-40 right-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-gray-100/30 blur-3xl" />
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 sm:mb-8 lg:mb-10"
              >
                <h1 className="font-semibold text-[28px] sm:text-[36px] lg:text-[50px] text-[#18b3ab] mb-3 sm:mb-4">
                  Siklus Hidup Kesehatan
                </h1>
                <p className="text-[14px] sm:text-[16px] lg:text-[22px] text-neutral-600 max-w-[794px] leading-relaxed">
                  Pendampingan menjaga kesehatan sepanjang siklus kehidupan, dengan informasi khusus setiap tahap usia
                </p>
              </motion.div>
            </div>
          </section>

          {/* Lifecycle Cards - Overlap */}
          <div className="absolute left-0 right-0 top-[calc(100%-50px)] sm:top-[calc(100%-20px)] lg:top-[calc(100%-80px)] z-20 pointer-events-none">
            <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8">
              <div className="grid grid-cols-5 gap-2 sm:gap-4 lg:gap-6 xl:gap-[26px] items-end pointer-events-auto">
                {lifecycleStages.map((stage, index) => {
                  const isSelected = stage.slug === selectedStage;
                  return (
                    <motion.div
  key={stage.id}
  initial={{ opacity: 0, y: 20 }}
  animate={{ 
    opacity: 1, 
    y: 0, 
    scale: isSelected ? 1.05 : 1 
  }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="group cursor-pointer flex flex-col items-center outline-none focus:outline-none"
  onClick={() => {
    setSelectedStage(stage.slug);
    setCurrentTopicIndex(0);
    setCurrentDiseaseIndex(0);
  }}
  tabIndex={0}
  role="button"
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedStage(stage.slug);
      setCurrentTopicIndex(0);
      setCurrentDiseaseIndex(0);
    }
  }}
>
  <div
    className={`
      relative w-full aspect-square transition-all duration-500
      ${isSelected 
        ? "shadow-[0_10px_40px_rgba(24,179,171,0.5)] z-20 -translate-y-2 scale-105" 
        : "z-10"
      }
      ${!isSelected ? "group-hover:-translate-y-2 group-hover:scale-105" : ""}
    `}
  >
    {/* Background Image Container */}
    <div className="absolute inset-0 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] overflow-hidden bg-[#18b3ab]">
      <img
        src={stage.image}
        alt={stage.alt}
        width={stage.width}
        height={stage.height}
        className={`
          absolute inset-0 w-full h-full object-cover transition-all duration-700
          ${isSelected ? "scale-105 brightness-110" : ""}
          ${!isSelected ? "group-hover:scale-105 group-hover:brightness-110" : ""}
        `}
        loading="lazy"
      />
      <div className={`
        absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
        transition-all duration-500
        ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
      `} />
    </div>

    {/* Border Kuning */}
    <div className={`
      absolute inset-0 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] 
      border-[3px] transition-all duration-500 pointer-events-none
      ${isSelected ? "border-[#d5dd23]" : "border-transparent group-hover:border-[#d5dd23]"}
    `} />

    {/* Label Bawah */}
    <div
      className={`
        absolute bottom-[-10px] sm:bottom-[-15px] lg:bottom-[-20px] xl:bottom-[-25px] 
        left-1/2 -translate-x-1/2 bg-[#d5dd23] rounded-[8px] sm:rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] 
        h-[40px] sm:h-[55px] lg:h-[70px] xl:h-[84px] w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[222px] 
        flex flex-col items-center justify-center transition-all duration-500 z-30 px-1 sm:px-2
        ${isSelected 
          ? "bg-[#c5cd13] shadow-[0_10px_30px_rgba(213,221,35,0.4)] -translate-y-1 scale-105" 
          : "group-hover:bg-[#c5cd13] group-hover:shadow-[0_10px_30px_rgba(213,221,35,0.4)] group-hover:-translate-y-1 group-hover:scale-105"
        }
      `}
    >
      <p className={`
        font-semibold text-[9px] sm:text-[12px] lg:text-[16px] xl:text-[23px] leading-tight 
        text-[#383838] text-center transition-all duration-300
        ${isSelected ? "scale-110" : "group-hover:scale-110"}
      `}>
        {stage.name}
      </p>
      <p className={`
        text-[7px] sm:text-[10px] lg:text-[12px] xl:text-[16px] leading-tight 
        text-[#302e2e] text-center transition-all duration-300
        ${isSelected ? "text-[#1a1a1a]" : "group-hover:text-[#1a1a1a]"}
      `}>
        {stage.age}
      </p>
    </div>
  </div>
</motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="relative bg-white pt-[140px] sm:pt-[230px] lg:pt-[380px] pb-8 sm:pb-10 lg:pb-12">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-8 lg:gap-12">
              {/* LEFT: Main Content */}
              <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
                {/* Hero Image */}
                <div>
                  <div className="bg-gradient-to-br from-[#18b3ab] to-[#15a098] rounded-[15px] sm:rounded-[20px] overflow-hidden p-4 sm:p-6 lg:p-8 h-[250px] sm:h-[350px] lg:h-[500px] relative mb-6">
                    <img
                      src={currentStageData.image}
                      alt={currentStageData.alt}
                      width={currentStageData.width}
                      height={currentStageData.height}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-90"
                      loading="lazy"
                    />
                    <div className="relative z-10">
                      <div className="bg-[#d5dd23] inline-block rounded-full px-4 py-1.5 mb-4">
                        <p className="font-medium text-[14px] text-[#212121]">{currentStageData.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Title & Age */}
                  <div className="mb-6">
                    <p className="text-[#6b7280] text-[13px] sm:text-[14px] mb-2">Kelompok Umur</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                      <h1 className="text-[#18b3ab] text-[24px] sm:text-[32px] lg:text-[40px] font-semibold">
                        {currentStageData.name}
                      </h1>
                      <span className="text-[#6b7280] text-[18px] sm:text-[20px] lg:text-[24px]">•</span>
                      <p className="text-[#6b7280] text-[16px] sm:text-[18px] lg:text-[20px]">{currentStageData.age}</p>
                    </div>
                  </div>

                 {/* Tags + Share */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
  {/* Tags */}
  <div className="flex flex-wrap gap-2">
    {["Penyakit Pernapasan", "Kardiovaskular", "Pencernaan", "Neoplasma"].map((tag, i) => (
      <button
        key={i}
        className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-medium rounded-full transition-colors ${
          i === 1
            ? "bg-[#18b3ab] text-white hover:bg-[#16a199]"
            : "border border-[#18b3ab] text-[#18b3ab] hover:bg-[#18b3ab] hover:text-white"
        }`}
      >
        {tag}
      </button>
    ))}
  </div>

  {/* Share Buttons */}
  <div className="flex gap-2">
    {/* Share Utama */}
    <button
      aria-label="Bagikan"
      className="w-9 h-9 rounded bg-[#18b3ab] text-white flex items-center justify-center hover:bg-[#16a199] transition-colors"
    >
      <Share2 size={16} />
    </button>

    {/* Facebook */}
    <button
      aria-label="Bagikan ke Facebook"
      className="w-9 h-9 rounded bg-[#18b3ab] text-white flex items-center justify-center hover:bg-[#16a199] transition-colors"
      onClick={() => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
      }}
    >
      <Facebook size={16} />
    </button>

    {/* Twitter */}
    <button
      aria-label="Bagikan ke Twitter"
      className="w-9 h-9 rounded bg-[#18b3ab] text-white flex items-center justify-center hover:bg-[#16a199] transition-colors"
      onClick={() => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(document.title);
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
      }}
    >
      <Twitter size={16} />
    </button>

    {/* WhatsApp */}
    <button
      aria-label="Bagikan ke WhatsApp"
      className="w-9 h-9 rounded bg-[#18b3ab] text-white flex items-center justify-center hover:bg-[#16a199] transition-colors"
      onClick={() => {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://wa.me/?text=${url}`, "_blank");
      }}
    >
      <Instagram size={16} />
    </button>

    {/* Copy Link */}
    <button
      aria-label="Salin Link"
      className="w-9 h-9 rounded bg-[#18b3ab] text-white flex items-center justify-center hover:bg-[#16a199] transition-colors"
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link disalin!");
      }}
    >
      <Link2 size={16} />
    </button>
  </div>
</div>

                  {/* Article Content */}
                  <div className="space-y-4 text-justify">
                    {currentContent.description && (
                      <p className="text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">{currentContent.description}</p>
                    )}
                    {currentContent.description2 && (
                      <p className="text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">{currentContent.description2}</p>
                    )}
                    {currentContent.description3 && (
                      <p className="text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">{currentContent.description3}</p>
                    )}
                    {currentContent.description4 && (
                      <p className="text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">{currentContent.description4}</p>
                    )}
                    {currentContent.description5 && (
                      <p className="text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">{currentContent.description5}</p>
                    )}
                    {currentContent.description6 && (
                      <p className="text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">{currentContent.description6}</p>
                    )}
                    {currentContent.description7 && (
                      <p className="text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">{currentContent.description7}</p>
                    )}
                  </div>
                </div>

                {/* Topik Kesehatan */}
                {topics.length > 0 && (
                  <div>
                    <h2 className="font-semibold text-[20px] sm:text-[24px] lg:text-[28px] text-[#18b3ab] mb-4 sm:mb-6">
                      Topik Kesehatan Terkait
                    </h2>
                    <div className="relative group/carousel">
                      <button
                        onClick={() => setCurrentTopicIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentTopicIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 disabled:cursor-not-allowed"
                        aria-label="Sebelumnya"
                      >
                        <ChevronLeft className="w-6 h-6 text-[#18b3ab]" />
                      </button>
                      <button
                        onClick={() => setCurrentTopicIndex(prev => Math.min(maxTopicIndex, prev + 1))}
                        disabled={currentTopicIndex >= maxTopicIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 disabled:cursor-not-allowed"
                        aria-label="Berikutnya"
                      >
                        <ChevronRight className="w-6 h-6 text-[#18b3ab]" />
                      </button>
                      <div className="overflow-hidden">
                        <div
                          className="flex gap-4 sm:gap-6 transition-transform duration-500"
                          style={{ transform: `translateX(-${currentTopicIndex * (100 / 3)}%)` }}
                        >
                          {topics.map((topic) => (
                            <motion.div key={topic.id} className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                              <div className="group h-[245px] rounded-[15px] overflow-hidden border border-[#d2d2d2] shadow-md hover:shadow-lg transition-all cursor-pointer">
                                <div className="h-[151px] overflow-hidden">
                                  <img
                                    src={topic.image}
                                    alt={topic.alt}
                                    width={topic.width}
                                    height={topic.height}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="h-[94px] flex items-center justify-center px-4 bg-white group-hover:bg-[#18b3ab] transition-colors">
                                  <p className="text-[18px] font-medium text-center text-[#18b3ab] group-hover:text-white transition-colors">
                                    {topic.title}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Penyakit Terkait */}
                <div>
                  <h2 className="font-semibold text-[20px] sm:text-[24px] lg:text-[28px] text-[#18b3ab] mb-4 sm:mb-6">
                    Penyakit Terkait
                  </h2>
                  <div className="relative group/carousel">
                    <button
                      onClick={() => setCurrentDiseaseIndex(prev => Math.max(0, prev - 1))}
                      disabled={currentDiseaseIndex === 0}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 disabled:cursor-not-allowed"
                      aria-label="Sebelumnya"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#18b3ab]" />
                    </button>
                    <button
                      onClick={() => setCurrentDiseaseIndex(prev => Math.min(maxDiseaseIndex, prev + 1))}
                      disabled={currentDiseaseIndex >= maxDiseaseIndex}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 disabled:cursor-not-allowed"
                      aria-label="Berikutnya"
                    >
                      <ChevronRight className="w-6 h-6 text-[#18b3ab]" />
                    </button>
                    <div className="overflow-hidden">
                      <div
                        className="flex gap-4 sm:gap-6 transition-transform duration-500"
                        style={{ transform: `translateX(-${currentDiseaseIndex * (100 / 3)}%)` }}
                      >
                        {diseases.map((disease) => (
                          <motion.div key={disease.id} className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                            <div className="group h-[245px] rounded-[15px] overflow-hidden border border-[#d2d2d2] shadow-md hover:shadow-lg transition-all cursor-pointer">
                              <div className="h-[151px] overflow-hidden">
                                <img
                                  src={disease.image}
                                  alt={disease.alt}
                                  width={disease.width}
                                  height={disease.height}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                  loading="lazy"
                                />
                              </div>
                              <div className="h-[94px] flex items-center justify-center px-4 bg-white group-hover:bg-[#18b3ab] transition-colors">
                                <p className="text-[18px] font-medium text-center text-[#18b3ab] group-hover:text-white transition-colors">
                                  {disease.title}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <RightSidebar
                className="lg:sticky lg:top-6 lg:self-start"
                showCalendar={true}
                showRelatedArticles={true}
                showPublications={true}
                relatedArticles={currentContent.articles || []}
                publications={publications}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}