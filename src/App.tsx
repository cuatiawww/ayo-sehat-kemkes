// src/App.tsx
import { BrowserRouter, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import AppRouter from "./router";

function AppContent() {
  const navigate = useNavigate();

  // Navigate functions
  const navigateToHome = () => navigate("/");
  const navigateToSiklusHidup = () => navigate("/page/siklus-hidup");
  const navigateToTopikKesehatan = () => navigate("/page/topik-kesehatan");

  // HAPUS useEffect INI! TIDAK PERLU!
  // useEffect(() => { ... }, [navigateToSiklusHidup, navigateToTopikKesehatan]);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar
        onNavigateHome={navigateToHome}
        onNavigateSiklusHidup={navigateToSiklusHidup}
        onNavigateTopikKesehatan={navigateToTopikKesehatan}
      />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}