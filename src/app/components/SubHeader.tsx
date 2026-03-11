import svgPaths from "../../imports/svg-4sfs7x9o8n";

interface SubHeaderProps {
  currentDay: number;
  totalDays: number;
  onToggleSidebar?: () => void;
}

export function SubHeader({ currentDay, totalDays, onToggleSidebar }: SubHeaderProps) {
  return (
    <div className="hidden lg:block bg-white/80 dark:bg-[#232225] backdrop-blur-sm border-b border-t border-[#f2eff3] dark:border-gray-800 px-[18px] md:px-6 h-14 sticky top-[60px] z-30">
      <div className="flex items-center justify-between h-full">
        {/* Left Section */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => onToggleSidebar?.()}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Back Button - Hidden on mobile */}
          <button className="hidden md:flex items-center gap-2 hover:opacity-70 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 9.00101 16.5008" fill="none">
              <path d={svgPaths.p3289c580} fill="#211F26" className="dark:fill-white" />
            </svg>
            <span className="font-semibold text-base text-[#211f26] dark:text-white">Back</span>
          </button>

          {/* Separator - Hidden on mobile */}
          <div className="hidden md:block h-8 w-px bg-[rgba(20,0,53,0.15)] dark:bg-gray-700" />

          {/* Day Counter */}
          <div className="text-base md:text-lg font-semibold tracking-[-0.0072px] text-[#211f26] dark:text-white">
            Day {currentDay} of {totalDays}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline font-semibold text-sm md:text-base text-[#211f26] dark:text-white">
            9-Day Fitness Challenge
          </span>
          <button className="w-6 h-6 hover:opacity-70 transition-opacity">
            <svg className="w-full h-full" viewBox="0 0 19.5 19.5" fill="none">
              <path d={svgPaths.p18982200} fill="#211F26" className="dark:fill-white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}