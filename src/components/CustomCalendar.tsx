import { useState } from "react";

export default function CustomCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const daysInPrevMonth = getDaysInMonth(
    new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
  );

  const calendarDays = [];
  
  // Isi tanggal bulan sebelumnya
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isPrevMonth: true,
    });
  }

  // Isi tanggal bulan sekarang
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      isCurrentMonth: true,
      isPrevMonth: false,
    });
  }

  // Isi tanggal bulan selanjutnya
  const remainingDays = 42 - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      day: i,
      isCurrentMonth: false,
      isPrevMonth: false,
    });
  }

  return (
    <div className="bg-white relative rounded-[15px] w-full border border-[#cccccc] inline-block">
      <div className="relative rounded-[inherit] p-4 sm:p-5 lg:px-8 lg:py-6">
        {/* Header bulan dan tahun */}
        <div className="relative h-[45px] sm:h-[50px] flex items-center justify-center mb-3 sm:mb-4 lg:mb-5">
          <div className="text-[16px] sm:text-[17px] leading-[25.5px] text-black text-center">
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
                className="text-center text-[13px] sm:text-[15px] lg:text-[16px] leading-[24px] text-black opacity-60 min-w-[40px] sm:min-w-[45px] lg:min-w-[50px]"
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

              return (
                <button
                  key={index}
                  onClick={() => item.isCurrentMonth && selectDate(item.day)}
                  disabled={!item.isCurrentMonth}
                  className={`
                    relative flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-[45px] sm:min-h-[45px] lg:min-w-[50px] lg:min-h-[50px]
                    text-[15px] sm:text-[16px] leading-[24px]
                    transition-all duration-200 rounded-[5px]
                    ${!item.isCurrentMonth ? 'opacity-20 cursor-default text-black' : 'cursor-pointer'}
                    ${item.isCurrentMonth && !isSelectedDate && !isTodayDate ? 'text-black hover:bg-gray-100' : ''}
                    ${isSelectedDate ? 'bg-black text-white font-bold' : ''}
                    ${isTodayDate && !isSelectedDate ? 'text-[#18b3ab] font-bold' : ''}
                  `}
                >
                  {item.day}
                  {/* Dot indicator for today */}
                  {isTodayDate && !isSelectedDate && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-[2px] bg-[#18b3ab]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
