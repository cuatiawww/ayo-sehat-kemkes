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
      excerpt: "Memahami hubungan antara penggunaan kontrasepsi hormonal dan risiko kanker payudara berdasarkan penelitian terkini.",
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

  const ogImageUrl = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Artikel Ayo Sehat",
    description: "Kumpulan artikel kesehatan terlengkap dari bayi hingga lansia. Temukan tips cegah, deteksi, dan pengobatan berdasarkan tahap kehidupan.",
    url: "https://staging-ayo-sehat.vercel.app/page/artikel",
    image: {
      "@type": "ImageObject",
      url: ogImageUrl,
      width: 1200,
      height: 630,
      caption: "Artikel Kesehatan Ayo Sehat - Kemenkes",
      contentUrl: ogImageUrl,
      inLanguage: "id-ID",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://staging-ayo-sehat.vercel.app/" },
        { "@type": "ListItem", position: 2, name: "Artikel", item: "https://staging-ayo-sehat.vercel.app/page/artikel" },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          image: article.image,
          datePublished: article.date.replace(/(\d+) (\w+) (\d+)/, "$3-$2-$1"),
          author: { "@type": "Organization", name: "Kemenkes Ayo Sehat" },
        },
      })),
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
        <link rel="canonical" href="https://staging-ayo-sehat.vercel.app/page/artikel" />

        {/* Open Graph */}
        <meta property="og:title" content="Artikel Ayo Sehat - Kemenkes" />
        <meta property="og:description" content="Pendekatan menjaga kesehatan sejak lahir hingga lanjut usia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://staging-ayo-sehat.vercel.app/page/artikel" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Dokter sedang bekerja di depan komputer - Artikel Ayo Sehat" />
        <meta property="og:image:title" content="Artikel Kesehatan Ayo Sehat" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artikel Ayo Sehat - Kemenkes" />
        <meta name="twitter:description" content="Pendekatan menjaga kesehatan sejak lahir hingga lanjut usia." />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:alt" content="Artikel Kesehatan Ayo Sehat" />
        <meta name="twitter:image:title" content="Artikel Kesehatan Ayo Sehat" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <CustomBreadcrumb onNavigateHome={onNavigateHome} currentPage="Artikel" />

        {/* HERO - RESPONSIVE */}
        <section className="relative bg-gradient-to-b from-[#18b3ab] to-[#15a098] py-10 sm:py-14 lg:py-20 overflow-hidden">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-full sm:max-w-[600px]"
            >
              <h1 className="font-bold text-[28px] xs:text-[32px] sm:text-[38px] lg:text-[48px] leading-tight text-white mb-3 sm:mb-4">
                Artikel Ayo Sehat
              </h1>
              <p className="text-[14px] xs:text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed text-white/90">
                Pendekatan menjaga kesehatan sejak lahir hingga lanjut usia, dengan perhatian khusus sesuai kebutuhan di setiap tahap usia.
              </p>
            </motion.div>
          </div>

          {/* GAMBAR HERO HANYA MUNcul DI DESKTOP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute right-0 bottom-[-60px] sm:bottom-[-80px] lg:bottom-[-120px] hidden lg:block z-10"
          >
            <div className="w-[300px] sm:w-[400px] lg:w-[480px] xl:w-[580px] aspect-[4/3] rounded-[16px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={ogImageUrl}
                alt="Dokter sedang bekerja"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </section>

        {/* TOPIK POPULER - 1 KOLOM DI MOBILE */}
        <section className="bg-white py-10 sm:py-12 lg:py-16">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-semibold text-[24px] xs:text-[26px] sm:text-[30px] lg:text-[36px] text-neutral-800 mb-5 sm:mb-6">
                Topik yang Banyak Dicari
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {popularTopics.map((topic, index) => (
                  <motion.button
                    key={topic.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="text-left text-[13px] xs:text-[14px] sm:text-[15px] text-[#18b3ab] bg-white border border-[#18b3ab]/20 hover:border-[#18b3ab] hover:bg-[#18b3ab]/5 px-4 py-3 rounded-lg transition-all duration-200 hover:shadow-sm"
                  >
                    # {topic.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-gray-100">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-6 lg:gap-10">

              {/* KIRI: ARTIKEL */}
              <div className="space-y-6">

                {/* FILTER TABS & DROPDOWNS */}
                <div className="flex flex-col gap-4 pb-5 border-b border-gray-200">
                  {/* TABS */}
                  <div className="flex gap-2 flex-wrap">
                    {["Semua", "Cegah", "Deteksi", "Pengobatan"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex items-center gap-2 px-3 xs:px-4 py-2.5 rounded-lg text-[13px] xs:text-[14px] font-medium transition-all ${
                          activeTab === tab
                            ? "bg-[#18b3ab] text-white shadow-sm"
                            : "bg-white border border-gray-300 text-gray-700 hover:border-[#18b3ab]/50"
                        }`}
                      >
                        {tab === "Semua" && (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 13 15">
                            <path d="M8.97563 10.0438H3.86147" stroke="currentColor" strokeLinecap="round" />
                            <path d="M8.97563 7.07836H3.86147" stroke="currentColor" strokeLinecap="round" />
                            <path d="M5.813 4.1198H3.86154" stroke="currentColor" strokeLinecap="round" />
                          </svg>
                        )}
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* DROPDOWNS */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: selectedLifecycle, options: lifecycleStages, state: showLifecycleDropdown, setState: setShowLifecycleDropdown, setValue: setSelectedLifecycle },
                      { label: selectedTopic, options: ["Topik Kesehatan", ...popularTopics.map(t => t.text)], state: showTopicDropdown, setState: setShowTopicDropdown, setValue: setSelectedTopic },
                      { label: selectedSort, options: sortOptions, state: showSortDropdown, setState: setShowSortDropdown, setValue: setSelectedSort },
                    ].map((dropdown, i) => (
                      <div key={i} className="relative">
                        <button
                          onClick={() => {
                            dropdown.setState(!dropdown.state);
                            const others = [setShowLifecycleDropdown, setShowTopicDropdown, setShowSortDropdown];
                            others.forEach((s, idx) => idx !== i && s(false));
                          }}
                          className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg text-[12px] xs:text-[13px] text-gray-600 hover:border-[#18b3ab] transition-all"
                        >
                          <span className="truncate max-w-[100px] xs:max-w-[120px]">{dropdown.label}</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <path d="M7 10L12 15L17 10H7Z" fill="#18B3AB" />
                          </svg>
                        </button>
                        {dropdown.state && (
                          <div className="absolute top-full left-0 mt-1 w-full min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            {dropdown.options.map((opt) => (
                              <button
                                key={opt}
                                onClick={() => { dropdown.setValue(opt); dropdown.setState(false); }}
                                className="w-full text-left px-3 py-2 text-[12px] text-gray-700 hover:bg-[#18b3ab]/5 hover:text-[#18b3ab]"
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ARTIKEL - MOBILE LAYOUT */}
                <div className="space-y-5">
                  {currentArticles.map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      {/* GAMBAR */}
                      <div className="h-[180px] xs:h-[200px] sm:h-[220px] overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* KONTEN */}
                      <div className="p-4 xs:p-5 space-y-3">
                        <div className="flex items-center gap-2 text-[11px] xs:text-[12px] text-[#18b3ab] flex-wrap">
                          <span>{article.lifecycleStage}</span>
                          <span className="w-1 h-1 bg-[#18b3ab] rounded-full" />
                          <span>{article.category}</span>
                        </div>

                        <h3 className="text-[15px] xs:text-[16px] sm:text-[17px] font-semibold text-gray-800 line-clamp-2 leading-tight">
                          {article.title}
                        </h3>

                        <p className="text-[13px] xs:text-[14px] text-gray-600 line-clamp-2 leading-relaxed">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center gap-3 text-[11px] text-gray-500 flex-wrap">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.views} views</span>
                          <span>•</span>
                          <span>{article.readTime} min</span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* PAGINATION */}
                <div className="flex items-center justify-center gap-2 pt-6 flex-wrap">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2.5 rounded-lg border border-gray-300 hover:border-[#18b3ab] disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      onClick={() => paginate(n)}
                      className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all ${
                        currentPage === n ? "bg-[#18b3ab] text-white" : "border border-gray-300 hover:border-[#18b3ab]"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2.5 rounded-lg border border-gray-300 hover:border-[#18b3ab] disabled:opacity-50"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* KANAN: SIDEBAR */}
              <div className="lg:sticky lg:top-6 lg:self-start">
                <RightSidebar showCalendar={true} showCampaigns={true} showPublications={true} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}