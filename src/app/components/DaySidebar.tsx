import React from "react";
import svgPaths from "../../imports/svg-4sfs7x9o8n";
import sidebarBg from "@/assets/46ff7fa8c3051a0aeef9292abe9e13571e6086f4.png";

interface DaySidebarProps {
  selectedDay: number;
  onSelectDay: (day: number) => void;
  totalDays: number;
}

export function DaySidebar({ selectedDay, onSelectDay, totalDays }: DaySidebarProps) {
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  const [isDarkMode, setIsDarkMode] = React.useState(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  React.useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDarkMode(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const selectedIndex = React.useMemo(() => {
    return days.findIndex((day) => day === selectedDay);
  }, [selectedDay]);



  return (
    <div className="w-[258px]  h-[calc(100vh-116px)] relative overflow-hidden ">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={sidebarBg}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover blur-[15px] scale-105 ${isDarkMode ? "sidebar-background-image-dark" : ""}`}
          aria-hidden
        />
        <div
          className={`absolute inset-0 ${!isDarkMode ? "bg-gradient-to-r from-[rgba(253,252,253,0.3)] to-[#f7f6fc]" : ""}`}
          style={isDarkMode ? { background: "linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(3, 3, 3, 0.6) 100%)" } : undefined}
        />
      </div>

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-[#f7f6fc] dark:from-[#000] to-transparent pointer-events-none z-10" />

      {/* Days List */}
      <div className="relative flex flex-col gap-3 pl-2 pt-[56px] pb-6  overflow-y-auto h-full bg-[rgba(48,0,64,0.06)]  overflow-x-hidden">
        {days.map((day) => {
          const isCompleted = day < selectedDay;
          const isCurrent = day === selectedDay;
          const isLocked = day > selectedDay;

          return (
            <button
              key={day}
              onClick={() => onSelectDay(day)}
              className={`
                flex items-center justify-between px-4 py-3 transition-all border-none box-shadow-none relative cursor-pointer rounded-tl-[30px] rounded-bl-[30px]
                
              `}
            >
              <div className={`

              
                absolute top-0 left-0 right-0 bottom-0 z-0 rounded-tl-[30px] rounded-bl-[30px]

                ${isCurrent ? 'bg-[#f7f6fc] dark:bg-[#000] mb-[-6px] mt-[-6px] ' : 'hover:bg-white/50 dark:hover:bg-gray-800/50 mb-[0px] mt-[0px]'}
                ${isLocked ? 'opacity-60' : ''}
                `} />
                  {isCurrent && (
                    <>
                      <div
                        className={`current-day-sidebar-outer-layer-top ${isDarkMode ? "current-day-sidebar-outer-layer-top-dark" : ""}`}
                      >
                        {/* above top right content */}
                      </div>
                      <div
                        className={`current-day-sidebar-outer-layer-bottom ${isDarkMode ? "current-day-sidebar-outer-layer-bottom-dark" : ""}`}
                      >
                        {/* below bottom right content */}
                      </div>
                    </>
                  )}
                
            
              <span className={`
                font-medium text-base z-10
                ${isCurrent ? 'font-semibold text-[#211f26] dark:text-white' : 'text-[rgba(4,0,17,0.61)] dark:text-white'}
              `}>
                Day - {day}
              </span>

              {/* Icon */}
              <div className="w-[16.25px] h-[16.25px] z-10">
                {isCompleted && (
                  <svg className="w-full h-full" viewBox="0 0 16.25 16.25" fill="none">
                    <path d={svgPaths.p30257440} fill="#30A46C" />
                  </svg>
                )}
                {isCurrent && (
                  <svg className="w-full h-full" viewBox="0 0 16.25 16.25" fill="none">
                    <path d={svgPaths.p30257440} fill="#30A46C" />
                  </svg>
                )}
                {isLocked && (
                  <svg className="w-full h-full" viewBox="0 0 15 16.875" fill="none">
                    <path d={svgPaths.p1946de00} fill={isDarkMode ? "#fff" : "#040011"} fillOpacity="0.611765" />
                  </svg>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}