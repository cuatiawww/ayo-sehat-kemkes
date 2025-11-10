import { useState } from "react";
import { motion } from "framer-motion";
import CustomCalendar from "./CustomCalendar";

interface Campaign {
  id: number;
  title: string;
  image: string;
}

interface Publication {
  id: number;
  title: string;
  image: string;
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
  
  // Section visibility flags
  showCalendar?: boolean; // default true
  showRelatedArticles?: boolean; // untuk SiklusHidupPage
  showCampaigns?: boolean; // untuk ArtikelPage
  showPublications?: boolean;
  
  // Data for sections
  relatedArticles?: RelatedArticle[];
  campaigns?: Campaign[];
  publications?: Publication[];
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
}: RightSidebarProps) {
  const [currentCampaignIndex, setCurrentCampaignIndex] = useState(0);
  const [currentPublicationIndex, setCurrentPublicationIndex] = useState(0);

  // Default Kampanye Kesehatan Data (untuk ArtikelPage)
  const defaultCampaigns: Campaign[] = [
    {
      id: 1,
      title: "Cek Kesehatan Gratis (CKG) di Sekolah",
      image: "https://images.unsplash.com/photo-1712239009742-497ba0c4776d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 2,
      title: "Bulan Imunisasi Anak Nasional (BIAN) 2025",
      image: "https://images.unsplash.com/photo-1639401122143-5c3b82fef620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 3,
      title: "Gerakan Masyarakat Hidup Sehat (GERMAS)",
      image: "https://images.unsplash.com/photo-1621147977473-48979eaa0995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  // Default Media Publikasi Data
  const defaultPublications: Publication[] = [
    {
      id: 1,
      title: "Payung Hari Kesehatan Nasional\n(HKN) Ke-61",
      image: "https://images.unsplash.com/photo-1631543722888-01f8a17ebf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 2,
      title: "Infografis Pencegahan\nStunting 2025",
      image: "https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 3,
      title: "Panduan Imunisasi\nLengkap untuk Anak",
      image: "https://images.unsplash.com/photo-1631543722888-01f8a17ebf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 4,
      title: "Poster Kampanye\nGerakan Cuci Tangan",
      image: "https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 5,
      title: "Brosur Kesehatan\nIbu dan Anak",
      image: "https://images.unsplash.com/photo-1631543722888-01f8a17ebf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  const campaigns = customCampaigns || defaultCampaigns;
  const publications = customPublications || defaultPublications;

  return (
    <aside className={`space-y-6 lg:space-y-8 ${className}`}>
      {/* KALENDER KESEHATAN - Always Show */}
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

          {/* Custom Calendar Component */}
          <CustomCalendar />
        </motion.div>
      )}

      {/* ARTIKEL TERKAIT - Only for SiklusHidupPage */}
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

          {/* Artikel List with separators */}
          <div className="flex flex-col gap-[18px] sm:gap-[21px]">
            {relatedArticles.slice(0, 4).map((article) => (
              <div key={article.id}>
                {/* Separator */}
                <div className="bg-[#cccccc] h-px w-full mb-[18px] sm:mb-[21px]" />

                {/* Article Item */}
                <div className="flex gap-[12px] sm:gap-[18px] items-start cursor-pointer group">
                  {/* Image - 138x129 rounded-[10px] */}
                  <div className="h-[100px] w-[110px] sm:h-[129px] sm:w-[138px] rounded-[8px] sm:rounded-[10px] overflow-hidden shrink-0">
                    <img
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      src={article.image}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-[5px] sm:gap-[7px] flex-1 min-w-0">
                    {/* Tags with bullets - Truncate 1 line */}
                    <div className="font-['Poppins'] text-[#18b3ab] text-[10px] sm:text-[12px] leading-[16px] sm:leading-[18px] overflow-hidden whitespace-nowrap text-ellipsis">
                      <span>Bayi dan Balita (&lt; 5 Tahun)</span>
                      <span className="text-[13px] sm:text-[15px] leading-[24px] sm:leading-[30px]">
                        {" "}•{" "}
                      </span>
                      <span>Anak-anak (5-9 Tahun)</span>
                      <span className="text-[13px] sm:text-[15px] leading-[24px] sm:leading-[30px]">
                        {" "}•{" "}
                      </span>
                      <span>Remaja...</span>
                    </div>

                    {/* Title - Truncate 1 line */}
                    <p className="font-['Poppins'] text-[13px] sm:text-[15px] leading-[20px] sm:leading-[25px] text-neutral-600 group-hover:text-[#18b3ab] transition-colors duration-200 overflow-hidden whitespace-nowrap text-ellipsis">
                      {article.title}
                    </p>

                    {/* Description - Truncate 3 lines */}
                    <p className="font-['Poppins'] text-[11px] sm:text-[13px] leading-[17px] sm:leading-[20px] text-[#6b7280] line-clamp-3">
                      {article.description ||
                        "Informasi kesehatan penting untuk tahap perkembangan ini, mencakup nutrisi, vaksinasi, dan perawatan yang diperlukan untuk mendukung tumbuh kembang optimal."}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom separator */}
            <div className="bg-[#cccccc] h-px w-full" />
          </div>

          {/* Lainnya Button */}
          <div className="flex items-center justify-end">
            <button className="flex items-center gap-2 font-['Poppins'] text-[#18b3ab] text-[12px] leading-[24px] hover:text-[#16a199] transition-colors duration-200">
              <span>Lainnya</span>
              <div className="relative size-[18px]">
                <svg
                  className="absolute inset-0"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <g transform="translate(6.75, 4.5)">
                    <path
                      d="M0.5 0.5L4 4L0.5 7.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </motion.div>
      )}

      {/* KAMPANYE KESEHATAN - Only for ArtikelPage */}
      {showCampaigns && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-[20px] sm:gap-[24px]"
        >
          {/* Header with Lihat Detail */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-['Poppins'] text-[17px] sm:text-[18px] lg:text-[20px] text-[#08847e]">
              Kampanye Kesehatan
            </h3>

            {/* Description + Lihat Detail */}
            <div className="flex gap-[19px] items-end justify-between w-full">
              <p className="font-['Poppins'] text-[14px] text-[dimgrey] leading-[20px] flex-1">
                Informasi terkait dengan kampanye kesehatan yang sedang berlangsung
              </p>
              <button className="flex gap-[2px] items-center shrink-0 group">
                <span className="font-['Poppins'] text-[10px] leading-[30px] text-[#18b3ab] whitespace-nowrap">
                  Lihat Detail
                </span>
                <svg
                  className="w-[14px] h-[10px]"
                  fill="none"
                  viewBox="0 0 8 5"
                >
                  <path
                    d="M7.5 0.5L4 4L0.5 0.5"
                    stroke="#18B3AB"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Campaign Card */}
          <div className="relative h-[280px] w-full">
            {/* Border */}
            <div className="absolute inset-0 border border-[#cccccc] rounded-[15px]" />

            {/* Image - Top Section rounded-top-[15px] */}
            <div className="absolute top-0 left-0 right-0 h-[154px] rounded-t-[15px] overflow-hidden">
              <img
                alt={campaigns[currentCampaignIndex].title}
                className="w-full h-full object-cover"
                src={campaigns[currentCampaignIndex].image}
              />
            </div>

            {/* Title - Centered in white section */}
            <div className="absolute left-1/2 top-[201px] -translate-x-1/2 -translate-y-1/2 text-center px-4">
              <p className="font-['Poppins'] text-[18px] leading-[30px] text-neutral-600 whitespace-pre-line">
                {campaigns[currentCampaignIndex].title}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="absolute left-1/2 top-[248px] -translate-x-1/2 flex gap-[7px] items-center">
              {campaigns.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCampaignIndex(index)}
                  className={`w-[11px] h-[7px] rounded-full transition-colors duration-200 ${
                    index === currentCampaignIndex
                      ? "bg-[#18b3ab]"
                      : "bg-[#d9d9d9] hover:bg-[#c0c0c0]"
                  }`}
                  aria-label={`Campaign ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* MEDIA PUBLIKASI - For both ArtikelPage and SiklusHidupPage */}
      {showPublications && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-[20px] sm:gap-[24px]"
        >
          {/* Header with Lihat Detail */}
          <div className="flex flex-col gap-[24px]">
            <h3 className="font-['Poppins'] text-[17px] sm:text-[18px] lg:text-[20px] text-[#08847e]">
              Media Publikasi
            </h3>

            {/* Description + Lihat Detail */}
            <div className="flex gap-[19px] items-end justify-between w-full">
              <p className="font-['Poppins'] text-[14px] text-[dimgrey] leading-[20px] flex-1">
                Informasi terkait dengan media publikasi kesehatan yang tersedia
              </p>
              <button className="flex gap-[2px] items-center shrink-0 group">
                <span className="font-['Poppins'] text-[10px] leading-[30px] text-[#18b3ab] whitespace-nowrap">
                  Lihat Detail
                </span>
                <svg
                  className="w-[14px] h-[10px]"
                  fill="none"
                  viewBox="0 0 8 5"
                >
                  <path
                    d="M7.5 0.5L4 4L0.5 0.5"
                    stroke="#18B3AB"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Publication Card */}
          <div className="relative h-[280px] w-full">
            {/* Border */}
            <div className="absolute inset-0 border border-[#cccccc] rounded-[15px]" />

            {/* Image - Top Section rounded-top-[15px] */}
            <div className="absolute top-0 left-0 right-0 h-[154px] rounded-t-[15px] overflow-hidden">
              <img
                alt={publications[currentPublicationIndex].title}
                className="w-full h-full object-cover"
                src={publications[currentPublicationIndex].image}
              />
            </div>

            {/* Title - Centered in white section */}
            <div className="absolute left-1/2 top-[201px] -translate-x-1/2 -translate-y-1/2 text-center px-4">
              <p className="font-['Poppins'] text-[18px] leading-[30px] text-neutral-600 whitespace-pre-line">
                {publications[currentPublicationIndex].title}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="absolute left-1/2 top-[248px] -translate-x-1/2 flex gap-[7px] items-center">
              {publications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPublicationIndex(index)}
                  className={`w-[11px] h-[7px] rounded-full transition-colors duration-200 ${
                    index === currentPublicationIndex
                      ? "bg-[#18b3ab]"
                      : "bg-[#d9d9d9] hover:bg-[#c0c0c0]"
                  }`}
                  aria-label={`Publication ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </aside>
  );
}