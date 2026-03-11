import { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-4sfs7x9o8n";
import imgAvatar from "@/assets/27547db06df34a8ad36d31f5955f6ce92fb6f216.png";
import { Avatar, AvatarImage } from "./ui/avatar";

const THEME_KEY = "theme";

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [isDark]);

  return (
    <header className="hidden lg:block bg-white dark:bg-[#1A191B] px-4 md:px-6 py-3.5 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-2.5">
          <div className="w-6 h-5 md:w-8 md:h-6">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.4706 24">
              <g clipPath="url(#clip0_logo)">
                <path d={svgPaths.p2479f900} fill="#8D6500" />
              </g>
              <defs>
                <clipPath id="clip0_logo">
                  <rect fill="white" height="24" width="32.4706" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-xl md:text-2xl font-bold">
            <span className="text-[#211f26] dark:text-white">Backstage</span>
            <span className="text-[#8d6500]">Pass</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Fire Streak */}
          <div className="flex items-center gap-[2px] bg-gray-100  dark:bg-gray-800 rounded-full px-2 py-1">
            <div className="w-5 h-5 md:w-6 md:h-6 relative">
              <svg className="ml-[2px]" width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5509 14.5176C16.3663 18.927 12.7347 22.4454 8.27992 22.4454C3.70703 22.4454 5.81227e-06 18.6138 5.81227e-06 14.1655C5.81227e-06 13.5709 -0.0106524 12.3827 0.880847 10.3779C1.41437 9.1781 1.749 8.42436 1.93786 7.73537C2.04162 7.3567 2.24342 6.75508 2.8187 7.73537C3.15791 8.31338 3.17104 9.14472 3.17104 9.14472C3.17104 9.14472 4.43311 8.17623 5.28506 6.32602C6.534 3.61365 5.5375 1.99228 5.19697 0.864805C5.07911 0.474768 5.00512 -0.226205 5.81356 0.0720476C6.63732 0.376026 8.81512 1.9005 9.95352 3.50733C11.5782 5.8006 12.1556 7.99962 12.1556 7.99962C12.1556 7.99962 12.6758 7.35396 12.8603 6.67836C13.0686 5.91546 13.0717 5.15988 13.741 5.97377C14.3776 6.74777 15.323 8.2023 15.8552 9.58514C16.8213 12.0963 16.5509 14.5176 16.5509 14.5176Z" fill="url(#paint0_linear_1_13031)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.28016 22.4462C5.11803 22.4462 2.55469 19.8828 2.55469 16.7207C2.55469 14.8127 3.32357 13.6543 4.9238 12.0834C5.94839 11.0776 6.90737 9.84219 7.31493 9.00099C7.39518 8.83539 7.57778 7.97243 8.28183 8.98284C8.65117 9.51276 9.23015 10.4552 9.60142 11.2595C10.2414 12.6462 10.3942 13.9901 10.3942 13.9901C10.3942 13.9901 11.0214 13.6205 11.4512 12.6688C11.5897 12.3621 11.8699 11.201 12.6529 12.3619C13.2275 13.2139 14.0168 14.7457 14.0056 16.7207C14.0056 19.8828 11.4422 22.4462 8.28016 22.4462Z" fill="#FC9502" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37027 16.1953C9.18504 16.1953 9.18504 17.7041 10.22 19.7187C10.9092 21.0601 9.87836 22.4493 8.37027 22.4493C6.86218 22.4493 6.08008 21.2268 6.08008 19.7187C6.08008 18.2107 7.55549 16.1953 8.37027 16.1953Z" fill="#FCE202" />
                <defs>
                  <linearGradient id="paint0_linear_1_13031" x1="8.29234" y1="22.462" x2="8.29234" y2="0.017083" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF4C0D" />
                    <stop offset="1" stop-color="#FC9502" />
                  </linearGradient>
                </defs>
              </svg>

            </div>
            <span className="text-sm md:text-base font-medium text-[#211f26] dark:text-white">30</span>
          </div>

          {/* Notification Bell */}
          <button className="w-8 h-8 rounded-full border border-[rgba(8,0,49,0.27)]  dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#211F26] dark:text-white">
              <path d="M13.8625 10.9963C13.5156 10.3988 13 8.70813 13 6.5C13 5.17392 12.4732 3.90215 11.5355 2.96447C10.5979 2.02678 9.32609 1.5 8.00001 1.5C6.67393 1.5 5.40216 2.02678 4.46447 2.96447C3.52679 3.90215 3.00001 5.17392 3.00001 6.5C3.00001 8.70875 2.48376 10.3988 2.13688 10.9963C2.0483 11.1482 2.00134 11.3207 2.00074 11.4966C2.00013 11.6724 2.04591 11.8453 2.13344 11.9978C2.22098 12.1503 2.34718 12.277 2.49932 12.3652C2.65146 12.4534 2.82417 12.4999 3.00001 12.5H5.55063C5.66599 13.0645 5.97277 13.5718 6.41909 13.9361C6.86541 14.3004 7.42387 14.4994 8.00001 14.4994C8.57615 14.4994 9.13461 14.3004 9.58093 13.9361C10.0272 13.5718 10.334 13.0645 10.4494 12.5H13C13.1758 12.4998 13.3484 12.4532 13.5005 12.365C13.6525 12.2768 13.7786 12.15 13.8661 11.9975C13.9536 11.845 13.9993 11.6722 13.9987 11.4964C13.998 11.3206 13.9511 11.1481 13.8625 10.9963ZM8.00001 13.5C7.6899 13.4999 7.38744 13.4037 7.13426 13.2246C6.88108 13.0455 6.68963 12.7924 6.58626 12.5H9.41376C9.31039 12.7924 9.11894 13.0455 8.86576 13.2246C8.61258 13.4037 8.31012 13.4999 8.00001 13.5ZM3.00001 11.5C3.48126 10.6725 4.00001 8.755 4.00001 6.5C4.00001 5.43913 4.42144 4.42172 5.17158 3.67157C5.92173 2.92143 6.93914 2.5 8.00001 2.5C9.06087 2.5 10.0783 2.92143 10.8284 3.67157C11.5786 4.42172 12 5.43913 12 6.5C12 8.75312 12.5175 10.6706 13 11.5H3.00001Z" fill="currentColor" />
            </svg>

          </button>

          {/* Dark / Light mode switcher */}
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            className="w-8 h-8 rounded-full border border-[rgba(8,0,49,0.27)] dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-[#211f26] dark:text-white transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
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

          {/* User Avatar */}
          <Avatar size={32}>
            <AvatarImage src={imgAvatar} alt="User avatar" />
          </Avatar>
        </div>
      </div>
    </header>
  );
}