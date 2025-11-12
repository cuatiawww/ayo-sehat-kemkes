// src/pages/HomePage.tsx
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import CategorySection from "../components/CategorySection";
import InfoSection from "../components/InfoSection";
import TopicSection from "../components/TopicSection";
import ArticleSection from "../components/ArticleSection";
import FeatureSection from "../components/FeatureSection";

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

  return (
    <>
      <HeroSection />
      <SearchSection onSearch={handleSearch} />
      <CategorySection />
      <InfoSection />
      <TopicSection />
      <ArticleSection onNavigateArtikel={handleNavigateArtikel} />
      <FeatureSection />
    </>
  );
}