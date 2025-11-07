import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Health Observances Data for 2025
interface HealthObservance {
  date: string; // Format: "MM-DD"
  title: string;
  description: string;
  color?: string;
}

const healthObservances: HealthObservance[] = [
  {
    date: "01-24",
    title: "Hari Gizi Nasional",
    description: "Memperingati pentingnya gizi seimbang untuk kesehatan optimal dan pencegahan stunting pada anak-anak Indonesia.",
  },
  {
    date: "02-04",
    title: "Hari Kanker Sedunia",
    description: "Meningkatkan kesadaran global tentang pencegahan, deteksi dini, dan pengobatan kanker untuk menyelamatkan jutaan nyawa.",
  },
  {
    date: "02-14",
    title: "Hari Donor Darah Sedunia",
    description: "Mengapresiasi para pendonor darah sukarela dan meningkatkan kesadaran akan pentingnya donor darah rutin.",
  },
  {
    date: "03-03",
    title: "Hari Pendengaran Sedunia",
    description: "Meningkatkan kesadaran tentang pencegahan gangguan pendengaran dan pentingnya perawatan telinga sejak dini.",
  },
  {
    date: "03-21",
    title: "Hari Down Syndrome Sedunia",
    description: "Merayakan keunikan dan kemampuan individu dengan Down Syndrome serta mempromosikan inklusi sosial.",
  },
  {
    date: "03-24",
    title: "Hari Tuberkulosis Sedunia",
    description: "Membangun kesadaran global tentang TB dan upaya untuk mengakhiri epidemi penyakit menular ini.",
  },
  {
    date: "04-02",
    title: "Hari Autisme Sedunia",
    description: "Meningkatkan pemahaman dan penerimaan terhadap individu dengan spektrum autisme di masyarakat.",
  },
  {
    date: "04-07",
    title: "Hari Kesehatan Sedunia",
    description: "Memperingati pendirian WHO dan fokus pada isu kesehatan global yang memerlukan perhatian mendesak.",
  },
  {
    date: "04-17",
    title: "Hari Hemofilia Sedunia",
    description: "Meningkatkan kesadaran tentang hemofilia dan gangguan perdarahan lainnya serta akses terhadap pengobatan.",
  },
  {
    date: "04-25",
    title: "Hari Malaria Sedunia",
    description: "Menyoroti upaya global dalam pencegahan dan pengendalian malaria, terutama di daerah endemis.",
  },
  {
    date: "05-05",
    title: "Hari Kebersihan Tangan Sedunia",
    description: "Mempromosikan praktik cuci tangan yang benar sebagai cara sederhana namun efektif mencegah infeksi.",
  },
  {
    date: "05-08",
    title: "Hari Thalassemia Sedunia",
    description: "Meningkatkan kesadaran tentang thalassemia, pentingnya skrining, dan dukungan untuk penderita.",
  },
  {
    date: "05-12",
    title: "Hari Perawat Internasional",
    description: "Menghormati dedikasi dan kontribusi perawat dalam memberikan pelayanan kesehatan berkualitas.",
  },
  {
    date: "05-17",
    title: "Hari Hipertensi Sedunia",
    description: "Meningkatkan kesadaran tentang tekanan darah tinggi dan pentingnya pemeriksaan serta gaya hidup sehat.",
  },
  {
    date: "05-31",
    title: "Hari Tanpa Tembakau Sedunia",
    description: "Menyoroti risiko kesehatan dari penggunaan tembakau dan advokasi kebijakan efektif untuk mengurangi konsumsi.",
  },
  {
    date: "06-14",
    title: "Hari Donor Darah Sedunia",
    description: "Mengucapkan terima kasih kepada donor darah dan mendorong lebih banyak orang untuk mendonor secara teratur.",
  },
  {
    date: "06-21",
    title: "Hari Yoga Internasional",
    description: "Merayakan manfaat yoga untuk kesehatan fisik dan mental, serta mempromosikan gaya hidup sehat.",
  },
  {
    date: "07-11",
    title: "Hari Populasi Sedunia",
    description: "Meningkatkan kesadaran tentang isu kependudukan global dan pentingnya kesehatan reproduksi.",
  },
  {
    date: "07-28",
    title: "Hari Hepatitis Sedunia",
    description: "Meningkatkan kesadaran global tentang hepatitis virus dan mendorong pencegahan, diagnosis, dan pengobatan.",
  },
  {
    date: "08-01",
    title: "Pekan ASI Sedunia",
    description: "Mempromosikan manfaat ASI eksklusif untuk bayi dan dukungan terhadap ibu menyusui.",
  },
  {
    date: "09-10",
    title: "Hari Pencegahan Bunuh Diri Sedunia",
    description: "Meningkatkan kesadaran tentang pencegahan bunuh diri dan pentingnya kesehatan mental.",
  },
  {
    date: "09-12",
    title: "Hari Kesehatan Nasional",
    description: "Memperingati gerakan kesehatan masyarakat Indonesia dan komitmen untuk Indonesia sehat.",
  },
  {
    date: "09-17",
    title: "Hari Keselamatan Pasien Sedunia",
    description: "Mempromosikan keselamatan pasien dan mengurangi kerugian akibat praktik kesehatan yang tidak aman.",
  },
  {
    date: "09-21",
    title: "Hari Alzheimer Sedunia",
    description: "Meningkatkan kesadaran tentang Alzheimer dan demensia serta tantangan yang dihadapi penderita dan keluarga.",
  },
  {
    date: "09-28",
    title: "Hari Rabies Sedunia",
    description: "Meningkatkan kesadaran tentang pencegahan rabies dan pentingnya vaksinasi hewan peliharaan.",
  },
  {
    date: "09-29",
    title: "Hari Jantung Sedunia",
    description: "Menyoroti pentingnya kesehatan jantung dan pencegahan penyakit kardiovaskular melalui gaya hidup sehat.",
  },
  {
    date: "10-10",
    title: "Hari Kesehatan Jiwa Sedunia",
    description: "Meningkatkan kesadaran tentang kesehatan mental dan menghilangkan stigma terhadap gangguan mental.",
  },
  {
    date: "10-12",
    title: "Hari Artritis Sedunia",
    description: "Meningkatkan kesadaran tentang penyakit artritis dan pentingnya diagnosis serta pengobatan dini.",
  },
  {
    date: "10-15",
    title: "Hari Cuci Tangan Sedunia",
    description: "Mempromosikan cuci tangan dengan sabun sebagai cara mudah dan efektif mencegah penyakit.",
  },
  {
    date: "10-16",
    title: "Hari Pangan Sedunia",
    description: "Meningkatkan kesadaran tentang keamanan pangan dan nutrisi untuk kesehatan yang optimal.",
  },
  {
    date: "10-20",
    title: "Hari Osteoporosis Sedunia",
    description: "Meningkatkan kesadaran tentang pencegahan, diagnosis, dan pengobatan osteoporosis dan penyakit tulang.",
  },
  {
    date: "10-29",
    title: "Hari Stroke Sedunia",
    description: "Meningkatkan kesadaran tentang pencegahan stroke dan pentingnya penanganan cepat saat terjadi stroke.",
  },
  {
    date: "11-12",
    title: "Hari Kesehatan Nasional",
    description: "Memperingati komitmen Indonesia terhadap pembangunan kesehatan masyarakat yang berkelanjutan.",
  },
  {
    date: "11-14",
    title: "Hari Diabetes Sedunia",
    description: "Meningkatkan kesadaran tentang diabetes, pentingnya pencegahan, dan pengelolaan gula darah.",
  },
  {
    date: "11-17",
    title: "Hari Prematur Sedunia",
    description: "Meningkatkan kesadaran tentang kelahiran prematur dan tantangan yang dihadapi bayi prematur.",
  },
  {
    date: "12-01",
    title: "Hari AIDS Sedunia",
    description: "Meningkatkan kesadaran tentang HIV/AIDS, mengurangi stigma, dan mendorong pencegahan serta pengobatan.",
  },
  {
    date: "12-03",
    title: "Hari Penyandang Disabilitas Internasional",
    description: "Mempromosikan hak dan kesejahteraan penyandang disabilitas serta inklusi dalam masyarakat.",
  },
];

export default function CustomCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showObservance, setShowObservance] = useState<string | null>(null);

  // Close popup when month or year changes
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    setShowObservance(null);
  }, [currentMonth, currentYear]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const selectDate = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    );
  };

  const getObservanceForDate = (day: number): HealthObservance | undefined => {
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const dayStr = String(day).padStart(2, "0");
    const dateKey = `${month}-${dayStr}`;
    return healthObservances.find((obs) => obs.date === dateKey);
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const daysInPrevMonth = getDaysInMonth(
    new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
  );

  const calendarDays = [];
  
  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isPrevMonth: true,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      isCurrentMonth: true,
      isPrevMonth: false,
    });
  }

  // Next month days to fill grid
  const remainingDays = 42 - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      day: i,
      isCurrentMonth: false,
      isPrevMonth: false,
    });
  }

  const handleDateClick = (day: number, isCurrentMonthDate: boolean) => {
    if (!isCurrentMonthDate) return;
    
    selectDate(day);
    const observance = getObservanceForDate(day);
    
    if (observance) {
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const dayStr = String(day).padStart(2, "0");
      const dateKey = `${month}-${dayStr}`;
      
      // Toggle popup
      if (showObservance === dateKey) {
        setShowObservance(null);
      } else {
        setShowObservance(dateKey);
      }
    } else {
      setShowObservance(null);
    }
  };

  return (
    <div className="bg-white relative rounded-[15px] w-full border border-[#cccccc] inline-block">
      <div className="relative rounded-[inherit] p-4 sm:p-5 lg:px-8 lg:py-6">
        {/* Month/Year Header */}
        <div className="relative h-[45px] sm:h-[50px] flex items-center justify-center mb-3 sm:mb-4 lg:mb-5">
          <div className="font-['Work_Sans:Bold',sans-serif] text-[16px] sm:text-[17px] leading-[25.5px] text-black text-center">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </div>
          
          {/* Previous Month Button */}
          <button
            onClick={previousMonth}
            className="absolute left-0 top-1/2 -translate-y-1/2 hover:bg-gray-100 rounded p-1.5 transition-colors"
            aria-label="Previous month"
          >
            <div className="rotate-[225deg]">
              <div className="w-[12.47px] h-[12.47px] border-t-[3px] border-r-[3px] border-black rounded-[1px]" />
            </div>
          </button>

          {/* Next Month Button */}
          <button
            onClick={nextMonth}
            className="absolute right-0 top-1/2 -translate-y-1/2 hover:bg-gray-100 rounded p-1.5 transition-colors"
            aria-label="Next month"
          >
            <div className="rotate-[45deg]">
              <div className="w-[12.47px] h-[12.47px] border-t-[3px] border-r-[3px] border-black rounded-[1px]" />
            </div>
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="w-full max-w-full">
          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3 mb-3 sm:mb-4">
            {dayNames.map((day, index) => (
              <div
                key={index}
                className="text-center font-['Work_Sans:Medium',sans-serif] text-[13px] sm:text-[15px] lg:text-[16px] leading-[24px] text-black opacity-60 min-w-[40px] sm:min-w-[45px] lg:min-w-[50px]"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7 gap-2 sm:gap-3">
            {calendarDays.slice(0, 35).map((item, index) => {
              const isTodayDate = item.isCurrentMonth && isToday(item.day);
              const isSelectedDate = item.isCurrentMonth && isSelected(item.day);
              const observance = item.isCurrentMonth ? getObservanceForDate(item.day) : undefined;
              const hasObservance = !!observance;

              return (
                <button
                  key={index}
                  onClick={() => handleDateClick(item.day, item.isCurrentMonth)}
                  disabled={!item.isCurrentMonth}
                  className={`
                    relative flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[45px] sm:min-h-[45px] lg:min-w-[50px] lg:min-h-[50px]
                    font-['Work_Sans:Regular',sans-serif] text-[15px] sm:text-[16px] leading-[24px]
                    transition-all duration-200 rounded-[5px]
                    ${!item.isCurrentMonth ? 'opacity-20 cursor-default text-black' : 'cursor-pointer'}
                    ${item.isCurrentMonth && !isSelectedDate && !isTodayDate ? 'text-black hover:bg-gray-100' : ''}
                    ${isSelectedDate ? 'bg-black text-white font-bold' : ''}
                    ${isTodayDate && !isSelectedDate ? 'text-[#18b3ab] font-bold' : ''}
                  `}
                >
                  {item.day}
                  {/* Dot indicator for today */}
                  {isTodayDate && !isSelectedDate && !hasObservance && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-[2px] bg-[#18b3ab]" />
                  )}
                  {/* Green dot indicator for health observance - always show when not selected */}
                  {hasObservance && item.isCurrentMonth && !isSelectedDate && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[#18b3ab] shadow-[0_0_4px_rgba(24,179,171,0.6)]" />
                  )}
                  {/* White dot when selected with observance */}
                  {hasObservance && item.isCurrentMonth && isSelectedDate && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Health Observance Popup */}
          {showObservance && (() => {
            const observance = healthObservances.find((obs) => obs.date === showObservance);
            if (!observance) return null;

            return (
              <div className="mt-5 animate-[slideDown_0.5s_ease-out]">
                <div className="bg-gradient-to-br from-[#f8fffe] to-[#f0f9f8] border-2 border-[#18b3ab] rounded-[12px] sm:rounded-[15px] p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="bg-[#18b3ab] text-white w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg 
                          className="w-5 h-5 sm:w-6 sm:h-6" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#18b3ab] mb-2">
                          {observance.title}
                        </h4>
                        <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-gray-700 leading-relaxed">
                          {observance.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowObservance(null);
                      }}
                      className="text-gray-400 hover:text-[#18b3ab] transition-colors duration-300 ml-2 flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
      
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
