import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultPage";
import SiklusHidupPage from "./pages/SiklusHidupPage";
import TopikKesehatanPage from "./pages/TopikKesehatanPage";
import ArtikelPage from "./pages/ArtikelPage";
import { useNavigate } from "react-router-dom";

// HOC untuk kasih onNavigateHome ke semua halaman
function withNavigation<T extends { onNavigateHome: () => void }>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithNavigation(props: Omit<T, "onNavigateHome">) {
    const navigate = useNavigate();
    const onNavigateHome = () => navigate("/");
    return <WrappedComponent {...(props as T)} onNavigateHome={onNavigateHome} />;
  };
}

// Bungkus setiap page
const SearchWithNav = withNavigation(SearchResultsPage);
const SiklusWithNav = withNavigation(SiklusHidupPage);
const TopikWithNav = withNavigation(TopikKesehatanPage);
const ArtikelWithNav = withNavigation(ArtikelPage);

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {/* Search: kasih searchQuery default */}
      <Route
        path="/search"
        element={<SearchWithNav searchQuery={new URLSearchParams(window.location.search).get("q") || ""} />}
      />

      {/* Siklus Hidup: kasih initialStage */}
      <Route
        path="/page/siklus-hidup"
        element={<SiklusWithNav initialStage="remaja" />}
      />

      {/* Lainnya */}
      <Route path="/page/topik-kesehatan" element={<TopikWithNav />} />
      <Route path="/page/artikel" element={<ArtikelWithNav />} />
    </Routes>
  );
}