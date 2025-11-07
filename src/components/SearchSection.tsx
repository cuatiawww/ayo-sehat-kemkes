import { useState, useRef, useEffect } from "react";
import { Search, Clock, TrendingUp, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    "Diabetes",
    "Hipertensi",
    "COVID-19"
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const popularTopics = [
    "Diabetes",
    "Hipertensi",
    "COVID-19",
    "Jantung",
    "Stroke",
    "Kanker",
    "Asma",
    "Kolesterol",
    "Ginjal",
    "Liver",
    "Alergi",
    "Migrain",
    "Demam",
    "Batuk",
    "Flu",
    "Pneumonia",
    "Tuberkulosis",
    "Hepatitis",
    "Gastritis",
    "Maag",
    "Diare",
    "Konstipasi",
    "Anemia",
    "Osteoporosis",
    "Arthritis",
    "Asam Urat",
    "Vertigo",
    "Insomnia",
    "Depresi",
    "Anxiety",
    "Gizi Buruk",
    "Obesitas",
    "Kehamilan",
    "Persalinan",
    "Kontrasepsi",
    "Imunisasi",
    "Vaksinasi",
    "Gigi Berlubang",
    "Gusi Bengkak",
    "Mata Minus",
    "Katarak",
    "Glaukoma",
  ];

  // Filter suggestions based on input
  const filteredSuggestions = searchQuery.trim()
    ? popularTopics.filter((topic) =>
        topic.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // All suggestions to show (recent + filtered)
  const allSuggestions = searchQuery.trim()
    ? filteredSuggestions.slice(0, 8)
    : recentSearches;

  // Handle search
  const handleSearch = (query: string = searchQuery) => {
    if (!query.trim()) return;
    
    // Add to recent searches
    if (!recentSearches.includes(query)) {
      setRecentSearches([query, ...recentSearches.slice(0, 4)]);
    }
    
    // Here you would typically navigate or fetch results
    console.log("Searching for:", query);
    setShowSuggestions(false);
    setSearchQuery(query);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) {
      if (e.key === "ArrowDown") {
        setShowSuggestions(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < allSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSearch(allSuggestions[selectedIndex]);
        } else {
          handleSearch();
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Highlight matching text
  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="font-semibold text-[#18b3ab]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Remove recent search
  const removeRecentSearch = (search: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRecentSearches(recentSearches.filter((s) => s !== search));
  };

  return (
    <div className="bg-[#f0f4f5] py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="not-italic text-[24px] sm:text-[32px] lg:text-[40px] leading-[1.3] text-[#18b3ab] mb-3 sm:mb-4">
            Cari Informasi Kesehatan
          </h2>
          <p className="not-italic text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-neutral-600 max-w-3xl mx-auto px-4">
            Temukan informasi kesehatan, penyakit, gejala, dan layanan medis yang Anda butuhkan
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative" ref={suggestionsRef}>
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                  setSelectedIndex(-1);
                }}
                onFocus={() => setShowSuggestions(true)}
                onKeyDown={handleKeyDown}
                placeholder="Cari penyakit, gejala, atau layanan kesehatan..."
                className="w-full h-[50px] sm:h-[56px] lg:h-[60px] bg-[#f4fffe] rounded-[12px] sm:rounded-[15px] border border-black px-4 sm:px-5 lg:px-6 italic text-[14px] sm:text-[15px] lg:text-[16px] text-gray-700 placeholder:text-[#8c8c8c] focus:outline-none focus:ring-2 focus:ring-[#18b3ab] transition-all"
              />

              {/* Clear button */}
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setShowSuggestions(false);
                    inputRef.current?.focus();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              )}

              {/* Suggestions Dropdown */}
              <AnimatePresence>
                {showSuggestions && allSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[12px] sm:rounded-[15px] shadow-xl border border-gray-200 overflow-hidden z-50 max-h-[400px] overflow-y-auto"
                  >
                    {/* Header */}
                    <div className="px-4 py-2 border-b border-gray-100 flex items-center gap-2">
                      {searchQuery.trim() ? (
                        <>
                          <TrendingUp size={16} className="text-[#18b3ab]" />
                          <span className="text-xs font-medium text-gray-600">
                            Saran Pencarian
                          </span>
                        </>
                      ) : (
                        <>
                          <Clock size={16} className="text-gray-400" />
                          <span className="text-xs font-medium text-gray-600">
                            Pencarian Terakhir
                          </span>
                        </>
                      )}
                    </div>

                    {/* Suggestions List */}
                    <div className="py-1">
                      {allSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(suggestion)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full px-4 py-3 text-left flex items-center justify-between gap-3 transition-colors ${
                            selectedIndex === index
                              ? "bg-[#f0f4f5] text-[#18b3ab]"
                              : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            {searchQuery.trim() ? (
                              <Search size={16} className="text-gray-400 flex-shrink-0" />
                            ) : (
                              <Clock size={16} className="text-gray-400 flex-shrink-0" />
                            )}
                            <span className="text-[14px] sm:text-[15px] truncate">
                              {highlightMatch(suggestion, searchQuery)}
                            </span>
                          </div>
                          
                          {!searchQuery.trim() && (
                            <button
                              onClick={(e) => removeRecentSearch(suggestion, e)}
                              className="p-1 hover:bg-gray-200 rounded-full transition-colors flex-shrink-0"
                              aria-label={`Remove ${suggestion}`}
                            >
                              <X size={14} className="text-gray-400" />
                            </button>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Footer tip */}
                    {searchQuery.trim() && filteredSuggestions.length > 0 && (
                      <div className="px-4 py-2 border-t border-gray-100 text-xs text-gray-500 text-center">
                        Gunakan ↑ ↓ untuk navigasi, Enter untuk memilih
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleSearch()}
              className="bg-[#18b3ab] hover:bg-[#16a199] active:scale-95 transition-all duration-300 rounded-[12px] sm:rounded-[15px] px-6 sm:px-7 lg:px-8 h-[50px] sm:h-[56px] lg:h-[60px] flex items-center justify-center gap-2 text-white font-medium whitespace-nowrap text-[15px] sm:text-[16px] shadow-md hover:shadow-lg"
            >
              <Search size={18} className="sm:w-5 sm:h-5" />
              <span>Cari</span>
            </button>
          </div>

          {/* Popular Topics Quick Access */}
          {!searchQuery && !showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 flex flex-wrap gap-2 items-center justify-center"
            >
              <span className="text-sm text-gray-600">
                Topik Populer:
              </span>
              {["Diabetes", "Jantung", "COVID-19", "Hipertensi", "Stroke"].map(
                (topic) => (
                  <button
                    key={topic}
                    onClick={() => handleSearch(topic)}
                    className="bg-white hover:bg-[#18b3ab] hover:text-white border border-gray-200 hover:border-[#18b3ab] px-4 py-1.5 rounded-full text-sm transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {topic}
                  </button>
                )
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
