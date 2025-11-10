import { useState } from "react";
import { ChevronRight, Home, Search, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import  Button from "./ui/button";

// Data topik kesehatan per huruf 
const healthTopicsData = {
  A: [
    "ADHD",
    "AIDS",
    "Alzheimer",
    "Alzheimer pada Lansia",
    "Anemia",
    "Anoreksia Nervosa",
    "Antraks",
    "Asam Urat",
    "ASI",
    "Asma",
    "Autisme",
  ],
  B: [
    "Balita",
    "Bayi Baru Lahir",
    "Bayi Tabung",
    "Bronkitis",
  ],
  C: [
    "Campak",
    "Cacar Air",
    "Cerebral Palsy",
    "COVID-19",
  ],
  D: [
    "Demam Berdarah",
    "Dengue",
    "Diabetes",
    "Difteri",
    "Diare",
    "Diare pada Anak",
    "Diare pada Bayi",
  ],
  E: [
    "Ebola",
    "Eksim",
    "Epilepsi",
  ],
  F: [
    "Flu Burung",
  ],
  G: [
    "Gagal Ginjal",
    "Gangguan Jiwa",
    "GERD",
  ],
  H: [
    "Hemofilia",
    "Hepatitis",
    "Hipertensi",
    "HIV/AIDS",
  ],
  I: [
    "Imunisasi",
    "Infeksi Saluran Kemih",
    "Insomnia",
  ],
  J: [
    "Jantung Koroner",
  ],
  K: [
    "Kanker",
    "Kanker Payudara",
    "Kanker Serviks",
    "Katarak",
    "Kehamilan",
    "Kesehatan Jiwa",
    "Kolesterol",
    "Kurang Gizi (Malnutrisi)",
    "Kusta",
  ],
  L: [
    "Leukemia",
    "Leptospirosis",
    "Lupus",
  ],
  M: [
    "Malaria",
    "Malnutrisi",
    "Meningitis",
    "Migrain",
    "Mpox",
  ],
  N: [
    "NAPZA",
    "Neoplasma",
    "Nifas",
    "Nipah",
  ],
  O: [
    "Obesitas",
    "Osteoporosis",
  ],
  P: [
    "Parkinson",
    "PCOS",
    "Pencegahan Infeksi",
    "Penyakit Ginjal",
    "Penyakit Jantung",
    "Penyakit Menular",
    "Pneumonia",
    "Polio",
    "PTM (Penyakit Tidak Menular)",
  ],
  Q: [],
  R: [
    "Rabies",
    "Rheumatoid Arthritis",
  ],
  S: [
    "Sepsis",
    "Sifilis",
    "Skizofrenia",
    "Stroke",
    "Stunting",
  ],
  T: [
    "Thalassemia",
    "Tetanus",
    "TBC (Tuberkulosis)",
    "Tifus",
  ],
  U: [],
  V: [
    "Vaksin",
  ],
  W: [
    "Wasting",
  ],
  X: [],
  Y: [],
  Z: [
    "Zika",
  ],
};

interface TopikKesehatanPageProps {
  onNavigateHome: () => void;
  onNavigateSiklusHidup?: () => void;
}

export default function TopikKesehatanPage({
  onNavigateHome,
  onNavigateSiklusHidup,
}: TopikKesehatanPageProps) {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogLetter, setDialogLetter] = useState("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Filter logic: jika ada selected letter, hanya tampilkan letter itu
  // Kalau "Semua", tampilkan SEMUA alphabet (termasuk yang kosong)
  const filteredAlphabet = selectedLetter ? [selectedLetter] : alphabet;

  // Handler untuk alphabet yang tidak punya konten - CUSTOM DIALOG
  const handleEmptyLetterClick = (letter: string) => {
    setDialogLetter(letter);
    setShowDialog(true);
  };

  // Filter berdasarkan search query
  const getFilteredTopics = (_letter: string, topics: string[]) => {
    if (!searchQuery) return topics;
    return topics.filter(topic => 
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="relative bg-white py-3 sm:py-4 border-b border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1 text-gray-600 hover:text-[#18b3ab] transition-colors font-['Poppins']"
            >
              <Home size={14} className="sm:w-4 sm:h-4" />
            </button>
            <ChevronRight
              size={14}
              className="text-gray-400 shrink-0 sm:w-4 sm:h-4"
            />
            <button
              onClick={onNavigateSiklusHidup}
              className="text-gray-600 hover:text-[#18b3ab] transition-colors font-['Poppins']"
            >
              Siklus Hidup
            </button>
            <ChevronRight
              size={14}
              className="text-gray-400 shrink-0 sm:w-4 sm:h-4"
            />
            <span className="text-[#18b3ab] font-medium font-['Poppins']">
              Topik Kesehatan
            </span>
          </div>
        </div>
      </div>

      {/* Search & Filter Section - Layout seperti screenshot */}
      <section className="relative bg-gradient-to-b from-[#f8f9fa] to-white py-6 sm:py-8 lg:py-10 border-b border-gray-200">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-5 lg:mb-6"
          >
            <h1 className="font-['Poppins'] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] text-[#212121] mb-2">
              Topik Kesehatan A-Z
            </h1>
            <p className="font-['Poppins'] text-[13px] sm:text-[14px] text-gray-600">
              Cari informasi kesehatan berdasarkan abjad atau kata kunci
            </p>
          </motion.div>

          {/* Search Bar + Alphabet Filter - Auto Layout Responsive */}
          <div className="space-y-3 sm:space-y-4">
            {/* Row 1: Search Bar + Show All Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:max-w-[300px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari topik kesehatan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[40px] sm:h-[42px] pl-9 pr-3 font-['Poppins'] text-[13px] sm:text-[14px] text-[#212121] bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#18b3ab] focus:ring-1 focus:ring-[#18b3ab]/30 transition-all duration-200 placeholder:text-gray-400"
                />
              </div>

              {/* Show All Button */}
              <button
                onClick={() => setSelectedLetter(null)}
                className={`
                  font-['Poppins'] font-medium text-[13px] sm:text-[14px]
                  px-5 sm:px-6 h-[40px] sm:h-[42px] whitespace-nowrap
                  rounded-lg transition-all duration-300
                  ${!selectedLetter 
                    ? 'bg-[#18b3ab] text-white shadow-sm' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#18b3ab] hover:text-[#18b3ab]'
                  }
                `}
              >
                Tampilkan Semua
              </button>
            </div>

           {/* Row 2: Alphabet Buttons - Horizontal Scroll */}
<div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
    {alphabet.map((letter) => {
      const hasContent = healthTopicsData[letter as keyof typeof healthTopicsData]?.length > 0;
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
                ? 'bg-[#18b3ab] text-white shadow-md'
                : 'bg-white text-[#18b3ab] border border-gray-200 hover:border-[#18b3ab] hover:bg-[#18b3ab]/10'
              : 'bg-gray-100 text-gray-400 border border-gray-200 hover:bg-gray-200 cursor-pointer'
            }
          `}
        >
          {letter}
        </button>
      );
    })}
  </div>
</div>
          </div>

          {/* Active Filter Info */}
          {selectedLetter && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 flex items-center gap-2"
            >
              <span className="font-['Poppins'] text-[12px] sm:text-[13px] text-gray-600">
                Filter aktif:
              </span>
              <span className="px-2.5 py-0.5 bg-[#18b3ab]/10 text-[#18b3ab] font-['Poppins'] font-medium text-[12px] rounded">
                {selectedLetter}
              </span>
              <button
                onClick={() => setSelectedLetter(null)}
                className="text-[12px] text-gray-500 hover:text-[#18b3ab] font-['Poppins'] underline"
              >
                Hapus
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Topics Grid - Filtered */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Result Count */}
          <div className="mb-6">
            <p className="font-['Poppins'] text-[14px] text-gray-600">
              {selectedLetter 
                ? `Ditemukan ${healthTopicsData[selectedLetter as keyof typeof healthTopicsData]?.length || 0} topik dengan huruf "${selectedLetter}"`
                : `Menampilkan semua topik kesehatan (${alphabet.reduce((acc, letter) => acc + (healthTopicsData[letter as keyof typeof healthTopicsData]?.length || 0), 0)} topik)`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {filteredAlphabet.map((letter, index) => {
              const topics = healthTopicsData[letter as keyof typeof healthTopicsData] || [];
              const filteredTopics = getFilteredTopics(letter, topics);
              
              // Kalau mode "Semua", tampilkan semua card termasuk yang kosong
              // Kalau mode filter specific letter, skip yang kosong

              return (
                <motion.div
                  key={letter}
                  id={`letter-${letter}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  {/* Card Container - Clean seperti    */}
                  <div className="bg-white rounded-[10px] p-4 sm:p-5 lg:p-6 border border-gray-200 hover:border-[#18b3ab]/30 hover:shadow-[0_4px_16px_rgba(24,179,171,0.12)] transition-all duration-300 h-full">
                    {/* Letter Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="font-['Poppins'] font-bold text-[40px] sm:text-[50px] lg:text-[60px] text-[#18b3ab] leading-[1] group-hover:scale-110 transition-transform duration-300">
                        {letter}
                      </div>
                      
                      {/* Horizontal Line Separator - seperti    */}
                      <div className="flex-1 h-[2px] bg-[#d9d9d9] rounded-full" />
                    </div>

                    {/* Topics List atau Empty State */}
                    {filteredTopics.length > 0 ? (
                      <>
                        <div className="space-y-2">
                          {filteredTopics.map((topic, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.03 }}
                              className="relative"
                            >
                              <button className="w-full text-left font-['Poppins'] text-[14px] sm:text-[15px] lg:text-[16px] text-[#212121] py-1.5 px-2 rounded-md hover:bg-[#18b3ab] hover:text-white transition-all duration-200 group/item flex items-center justify-between gap-2">
                                <span className="relative">
                                  {topic}
                                </span>
                                
                                {/* Yellow "BARU" Badge - untuk topik tertentu */}
                                {((letter === 'A' && idx === 4) || 
                                  (letter === 'K' && idx === 1) || 
                                  (letter === 'M' && idx === 4) ||
                                  (letter === 'P' && idx === 3)) && (
                                  <div className="inline-flex items-center px-[7px] py-[3px] bg-[#d5dd23] rounded-[5px] shrink-0 group-hover/item:bg-[#c5cd13] transition-colors duration-200">
                                    <span className="font-['Poppins'] text-[9px] sm:text-[10px] text-[#212121] font-medium whitespace-nowrap">
                                      BARU
                                    </span>
                                  </div>
                                )}
                              </button>
                            </motion.div>
                          ))}
                        </div>

                        {/* Badge counter di footer card */}
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <p className="font-['Poppins'] text-[11px] sm:text-[12px] text-gray-500 text-center">
                            {filteredTopics.length} topik tersedia
                          </p>
                        </div>
                      </>
                    ) : (
                      /* Empty State di dalam card */
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
          </div>

          {/* Empty State - jika tidak ada hasil */}
          {filteredAlphabet.every(letter => {
            const topics = healthTopicsData[letter as keyof typeof healthTopicsData] || [];
            return getFilteredTopics(letter, topics).length === 0;
          }) && (
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

      {/* CTA Section */}
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

      {/* Custom Dialog */}
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
                <Button
                  variant="outline"
                  onClick={() => setShowDialog(false)}
                >
                  Tutup
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </AnimatePresence>
    </div>
  );
}