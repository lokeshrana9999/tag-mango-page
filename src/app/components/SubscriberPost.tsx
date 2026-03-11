import imgAvatar5 from "@/assets/c2daac23d4fe980ae02eddc792b0ac0fbffe6714.png";
import { Avatar, AvatarImage } from "./ui/avatar";
import { ReactionBar } from "./ReactionBar";
import { useEffect, useState } from "react";

interface SubscriberPostProps {
  likes?: number;
  comments?: number;
}

const THEME_KEY = "theme";


export function SubscriberPost({ likes = 0, comments = 0 }: SubscriberPostProps) {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDarkMode(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-white dark:bg-[#2B292D] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-2xl">
      {/* Pinned banner */}
      <div
        className="h-[32px] flex items-center gap-2  dark:text-gray-400  font-medium border-b border-gray-100 dark:border-gray-700 px-3"
        style={{ fontWeight: 100, fontSize: '12px' }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill={isDarkMode ? "#fff" : "#211F26"} xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8696 5.68755L9.94549 8.62154C10.1949 9.31443 10.2982 10.4749 9.22417 11.9028C9.14905 12.0032 9.05314 12.0862 8.94299 12.1461C8.83285 12.2061 8.71106 12.2415 8.58596 12.2501C8.56518 12.2501 8.54495 12.2501 8.52416 12.2501C8.40919 12.2501 8.29533 12.2274 8.18911 12.1834C8.08289 12.1394 7.98638 12.0749 7.9051 11.9936L5.26588 9.35162L2.93456 11.6846C2.85246 11.7667 2.74112 11.8128 2.62502 11.8128C2.50893 11.8128 2.39759 11.7667 2.31549 11.6846C2.2334 11.6025 2.18728 11.4912 2.18728 11.3751C2.18728 11.259 2.2334 11.1476 2.31549 11.0655L4.64846 8.7342L2.00706 6.09279C1.92023 6.00586 1.85269 5.90162 1.80883 5.78685C1.76496 5.67209 1.74576 5.54937 1.75246 5.42669C1.75917 5.30401 1.79164 5.18412 1.84775 5.07482C1.90387 4.96552 1.98237 4.86927 2.07815 4.79232C3.46831 3.67068 4.79885 3.89107 5.38127 4.07373L8.31252 1.13208C8.39378 1.05081 8.49025 0.986342 8.59642 0.942357C8.70259 0.898372 8.81639 0.875732 8.93131 0.875732C9.04624 0.875732 9.16004 0.898372 9.26621 0.942357C9.37238 0.986342 9.46885 1.05081 9.5501 1.13208L12.8691 4.45052C13.0331 4.61453 13.1253 4.83696 13.1254 5.06892C13.1255 5.30089 13.0335 5.5234 12.8696 5.68755Z" 
           />
        </svg>
        This is a pinned post
      </div>

      <div className="p-3 pt-3 px-3 pb-0">
        {/* Author row */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar size={48}>
              <AvatarImage src={imgAvatar5} alt="Russell Brunson" />
            </Avatar>
            <div>
              <h3 className="font-semibold text-base text-[#211f26] dark:text-white">Russell Brunson</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">3 hrs ago</p>
            </div>
          </div>
          <button type="button" className="p-2 rounded-full mt-[-5px] mr-[-5px]">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <circle cx="6" cy="12" r="1.5" fill="#211F26" className="dark:fill-white" />
              <circle cx="12" cy="12" r="1.5" fill="#211F26" className="dark:fill-white" />
              <circle cx="18" cy="12" r="1.5" fill="#211F26" className="dark:fill-white" />
            </svg>
          </button>
        </div>

        {/* Body text */}
        <p className="text-[14px] text-[#211f26] dark:text-white leading-relaxed mt-[12px] pl-[5px]" style={{
          fontWeight: 400,
        }}>
          This 9-day fitness challenge is designed to help you build consistency, boost energy,
          and feel stronger—one day at a time. Each day comes with a simple, achievable
          fitness task that fits easily into your routine, no matter your current fitness level.
        </p>

        {/* Numbered list */}
        <ol className=" text-[14px] space-y-3 pl-[5px]" style={{
          fontWeight: 400,
          marginTop: '12px',
        }}>
          <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200 text-base">
          1️⃣ Minimum 20 minutes of sit-up <br />
          2️⃣ Share how intense (light/medium/hard) it felt <br />
          3️⃣ Optionally, upload a photo or video proof!
          </li>
        </ol>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-[18px] py-[12px] pb-4 h-[56px] mt-[12px] border-t border-gray-100 dark:border-gray-700">
        <ReactionBar likes={30} />
        <button className="text-sm text-gray-600 dark:text-white hover:underline">
          3 Comments
        </button>
      </div>
    </div>
  );
}
