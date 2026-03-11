interface ReactionBarProps {
  likes: number;
}


const WrapperBounded = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-flex items-center gap-1 bg-[#F2EFF3] dark:bg-[rgb(42,42,44)] rounded-full  shadow-sm border border-gray-200 dark:border-gray-700">
      {children}
    </div>
  );
};

export function ReactionBar({ likes }: ReactionBarProps) {
  return (
    <div className="flex items-center gap-2">
   
    <WrapperBounded>
      {/* Emoji reactions + count */}
      <button className="flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full px-2 py-1 transition-colors cursor-pointer">
        <span className="text-[16px] dark:text-white text-gray-800 reaction-buttons-wrapper">🙌</span>
        <span className="text-[16px] dark:text-white text-gray-800 reaction-buttons-wrapper">😍</span>
        <span className="text-[16px]  text-gray-800 dark:text-gray-200 dark:text-white reaction-buttons-wrapper">{likes}</span>
      </button>
      
      </WrapperBounded>
    <WrapperBounded>
    {/* Smiley SVG button */}
    <button className="reaction-buttons-wrapper dark:text-white flex items-center justify-center p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M15.5 9c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 9 15.5 9"/>
          <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"/>
          <path d="M14.83 14.83a3.94 3.94 0 0 1-2.02 1.09 4.053 4.053 0 0 1-2.37-.23 3.935 3.935 0 0 1-1.27-.86c-.18-.18-.34-.38-.49-.59l-1.66 1.12c.22.32.46.62.73.88.27.27.57.52.89.73s.66.4 1.02.55.74.27 1.13.35a6.1 6.1 0 0 0 2.42 0c.38-.08.76-.2 1.13-.35.36-.15.7-.34 1.02-.55s.62-.46.89-.73.52-.57.73-.89l-1.66-1.12c-.14.21-.31.41-.49.59Z"/>
        </svg>
      </button>
      </WrapperBounded>

      {/* Comment SVG button */}
      <WrapperBounded> 
      <button className=" reaction-buttons-wrapper dark:text-white flex items-center justify-center p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99982 1.875C8.59706 1.87469 7.21811 2.23757 5.9972 2.9283C4.77629 3.61904 3.75501 4.6141 3.03277 5.81664C2.31052 7.01918 1.91192 8.38822 1.87575 9.79052C1.83958 11.1928 2.16709 12.5806 2.82638 13.8188L1.93966 16.4789C1.86621 16.6992 1.85556 16.9355 1.90888 17.1615C1.96221 17.3874 2.07741 17.5941 2.24158 17.7582C2.40575 17.9224 2.61239 18.0376 2.83836 18.0909C3.06432 18.1443 3.30067 18.1336 3.52091 18.0602L6.18107 17.1734C7.27073 17.753 8.47811 18.0767 9.71156 18.12C10.945 18.1633 12.1721 17.925 13.2997 17.4232C14.4273 16.9215 15.4258 16.1694 16.2194 15.2241C17.0129 14.2789 17.5807 13.1652 17.8796 11.9678C18.1785 10.7703 18.2007 9.52047 17.9445 8.31315C17.6882 7.10584 17.1603 5.97276 16.4008 4.99993C15.6413 4.02711 14.6701 3.24009 13.561 2.69864C12.4519 2.15718 11.234 1.87551 9.99982 1.875ZM9.99982 16.875C8.79121 16.8758 7.6038 16.5575 6.55763 15.9523C6.48104 15.9079 6.39587 15.8803 6.30779 15.8713C6.2197 15.8622 6.13071 15.872 6.0467 15.9L3.12482 16.875L4.09904 13.9531C4.12712 13.8692 4.13705 13.7802 4.12816 13.6921C4.11927 13.604 4.09177 13.5188 4.04748 13.4422C3.28964 12.132 2.98537 10.6083 3.18187 9.10747C3.37837 7.60667 4.06466 6.21267 5.13426 5.14171C6.20387 4.07076 7.597 3.38271 9.09755 3.18431C10.5981 2.98592 12.1222 3.28826 13.4334 4.04444C14.7445 4.80062 15.7695 5.96837 16.3493 7.36652C16.9291 8.76468 17.0313 10.3151 16.64 11.7773C16.2487 13.2394 15.3858 14.5316 14.1852 15.4533C12.9846 16.375 11.5134 16.8748 9.99982 16.875Z" fill="currentColor"/>
        </svg>
      </button>
      </WrapperBounded>
    </ div>
  );
}
