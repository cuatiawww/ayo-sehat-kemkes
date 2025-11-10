import { useState } from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import SearchSection from "./components/SearchSection";
import CategorySection from "./components/CategorySection";
import InfoSection from "./components/InfoSection";
import TopicSection from "./components/TopicSection";
import ArticleSection from "./components/ArticleSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import SearchResultsPage from "./components/SearchResultPage";
import SiklusHidupPage from "./components/SiklusHidupPage";
import TopikKesehatanPage from "./components/TopikKesehatanPage";
import ArtikelPage from "./components/ArtikelPage";

type PageType = "home" | "search" | "siklus-hidup" | "topik-kesehatan" | "artikel";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [searchQuery, setSearchQuery] = useState("");

  // Navigate functions
  const navigateToHome = () => {
    console.log("🏠 Navigate to HOME");
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSearch = (query: string) => {
    console.log("🔍 Navigate to SEARCH with query:", query);
    setCurrentPage("search");
    setSearchQuery(query);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSiklusHidup = () => {
    console.log("📅 Navigate to SIKLUS HIDUP");
    setCurrentPage("siklus-hidup");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToTopikKesehatan = () => {
    console.log("💊 Navigate to TOPIK KESEHATAN");
    setCurrentPage("topik-kesehatan");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToArtikel = () => {
    console.log("📰 Navigate to ARTIKEL");
    setCurrentPage("artikel");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log("=== APP RENDER ===");
  console.log("Current page:", currentPage);

  // Render SEARCH page
  if (currentPage === "search") {
    console.log("✅ Rendering SEARCH page");
    return (
      <>
        <TopBar />
        <Navbar 
          onNavigateHome={navigateToHome} 
          onNavigateSiklusHidup={navigateToSiklusHidup}
          onNavigateTopikKesehatan={navigateToTopikKesehatan}
        />
        <SearchResultsPage searchQuery={searchQuery} onNavigateHome={navigateToHome} />
        <Footer />
      </>
    );
  }

  // Render SIKLUS HIDUP page
  if (currentPage === "siklus-hidup") {
    console.log("✅ Rendering SIKLUS HIDUP page");
    return (
      <>
        <TopBar />
        <Navbar 
          onNavigateHome={navigateToHome} 
          onNavigateSiklusHidup={navigateToSiklusHidup}
          onNavigateTopikKesehatan={navigateToTopikKesehatan}
        />
        <SiklusHidupPage onNavigateHome={navigateToHome} />
        <Footer />
      </>
    );
  }

  // Render TOPIK KESEHATAN page
  if (currentPage === "topik-kesehatan") {
    console.log("✅ Rendering TOPIK KESEHATAN page");
    return (
      <>
        <TopBar />
        <Navbar 
          onNavigateHome={navigateToHome} 
          onNavigateSiklusHidup={navigateToSiklusHidup}
          onNavigateTopikKesehatan={navigateToTopikKesehatan}
        />
        <TopikKesehatanPage onNavigateHome={navigateToHome} />
        <Footer />
      </>
    );
  }

  // Render ARTIKEL page
  if (currentPage === "artikel") {
    console.log("✅ Rendering ARTIKEL page");
    return (
      <>
        <TopBar />
        <Navbar 
          onNavigateHome={navigateToHome} 
          onNavigateSiklusHidup={navigateToSiklusHidup}
          onNavigateTopikKesehatan={navigateToTopikKesehatan}
        />
        <ArtikelPage onNavigateHome={navigateToHome} />
        <Footer />
      </>
    );
  }

  // Render HOME page (default)
  console.log("✅ Rendering HOME page");
  return (
    <>
      <TopBar />
      <Navbar 
        onNavigateHome={navigateToHome} 
        onNavigateSiklusHidup={navigateToSiklusHidup}
        onNavigateTopikKesehatan={navigateToTopikKesehatan}
      />
      <HeroSection />
      <SearchSection onSearch={navigateToSearch} />
      <CategorySection />
      <InfoSection />
      <TopicSection />
      <ArticleSection onNavigateArtikel={navigateToArtikel} />
      <FeatureSection />
      <Footer />
    </>
  );
}