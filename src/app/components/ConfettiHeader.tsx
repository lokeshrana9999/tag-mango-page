import confettiBg from "@/assets/confetti-bg.png";

export function ConfettiHeader() {
  return (
    <div className="relative h-24 overflow-hidden dark:bg-[#132d21] bg-[#e6f6eb] z-[10]">
      {/* Confetti Background */}
      <div
        className="absolute inset-0 lg:bg-cover bg-center pointer-events-none select-none bg-contain"
        style={{ backgroundImage: `url(${confettiBg})` }}
        aria-hidden
      />

      {/* Text Overlay */}
      <div className="relative z-10 flex items-center justify-center h-[48px]">
        <h4 className="text-md font-semibold text-[#218358] dark:text-white">
          Your Submission
        </h4>
      </div>
    </div>
  );
}
