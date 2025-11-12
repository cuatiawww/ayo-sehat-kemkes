import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Search, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import Button from "../components/ui/button";

// Lazy load
const CustomBreadcrumbLazy = lazy(() => import("../components/CustomBreadcrump"));

// Data topik kesehatan per huruf
const healthTopicsData = {
  A: [
    "ADHD", "AIDS", "Alzheimer", "Alzheimer pada Lansia", "Anemia",
    "Anoreksia Nervosa", "Antraks", "Asam Urat", "ASI", "Asma", "Autisme",
  ],
  B: ["Balita", "Bayi Baru Lahir", "Bayi Tabung", "Bronkitis"],
  C: ["Campak", "Cacar Air", "Cerebral Palsy", "COVID-19"],
  D: ["Demam Berdarah", "Dengue", "Diabetes", "Difteri", "Diare", "Diare pada Anak", "Diare pada Bayi"],
  E: ["Ebola", "Eksim", "Epilepsi"],
  F: ["Flu Burung"],
  G: ["Gagal Ginjal", "Gangguan Jiwa", "GERD"],
  H: ["Hemofilia", "Hepatitis", "Hipertensi", "HIV/AIDS"],
  I: ["Imunisasi", "Infeksi Saluran Kemih", "Insomnia"],
  J: ["Jantung Koroner"],
  K: ["Kanker", "Kanker Payudara", "Kanker Serviks", "Katarak", "Kehamilan", "Kesehatan Jiwa", "Kolesterol", "Kurang Gizi (Malnutrisi)", "Kusta"],
  L: ["Leukemia", "Leptospirosis", "Lupus"],
  M: ["Malaria", "Malnutrisi", "Meningitis", "Migrain", "Mpox"],
  N: ["NAPZA", "Neoplasma", "Nifas", "Nipah"],
  O: ["Obesitas", "Osteoporosis"],
  P: ["Parkinson", "PCOS", "Pencegahan Infeksi", "Penyakit Ginjal", "Penyakit Jantung", "Penyakit Menular", "Pneumonia", "Polio", "PTM (Penyakit Tidak Menular)"],
  Q: [],
  R: ["Rabies", "Rheumatoid Arthritis"],
  S: ["Sepsis", "Sifilis", "Skizofrenia", "Stroke", "Stunting"],
  T: ["Thalassemia", "Tetanus", "TBC (Tuberkulosis)", "Tifus"],
  U: [],
  V: ["Vaksin"],
  W: ["Wasting"],
  X: [],
  Y: [],
  Z: ["Zika"],
} as const;

type Letter = keyof typeof healthTopicsData;

interface TopikKesehatanPageProps {
  onNavigateHome: () => void;
  onNavigateSiklusHidup?: () => void;
}

export default function TopikKesehatanPage({
  onNavigateHome,
  onNavigateSiklusHidup,
}: TopikKesehatanPageProps) {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogLetter, setDialogLetter] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const letterRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") as Letter[];

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Auto scroll to active letter
  useEffect(() => {
    if (selectedLetter && letterRefs.current[selectedLetter]) {
      letterRefs.current[selectedLetter]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedLetter]);

  // SEO
  const pageTitle = "Topik Kesehatan A-Z | Ayo Sehat";
  const pageDescription = "Jelajahi ratusan topik kesehatan dari A sampai Z. Cari berdasarkan abjad atau kata kunci untuk informasi pencegahan, pengobatan, dan gaya hidup sehat.";
  const canonicalUrl = "https://ayosehat.example.com/topik-kesehatan";

  // Generate JSON-LD ItemList
  const itemList = Object.entries(healthTopicsData).flatMap(([letter, topics]) =>
    topics.map((topic, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${topic} - Huruf ${letter}`,
      url: `${canonicalUrl}#${topic.toLowerCase().replace(/\s+/g, '-')}`,
    }))
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Daftar Topik Kesehatan A-Z",
    description: pageDescription,
    numberOfItems: itemList.length,
    itemListElement: itemList,
  };

  // Filter logic
  const filteredAlphabet = selectedLetter ? [selectedLetter] : alphabet;

  const getFilteredTopics = (letter: Letter) => {
    const topics = healthTopicsData[letter] || [];
    if (!debouncedQuery) return topics;
    return topics.filter(topic =>
      topic.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  };

  const totalTopics = alphabet.reduce((acc, letter) => acc + getFilteredTopics(letter).length, 0);

  const handleEmptyLetterClick = (letter: Letter) => {
    setDialogLetter(letter);
    setShowDialog(true);
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#18b3ab]"></div></div>}>
          {/* Breadcrumb */}
          <CustomBreadcrumbLazy
            onNavigateHome={onNavigateHome}
            onNavigateSiklusHidup={onNavigateSiklusHidup}
            currentPage="Topik Kesehatan"
          />

          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-[#18b3ab] to-[#15a098] py-6 sm:py-8 lg:py-10 border-b border-[#13918a]">
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 sm:mb-5 lg:mb-6"
              >
                <h1 className="font-['Poppins'] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-white mb-2">
                  Topik Kesehatan A-Z
                </h1>
                <p className="font-['Poppins'] text-[13px] sm:text-[14px] text-white/80">
                  Cari informasi kesehatan berdasarkan abjad atau kata kunci
                </p>
              </motion.div>

              {/* Search + Alphabet */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                  <div className="relative flex-1 sm:max-w-[300px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Cari topik kesehatan..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-[40px] sm:h-[42px] pl-9 pr-3 font-['Poppins'] text-[13px] sm:text-[14px] text-[#212121] bg-white border-2 border-white/50 rounded-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all duration-200 placeholder:text-gray-400 shadow-sm"
                      aria-label="Cari topik kesehatan"
                    />
                  </div>

                  <button
                    onClick={() => setSelectedLetter(null)}
                    className={`
                      font-['Poppins'] font-medium text-[13px] sm:text-[14px]
                      px-5 sm:px-6 h-[40px] sm:h-[42px] whitespace-nowrap
                      rounded-lg transition-all duration-300 shadow-sm
                      ${!selectedLetter 
                        ? 'bg-white text-[#18b3ab] hover:bg-white/90' 
                        : 'bg-white/20 text-white border-2 border-white/50 hover:bg-white/30 hover:border-white'
                      }
                    `}
                  >
                    Tampilkan Semua
                  </button>
                </div>

                {/* Alphabet Scroll */}
                <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {alphabet.map((letter) => {
                      const hasContent = healthTopicsData[letter].length > 0;
                      const isSelected = selectedLetter === letter;

                      return (
                        <button
                          key={letter}
                          onClick={() => hasContent ? setSelectedLetter(letter) : handleEmptyLetterClick(letter)}
                          className={`
                            font-['Poppins'] font-semibold text-[14px] sm:text-[15px]
                            min-w-[40px] w-[40px] h-[40px] sm:min-w-[44px] sm:w-[44px] sm:h-[44px]
                            rounded-lg transition-all duration-200
                            flex items-center justify-center shrink-0
                            ${hasContent 
                              ? isSelected
                                ? 'bg-white text-[#18b3ab] shadow-lg scale-105'
                                : 'bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-[#18b3ab] hover:border-white'
                              : 'bg-white/10 text-white/50 border-2 border-white/30 hover:bg-white/20 cursor-pointer'
                            }
                          `}
                          aria-label={`Filter huruf ${letter}`}
                        >
                          {letter}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Filter */}
                {selectedLetter && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 flex items-center gap-2"
                  >
                    <span className="font-['Poppins'] text-[12px] sm:text-[13px] text-white/90">
                      Filter aktif:
                    </span>
                    <span className="px-2.5 py-1 bg-white text-[#18b3ab] font-['Poppins'] font-medium text-[12px] rounded shadow-sm">
                      {selectedLetter}
                    </span>
                    <button
                      onClick={() => setSelectedLetter(null)}
                      className="text-[12px] text-white/90 hover:text-white font-['Poppins'] underline underline-offset-2"
                    >
                      Hapus
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          {/* Topics Grid */}
          <section className="py-8 sm:py-10 lg:py-12 bg-white">
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6">
                <p className="font-['Poppins'] text-[14px] text-gray-600">
                  {selectedLetter 
                    ? `Ditemukan ${getFilteredTopics(selectedLetter).length} topik dengan huruf "${selectedLetter}"`
                    : `Menampilkan ${totalTopics} topik kesehatan`
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                <AnimatePresence mode="wait">
                  {filteredAlphabet.map((letter, index) => {
                    const topics = getFilteredTopics(letter);
                    const hasContent = healthTopicsData[letter].length > 0;

                    if (!hasContent && selectedLetter) return null;

                    return (
                      <motion.div
                        key={letter}
                        ref={el => letterRefs.current[letter] = el}
                        id={`letter-${letter}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group"
                      >
                        <div className="bg-white rounded-[10px] p-4 sm:p-5 lg:p-6 border border-gray-200 hover:border-[#18b3ab]/30 hover:shadow-[0_4px_16px_rgba(24,179,171,0.12)] transition-all duration-300 h-full">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="font-['Poppins'] font-bold text-[40px] sm:text-[50px] lg:text-[60px] text-[#18b3ab] leading-[1] group-hover:scale-110 transition-transform duration-300">
                              {letter}
                            </div>
                            <div className="flex-1 h-[2px] bg-[#d9d9d9] rounded-full" />
                          </div>

                          {topics.length > 0 ? (
                            <>
                              <div className="space-y-2">
                                {topics.map((topic, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.03 }}
                                  >
                                    <button
                                      className="w-full text-left font-['Poppins'] text-[14px] sm:text-[15px] lg:text-[16px] text-[#212121] py-1.5 px-2 rounded-md hover:bg-[#18b3ab] hover:text-white transition-all duration-200 group/item flex items-center justify-between gap-2"
                                      onClick={() => {
                                        // TODO: Navigate to topic detail
                                        console.log("Navigate to:", topic);
                                      }}
                                    >
                                      <span>{topic}</span>
                                      {((letter === 'A' && idx === 4) || 
                                        (letter === 'K' && idx === 1) || 
                                        (letter === 'M' && idx === 4) ||
                                        (letter === 'P' && idx === 3)) && (
                                        <div className="inline-flex items-center px-[7px] py-[3px] bg-[#d5dd23] rounded-[5px] shrink-0 group-hover/item:bg-[#c5cd13] transition-colors">
                                          <span className="font-['Poppins'] text-[9px] sm:text-[10px] text-[#212121] font-medium">
                                            BARU
                                          </span>
                                        </div>
                                      )}
                                    </button>
                                  </motion.div>
                                ))}
                              </div>
                              <div className="mt-4 pt-3 border-t border-gray-100">
                                <p className="font-['Poppins'] text-[11px] sm:text-[12px] text-gray-500 text-center">
                                  {topics.length} topik tersedia
                                </p>
                              </div>
                            </>
                          ) : (
                            <div className="flex flex-col items-center justify-center py-8 px-4">
                              <div className="w-16 h-16 mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                                <AlertCircle className="w-8 h-8 text-gray-400" />
                              </div>
                              <p className="font-['Poppins'] text-[13px] sm:text-[14px] text-gray-500 text-center mb-1">
                                Topik belum tersedia
                              </p>
                              <p className="font-['Poppins'] text-[11px] sm:text-[12px] text-gray-400 text-center">
                                Dalam tahap pengembangan
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Empty State */}
              {totalTopics === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <Search className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="font-['Poppins'] font-medium text-[18px] sm:text-[20px] text-gray-700 mb-2">
                    Tidak ada topik ditemukan
                  </h3>
                  <p className="font-['Poppins'] text-[14px] text-gray-500 max-w-[400px] mx-auto">
                    Coba gunakan kata kunci lain atau hapus filter untuk melihat semua topik
                  </p>
                </motion.div>
              )}
            </div>
          </section>

          {/* CTA */}
          <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-br from-[#18b3ab] to-[#15a098]">
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Poppins'] font-medium text-[20px] sm:text-[26px] lg:text-[32px] text-white mb-3 sm:mb-4">
                  Tidak Menemukan Topik yang Anda Cari?
                </h2>
                <p className="font-['Poppins'] text-[13px] sm:text-[14px] lg:text-[15px] text-white/90 mb-6 sm:mb-8 max-w-[700px] mx-auto">
                  Hubungi kami atau gunakan fitur pencarian untuk menemukan informasi kesehatan yang Anda butuhkan
                </p>
                <button className="px-6 py-2.5 sm:px-8 sm:py-3 bg-[#d5dd23] hover:bg-[#c5cd13] text-[#383838] font-['Poppins'] font-medium text-[13px] sm:text-[14px] lg:text-[15px] rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Hubungi Kami
                </button>
              </motion.div>
            </div>
          </section>

          {/* Dialog */}
          <AnimatePresence>
            {showDialog && (
              <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Topik Tidak Tersedia</AlertDialogTitle>
                    <AlertDialogDescription>
                      Topik dengan huruf "{dialogLetter}" belum tersedia. Topik untuk huruf ini sedang dalam tahap pengembangan.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <Button variant="outline" onClick={() => setShowDialog(false)}>
                      Tutup
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </AnimatePresence>
        </Suspense>
      </motion.div>
    </>
  );
}