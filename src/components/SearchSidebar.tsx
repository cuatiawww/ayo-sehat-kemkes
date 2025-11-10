import { Search, Users, Download, Heart, Edit, Calendar, FileText } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface SearchCategory {
  name: string;
  count: number;
  icon: "users" | "download" | "heart" | "edit" | "calendar" | "document";
  categoryType: string;
}

export default function SearchSidebar({ 
  searchQuery,
  activeCategories, 
  onToggleCategory,
  onSearch
}: { 
  searchQuery: string;
  activeCategories: string[];
  onToggleCategory: (category: string) => void;
  onSearch: (query: string) => void;
}) {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const categories: SearchCategory[] = [
    { name: "Artikel Siklus Hidup", count: 15, icon: "users", categoryType: "articles" },
    { name: "Media Download", count: 3, icon: "download", categoryType: "download" },
    { name: "Topik Kesehatan A-Z", count: 4, icon: "heart", categoryType: "topics" },
    { name: "Perangkat Ajar Kesehatan", count: 0, icon: "edit", categoryType: "teaching" },
    { name: "Agenda Kegiatan", count: 1, icon: "calendar", categoryType: "agenda" },
    { name: "Artikel Tips Komunikasi Perubahan Perilaku", count: 0, icon: "document", categoryType: "communication" },
  ];

  const isCategoryActive = (category: string) => {
    return activeCategories.includes(category);
  };

  const getIcon = (iconType: string) => {
    const iconClass = "w-6 h-6";
    switch (iconType) {
      case "users":
        return <Users className={iconClass} />;
      case "download":
        return <Download className={iconClass} />;
      case "heart":
        return <Heart className={iconClass} />;
      case "edit":
        return <Edit className={iconClass} />;
      case "calendar":
        return <Calendar className={iconClass} />;
      case "document":
        return <FileText className={iconClass} />;
      default:
        return <Search className={iconClass} />;
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector("input");
    if (input?.value.trim()) {
      onSearch(input.value);
    }
  };

  const handleCategoryClick = (categoryType: string, count: number, categoryName: string) => {
    // If category has no results, show custom dialog
    if (count === 0) {
      setDialogMessage(`Maaf, untuk pencarian terkait "${searchQuery}" tidak tersedia dalam ${categoryName}`);
      setShowDialog(true);
      return;
    }
    
    // Toggle if category has results
    onToggleCategory(categoryType);
  };

  return (
    <>
      <div className="bg-white relative rounded-[20px] w-full border border-[#818181]/30">
        <div className="px-6 py-7 lg:px-7 lg:py-8">
          {/* Title */}
          <h3 className="font-['Poppins'] font-semibold text-[18px] lg:text-[20px] text-[#18b3ab] mb-6">
            Pencarian Ayosehat
          </h3>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                defaultValue={searchQuery}
                placeholder="Pencarian kata kunci"
                className="w-full h-[51px] bg-[#f4fffe] rounded-[10px] border border-[#818181]/50 px-4 font-['Poppins'] italic text-[14px] lg:text-[15px] text-[#8c8c8c] placeholder:text-[#8c8c8c] focus:outline-none focus:ring-2 focus:ring-[#18b3ab] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-[#18b3ab] hover:bg-[#16a199] transition-colors rounded-[10px] w-[51px] h-[51px] flex items-center justify-center flex-shrink-0"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </form>

          {/* Divider */}
          <div className="bg-[#d9d9d9] h-px w-full mb-5" />

          {/* Categories List */}
          <div className="space-y-5">
            {categories.map((category, index) => {
              const isExpanded = isCategoryActive(category.categoryType);
              const hasResults = category.count > 0;
              
              return (
                <div key={index}>
                  <button 
                    onClick={() => handleCategoryClick(category.categoryType, category.count, category.name)}
                    className="w-full flex items-center gap-3 lg:gap-4 group transition-all hover:opacity-80 cursor-pointer"
                  >
                    {/* Icon */}
                    <div className={`w-6 h-6 flex-shrink-0 transition-colors ${
                      isExpanded ? "text-[#18b3ab]" : hasResults ? "text-gray-500" : "text-gray-400"
                    }`}>
                      {getIcon(category.icon)}
                    </div>

                    {/* Category Name */}
                    <div className="flex-1 text-left">
                      <p className={`font-['Poppins'] text-[14px] lg:text-[16px] leading-[1.6] transition-colors ${
                        isExpanded ? "text-gray-900 font-medium" : "text-neutral-600"
                      }`}>
                        {category.name}
                      </p>
                    </div>

                    {/* Count */}
                    <div className="flex-shrink-0">
                      <span
                        className={`font-['Poppins'] font-medium text-[14px] lg:text-[16px] ${
                          category.count === 0 ? "text-[#d93025]" : "text-[#18b3ab]"
                        }`}
                      >
                        ({category.count})
                      </span>
                    </div>

                    {/* Arrow with rotation animation */}
                    <div className="flex-shrink-0">
                      {hasResults ? (
                        <div className={`rounded-[10px] w-4 h-4 flex items-center justify-center transition-all duration-300 ${
                          isExpanded ? "bg-[#18b3ab] rotate-90" : "bg-[#18b3ab] rotate-0"
                        }`}>
                          <svg
                            className="w-2.5 h-2.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 8 12"
                          >
                            <path d="M1.5 1L6.5 6L1.5 11" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ) : (
                        <div className="bg-[#a9adad] rounded-[10px] w-3.5 h-3.5 flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            viewBox="0 0 6 4"
                          >
                            <path d="M5.06667 0.4L2.73333 2.73333L0.4 0.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Divider between items */}
                  {index < categories.length - 1 && <div className="bg-[#d9d9d9] h-px w-full mt-5" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Alert Dialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="bg-white border-2 border-[#fca5a5] max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#d93025] font-['Poppins']">
              Pencarian Tidak Tersedia
            </AlertDialogTitle>
            <AlertDialogDescription className="text-neutral-600 font-['Poppins']">
              {dialogMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              className="bg-[#18b3ab] hover:bg-[#16a199] text-white font-['Poppins']"
              onClick={() => setShowDialog(false)}
            >
              Mengerti
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}