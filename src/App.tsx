import HeroSection from "./components/HeroSection";
import SearchSection from "./components/SearchSection";
import CategorySection from "./components/CategorySection";
import InfoSection from "./components/InfoSection";
import TopicSection from "./components/TopicSection";
import ArticleSection from "./components/ArticleSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SearchSection />
      <CategorySection />
      <InfoSection />
      <TopicSection />
      <ArticleSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}
