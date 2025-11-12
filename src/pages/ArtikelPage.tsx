import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import CustomBreadcrumb from "../components/CustomBreadcrump";
import RightSidebar from "../components/RightSidebar";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  views: string;
  readTime: string;
  category: string;
  lifecycleStage: string;
}

interface ArtikelPageProps {
  onNavigateHome: () => void;
}

export default function ArtikelPage({ onNavigateHome }: ArtikelPageProps) {
  const articlesPerPage = 10;

  // ===== DATA =====
  const articles: Article[] = [
    {
      id: 1,
      title: "Tips Menerapkan Kebiasaan Tidur yang Baik untuk Si Kecil, Begini Caranya!",
      excerpt: "Tidur yang berkualitas sangat penting bagi tumbuh kembang anak. Pelajari cara membangun rutinitas tidur yang sehat untuk si kecil.",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "11 Sep 2025",
      views: "708",
      readTime: "3",
      category: "Cegah",
      lifecycleStage: "Bayi dan Balita (<5 tahun)",
    },
    {
      id: 2,
      title: "Program Keluarga Berencana untuk Menyongsong Generasi Emas 2045",
      excerpt: "Keluarga berencana adalah kunci untuk masa depan generasi yang lebih sehat dan berkualitas di Indonesia.",
      image: "https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "10 Sep 2025",
      views: "892",
      readTime: "5",
      category: "Cegah",
      lifecycleStage: "Dewasa (19-59 tahun)",
    },
    {
      id: 3,
      title: "Melihat Fakta Antara Kontrasepsi dan Kanker Payudara",
      excerpt: "Memahami hubungan antara penggunaan kontrasepsi hormonal dan risiko k  risiko kanker payudara berdasarkan penelitian terkini.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "9 Sep 2025",
      views: "1.234",
      readTime: "4",
      category: "Cegah",
      lifecycleStage: "Dewasa (19-59 tahun)",
    },
    {
      id: 4,
      title: "Tantangan di Balik Rendahnya Cakupan Imunisasi: Tinjauan dari Aspek Sosial, Budaya, Keyakinan, dan Arus Informasi",
      excerpt: "Mengungkap berbagai faktor yang mempengaruhi tingkat partisipasi masyarakat dalam program imunisasi nasional.",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "8 Sep 2025",
      views: "945",
      readTime: "6",
      category: "Cegah",
      lifecycleStage: "Bayi dan Balita (<5 tahun)",
    },
    {
      id: 5,
      title: "Membangun Generasi Sehat di Era Digital: Peran Vital Literasi Kesehatan",
      excerpt: "Di era informasi digital, literasi kesehatan menjadi kunci untuk membangun masyarakat yang sehat dan berdaya.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "7 Sep 2025",
      views: "1.567",
      readTime: "5",
      category: "Cegah",
      lifecycleStage: "Remaja (10-18 tahun)",
    },
    {
      id: 6,
      title: "Cek Kesehatan, Gaya Hidup Masa Kini Dan Kunci Sehat Menuju Masa Depan",
      excerpt: "Pemeriksaan kesehatan rutin adalah investasi terbaik untuk mencegah penyakit dan menjaga kualitas hidup.",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "6 Sep 2025",
      views: "2.103",
      readTime: "4",
      category: "Cegah",
      lifecycleStage: "Dewasa (19-59 tahun)",
    },
    {
      id: 7,
      title: "Campak dan Rubella Masih Ada, Tapi Anak Bisa Aman dengan Imunisasi Lengkap",
      excerpt: "Imunisasi MR adalah perlindungan terbaik untuk melindungi anak dari penyakit campak dan rubella yang berbahaya.",
      image: "https://images.unsplash.com/photo-1623668164261-6dd8555b661b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "5 Sep 2025",
      views: "876",
      readTime: "3",
      category: "Cegah",
      lifecycleStage: "Bayi dan Balita (<5 tahun)",
    },
    {
      id: 8,
      title: "Generasi Cemas Dan Rokok Ketengan: Ancaman Nyata Bagi Masa Depan Anak Bangsa",
      excerpt: "Fenomena rokok ketengan dan kesehatan mental generasi muda menjadi tantangan serius bagi masa depan Indonesia.",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "4 Sep 2025",
      views: "1.432",
      readTime: "5",
      category: "Cegah",
      lifecycleStage: "Remaja (10-18 tahun)",
    },
    {
      id: 9,
      title: "Apa Saja Gejala Demensia?",
      excerpt: "Mengenali gejala dini demensia sangat penting untuk penanganan yang lebih efektif dan perawatan yang tepat.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "3 Sep 2025",
      views: "1.089",
      readTime: "4",
      category: "Gejala",
      lifecycleStage: "Lansia (>60 tahun)",
    },
    {
      id: 10,
      title: "7 Kebiasaan Penting bagi Gen Z yang Membantu Tetap Sehat",
      excerpt: "Membangun kebiasaan sehat sejak muda adalah investasi terbaik untuk kesehatan jangka panjang Gen Z.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "2 Sep 2025",
      views: "2.456",
      readTime: "4",
      category: "Cegah",
      lifecycleStage: "Remaja (10-18 tahun)",
    },
    {
      id: 11,
      title: "Pentingnya Nutrisi Seimbang untuk Pertumbuhan Anak Usia Sekolah",
      excerpt: "Gizi yang tepat pada usia sekolah sangat mempengaruhi perkembangan fisik dan kognitif anak untuk masa depan mereka.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "1 Sep 2025",
      views: "1.678",
      readTime: "5",
      category: "Cegah",
      lifecycleStage: "Anak (5-9 tahun)",
    },
    {
      id: 12,
      title: "Mengenal Diabetes Gestasional: Risiko dan Pencegahan untuk Ibu Hamil",
      excerpt: "Diabetes gestasional perlu dideteksi dini dan dikelola dengan baik untuk kesehatan ibu dan janin.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "31 Agu 2025",
      views: "1.234",
      readTime: "6",
      category: "Gejala",
      lifecycleStage: "Dewasa (19-59 tahun)",
    },
    {
      id: 13,
      title: "Osteoporosis pada Lansia: Pencegahan Lebih Baik dari Pengobatan",
      excerpt: "Menjaga kesehatan tulang sejak dini adalah kunci mencegah osteoporosis di usia lanjut.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "30 Agu 2025",
      views: "987",
      readTime: "4",
      category: "Cegah",
      lifecycleStage: "Lansia (>60 tahun)",
    },
    {
      id: 14,
      title: "Menjaga Kesehatan Mental Remaja di Tengah Tekanan Akademik",
      excerpt: "Kesehatan mental remaja sama pentingnya dengan kesehatan fisik, terutama menghadapi tekanan pendidikan modern.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "29 Agu 2025",
      views: "2.145",
      readTime: "5",
      category: "Cegah",
      lifecycleStage: "Remaja (10-18 tahun)",
    },
    {
      id: 15,
      title: "ASI Eksklusif 6 Bulan: Manfaat Optimal untuk Tumbuh Kembang Bayi",
      excerpt: "ASI eksklusif memberikan nutrisi terbaik dan perlindungan alami untuk bayi di 6 bulan pertama kehidupan.",
      image: "https://images.unsplash.com/photo-1555252332-17b31b76c1d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "28 Agu 2025",
      views: "1.543",
      readTime: "4",
      category: "Cegah",
      lifecycleStage: "Bayi dan Balita (<5 tahun)",
    },
  ];

  const popularTopics = [
    { id: 1, text: "imunisasi", column: 1 },
    { id: 2, text: "kipi", column: 2 },
    { id: 3, text: "cek kesehatan gratis", column: 1 },
    { id: 4, text: "penyakit kardiovaskular", column: 2 },
    { id: 5, text: "kanker serviks", column: 1 },
    { id: 6, text: "penyakit jantung", column: 2 },
    { id: 7, text: "kesehatan mental", column: 1 },
    { id: 8, text: "kesulitan tidur", column: 2 },
  ];

  const lifecycleStages = ["Bayi dan Balita", "Anak-Anak", "Remaja", "Dewasa", "Lansia"];
  const sortOptions = ["Terbaru", "Terlama", "Paling Populer"];

  // ===== STATE FILTER =====
  const [activeTab, setActiveTab] = useState<string>("Semua");
  const [selectedLifecycle, setSelectedLifecycle] = useState<string>("Dewasa");
  const [selectedTopic, setSelectedTopic] = useState<string>("Topik Kesehatan");
  const [selectedSort, setSelectedSort] = useState<string>("Terbaru");
  const [currentPage, setCurrentPage] = useState(1);
  const [showLifecycleDropdown, setShowLifecycleDropdown] = useState(false);
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // ===== FILTER & SORT LOGIC =====
  const filteredAndSortedArticles = articles
    .filter((article) => {
      if (activeTab !== "Semua" && article.category !== activeTab) return false;
      if (selectedLifecycle !== "Dewasa" && !article.lifecycleStage.includes(selectedLifecycle)) return false;
      if (
        selectedTopic !== "Topik Kesehatan" &&
        !article.title.toLowerCase().includes(selectedTopic.toLowerCase()) &&
        !article.excerpt.toLowerCase().includes(selectedTopic.toLowerCase())
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      if (selectedSort === "Terbaru") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (selectedSort === "Terlama") return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (selectedSort === "Paling Populer") {
        return parseInt(b.views.replace(/\./g, "")) - parseInt(a.views.replace(/\./g, ""));
      }
      return 0;
    });

  // ===== PAGINATION =====
  const totalPages = Math.ceil(filteredAndSortedArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredAndSortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ===== SEO =====
  useEffect(() => {
    document.title = "Artikel Ayo Sehat - Kumpulan Informasi Kesehatan Lengkap";
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Artikel Ayo Sehat",
    description: "Kumpulan artikel kesehatan terlengkap dari bayi hingga lansia. Temukan tips cegah, deteksi, dan pengobatan berdasarkan tahap kehidupan.",
    url: "https://ayosehat.example.com/page/artikel",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://ayosehat.example.com/" },
        { "@type": "ListItem", position: 2, name: "Artikel", item: "https://ayosehat.example.com/page/artikel" },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>Artikel Ayo Sehat - Informasi Kesehatan Lengkap untuk Semua Usia</title>
        <meta
          name="description"
          content="Temukan artikel kesehatan terbaru tentang pencegahan, deteksi, dan pengobatan sesuai siklus hidup: bayi, anak, remaja, dewasa, lansia."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Artikel Ayo Sehat" />
        <meta property="og:description" content="Pendekatan menjaga kesehatan sejak lahir hingga lanjut usia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ayosehat.example.com/page/artikel" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ayosehat.example.com/page/artikel" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <CustomBreadcrumb onNavigateHome={onNavigateHome} currentPage="Artikel" />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#18b3ab] to-[#15a098] py-12 sm:py-16 lg:py-20 pb-32 sm:pb-40 lg:pb-48 overflow-visible">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-[600px]">
              <h1 className="font-['Poppins'] font-bold text-[36px] sm:text-[42px] lg:text-[48px] xl:text-[52px] leading-[1.2] text-white mb-4 sm:mb-5">
                Artikel Ayo Sehat
              </h1>
              <p className="font-['Poppins'] font-normal text-[15px] sm:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.6] text-white/90">
                Pendekatan menjaga kesehatan sejak lahir hingga lanjut usia, dengan perhatian khusus sesuai kebutuhan di setiap tahap usia.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute right-[5%] lg:right-[8%] bottom-[-80px] sm:bottom-[-100px] lg:bottom-[-120px] hidden lg:block z-10"
          >
            <div className="relative w-[480px] xl:w-[580px] aspect-[4/3] rounded-[20px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Dokter sedang bekerja di depan komputer - Artikel Ayo Sehat"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* Topik Populer */}
        <section className="relative bg-white pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="max-w-[900px]">
              <h2 className="font-['Poppins'] font-semibold text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.3] text-neutral-800 mb-6 sm:mb-8">
                Topik yang Banyak Dicari
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-3 sm:gap-y-4">
                {popularTopics.map((topic, index) => (
                  <motion.button
                    key={topic.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="text-left font-['Poppins'] text-[13px] sm:text-[14px] lg:text-[15px] text-[#18b3ab] bg-white border border-[#18b3ab]/20 hover:border-[#18b3ab] hover:bg-[#18b3ab]/5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                  >
                    # {topic.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 sm:py-12 lg:py-16 bg-white border-t border-gray-100">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 lg:gap-12">
              <div className="space-y-6 sm:space-y-8">
                {/* Filter Tabs & Dropdowns */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-gray-200">
                  {/* Tabs */}
                  <div className="flex gap-[8px] items-start flex-wrap">
                    <button
                      onClick={() => setActiveTab("Semua")}
                      className={`flex gap-[8px] items-center justify-center px-[12px] py-[8px] h-[41px] rounded-tl-[7px] rounded-tr-[7px] transition-all duration-200 ${
                        activeTab === "Semua"
                          ? "bg-[#18b3ab] text-white"
                          : "bg-white border border-[#d9d9d9] hover:border-[#18b3ab]/50"
                      }`}
                    >
                      <div className="relative shrink-0 size-[17px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 13 15">
                          <path d="M8.97563 10.0438H3.86147" stroke={activeTab === "Semua" ? "white" : "#18b3ab"} strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8.97563 7.07836H3.86147" stroke={activeTab === "Semua" ? "white" : "#18b3ab"} strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5.813 4.1198H3.86154" stroke={activeTab === "Semua" ? "white" : "#18b3ab"} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveTab("Cegah")}
                      className={`px-[12px] py-[8px] h-[41px] rounded-tl-[7px] rounded-tr-[7px] transition-all duration-200 ${
                        activeTab === "Cegah" ? "bg-[#18b3ab] text-white" : "bg-white border border-[#d9d9d9] text-neutral-600 hover:border-[#18b3ab]/50"
                      }`}
                    >
                      <p className="font-['Poppins'] font-semibold text-[14px] leading-normal text-center w-[71px]">Cegah</p>
                    </button>

                    <button
                      onClick={() => setActiveTab("Deteksi")}
                      className={`px-[12px] py-[8px] h-[41px] rounded-tl-[7px] rounded-tr-[7px] transition-all duration-200 ${
                        activeTab === "Deteksi" ? "bg-[#18b3ab] text-white" : "bg-white border border-[#d9d9d9] text-neutral-600 hover:border-[#18b3ab]/50"
                      }`}
                    >
                      <p className="font-['Poppins'] font-semibold text-[14px] leading-normal text-center w-[80px]">Deteksi</p>
                    </button>

                    <button
                      onClick={() => setActiveTab("Pengobatan")}
                      className={`px-[12px] py-[8px] h-[41px] rounded-tl-[7px] rounded-tr-[7px] transition-all duration-200 ${
                        activeTab === "Pengobatan" ? "bg-[#18b3ab] text-white" : "bg-white border border-[#d9d9d9] text-neutral-600 hover:border-[#18b3ab]/50"
                      }`}
                    >
                      <p className="font-['Poppins'] font-semibold text-[14px] leading-normal text-center w-[120px]">Pengobatan</p>
                    </button>
                  </div>

                  {/* Dropdowns */}
                  <div className="flex gap-[10px] items-center flex-wrap">
                    {/* Lifecycle */}
                    <div className="relative">
                      <div
                        className="relative rounded-[4px] shrink-0 cursor-pointer hover:border-[#18b3ab]/50 transition-colors"
                        onClick={() => {
                          setShowLifecycleDropdown(!showLifecycleDropdown);
                          setShowTopicDropdown(false);
                          setShowSortDropdown(false);
                        }}
                      >
                        <div className="box-border flex gap-[10px] items-center px-[8px] py-0 relative rounded-[inherit]">
                          <p className="font-['Poppins'] text-[12px] leading-[18px] text-[#666666] whitespace-pre">{selectedLifecycle}</p>
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                              <path d="M7 10L12 15L17 10H7Z" fill="#18B3AB" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute border border-[#cccccc] inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                      {showLifecycleDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-[4px] shadow-lg z-50 min-w-[160px]">
                          {lifecycleStages.map((stage) => (
                            <button
                              key={stage}
                              onClick={() => {
                                setSelectedLifecycle(stage);
                                setShowLifecycleDropdown(false);
                              }}
                              className="w-full text-left px-3 py-2 font-['Poppins'] text-[12px] text-[#666666] hover:bg-[#18b3ab]/10 hover:text-[#18b3ab]"
                            >
                              {stage}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Topic */}
                    <div className="relative">
                      <div
                        className="relative rounded-[4px] shrink-0 cursor-pointer hover:border-[#18b3ab]/50 transition-colors"
                        onClick={() => {
                          setShowTopicDropdown(!showTopicDropdown);
                          setShowLifecycleDropdown(false);
                          setShowSortDropdown(false);
                        }}
                      >
                        <div className="box-border flex gap-[10px] items-center px-[8px] py-0 relative rounded-[inherit]">
                          <p className="font-['Poppins'] text-[12px] leading-[18px] text-[#666666] whitespace-pre">{selectedTopic}</p>
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                              <path d="M7 10L12 15L17 10H7Z" fill="#18B3AB" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute border border-[#cccccc] inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                      {showTopicDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-[4px] shadow-lg z-50 min-w-[180px]">
                          <button
                            onClick={() => {
                              setSelectedTopic("Topik Kesehatan");
                              setShowTopicDropdown(false);
                            }}
                            className="w-full text-left px-3 py-2 font-['Poppins'] text-[12px] text-[#666666] hover:bg-[#18b3ab]/10 hover:text-[#18b3ab] border-b border-gray-100"
                          >
                            Topik Kesehatan
                          </button>
                          {popularTopics.map((topic) => (
                            <button
                              key={topic.id}
                              onClick={() => {
                                setSelectedTopic(topic.text);
                                setShowTopicDropdown(false);
                              }}
                              className="w-full text-left px-3 py-2 font-['Poppins'] text-[12px] text-[#666666] hover:bg-[#18b3ab]/10 hover:text-[#18b3ab] capitalize"
                            >
                              {topic.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Sort */}
                    <div className="relative">
                      <div
                        className="relative rounded-[4px] shrink-0 cursor-pointer hover:border-[#18b3ab]/50 transition-colors"
                        onClick={() => {
                          setShowSortDropdown(!showSortDropdown);
                          setShowLifecycleDropdown(false);
                          setShowTopicDropdown(false);
                        }}
                      >
                        <div className="box-border flex gap-[10px] items-center px-[8px] py-0 relative rounded-[inherit]">
                          <p className="font-['Poppins'] text-[12px] leading-[18px] text-[#666666] whitespace-pre">{selectedSort}</p>
                          <div className="relative shrink-0 size-[24px]">
                            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                              <path d="M7 10L12 15L17 10H7Z" fill="#18B3AB" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute border border-[#cccccc] inset-0 pointer-events-none rounded-[4px]" />
                      </div>
                      {showSortDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-[4px] shadow-lg z-50 min-w-[140px]">
                          {sortOptions.map((option) => (
                            <button
                              key={option}
                              onClick={() => {
                                setSelectedSort(option);
                                setShowSortDropdown(false);
                              }}
                              className="w-full text-left px-3 py-2 font-['Poppins'] text-[12px] text-[#666666] hover:bg-[#18b3ab]/10 hover:text-[#18b3ab]"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Articles */}
                {currentArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative"
                  >
                    <div className="relative w-full rounded-[15px] border border-[lightgrey] hover:border-[#18b3ab]/40 transition-all duration-300 hover:shadow-lg overflow-hidden">
                      {/* Mobile Layout */}
                      <div className="flex flex-col lg:hidden">
                        <div className="w-full h-[200px] sm:h-[240px]">
                          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
                          <div className="flex gap-2.5 items-center flex-wrap">
                            <p className="font-['Poppins'] text-[11px] sm:text-[12px] leading-[18px] text-[#18b3ab]">{article.lifecycleStage}</p>
                            <div className="w-[4px] h-[4px] rounded-full bg-[#18b3ab] shrink-0" />
                            <p className="font-['Poppins'] text-[11px] sm:text-[12px] leading-[18px] text-[#18b3ab]">{article.category}</p>
                          </div>
                          <div className="font-['Poppins'] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-neutral-600">
                            <button className="text-left hover:text-[#18b3ab] hover:underline transition-all duration-200 line-clamp-2">{article.title}</button>
                          </div>
                          <p className="font-['Poppins'] text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] text-neutral-600 line-clamp-2">{article.excerpt}</p>
                          <div className="flex gap-2.5 sm:gap-3 items-center flex-wrap">
                            <p className="font-['Poppins'] text-[11px] sm:text-[12px] leading-[18px] text-[dimgrey]">{article.date}</p>
                            <div className="w-[3px] h-[3px] rounded-full bg-[dimgrey]" />
                            <p className="font-['Poppins'] text-[11px] sm:text-[12px] leading-[18px] text-[dimgrey]">{article.views} views</p>
                            <div className="w-[3px] h-[3px] rounded-full bg-[dimgrey]" />
                            <p className="font-['Poppins'] text-[11px] sm:text-[12px] leading-[18px] text-[dimgrey]">{article.readTime} min</p>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden lg:block relative h-[192px]">
                        <div className="absolute left-0 top-0 h-[192px] w-[349px] rounded-l-[15px] overflow-hidden">
                          <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="absolute left-[383px] top-[22px] right-[20px] flex flex-col gap-[8px]">
                          <div className="flex gap-[11px] items-center">
                            <p className="font-['Poppins'] text-[12px] leading-[18px] text-[#18b3ab] whitespace-nowrap">{article.lifecycleStage}</p>
                            <div className="w-[4px] h-[4px] rounded-full bg-[#18b3ab] shrink-0" />
                            <p className="font-['Poppins'] text-[12px] leading-[18px] text-[#18b3ab] whitespace-nowrap">{article.category}</p>
                          </div>
                          <div className="font-['Poppins'] text-[18px] sm:text-[20px] lg:text-[22px] leading-[30px] text-neutral-600">
                            <button className="text-left hover:text-[#18b3ab] hover:underline transition-all duration-200 line-clamp-2">{article.title}</button>
                          </div>
                          <p className="font-['Poppins'] text-[14px] sm:text-[16px] lg:text-[18px] leading-[30px] text-neutral-600 line-clamp-1">{article.excerpt}</p>
                          <div className="flex gap-[14px] items-center flex-wrap">
                            <p className="font-['Poppins'] text-[12px] leading-[18px] text-[dimgrey]">{article.date}</p>
                            <div className="w-[4px] h-[4px] rounded-[2px] bg-[dimgrey]" />
                            <p className="font-['Poppins'] text-[12px] leading-[18px] text-[dimgrey]">Dilihat {article.views} Kali</p>
                            <div className="w-[4px] h-[4px] rounded-[2px] bg-[dimgrey]" />
                            <p className="font-['Poppins'] text-[12px] leading-[18px] text-[dimgrey]">Waktu Baca {article.readTime} Menit</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 pt-8">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-gray-300 hover:border-[#18b3ab] hover:bg-[#18b3ab]/5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`px-4 py-2 rounded-lg font-['Poppins'] text-[14px] transition-all duration-200 ${
                        currentPage === number ? "bg-[#18b3ab] text-white" : "border border-gray-300 text-gray-700 hover:border-[#18b3ab] hover:bg-[#18b3ab]/5"
                      }`}
                    >
                      {number}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-gray-300 hover:border-[#18b3ab] hover:bg-[#18b3ab]/5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <RightSidebar showCalendar={true} showCampaigns={true} showPublications={true} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}