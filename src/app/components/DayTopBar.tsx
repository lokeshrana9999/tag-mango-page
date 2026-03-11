import React, { useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-4sfs7x9o8n";
import sidebarBg from "@/assets/46ff7fa8c3051a0aeef9292abe9e13571e6086f4.png";

interface DayTopBarProps {
  selectedDay: number;
  onSelectDay: (day: number) => void;
  totalDays: number;
}

export function DayTopBar({ selectedDay, onSelectDay, totalDays }: DayTopBarProps) {
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const selectedButtonRef = useRef<HTMLButtonElement>(null);

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

  function toggleDarkMode() {
    const root = document.documentElement;
    const nowDark = root.classList.toggle("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
  }

  useEffect(() => {
    selectedButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selectedDay]);

  return (
    <div className="lg:hidden sticky top-0 z-40 relative">

      {/* Background image — absolute layer, does NOT scroll with items */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={sidebarBg}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover blur-[15px] scale-105 ${isDarkMode ? "sidebar-background-image-dark" : ""}`}
          aria-hidden
        />
        <div
          className={`absolute inset-0 ${!isDarkMode ? "bg-gradient-to-b from-[rgba(253,252,253,0.3)] to-[#f7f6fc]" : ""}`}
          style={isDarkMode ? { background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(3,3,3,0.6) 100%)" } : undefined}
        />
      </div>

      {/* Mini header strip — back, title, theme toggle, info */}
      <div className="relative z-10 flex items-center justify-between px-4 py-2.5 bg-[rgba(48,0,64,0.06)]">
        {/* Left: back + title */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
            <svg className="w-5 h-5" viewBox="0 0 9.00101 16.5008" fill="none">
              <path d={svgPaths.p3289c580} fill="#211F26" className="dark:fill-white" />
            </svg>
          </button>
          <span className="font-semibold text-sm text-[#211f26] dark:text-white">
            9-Day Fitness Challenge
          </span>
        </div>

        {/* Right: theme toggle + info */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="w-7 h-7 flex items-center justify-center hover:opacity-70 transition-opacity text-[#211f26] dark:text-white"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <button className="w-7 h-7 flex items-center justify-center hover:opacity-70 transition-opacity">
            <svg className="w-5 h-5" viewBox="0 0 19.5 19.5" fill="none">
              <path d={svgPaths.p18982200} fill="#211F26" className="dark:fill-white" />
            </svg>
          </button>
        </div>
      </div>

      {/* Left/right fade overlays — fixed over the scrollable row only */}
      {/* <div className="absolute left-0 bottom-0 w-8 bg-gradient-to-r from-[#f7f6fc] dark:from-[#000] to-transparent pointer-events-none z-20" style={{ top: "calc(2.5rem + 1px)" }} />
      <div className="absolute right-0 bottom-0 w-8 bg-gradient-to-l from-[#f7f6fc] dark:from-[#000] to-transparent pointer-events-none z-20" style={{ top: "calc(2.5rem + 1px)" }} /> */}

      {/* Scrollable row — bg-tint on this element stays fixed (doesn't scroll with inner content) */}
      <div className="relative overflow-x-auto topbar-no-scrollbar bg-[rgba(48,0,64,0.06)]">
        {/* pb-[21px] reserves space below buttons for the outer layer concave decorators */}
        <div className="flex gap-3 px-3 pt-3 pb-[5px] min-w-min">
          {days.map((day) => {
            const isCompleted = day < selectedDay;
            const isCurrent = day === selectedDay;
            const isLocked = day > selectedDay;

            return (
              <button
                key={day}
                ref={isCurrent ? selectedButtonRef : undefined}
                onClick={() => onSelectDay(day)}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-0.5 min-w-[56px] py-2 px-3 transition-all border-none cursor-pointer relative"
              >
                {/* Background fill — mirrors the sidebar's inner absolute bg div */}
                <div className={`
                  absolute top-0 left-0 right-0 bottom-0 z-0 rounded-tl-[30px] rounded-tr-[30px]
                  ${isCurrent
                    ? "bg-[#f7f6fc] dark:bg-[#000] mb-[-6px]"
                    : "hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-bl-[30px] rounded-br-[30px]"}
                  ${isLocked ? "opacity-60" : ""}
                `} />

                {/*
                  Concave corner decorators — horizontal equivalent of sidebar's
                  current-day-sidebar-outer-layer-top/bottom.
                  Sidebar: active tab opens to the RIGHT → corners at top-right & bottom-right.
                  Top bar: active tab opens UPWARD → corners at top-left & top-right.
                  Gradients are rotated accordingly (circle anchor swapped).
                */}
                {isCurrent && (
                  <>
                    <div className={`current-day-topbar-outer-layer-left${isDarkMode ? " current-day-topbar-outer-layer-left-dark" : ""}`} />
                    <div className={`current-day-topbar-outer-layer-right${isDarkMode ? " current-day-topbar-outer-layer-right-dark" : ""}`} />
                  </>
                )}

                <span className={`text-xs font-medium z-10 ${isCurrent ? "text-[#211f26] dark:text-white" : "text-[rgba(4,0,17,0.61)] dark:text-white"}`}>
                  Day
                </span>
                <span className={`text-base font-semibold tabular-nums z-10 ${isCurrent ? "text-[#211f26] dark:text-white" : "text-[rgba(4,0,17,0.61)] dark:text-white"}`}>
                  {day}
                </span>

                <div className="w-[16.25px] h-[16.25px] mt-0.5 z-10">
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
    </div>
  );
}
