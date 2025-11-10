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
        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
          {/* Home Button */}
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 text-gray-600 hover:text-[#18b3ab] transition-colors font-['Poppins'] group"
          >
            <Home size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
          </button>

          {/* Siklus Hidup (jika ada) */}
          {onNavigateSiklusHidup && (
            <>
              <ChevronRight
                size={14}
                className="text-gray-400 shrink-0 sm:w-4 sm:h-4"
              />
              <button
                onClick={onNavigateSiklusHidup}
                className="text-gray-600 hover:text-[#18b3ab] transition-colors font-['Poppins']"
              >
                Siklus Hidup
              </button>
            </>
          )}

          {/* Current Page */}
          <ChevronRight
            size={14}
            className="text-gray-400 shrink-0 sm:w-4 sm:h-4"
          />
          <span className="text-[#18b3ab] font-medium font-['Poppins']">
            {currentPage}
          </span>
        </div>
      </div>
    </div>
  );
}