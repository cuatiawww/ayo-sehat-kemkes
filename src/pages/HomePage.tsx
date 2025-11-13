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

  // === SEO & METADATA ===
  const baseUrl = "https://staging-ayo-sehat.vercel.app";
  const pageTitle = "Ayo Sehat - Portal Kesehatan Keluarga Indonesia";
  const pageDescription = "Informasi kesehatan terlengkap dan terpercaya untuk semua usia: bayi, anak, remaja, dewasa, lansia. Cegah penyakit, deteksi dini, dan pengobatan tepat.";
  const ogImage = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";
  const ogImageTitle = "Ayo Sehat - Kesehatan Keluarga Indonesia";
  const ogImageAlt = "Ilustrasi keluarga sehat dan bahagia bersama dokter - Portal Kesehatan Resmi Kemenkes RI";

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: pageDescription,
    url: `${baseUrl}/`,
    inLanguage: "id-ID",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: `${baseUrl}/`,
        },
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Kementerian Kesehatan Republik Indonesia",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
        width: 600,
        height: 60,
        caption: "Logo Kementerian Kesehatan RI",
      },
    },
    image: {
      "@type": "ImageObject",
      url: ogImage,
      width: 1200,
      height: 630,
      caption: ogImageTitle,
      contentUrl: ogImage,
      inLanguage: "id-ID",
      name: ogImageTitle,
      description: ogImageAlt,
    },
  };

  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-Robots-Tag" content="index, follow" />
        <meta name="keywords" content="kesehatan keluarga, kesehatan anak, kesehatan lansia, pola hidup sehat, ayo sehat, kemenkes" />
        <meta name="publisher" content="Kementerian Kesehatan" />
        <link rel="canonical" href={baseUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:image:title" content={ogImageTitle} />
        <meta property="og:site_name" content="Ayo Sehat Kemenkes" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={ogImageAlt} />
        <meta name="twitter:image:title" content={ogImageTitle} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <Suspense
          fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#18b3ab]"></div>
            </div>
          }
        >
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