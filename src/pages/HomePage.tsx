import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load komponen berat
const HeroSection = lazy(() => import("../components/HeroSection"));
const SearchSection = lazy(() => import("../components/SearchSection"));
const CategorySection = lazy(() => import("../components/CategorySection"));
const InfoSection = lazy(() => import("../components/InfoSection"));
const TopicSection = lazy(() => import("../components/TopicSection"));
const ArticleSection = lazy(() => import("../components/ArticleSection"));
const FeatureSection = lazy(() => import("../components/FeatureSection"));

export default function HomePage() {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleNavigateArtikel = () => {
    navigate("/page/artikel");
  };

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ayo Sehat - Portal Kesehatan Keluarga Indonesia",
    description: "Informasi kesehatan terpercaya dari bayi hingga lansia. Cegah, deteksi, dan pengobatan sesuai siklus hidup.",
    url: "https://ayosehat.example.com/",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: "https://ayosehat.example.com/",
        },
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Ayo Sehat",
      logo: {
        "@type": "ImageObject",
        url: "https://ayosehat.example.com/logo.png",
        width: 600,
        height: 60,
      },
    },
  };

  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Helmet>
        <title>Ayo Sehat - Portal Kesehatan Keluarga Indonesia</title>
        <meta
          name="description"
          content="Informasi kesehatan terlengkap dan terpercaya untuk semua usia: bayi, anak, remaja, dewasa, lansia. Cegah penyakit, deteksi dini, dan pengobatan tepat."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ayo Sehat - Kesehatan Keluarga Indonesia" />
        <meta
          property="og:description"
          content="Portal kesehatan resmi dengan artikel, tips, dan layanan untuk setiap tahap kehidupan."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ayosehat.example.com/" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ayosehat.example.com/" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#18b3ab]"></div></div>}>
          <HeroSection />
          <SearchSection onSearch={handleSearch} />
          <CategorySection />
          <InfoSection />
          <TopicSection />
          <ArticleSection onNavigateArtikel={handleNavigateArtikel} />
          <FeatureSection />
        </Suspense>
      </motion.div>
    </>
  );
}