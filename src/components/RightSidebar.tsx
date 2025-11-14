/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomCalendar from "./CustomCalendar";

interface Campaign {
  id: number;
  title: string;
  type?: string; // Opsional untuk kompatibilitas
  image: string;
  alt?: string; // Opsional, fallback jika custom data tidak punya
  width?: number; // Opsional
  height?: number; // Opsional
}

interface Publication {
  id: number;
  title: string;
  type?: string; // Opsional untuk kompatibilitas
  image: string;
  alt?: string; // Opsional
  width?: number; // Opsional
  height?: number; // Opsional
}

interface RelatedArticle {
  id: number;
  title: string;
  description?: string;
  image: string;
  date?: string;
  readTime?: string;
}

interface RightSidebarProps {
  className?: string;
  showCalendar?: boolean;
  showRelatedArticles?: boolean;
  showCampaigns?: boolean;
  showPublications?: boolean;
  relatedArticles?: RelatedArticle[];
  campaigns?: Campaign[];
  publications?: Publication[];
  onCampaignDetailClick?: () => void;
  onPublicationDetailClick?: () => void;
  onRelatedArticlesClick?: () => void;
}

interface SliderCardProps {
  items: (Campaign | Publication)[]; // Union type untuk fleksibilitas
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  nextSlide: () => void; // Tidak return apa-apa
  prevSlide: () => void; // Tidak return apa-apa
}

export default function RightSidebar({
  className = "",
  showCalendar = true,
  showRelatedArticles = false,
  showCampaigns = false,
  showPublications = false,
  relatedArticles = [],
  campaigns: customCampaigns,
  publications: customPublications,
  onCampaignDetailClick,
  onPublicationDetailClick,
  onRelatedArticlesClick,
}: RightSidebarProps) {
  const [currentCampaignIndex, setCurrentCampaignIndex] = useState(0);
  const [currentPublicationIndex, setCurrentPublicationIndex] = useState(0);

  // === DEFAULT CAMPAIGNS (SEO-OPTIMIZED) ===
  const defaultCampaigns: Campaign[] = [
    {
      id: 1,
      title: "Cek Kesehatan Gratis (CKG) di Sekolah",
      type: "campaign",
      image: "https://images.unsplash.com/photo-1712239009742-497ba0c4776d?auto=format&fit=crop&w=800&q=80",
      alt: "Anak-anak sedang diperiksa dokter di sekolah dalam program Cek Kesehatan Gratis (CKG) Kemenkes RI",
      width: 800,
      height: 600,
    },
    {
      id: 2,
      title: "Bulan Imunisasi Anak Nasional (BIAN) 2025",
      type: "campaign",
      image: "https://images.unsplash.com/photo-1639401122143-5c3b82fef620?auto=format&fit=crop&w=800&q=80",
      alt: "Petugas kesehatan memberikan vaksin kepada bayi dalam program BIAN 2025 Kementerian Kesehatan",
      width: 800,
      height: 600,
    },
    {
      id: 3,
      title: "Gerakan Masyarakat Hidup Sehat (GERMAS)",
      type: "campaign",
      image: "https://images.unsplash.com/photo-1621147977473-48979eaa0995?auto=format&fit=crop&w=800&q=80",
      alt: "Keluarga berolahraga bersama di taman dalam kampanye GERMAS untuk hidup sehat",
      width: 800,
      height: 600,
    },
  ];

  // === DEFAULT PUBLICATIONS (SEO-OPTIMIZED) ===
  const defaultPublications: Publication[] = [
    {
      id: 1,
      title: "Payung Hari Kesehatan Nasional (HKN) Ke-61",
      type: "publication",
      image: "https://images.unsplash.com/photo-1631543722888-01f8a17ebf3f?auto=format&fit=crop&w=800&q=80",
      alt: "Payung warna-warni bertuliskan HKN Ke-61 di acara Hari Kesehatan Nasional Kemenkes",
      width: 800,
      height: 600,
    },
    {
      id: 2,
      title: "Infografis Pencegahan Stunting 2025",
      type: "publication",
      image: "https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?auto=format&fit=crop&w=800&q=80",
      alt: "Infografis resmi pencegahan stunting tahun 2025 dari Kementerian Kesehatan RI",
      width: 800,
      height: 600,
    },
    {
      id: 3,
      title: "Panduan Imunisasi Lengkap untuk Anak",
      type: "publication",
      image: "https://images.unsplash.com/photo-1631543722888-01f8a17ebf3f?auto=format&fit=crop&w=800&q=80",
      alt: "Panduan lengkap jadwal imunisasi anak dari bayi hingga remaja oleh Kemenkes",
      width: 800,
      height: 600,
    },
    {
      id: 4,
      title: "Poster Kampanye Gerakan Cuci Tangan",
      type: "publication",
      image: "https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?auto=format&fit=crop&w=800&q=80",
      alt: "Poster edukasi 6 langkah cuci tangan pakai sabun untuk cegah penyakit menular",
      width: 800,
      height: 600,
    },
    {
      id: 5,
      title: "Brosur Kesehatan Ibu dan Anak",
      type: "publication",
      image: "https://images.unsplash.com/photo-1631543722888-01f8a17ebf3f?auto=format&fit=crop&w=800&q=80",
      alt: "Brosur informasi kesehatan ibu hamil, menyusui, dan tumbuh kembang anak",
      width: 800,
      height: 600,
    },
  ];

  const campaigns = customCampaigns || defaultCampaigns;
  const publications = customPublications || defaultPublications;

  const nextSlide = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    current: number,
    total: number
  ) => {
    setter((current + 1) % total);
  };

  const prevSlide = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    current: number,
    total: number
  ) => {
    setter((current - 1 + total) % total);
  };

  const handleCampaignDetail = () => {
    onCampaignDetailClick?.() || console.log("Navigate to campaign details");
  };

  const handlePublicationDetail = () => {
    onPublicationDetailClick?.() || console.log("Navigate to publication details");
  };

  const handleRelatedArticles = () => {
    onRelatedArticlesClick?.() || console.log("Navigate to related articles");
  };


  return (
    <aside className={`space-y-6 lg:space-y-8 ${className}`}>
      {/* KALENDER KESEHATAN */}
      {showCalendar && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-['Poppins'] text-[17px] sm:text-[18px] lg:text-[20px] text-[#18b3ab] mb-2">
            Kalender Kesehatan
          </h3>
          <p className="font-['Poppins'] text-[12px] sm:text-[13px] lg:text-[14px] text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            Informasi terkait dengan hari besar dan agenda kesehatan satu tahun penuh
          </p>
          <CustomCalendar />
        </motion.div>
      )}

      {/* ARTIKEL TERKAIT */}
      {showRelatedArticles && relatedArticles.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-[20px] sm:gap-[24px]"
        >
          <h3 className="font-['Poppins'] text-[17px] sm:text-[18px] lg:text-[20px] text-[#08847e]">
            Artikel Terkait
          </h3>
          <div className="flex flex-col gap-[18px] sm:gap-[21px]">
            {relatedArticles.slice(0, 4).map((article) => (
              <div key={article.id}>
                <div className="bg-[#cccccc] h-px w-full mb-[18px] sm:mb-[21px]" />
                <div className="flex gap-[12px] sm:gap-[18px] items-start cursor-pointer group">
                  <div className="h-[100px] w-[110px] sm:h-[129px] sm:w-[138px] rounded-[8px] sm:rounded-[10px] overflow-hidden shrink-0">
                    <img
                      src={article.image}
                      alt={`${article.title} - Artikel kesehatan terkait`}
                      title={article.title}
                      width={138}
                      height={129}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] sm:gap-[7px] flex-1 min-w-0">
                    <div className="font-['Poppins'] text-[#18b3ab] text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] overflow-hidden whitespace-nowrap text-ellipsis">
                      <span>Bayi dan Balita (&lt; 5 Tahun)</span>
                      <span className="text-[13px] sm:text-[15px]"> • </span>
                      <span>Anak-anak (5-9 Tahun)</span>
                      <span className="text-[13px] sm:text-[15px]"> • </span>
                      <span>Remaja...</span>
                    </div>
                    <p className="font-['Poppins'] text-[13px] sm:text-[15px] leading-[20px] sm:leading-[25px] text-neutral-600 group-hover:text-[#18b3ab] line-clamp-1">
                      {article.title}
                    </p>
                    <p className="font-['Poppins'] text-[11px] sm:text-[13px] leading-[17px] sm:leading-[20px] text-[#6b7280] line-clamp-3">
                      {article.description || "Informasi kesehatan penting untuk tahap perkembangan ini..."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-[#cccccc] h-px w-full" />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleRelatedArticles}
              className="flex items-center gap-2 text-[#18b3ab] text-[12px] hover:text-[#16a199] transition-colors"
            >
              <span>Lainnya</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18">
                <path d="M6.75 4.5L10.25 9L6.75 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}

      {/* KAMPANYE KESEHATAN */}
      {showCampaigns && campaigns.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 sm:mt-6"
        >
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex-1">
              <h3 className="font-['Poppins'] text-[17px] sm:text-[18px] lg:text-[20px] text-[#18b3ab] mb-2">
                Kampanye Kesehatan
              </h3>
              <p className="font-['Poppins'] text-[12px] sm:text-[13px] text-gray-600">
                Informasi terkait dengan kampanye kesehatan yang sedang berlangsung
              </p>
            </div>
            <button
              onClick={handleCampaignDetail}
              className="flex items-center gap-1 text-[#18b3ab] text-[10px] hover:text-[#16a199] transition-colors whitespace-nowrap ml-3"
            >
              Lihat Detail
              <svg className="w-3 h-3" fill="none" viewBox="0 0 5 8">
                <path d="M0.5 0.5L4 4L0.5 7.5" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/*onClick*/}
          <SliderCard
            items={campaigns}
            currentIndex={currentCampaignIndex}
            setCurrentIndex={setCurrentCampaignIndex}
            nextSlide={() => nextSlide(setCurrentCampaignIndex, currentCampaignIndex, campaigns.length)}
            prevSlide={() => prevSlide(setCurrentCampaignIndex, currentCampaignIndex, campaigns.length)}
          />
        </motion.div>
      )}

      {/* MEDIA PUBLIKASI */}
      {showPublications && publications.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 sm:mt-6"
        >
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex-1">
              <h3 className="font-['Poppins'] text-[17px] sm:text-[18px] lg:text-[20px] text-[#18b3ab] mb-2">
                Media Publikasi
              </h3>
              <p className="font-['Poppins'] text-[12px] sm:text-[13px] text-gray-600">
                Informasi terkait dengan media publikasi kesehatan yang tersedia
              </p>
            </div>
            <button
              onClick={handlePublicationDetail}
              className="flex items-center gap-1 text-[#18b3ab] text-[10px] hover:text-[#16a199] transition-colors whitespace-nowrap ml-3"
            >
              Lihat Detail
              <svg className="w-3 h-3" fill="none" viewBox="0 0 5 8">
                <path d="M0.5 0.5L4 4L0.5 7.5" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <SliderCard
            items={publications}
            currentIndex={currentPublicationIndex}
            setCurrentIndex={setCurrentPublicationIndex}
            nextSlide={() => nextSlide(setCurrentPublicationIndex, currentPublicationIndex, publications.length)}
            prevSlide={() => prevSlide(setCurrentPublicationIndex, currentPublicationIndex, publications.length)}
          />
        </motion.div>
      )}
    </aside>
  );
}

// === SLIDER CARD
function SliderCard({ items, currentIndex, setCurrentIndex, nextSlide, prevSlide }: SliderCardProps) {
  return (
    <div className="relative group bg-white rounded-[12px] sm:rounded-[15px] border border-[#d2d2d2] overflow-hidden h-[300px] sm:h-[320px] lg:h-[338px]">
      <div className="relative h-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => {
            const imgProps = getImageProps(item); // FIXED: Gunakan helper untuk fallback

            return (
              <div key={item.id} className="w-full flex-shrink-0 h-full">
                <div className="bg-white rounded-[3.75px] shadow-[1px_3px_6px_0px_rgba(0,0,0,0.2)] hover:shadow-[2px_4px_8px_0px_rgba(0,0,0,0.25)] transition-shadow duration-300 h-full flex flex-col cursor-pointer">
                  <div className="relative h-[180px] sm:h-[200px] lg:h-[220px] overflow-hidden">
                    <img
                      src={imgProps.image}
                      alt={imgProps.alt}
                      title={imgProps.title}
                      width={imgProps.width}
                      height={imgProps.height}
                      srcSet={`
                        ${imgProps.image.replace('&w=800', '&w=400')} 400w,
                        ${imgProps.image.replace('&w=800', '&w=600')} 600w,
                        ${imgProps.image} 800w,
                        ${imgProps.image.replace('&w=800', '&w=1200')} 1200w
                      `}
                      sizes="(max-width: 640px) 400px, (max-width: 1024px) 600px, 800px"
                      loading="lazy"
                      fetchPriority={index === 0 ? "high" : "low"}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-white flex items-center justify-center flex-1">
                    <p className="font-medium text-[12px] sm:text-[13px] lg:text-[16px] leading-tight text-[#18b3ab] text-center line-clamp-3 hover:text-[#16a199] transition-colors">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all z-10 sm:opacity-0 sm:group-hover:opacity-100"
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all z-10 sm:opacity-0 sm:group-hover:opacity-100"
        aria-label="Slide berikutnya"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-[#18b3ab] w-2 h-2"
                : "bg-black/20 hover:bg-black/40 w-2 h-2"
            }`}
            aria-label={`Pergi ke slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// === HELPER UNTUK FALLBACK (Dari SliderCard, tapi global) ===
function getImageProps(item: Campaign | Publication) {
  return {
    alt: item.alt || `${item.title} - Kampanye Kesehatan Kemenkes RI`,
    width: item.width || 800,
    height: item.height || 600,
    image: item.image,
    title: item.title,
  };
}