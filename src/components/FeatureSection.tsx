import { useState, useEffect, useRef } from "react";

interface Feature {
  image: string;
  category: string;
  description: string;
}

export default function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const features = [
    {
      image: "../assets/content1.png",  
      category: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      image: "../assets/content2.png",  
      category: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      image: "../assets/content3.png",  
      category: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div ref={sectionRef} className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-[#f0f4f5] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Swipeable */}
        <div className="md:hidden relative">
          {/* Cards Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <FeatureCard feature={feature} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#18b3ab] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#18b3ab] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === features.length - 1}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-8 h-3 bg-[#18b3ab]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Card Component with enhanced hover effects
function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-white rounded-[20px] sm:rounded-[25px] border border-[#d2d2d2] overflow-hidden group cursor-pointer hover:shadow-2xl hover:-translate-y-3 hover:border-[#18b3ab] transition-all duration-500 flex flex-col h-full">
      {/* Card Container */}
      <div className="w-full h-auto lg:h-[472px] flex flex-col p-5 sm:p-6 lg:p-7">
        {/* Image Section with overlay effects */}
        <div className="relative h-[200px] sm:h-[180px] lg:h-[199px] rounded-[10px] sm:rounded-[13px] overflow-hidden mb-4 sm:mb-5 lg:mb-7 flex-shrink-0">
          {/* Image */}
          <img
            alt=""
            src={feature.image}
            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          {/* Corner Badge */}
          <div className="absolute top-3 right-3 bg-[#18b3ab] text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
            View Details
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col">
          {/* Category with animated underline */}
          <div className="mb-3 sm:mb-4 lg:mb-5 relative inline-block">
            <div className="font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-[18px] sm:leading-[19px] lg:leading-[20px] text-[#18b3ab] group-hover:text-[#16a199] transition-colors duration-300">
              {feature.category}
            </div>
            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#18b3ab] group-hover:w-full transition-all duration-500"></div>
          </div>

          {/* Description with better spacing */}
          <p className="font-normal text-[11px] sm:text-[11.5px] lg:text-[12px] leading-[20px] sm:leading-[21px] lg:leading-[22px] text-[#212121] flex-1 text-left line-clamp-5 sm:line-clamp-6 group-hover:text-[#333] transition-colors duration-300">
            {feature.description}
          </p>

          {/* Read More Link */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-[#18b3ab] text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Border Animation */}
      <div className="h-1 bg-gradient-to-r from-[#18b3ab] to-[#16a199] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}