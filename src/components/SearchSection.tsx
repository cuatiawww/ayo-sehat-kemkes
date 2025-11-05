import { Search } from "lucide-react";

export default function SearchSection() {
  return (
    <div className="bg-[#f0f4f5] py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="font-['Poppins'] not-italic text-[24px] sm:text-[32px] lg:text-[40px] leading-[1.3] text-[#18b3ab] mb-3 sm:mb-4">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="font-['Poppins'] not-italic text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-neutral-600 max-w-3xl mx-auto px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Ketikan kata kunci Anda di sini"
                className="w-full h-[50px] sm:h-[56px] lg:h-[60px] bg-[#f4fffe] rounded-[12px] sm:rounded-[15px] border border-black px-4 sm:px-5 lg:px-6 font-['Poppins'] italic text-[14px] sm:text-[15px] lg:text-[16px] text-[#8c8c8c] focus:outline-none focus:ring-2 focus:ring-[#18b3ab] transition-all"
              />
            </div>
            <button className="bg-[#18b3ab] hover:bg-[#16a199] transition-colors duration-300 rounded-[12px] sm:rounded-[15px] px-6 sm:px-7 lg:px-8 h-[50px] sm:h-[56px] lg:h-[60px] flex items-center justify-center gap-2 text-white font-['Roboto'] font-medium whitespace-nowrap text-[15px] sm:text-[16px]">
              <Search size={18} className="sm:w-5 sm:h-5" />
              <span>Cari</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
