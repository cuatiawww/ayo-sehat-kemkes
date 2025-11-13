import { ChevronRight, Home } from "lucide-react";

interface CustomBreadcrumbProps {
  onNavigateHome: () => void;
  onNavigateSiklusHidup?: () => void;
  currentPage: string;
}

export default function CustomBreadcrumb({
  onNavigateHome,
  onNavigateSiklusHidup,
  currentPage,
}: CustomBreadcrumbProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#f5f5f5] to-white py-3 sm:py-4 lg:py-5 border-b border-gray-100">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          {/* Home Button */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 text-gray-600 hover:text-[#18b3ab] transition-colors font-['Poppins'] group focus:outline-none focus:ring-2 focus:ring-[#18b3ab] focus:ring-offset-2 rounded"
            aria-label="Kembali ke Beranda"
          >
            <Home size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
            <span className="sr-only">Beranda</span>
          </button>

          {/* Siklus Hidup */}
          {onNavigateSiklusHidup && (
            <>
              <ChevronRight
                size={14}
                className="text-gray-400 shrink-0 sm:w-4 sm:h-4"
                aria-hidden="true"
              />
              <button
                onClick={onNavigateSiklusHidup}
                className="text-gray-600 hover:text-[#18b3ab] transition-colors font-['Poppins'] focus:outline-none focus:ring-2 focus:ring-[#18b3ab] focus:ring-offset-2 rounded px-1"
                aria-label="Menuju halaman Siklus Hidup"
              >
                Siklus Hidup
              </button>
            </>
          )}

          {/* Current Page */}
          <ChevronRight
            size={14}
            className="text-gray-400 shrink-0 sm:w-4 sm:h-4"
            aria-hidden="true"
          />
          <span
            className="text-[#18b3ab] font-medium font-['Poppins']"
            aria-current="page"
          >
            {currentPage}
          </span>
        </nav>
      </div>
    </div>
  );
}