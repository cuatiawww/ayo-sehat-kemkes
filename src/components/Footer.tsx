import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#d2d2d2]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6">
              <h3 className="font-['Inter'] font-bold not-italic text-[14px] sm:text-[15px] lg:text-[16px] text-[#212121] mb-3 sm:mb-4">
                Lorem Ipsum
              </h3>
              <h4 className="font-['Inter'] font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4">
                Consectetur Adipiscing Elit Sed Eiusmod
              </h4>
              <p className="font-['Roboto'] font-normal text-[12px] sm:text-[13px] lg:text-[14px] text-[#212121] mb-3 sm:mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="font-['Inter'] font-normal not-italic text-[12px] sm:text-[13px] lg:text-[14px] text-[#18b3ab] mb-3 sm:mb-4">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div>
              <h4 className="font-['Inter'] font-medium not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4">
                Media Sosial
              </h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-[30px] h-[30px] rounded-[5px] bg-[#3d8581] flex items-center justify-center hover:bg-[#2d6561] transition-colors duration-300"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-[30px] h-[30px] rounded-[5px] bg-[#3d8581] flex items-center justify-center hover:bg-[#2d6561] transition-colors duration-300"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-[30px] h-[30px] rounded-[5px] bg-[#3d8581] flex items-center justify-center hover:bg-[#2d6561] transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-[30px] h-[30px] rounded-[5px] bg-[#3d8581] flex items-center justify-center hover:bg-[#2d6561] transition-colors duration-300"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-['Inter'] font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 uppercase">
              Lorem Ipsum Dolor
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
            </ul>

            <h3 className="font-['Inter'] font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 mt-6 sm:mt-8 uppercase">
              Lorem Ipsum Dolor
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-['Inter'] font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 uppercase">
              Lorem Ipsum Dolor
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
            </ul>

            <h3 className="font-['Inter'] font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 mt-6 sm:mt-8 uppercase">
              Lorem Ipsum Dolor
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-['Inter'] font-bold not-italic text-[13px] sm:text-[14px] lg:text-[15px] text-[#212121] mb-3 sm:mb-4 uppercase">
              Lorem Ipsum Dolor
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] uppercase hover:text-[#16a199] transition-colors duration-300"
                >
                  Duis aute irure dolor
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#d2d2d2]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#212121] text-center sm:text-left">
              © 2025 Lorem Ipsum. All rights reserved.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] hover:text-[#16a199] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-['Inter'] font-normal not-italic text-[11px] sm:text-[12px] lg:text-[13px] text-[#18b3ab] hover:text-[#16a199] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
