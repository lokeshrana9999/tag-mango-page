import svgPaths from "./svg-4sfs7x9o8n";
import imgImage from "@/assets/46ff7fa8c3051a0aeef9292abe9e13571e6086f4.png";
import imgAvatar from "@/assets/27547db06df34a8ad36d31f5955f6ce92fb6f216.png";
import imgFrame237827 from "@/assets/55da0fffa11de259c802bcbee77cdaeb424f72da.png";
import imgAvatar1 from "@/assets/a8cb2087e1ef996deca15111fb23f9e4fb85f8d3.png";
import imgAvatar2 from "@/assets/8abfc3a4ba6679822afacf7f361b9af4b910b0f2.png";
import imgAvatar3 from "@/assets/1770c5a7403cac810324d62124f213964ba0e950.png";
import imgAvatar4 from "@/assets/6703fd62b858be974b97097e2df2ace650a29846.png";
import imgImage1 from "@/assets/6226844c1d2b3bda7ae76546c1de3c6d3fc3cdc7.png";
import imgImage2 from "@/assets/b2eba0e9ea7b559d24feb13506f33c1ed456d785.png";
import imgImage3 from "@/assets/5deb7f238265d3fe55c917219bc362542aa2537a.png";
import imgImage4 from "@/assets/8f38e943fa28307d304d03d45f40e2b9fcf30583.png";
import imgImage5 from "@/assets/a09bafa2bdff53852651c3c2accafc866ebe3bda.png";
import imgAvatar5 from "@/assets/c2daac23d4fe980ae02eddc792b0ac0fbffe6714.png";
import imgFrame237826 from "@/assets/4b511bc87aa400fca53b07562a25a6296def6b39.png";

function Image() {
  return (
    <div className="absolute h-[903px] left-0 right-0 top-0" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Overlay() {
  return <div className="absolute backdrop-blur-[25px] bg-gradient-to-r from-[50.775%] from-[rgba(253,252,253,0.3)] h-[908px] left-0 right-0 to-[#f7f6fc] top-0" data-name="Overlay" />;
}

function Background() {
  return (
    <div className="absolute bg-white h-[908px] left-0 overflow-clip top-[116px] w-[258px]" data-name="Background">
      <Image />
      <Overlay />
    </div>
  );
}

function SvgPath() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32.471px]" data-name="svg-path (5) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.4706 24">
        <g clipPath="url(#clip0_1_14004)" id="svg-path (5) 1">
          <path d={svgPaths.p2479f900} fill="var(--fill-0, #8D6500)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_14004">
            <rect fill="white" height="24" width="32.4706" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BackstagePassLogo() {
  return (
    <div className="content-stretch flex gap-[9.6px] h-[24px] items-center relative shrink-0 w-[201.671px]" data-name="BackstagePass Logo">
      <SvgPath />
      <p className="font-['Sarabun:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#211f26] text-[0px] text-[24px] whitespace-nowrap">
        <span className="leading-[normal]">Backstage</span>
        <span className="leading-[normal] text-[#8d6500]">Pass</span>
      </p>
    </div>
  );
}

function Fire() {
  return (
    <div className="absolute inset-[4.17%_15.14%_2.29%_15.76%]" data-name="fire">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5858 22.4493">
        <g id="fire">
          <path clipRule="evenodd" d={svgPaths.p3b7633c0} fill="url(#paint0_linear_1_13845)" fillRule="evenodd" id="path-1" />
          <path clipRule="evenodd" d={svgPaths.p3d650d80} fill="var(--fill-0, #FC9502)" fillRule="evenodd" id="path-2" />
          <path clipRule="evenodd" d={svgPaths.p28db2080} fill="var(--fill-0, #FCE202)" fillRule="evenodd" id="path-3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_13845" x1="8.29234" x2="8.29234" y1="22.462" y2="0.017083">
            <stop stopColor="#FF4C0D" />
            <stop offset="1" stopColor="#FC9502" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Fi() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fi_14261136">
      <Fire />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] h-full relative rounded-[9999px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center px-[8px] py-[4px] relative">
          <Fi />
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
            <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211f26] text-[16px] whitespace-nowrap">30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
          <div className="absolute inset-[9.38%_12.51%_9.38%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9979 12.9994">
              <path d={svgPaths.p1c6c0040} fill="var(--fill-0, #211F26)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(8,0,49,0.27)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <Frame29 />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative rounded-[9999px] shrink-0" data-name="Icon Button">
        <ContentContainer />
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
          <img alt="" className="absolute h-[200.48%] left-[-13.97%] max-w-none top-[-36.68%] w-[133.7%]" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex h-[60px] items-center justify-between left-0 overflow-clip px-[24px] py-[14px] top-0 w-[1440px]" data-name="Header">
      <BackstagePassLogo />
      <Frame26 />
    </div>
  );
}

function Trigger() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center overflow-clip relative shrink-0" data-name="Trigger">
      <div className="relative shrink-0 size-[24px]" data-name="CaretLeft">
        <div className="absolute inset-[15.62%_34.37%_15.62%_28.12%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.00101 16.5008">
            <path d={svgPaths.p3289c580} fill="var(--fill-0, #211F26)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211f26] text-[16px] whitespace-nowrap">Back</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Trigger />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[48px] items-center overflow-clip py-[8px] relative shrink-0" data-name="Separator">
        <div className="bg-[rgba(20,0,53,0.15)] h-full shrink-0 w-px" data-name="line" />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#211f26] text-[18px] tracking-[-0.0072px] whitespace-nowrap">Day 1 of 9</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211f26] text-[16px] whitespace-nowrap">9-Day Fitness Challenge</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Info">
        <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p18982200} fill="var(--fill-0, #211F26)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[56px] relative shrink-0 w-full" data-name="Wrapper">
      <div aria-hidden="true" className="absolute border-[#f2eff3] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[18px] pr-[24px] relative size-full">
          <Frame53 />
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,0,17,0.61)]">Day - 1</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="CheckCircle">
        <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
            <path d={svgPaths.p30257440} fill="var(--fill-0, #30A46C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="opacity-0 relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#211f26] text-[16px]">Day - 1</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="CheckCircle">
        <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
            <path d={svgPaths.p30257440} fill="var(--fill-0, #30A46C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,0,17,0.61)]">Day - 2</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="LockSimple">
        <div className="absolute inset-[3.13%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.875">
            <path d={svgPaths.p1946de00} fill="var(--fill-0, #040011)" fillOpacity="0.611765" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,0,17,0.61)]">Day - 3</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="LockSimple">
        <div className="absolute inset-[3.13%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.875">
            <path d={svgPaths.p1946de00} fill="var(--fill-0, #040011)" fillOpacity="0.611765" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,0,17,0.61)]">Day - 4</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="LockSimple">
        <div className="absolute inset-[3.13%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.875">
            <path d={svgPaths.p1946de00} fill="var(--fill-0, #040011)" fillOpacity="0.611765" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,0,17,0.61)]">Day - 5</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="LockSimple">
        <div className="absolute inset-[3.13%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.875">
            <path d={svgPaths.p1946de00} fill="var(--fill-0, #040011)" fillOpacity="0.611765" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,0,17,0.61)]">Day - 6</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="LockSimple">
        <div className="absolute inset-[3.13%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.875">
            <path d={svgPaths.p1946de00} fill="var(--fill-0, #040011)" fillOpacity="0.611765" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,0,17,0.61)]">Day - 7</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="LockSimple">
        <div className="absolute inset-[3.13%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.875">
            <path d={svgPaths.p1946de00} fill="var(--fill-0, #040011)" fillOpacity="0.611765" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,0,17,0.61)]">Day - 8</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="LockSimple">
        <div className="absolute inset-[3.13%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.875">
            <path d={svgPaths.p1946de00} fill="var(--fill-0, #040011)" fillOpacity="0.611765" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Text">
        <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(4,0,17,0.61)]">Day - 9</p>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="LockSimple">
        <div className="absolute inset-[3.13%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.875">
            <path d={svgPaths.p1946de00} fill="var(--fill-0, #040011)" fillOpacity="0.611765" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[24px] w-full">
      <div className="-translate-y-1/2 absolute flex h-[98px] items-center justify-center left-0 top-[calc(50%-350.5px)] w-[250px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="h-[250px] relative w-[98px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 250">
              <path d={svgPaths.p3c296800} fill="var(--fill-0, #F7F6FC)" id="Rectangle 4" />
            </svg>
          </div>
        </div>
      </div>
      <Frame12 />
      <Frame13 />
      <Frame15 />
      <Frame16 />
      <Frame21 />
      <Frame22 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[16px] w-full">
      <Frame44 />
    </div>
  );
}

function Overlay1() {
  return <div className="absolute bg-gradient-to-t from-[rgba(255,255,255,0)] h-[56px] left-0 to-[#f7f6fc] top-0 w-[258px]" data-name="Overlay" />;
}

function CheckinDayPanel() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] h-full relative shrink-0 w-[258px]" data-name="Checkin Day panel">
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-[24px] pl-[8px] pt-[16px] relative size-full">
        <Frame54 />
        <Overlay1 />
      </div>
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute h-[98.071px] left-0 top-[4.47px] w-[641.352px]" data-name="BG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 641.352 98.0707">
        <g clipPath="url(#clip0_1_13854)" id="BG">
          <g id="Group 101">
            <path d={svgPaths.p71bc600} fill="url(#paint0_linear_1_13854)" id="Vector" />
            <path d={svgPaths.p206b1a00} fill="url(#paint1_linear_1_13854)" id="Vector_2" />
            <path d={svgPaths.p31e8dd70} fill="url(#paint2_linear_1_13854)" id="Vector_3" />
            <path d={svgPaths.p30b91900} fill="url(#paint3_linear_1_13854)" id="Vector_4" />
            <path d={svgPaths.p159bb440} fill="url(#paint4_linear_1_13854)" id="Vector_5" />
            <path d={svgPaths.p1af2a400} fill="url(#paint5_linear_1_13854)" id="Vector_6" />
            <path d={svgPaths.p1793ef00} fill="url(#paint6_linear_1_13854)" id="Vector_7" />
            <path d={svgPaths.p29c20100} fill="url(#paint7_linear_1_13854)" id="Vector_8" />
            <path d={svgPaths.p2ece780} fill="url(#paint8_linear_1_13854)" id="Vector_9" />
            <path d={svgPaths.p21a1800} fill="url(#paint9_linear_1_13854)" id="Vector_10" />
            <path d={svgPaths.p7dcb900} fill="url(#paint10_linear_1_13854)" id="Vector_11" />
            <path d={svgPaths.p14e80600} fill="url(#paint11_linear_1_13854)" id="Vector_12" />
            <path d={svgPaths.p2a451380} fill="url(#paint12_linear_1_13854)" id="Vector_13" />
            <path d={svgPaths.p8b71640} fill="url(#paint13_linear_1_13854)" id="Vector_14" />
            <path d={svgPaths.p37e7dc00} fill="url(#paint14_linear_1_13854)" id="Vector_15" />
            <path d={svgPaths.pcf5cbc0} fill="url(#paint15_linear_1_13854)" id="Vector_16" />
            <path d={svgPaths.p22d8ec00} fill="url(#paint16_linear_1_13854)" id="Vector_17" />
            <path d={svgPaths.p355572c0} fill="url(#paint17_linear_1_13854)" id="Vector_18" />
            <path d={svgPaths.p1d56a500} fill="url(#paint18_linear_1_13854)" id="Vector_19" />
            <path d={svgPaths.p258c0400} fill="url(#paint19_linear_1_13854)" id="Vector_20" />
            <path d={svgPaths.p7c93800} fill="url(#paint20_linear_1_13854)" id="Vector_21" />
            <path d={svgPaths.p28ab0700} fill="url(#paint21_linear_1_13854)" id="Vector_22" />
            <path d={svgPaths.p1767f700} fill="url(#paint22_linear_1_13854)" id="Vector_23" />
            <path d={svgPaths.p39fb3340} fill="url(#paint23_linear_1_13854)" id="Vector_24" />
            <path d={svgPaths.p282bdd00} fill="url(#paint24_linear_1_13854)" id="Vector_25" />
            <path d={svgPaths.p2640ce80} fill="url(#paint25_linear_1_13854)" id="Vector_26" />
            <path d={svgPaths.p9be3c80} fill="url(#paint26_linear_1_13854)" id="Vector_27" />
            <path d={svgPaths.p10a10800} fill="url(#paint27_linear_1_13854)" id="Vector_28" />
            <path d={svgPaths.p2c32e800} fill="url(#paint28_linear_1_13854)" id="Vector_29" />
            <path d={svgPaths.p2abf3280} fill="url(#paint29_linear_1_13854)" id="Vector_30" />
            <path d={svgPaths.p2f765e00} fill="url(#paint30_linear_1_13854)" id="Vector_31" />
            <path d={svgPaths.pc8a9800} fill="url(#paint31_linear_1_13854)" id="Vector_32" />
            <path d={svgPaths.p1710fd80} fill="url(#paint32_linear_1_13854)" id="Vector_33" />
            <path d={svgPaths.p33ee4480} fill="url(#paint33_linear_1_13854)" id="Vector_34" />
            <path d={svgPaths.p380a3fa0} fill="url(#paint34_linear_1_13854)" id="Vector_35" />
            <path d={svgPaths.p22883280} fill="url(#paint35_linear_1_13854)" id="Vector_36" />
            <path d={svgPaths.p28910c00} fill="url(#paint36_linear_1_13854)" id="Vector_37" />
            <path d={svgPaths.p37c73180} fill="url(#paint37_linear_1_13854)" id="Vector_38" />
            <path d={svgPaths.p3f5627f0} fill="url(#paint38_linear_1_13854)" id="Vector_39" />
            <path d={svgPaths.p1e9cbe80} fill="url(#paint39_linear_1_13854)" id="Vector_40" />
            <path d={svgPaths.p391d6f00} fill="url(#paint40_linear_1_13854)" id="Vector_41" />
            <path d={svgPaths.p3c6ccc00} fill="url(#paint41_linear_1_13854)" id="Vector_42" />
            <path d={svgPaths.p22816bf0} fill="url(#paint42_linear_1_13854)" id="Vector_43" />
            <path d={svgPaths.p6e76f00} fill="url(#paint43_linear_1_13854)" id="Vector_44" />
            <path d={svgPaths.p77e7040} fill="url(#paint44_linear_1_13854)" id="Vector_45" />
            <path d={svgPaths.p1f994600} fill="url(#paint45_linear_1_13854)" id="Vector_46" />
            <path d={svgPaths.p59aab00} fill="url(#paint46_linear_1_13854)" id="Vector_47" />
            <path d={svgPaths.p33e77680} fill="url(#paint47_linear_1_13854)" id="Vector_48" />
            <path d={svgPaths.p14f0b200} fill="url(#paint48_linear_1_13854)" id="Vector_49" />
            <path d={svgPaths.p2d8a0a00} fill="url(#paint49_linear_1_13854)" id="Vector_50" />
            <path d={svgPaths.p22bddc00} fill="url(#paint50_linear_1_13854)" id="Vector_51" />
            <path d={svgPaths.p19f16040} fill="url(#paint51_linear_1_13854)" id="Vector_52" />
            <path d={svgPaths.p11307c00} fill="url(#paint52_linear_1_13854)" id="Vector_53" />
            <path d={svgPaths.p2ec009c0} fill="url(#paint53_linear_1_13854)" id="Vector_54" />
            <path d={svgPaths.pe042480} fill="url(#paint54_linear_1_13854)" id="Vector_55" />
            <path d={svgPaths.p1fcf6680} fill="url(#paint55_linear_1_13854)" id="Vector_56" />
            <path d={svgPaths.p32b93700} fill="url(#paint56_linear_1_13854)" id="Vector_57" />
            <path d={svgPaths.p32262580} fill="url(#paint57_linear_1_13854)" id="Vector_58" />
            <path d={svgPaths.p3a2cfd00} fill="url(#paint58_linear_1_13854)" id="Vector_59" />
            <path d={svgPaths.p27639c0} fill="url(#paint59_linear_1_13854)" id="Vector_60" />
            <path d={svgPaths.p5e26500} fill="url(#paint60_linear_1_13854)" id="Vector_61" />
            <path d={svgPaths.p140cd100} fill="url(#paint61_linear_1_13854)" id="Vector_62" />
            <path d={svgPaths.p2932a000} fill="url(#paint62_linear_1_13854)" id="Vector_63" />
            <path d={svgPaths.p16021d00} fill="url(#paint63_linear_1_13854)" id="Vector_64" />
            <path d={svgPaths.p172fdc40} fill="url(#paint64_linear_1_13854)" id="Vector_65" />
            <path d={svgPaths.p39230100} fill="url(#paint65_linear_1_13854)" id="Vector_66" />
            <path d={svgPaths.p26a44e80} fill="url(#paint66_linear_1_13854)" id="Vector_67" />
            <path d={svgPaths.pf040080} fill="url(#paint67_linear_1_13854)" id="Vector_68" />
            <path d={svgPaths.p3f40900} fill="url(#paint68_linear_1_13854)" id="Vector_69" />
            <path d={svgPaths.p2bcb1100} fill="url(#paint69_linear_1_13854)" id="Vector_70" />
            <path d={svgPaths.p22b87972} fill="url(#paint70_linear_1_13854)" id="Vector_71" />
            <path d={svgPaths.p361f0800} fill="url(#paint71_linear_1_13854)" id="Vector_72" />
            <path d={svgPaths.p4102c00} fill="url(#paint72_linear_1_13854)" id="Vector_73" />
            <path d={svgPaths.p24a09080} fill="url(#paint73_linear_1_13854)" id="Vector_74" />
          </g>
          <g id="Group 95">
            <path d={svgPaths.p2fddf480} fill="url(#paint74_linear_1_13854)" id="Vector_75" />
            <path d={svgPaths.p304f1a00} fill="url(#paint75_linear_1_13854)" id="Vector_76" />
            <path d={svgPaths.p284a5c00} fill="url(#paint76_linear_1_13854)" id="Vector_77" />
            <path d={svgPaths.p285a0d00} fill="url(#paint77_linear_1_13854)" id="Vector_78" />
            <path d={svgPaths.p22794f80} fill="url(#paint78_linear_1_13854)" id="Vector_79" />
            <path d={svgPaths.p10140700} fill="url(#paint79_linear_1_13854)" id="Vector_80" />
            <path d={svgPaths.p3731c100} fill="url(#paint80_linear_1_13854)" id="Vector_81" />
            <path d={svgPaths.p16b19700} fill="url(#paint81_linear_1_13854)" id="Vector_82" />
            <path d={svgPaths.pf49e000} fill="url(#paint82_linear_1_13854)" id="Vector_83" />
            <path d={svgPaths.p38e29700} fill="url(#paint83_linear_1_13854)" id="Vector_84" />
            <path d={svgPaths.p16aa59f0} fill="url(#paint84_linear_1_13854)" id="Vector_85" />
            <path d={svgPaths.p103628f0} fill="url(#paint85_linear_1_13854)" id="Vector_86" />
            <path d={svgPaths.p3ee58e00} fill="url(#paint86_linear_1_13854)" id="Vector_87" />
            <path d={svgPaths.p29035500} fill="url(#paint87_linear_1_13854)" id="Vector_88" />
          </g>
          <g id="Group 100">
            <path d={svgPaths.p32c02800} fill="url(#paint88_linear_1_13854)" id="Vector_89" />
            <path d={svgPaths.p7179300} fill="url(#paint89_linear_1_13854)" id="Vector_90" />
            <path d={svgPaths.p154ae800} fill="url(#paint90_linear_1_13854)" id="Vector_91" />
            <path d={svgPaths.p7b09670} fill="url(#paint91_linear_1_13854)" id="Vector_92" />
            <path d={svgPaths.p3ddca700} fill="url(#paint92_linear_1_13854)" id="Vector_93" />
          </g>
          <g id="Group 94">
            <path d={svgPaths.p31b4b500} fill="url(#paint93_linear_1_13854)" id="Vector_94" />
            <path d={svgPaths.p2a77ba00} fill="url(#paint94_linear_1_13854)" id="Vector_95" />
            <path d={svgPaths.p3d616540} fill="url(#paint95_linear_1_13854)" id="Vector_96" />
            <path d={svgPaths.p4953d00} fill="url(#paint96_linear_1_13854)" id="Vector_97" />
            <path d={svgPaths.p24764800} fill="url(#paint97_linear_1_13854)" id="Vector_98" />
          </g>
          <g id="Group 92">
            <path d={svgPaths.p3e614480} fill="url(#paint98_linear_1_13854)" id="Vector_99" />
            <path d={svgPaths.pedbc880} fill="url(#paint99_linear_1_13854)" id="Vector_100" />
            <path d={svgPaths.p5495b72} fill="url(#paint100_linear_1_13854)" id="Vector_101" />
            <path d={svgPaths.p213d3200} fill="url(#paint101_linear_1_13854)" id="Vector_102" />
            <path d={svgPaths.p3add7d00} fill="url(#paint102_linear_1_13854)" id="Vector_103" />
            <path d={svgPaths.p27522700} fill="url(#paint103_linear_1_13854)" id="Vector_104" />
            <path d={svgPaths.p2bfa8b00} fill="url(#paint104_linear_1_13854)" id="Vector_105" />
          </g>
          <g id="Group 99">
            <path d={svgPaths.p3e7b2300} fill="url(#paint105_linear_1_13854)" id="Vector_106" />
            <path d={svgPaths.p2ca1a300} fill="url(#paint106_linear_1_13854)" id="Vector_107" />
            <path d={svgPaths.p3356c580} fill="url(#paint107_linear_1_13854)" id="Vector_108" />
            <path d={svgPaths.p3ad4f80} fill="url(#paint108_linear_1_13854)" id="Vector_109" />
            <path d={svgPaths.p12d46700} fill="url(#paint109_linear_1_13854)" id="Vector_110" />
            <path d={svgPaths.p3ca2ad92} fill="url(#paint110_linear_1_13854)" id="Vector_111" />
            <path d={svgPaths.p1129e440} fill="url(#paint111_linear_1_13854)" id="Vector_112" />
            <path d={svgPaths.p3088fa00} fill="url(#paint112_linear_1_13854)" id="Vector_113" />
          </g>
          <g id="Group 93">
            <path d={svgPaths.p1f090f00} fill="url(#paint113_linear_1_13854)" id="Vector_114" />
            <path d={svgPaths.p1937bf00} fill="url(#paint114_linear_1_13854)" id="Vector_115" />
            <path d={svgPaths.p3f303600} fill="url(#paint115_linear_1_13854)" id="Vector_116" />
            <path d={svgPaths.p2dc51300} fill="url(#paint116_linear_1_13854)" id="Vector_117" />
            <path d={svgPaths.p18ba2b00} fill="url(#paint117_linear_1_13854)" id="Vector_118" />
          </g>
          <g id="Group 97">
            <path d={svgPaths.p2cdaa00} fill="url(#paint118_linear_1_13854)" id="Vector_119" />
            <path d={svgPaths.p189c200} fill="url(#paint119_linear_1_13854)" id="Vector_120" />
            <path d={svgPaths.p3f420280} fill="url(#paint120_linear_1_13854)" id="Vector_121" />
            <path d={svgPaths.p650b800} fill="url(#paint121_linear_1_13854)" id="Vector_122" />
            <path d={svgPaths.pc847680} fill="url(#paint122_linear_1_13854)" id="Vector_123" />
            <path d={svgPaths.p284a4300} fill="url(#paint123_linear_1_13854)" id="Vector_124" />
            <path d={svgPaths.p13a4f900} fill="url(#paint124_linear_1_13854)" id="Vector_125" />
          </g>
          <path d={svgPaths.p34ec0e00} fill="url(#paint125_linear_1_13854)" id="Vector_126" />
          <path d={svgPaths.p22f89f70} fill="url(#paint126_linear_1_13854)" id="Vector_127" />
          <path d={svgPaths.p2d364e80} fill="url(#paint127_linear_1_13854)" id="Vector_128" />
          <path d={svgPaths.p2386eb00} fill="url(#paint128_linear_1_13854)" id="Vector_129" />
          <path d={svgPaths.p3cd76940} fill="url(#paint129_linear_1_13854)" id="Vector_130" />
          <path d={svgPaths.p1711f880} fill="url(#paint130_linear_1_13854)" id="Vector_131" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_13854" x1="359.154" x2="357.733" y1="66.682" y2="67.0635">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_13854" x1="345.944" x2="346.789" y1="215.517" y2="217.473">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_13854" x1="380.728" x2="380.099" y1="155.332" y2="155.745">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_13854" x1="29.1592" x2="30.4833" y1="-107.816" y2="-109.219">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_13854" x1="73.7722" x2="73.8224" y1="-57.0959" y2="-54.6616">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_13854" x1="489.11" x2="486.335" y1="222.649" y2="222.358">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_13854" x1="232.276" x2="230.585" y1="-18.8761" y2="-19.7071">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_13854" x1="95.3939" x2="98.0626" y1="42.9041" y2="41.8758">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_13854" x1="269.181" x2="269.385" y1="243.766" y2="242.723">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_13854" x1="558.237" x2="558.241" y1="-82.9177" y2="-84.5854">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_13854" x1="467.206" x2="467.432" y1="120.477" y2="119.512">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_13854" x1="505.084" x2="505.846" y1="-150.894" y2="-151.374">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_13854" x1="295.143" x2="295.023" y1="91.8982" y2="92.5483">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_13854" x1="95.6274" x2="94.9371" y1="-108.091" y2="-107.959">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_13854" x1="474.897" x2="476.12" y1="147.358" y2="147.381">
            <stop stopColor="#0038AB" />
            <stop offset="0.11" stopColor="#0061C9" />
            <stop offset="0.27" stopColor="#0097EF" />
            <stop offset="0.35" stopColor="#00ACFF" />
            <stop offset="0.4" stopColor="#00BFFF" />
            <stop offset="0.47" stopColor="#00D2FF" />
            <stop offset="0.52" stopColor="#00D9FF" />
            <stop offset="0.66" stopColor="#00B7FF" />
            <stop offset="0.71" stopColor="#00ACFF" />
            <stop offset="0.76" stopColor="#00A1F7" />
            <stop offset="0.83" stopColor="#0085E3" />
            <stop offset="0.93" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_13854" x1="481.183" x2="484.672" y1="-102.744" y2="-102.738">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_13854" x1="516.619" x2="514.882" y1="-158.074" y2="-159.425">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_13854" x1="602.879" x2="602.577" y1="-92.753" y2="-94.28">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_13854" x1="96.2242" x2="97.1728" y1="226.981" y2="226.476">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_13854" x1="193.592" x2="191.982" y1="41.9865" y2="43.3994">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_13854" x1="284.768" x2="284.819" y1="166.44" y2="164.724">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_13854" x1="181.967" x2="178.897" y1="44.2677" y2="42.5186">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_13854" x1="24.6128" x2="24.54" y1="-60.583" y2="-59.6428">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_13854" x1="394.893" x2="394.501" y1="-155.427" y2="-154.233">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint24_linear_1_13854" x1="25.823" x2="25.7459" y1="26.6142" y2="24.2324">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint25_linear_1_13854" x1="284.11" x2="284.437" y1="150.089" y2="152.646">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint26_linear_1_13854" x1="128.333" x2="127.479" y1="146.944" y2="148.003">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint27_linear_1_13854" x1="84.3609" x2="85.0227" y1="-32.4554" y2="-34.6018">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint28_linear_1_13854" x1="569.65" x2="570.51" y1="-37.9657" y2="-40.483">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint29_linear_1_13854" x1="212.292" x2="212.446" y1="217.594" y2="219.94">
            <stop stopColor="#0038AB" />
            <stop offset="0.11" stopColor="#0061C9" />
            <stop offset="0.27" stopColor="#0097EF" />
            <stop offset="0.35" stopColor="#00ACFF" />
            <stop offset="0.4" stopColor="#00BFFF" />
            <stop offset="0.47" stopColor="#00D2FF" />
            <stop offset="0.52" stopColor="#00D9FF" />
            <stop offset="0.66" stopColor="#00B7FF" />
            <stop offset="0.71" stopColor="#00ACFF" />
            <stop offset="0.76" stopColor="#00A1F7" />
            <stop offset="0.83" stopColor="#0085E3" />
            <stop offset="0.93" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint30_linear_1_13854" x1="161.959" x2="160.029" y1="93.4279" y2="94.059">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint31_linear_1_13854" x1="378.965" x2="380.648" y1="259.383" y2="258.852">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint32_linear_1_13854" x1="384.942" x2="385.088" y1="7.52344" y2="8.83613">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint33_linear_1_13854" x1="447.393" x2="449.007" y1="265.372" y2="265.102">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint34_linear_1_13854" x1="439.992" x2="439.047" y1="190.539" y2="192.049">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint35_linear_1_13854" x1="160.771" x2="159.987" y1="-102.14" y2="-103.457">
            <stop stopColor="#0038AB" />
            <stop offset="0.11" stopColor="#0061C9" />
            <stop offset="0.27" stopColor="#0097EF" />
            <stop offset="0.35" stopColor="#00ACFF" />
            <stop offset="0.4" stopColor="#00BFFF" />
            <stop offset="0.47" stopColor="#00D2FF" />
            <stop offset="0.52" stopColor="#00D9FF" />
            <stop offset="0.66" stopColor="#00B7FF" />
            <stop offset="0.71" stopColor="#00ACFF" />
            <stop offset="0.76" stopColor="#00A1F7" />
            <stop offset="0.83" stopColor="#0085E3" />
            <stop offset="0.93" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint36_linear_1_13854" x1="596.513" x2="594.013" y1="-69.9847" y2="-72.9763">
            <stop stopColor="#0038AB" />
            <stop offset="0.11" stopColor="#0061C9" />
            <stop offset="0.27" stopColor="#0097EF" />
            <stop offset="0.35" stopColor="#00ACFF" />
            <stop offset="0.4" stopColor="#00BFFF" />
            <stop offset="0.47" stopColor="#00D2FF" />
            <stop offset="0.52" stopColor="#00D9FF" />
            <stop offset="0.66" stopColor="#00B7FF" />
            <stop offset="0.71" stopColor="#00ACFF" />
            <stop offset="0.76" stopColor="#00A1F7" />
            <stop offset="0.83" stopColor="#0085E3" />
            <stop offset="0.93" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint37_linear_1_13854" x1="61.1422" x2="60.3519" y1="-164.056" y2="-162.898">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint38_linear_1_13854" x1="429.697" x2="427.238" y1="-26.6807" y2="-26.0055">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint39_linear_1_13854" x1="456.871" x2="457.427" y1="54.8208" y2="52.2388">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint40_linear_1_13854" x1="519.717" x2="518.555" y1="66.6325" y2="65.3312">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint41_linear_1_13854" x1="151.085" x2="149.65" y1="211.787" y2="210.31">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint42_linear_1_13854" x1="540.315" x2="540.366" y1="29.5973" y2="25.9948">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint43_linear_1_13854" x1="347.751" x2="346.909" y1="161.498" y2="161.261">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint44_linear_1_13854" x1="638.266" x2="635.456" y1="-186.349" y2="-185.694">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint45_linear_1_13854" x1="414.967" x2="413.752" y1="135.549" y2="135.06">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint46_linear_1_13854" x1="316.62" x2="315.719" y1="174.866" y2="174.242">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint47_linear_1_13854" x1="45.1579" x2="46.103" y1="-126.34" y2="-128.34">
            <stop stopColor="#0038AB" />
            <stop offset="0.11" stopColor="#0061C9" />
            <stop offset="0.27" stopColor="#0097EF" />
            <stop offset="0.35" stopColor="#00ACFF" />
            <stop offset="0.4" stopColor="#00BFFF" />
            <stop offset="0.47" stopColor="#00D2FF" />
            <stop offset="0.52" stopColor="#00D9FF" />
            <stop offset="0.66" stopColor="#00B7FF" />
            <stop offset="0.71" stopColor="#00ACFF" />
            <stop offset="0.76" stopColor="#00A1F7" />
            <stop offset="0.83" stopColor="#0085E3" />
            <stop offset="0.93" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint48_linear_1_13854" x1="536.881" x2="538.026" y1="87.3183" y2="85.8635">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint49_linear_1_13854" x1="394.864" x2="397.208" y1="160.505" y2="158.17">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint50_linear_1_13854" x1="431.456" x2="431.529" y1="-145.789" y2="-146.511">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint51_linear_1_13854" x1="56.4759" x2="57.0674" y1="283.254" y2="282.092">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint52_linear_1_13854" x1="184.055" x2="183.716" y1="-195.856" y2="-198.22">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint53_linear_1_13854" x1="324.141" x2="323.92" y1="-159.43" y2="-158.579">
            <stop stopColor="#0038AB" />
            <stop offset="0.11" stopColor="#0061C9" />
            <stop offset="0.27" stopColor="#0097EF" />
            <stop offset="0.35" stopColor="#00ACFF" />
            <stop offset="0.4" stopColor="#00BFFF" />
            <stop offset="0.47" stopColor="#00D2FF" />
            <stop offset="0.52" stopColor="#00D9FF" />
            <stop offset="0.66" stopColor="#00B7FF" />
            <stop offset="0.71" stopColor="#00ACFF" />
            <stop offset="0.76" stopColor="#00A1F7" />
            <stop offset="0.83" stopColor="#0085E3" />
            <stop offset="0.93" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint54_linear_1_13854" x1="530.208" x2="530.59" y1="102.894" y2="104.666">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint55_linear_1_13854" x1="30.0612" x2="28.5913" y1="37.1066" y2="37.756">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint56_linear_1_13854" x1="175.977" x2="177.506" y1="-79.5735" y2="-82.6477">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint57_linear_1_13854" x1="607.094" x2="608.004" y1="46.3763" y2="48.931">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint58_linear_1_13854" x1="548.308" x2="551.971" y1="-5.26604" y2="-5.20852">
            <stop stopColor="#0038AB" />
            <stop offset="0.11" stopColor="#0061C9" />
            <stop offset="0.27" stopColor="#0097EF" />
            <stop offset="0.35" stopColor="#00ACFF" />
            <stop offset="0.4" stopColor="#00BFFF" />
            <stop offset="0.47" stopColor="#00D2FF" />
            <stop offset="0.52" stopColor="#00D9FF" />
            <stop offset="0.66" stopColor="#00B7FF" />
            <stop offset="0.71" stopColor="#00ACFF" />
            <stop offset="0.76" stopColor="#00A1F7" />
            <stop offset="0.83" stopColor="#0085E3" />
            <stop offset="0.93" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint59_linear_1_13854" x1="345.66" x2="344.663" y1="191.779" y2="191.313">
            <stop stopColor="#920040" />
            <stop offset="0.05" stopColor="#AD0052" />
            <stop offset="0.12" stopColor="#D00069" />
            <stop offset="0.19" stopColor="#EA0079" />
            <stop offset="0.25" stopColor="#F90083" />
            <stop offset="0.3" stopColor="#FF0087" />
            <stop offset="0.35" stopColor="#FF1A8B" />
            <stop offset="0.43" stopColor="#FF3F91" />
            <stop offset="0.5" stopColor="#FF5595" />
            <stop offset="0.55" stopColor="#FF5E97" />
            <stop offset="0.58" stopColor="#FF5595" />
            <stop offset="0.64" stopColor="#FF3E91" />
            <stop offset="0.71" stopColor="#FF198B" />
            <stop offset="0.75" stopColor="#FF0087" />
            <stop offset="0.79" stopColor="#F90083" />
            <stop offset="0.84" stopColor="#EA0079" />
            <stop offset="0.9" stopColor="#D10069" />
            <stop offset="0.96" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint60_linear_1_13854" x1="285.751" x2="285.096" y1="56.0421" y2="56.7233">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint61_linear_1_13854" x1="595.801" x2="599.048" y1="293.362" y2="292.333">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint62_linear_1_13854" x1="77.8357" x2="79.2584" y1="29.2116" y2="29.2804">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint63_linear_1_13854" x1="204.788" x2="206.49" y1="82.137" y2="81.1654">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint64_linear_1_13854" x1="347.036" x2="344.127" y1="237.11" y2="236.438">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint65_linear_1_13854" x1="110.35" x2="108.119" y1="-29.4508" y2="-31.1895">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint66_linear_1_13854" x1="-8.39493" x2="-7.83479" y1="-64.7795" y2="-67.2937">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint67_linear_1_13854" x1="280.902" x2="280.303" y1="215.225" y2="214.309">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint68_linear_1_13854" x1="597.533" x2="597.048" y1="-70.0271" y2="-69.0965">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint69_linear_1_13854" x1="353.429" x2="352.075" y1="-77.7884" y2="-76.066">
            <stop stopColor="#400300" />
            <stop offset="0.07" stopColor="#750300" />
            <stop offset="0.14" stopColor="#A50300" />
            <stop offset="0.21" stopColor="#C80300" />
            <stop offset="0.26" stopColor="#DD0300" />
            <stop offset="0.3" stopColor="#E50300" />
            <stop offset="0.34" stopColor="#EE180C" />
            <stop offset="0.39" stopColor="#F72E18" />
            <stop offset="0.45" stopColor="#FD3B1F" />
            <stop offset="0.49" stopColor="#FF4022" />
            <stop offset="0.54" stopColor="#FD3B1F" />
            <stop offset="0.6" stopColor="#F72D17" />
            <stop offset="0.66" stopColor="#ED170B" />
            <stop offset="0.7" stopColor="#E50300" />
            <stop offset="0.73" stopColor="#DB0300" />
            <stop offset="0.79" stopColor="#C10300" />
            <stop offset="0.87" stopColor="#970300" />
            <stop offset="0.95" stopColor="#5E0300" />
            <stop offset="1" stopColor="#3B0300" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint70_linear_1_13854" x1="215.218" x2="213.562" y1="-141.237" y2="-141.413">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint71_linear_1_13854" x1="433.593" x2="434.427" y1="263.333" y2="263.087">
            <stop stopColor="#005200" />
            <stop offset="0.19" stopColor="#00880B" />
            <stop offset="0.31" stopColor="#00A912" />
            <stop offset="0.33" stopColor="#11AC12" />
            <stop offset="0.37" stopColor="#39B512" />
            <stop offset="0.41" stopColor="#59BC12" />
            <stop offset="0.44" stopColor="#70C112" />
            <stop offset="0.48" stopColor="#7EC312" />
            <stop offset="0.51" stopColor="#83C512" />
            <stop offset="0.55" stopColor="#7EC412" />
            <stop offset="0.59" stopColor="#72C112" />
            <stop offset="0.63" stopColor="#5DBD12" />
            <stop offset="0.67" stopColor="#40B612" />
            <stop offset="0.72" stopColor="#1BAE12" />
            <stop offset="0.74" stopColor="#00A912" />
            <stop offset="0.78" stopColor="#009D10" />
            <stop offset="0.86" stopColor="#007F0B" />
            <stop offset="0.95" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint72_linear_1_13854" x1="174.272" x2="174.831" y1="299.168" y2="298.346">
            <stop stopColor="#AB3C00" />
            <stop offset="0.34" stopColor="#FFC700" />
            <stop offset="0.37" stopColor="#FFCD17" />
            <stop offset="0.41" stopColor="#FFD432" />
            <stop offset="0.44" stopColor="#FFD946" />
            <stop offset="0.48" stopColor="#FFDC52" />
            <stop offset="0.52" stopColor="#FFDE56" />
            <stop offset="0.55" stopColor="#FFDC51" />
            <stop offset="0.59" stopColor="#FFD842" />
            <stop offset="0.62" stopColor="#FFD22B" />
            <stop offset="0.66" stopColor="#FFC90A" />
            <stop offset="0.67" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint73_linear_1_13854" x1="250.047" x2="248.078" y1="148.844" y2="150.228">
            <stop stopColor="#0038AB" />
            <stop offset="0.11" stopColor="#0061C9" />
            <stop offset="0.27" stopColor="#0097EF" />
            <stop offset="0.35" stopColor="#00ACFF" />
            <stop offset="0.4" stopColor="#00BFFF" />
            <stop offset="0.47" stopColor="#00D2FF" />
            <stop offset="0.52" stopColor="#00D9FF" />
            <stop offset="0.66" stopColor="#00B7FF" />
            <stop offset="0.71" stopColor="#00ACFF" />
            <stop offset="0.76" stopColor="#00A1F7" />
            <stop offset="0.83" stopColor="#0085E3" />
            <stop offset="0.93" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint74_linear_1_13854" x1="56.8207" x2="66.3482" y1="58.3686" y2="55.5958">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint75_linear_1_13854" x1="43.8138" x2="55.4004" y1="44.0992" y2="46.7034">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint76_linear_1_13854" x1="53.8041" x2="70.0951" y1="50.2295" y2="48.4946">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint77_linear_1_13854" x1="56.3118" x2="65.8394" y1="56.5287" y2="53.7559">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint78_linear_1_13854" x1="43.9315" x2="55.5181" y1="43.5737" y2="46.1779">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint79_linear_1_13854" x1="35.3897" x2="55.9905" y1="32.6094" y2="36.3065">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint80_linear_1_13854" x1="64.2135" x2="73.8037" y1="69.3468" y2="68.8456">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint81_linear_1_13854" x1="53.7392" x2="70.0302" y1="49.8963" y2="48.1613">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint82_linear_1_13854" x1="59.3241" x2="75.1095" y1="60.8119" y2="60.9513">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint83_linear_1_13854" x1="59.1171" x2="64.8747" y1="58.2326" y2="54.6612">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint84_linear_1_13854" x1="55.6058" x2="63.4059" y1="51.6036" y2="48.4226">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint85_linear_1_13854" x1="63.1723" x2="71.1031" y1="67.9807" y2="61.694">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint86_linear_1_13854" x1="47.0493" x2="53.6833" y1="41.9606" y2="38.0036">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint87_linear_1_13854" x1="50.9228" x2="55.4876" y1="46.91" y2="45.2705">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint88_linear_1_13854" x1="610.606" x2="615.218" y1="33.0334" y2="37.6457">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint89_linear_1_13854" x1="616.057" x2="615.926" y1="27.896" y2="42.6699">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint90_linear_1_13854" x1="617.695" x2="621.603" y1="26.5684" y2="30.4756">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint91_linear_1_13854" x1="624.494" x2="623.76" y1="19.683" y2="33.8532">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint92_linear_1_13854" x1="627.99" x2="633.592" y1="16.5984" y2="21.486">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint93_linear_1_13854" x1="569.212" x2="575.503" y1="21.2189" y2="23.7119">
            <stop stopColor="#920040" />
            <stop offset="0.08" stopColor="#AD0052" />
            <stop offset="0.19" stopColor="#D00069" />
            <stop offset="0.29" stopColor="#EA0079" />
            <stop offset="0.39" stopColor="#F90083" />
            <stop offset="0.47" stopColor="#FF0087" />
            <stop offset="0.6" stopColor="#FF0087" />
            <stop offset="0.67" stopColor="#F90083" />
            <stop offset="0.75" stopColor="#EA0079" />
            <stop offset="0.84" stopColor="#D10069" />
            <stop offset="0.93" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint94_linear_1_13854" x1="573.134" x2="580.415" y1="15.1811" y2="30.4192">
            <stop stopColor="#920040" />
            <stop offset="0.08" stopColor="#AD0052" />
            <stop offset="0.19" stopColor="#D00069" />
            <stop offset="0.29" stopColor="#EA0079" />
            <stop offset="0.39" stopColor="#F90083" />
            <stop offset="0.47" stopColor="#FF0087" />
            <stop offset="0.6" stopColor="#FF0087" />
            <stop offset="0.67" stopColor="#F90083" />
            <stop offset="0.75" stopColor="#EA0079" />
            <stop offset="0.84" stopColor="#D10069" />
            <stop offset="0.93" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint95_linear_1_13854" x1="574.301" x2="580.442" y1="11.681" y2="14.8297">
            <stop stopColor="#920040" />
            <stop offset="0.08" stopColor="#AD0052" />
            <stop offset="0.19" stopColor="#D00069" />
            <stop offset="0.29" stopColor="#EA0079" />
            <stop offset="0.39" stopColor="#F90083" />
            <stop offset="0.47" stopColor="#FF0087" />
            <stop offset="0.6" stopColor="#FF0087" />
            <stop offset="0.67" stopColor="#F90083" />
            <stop offset="0.75" stopColor="#EA0079" />
            <stop offset="0.84" stopColor="#D10069" />
            <stop offset="0.93" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint96_linear_1_13854" x1="579.007" x2="584.184" y1="3.06799" y2="21.3933">
            <stop stopColor="#920040" />
            <stop offset="0.08" stopColor="#AD0052" />
            <stop offset="0.19" stopColor="#D00069" />
            <stop offset="0.29" stopColor="#EA0079" />
            <stop offset="0.39" stopColor="#F90083" />
            <stop offset="0.47" stopColor="#FF0087" />
            <stop offset="0.6" stopColor="#FF0087" />
            <stop offset="0.67" stopColor="#F90083" />
            <stop offset="0.75" stopColor="#EA0079" />
            <stop offset="0.84" stopColor="#D10069" />
            <stop offset="0.93" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint97_linear_1_13854" x1="587.331" x2="581.314" y1="0.403087" y2="-2.43826">
            <stop stopColor="#920040" />
            <stop offset="0.08" stopColor="#AD0052" />
            <stop offset="0.19" stopColor="#D00069" />
            <stop offset="0.29" stopColor="#EA0079" />
            <stop offset="0.39" stopColor="#F90083" />
            <stop offset="0.47" stopColor="#FF0087" />
            <stop offset="0.6" stopColor="#FF0087" />
            <stop offset="0.67" stopColor="#F90083" />
            <stop offset="0.75" stopColor="#EA0079" />
            <stop offset="0.84" stopColor="#D10069" />
            <stop offset="0.93" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint98_linear_1_13854" x1="509.785" x2="514.925" y1="12.8805" y2="15.4934">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint99_linear_1_13854" x1="513.004" x2="504.31" y1="17.3669" y2="17.5544">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint100_linear_1_13854" x1="508.717" x2="499.668" y1="24.5725" y2="25.2744">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint101_linear_1_13854" x1="504.794" x2="495.741" y1="32.7813" y2="31.7503">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint102_linear_1_13854" x1="506.343" x2="510.927" y1="20.109" y2="22.2582">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint103_linear_1_13854" x1="501.782" x2="507.003" y1="27.9672" y2="30.9494">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint104_linear_1_13854" x1="497.233" x2="501.885" y1="36.0677" y2="38.5797">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint105_linear_1_13854" x1="102.756" x2="109.739" y1="20.9848" y2="18.4645">
            <stop stopColor="#DA0000" />
            <stop offset="0.09" stopColor="#E61014" />
            <stop offset="0.24" stopColor="#F82831" />
            <stop offset="0.33" stopColor="#FF313D" />
            <stop offset="0.36" stopColor="#FD3F49" />
            <stop offset="0.42" stopColor="#FB5C63" />
            <stop offset="0.47" stopColor="#F96D72" />
            <stop offset="0.51" stopColor="#F97478" />
            <stop offset="0.67" stopColor="#FF313D" />
            <stop offset="0.69" stopColor="#F92C37" />
            <stop offset="0.81" stopColor="#DD141A" />
            <stop offset="0.92" stopColor="#CC0509" />
            <stop offset="1" stopColor="#C70003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint106_linear_1_13854" x1="97.6147" x2="115.269" y1="13.7498" y2="9.99263">
            <stop stopColor="#DA0000" />
            <stop offset="0.09" stopColor="#E61014" />
            <stop offset="0.24" stopColor="#F82831" />
            <stop offset="0.33" stopColor="#FF313D" />
            <stop offset="0.36" stopColor="#FD3F49" />
            <stop offset="0.42" stopColor="#FB5C63" />
            <stop offset="0.47" stopColor="#F96D72" />
            <stop offset="0.51" stopColor="#F97478" />
            <stop offset="0.67" stopColor="#FF313D" />
            <stop offset="0.69" stopColor="#F92C37" />
            <stop offset="0.81" stopColor="#DD141A" />
            <stop offset="0.92" stopColor="#CC0509" />
            <stop offset="1" stopColor="#C70003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint107_linear_1_13854" x1="97.8727" x2="110.241" y1="8.5068" y2="5.31392">
            <stop stopColor="#DA0000" />
            <stop offset="0.09" stopColor="#E61014" />
            <stop offset="0.24" stopColor="#F82831" />
            <stop offset="0.33" stopColor="#FF313D" />
            <stop offset="0.36" stopColor="#FD3F49" />
            <stop offset="0.42" stopColor="#FB5C63" />
            <stop offset="0.47" stopColor="#F96D72" />
            <stop offset="0.51" stopColor="#F97478" />
            <stop offset="0.67" stopColor="#FF313D" />
            <stop offset="0.69" stopColor="#F92C37" />
            <stop offset="0.81" stopColor="#DD141A" />
            <stop offset="0.92" stopColor="#CC0509" />
            <stop offset="1" stopColor="#C70003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint108_linear_1_13854" x1="98.3114" x2="110.673" y1="10.1714" y2="6.98086">
            <stop stopColor="#DA0000" />
            <stop offset="0.09" stopColor="#E61014" />
            <stop offset="0.24" stopColor="#F82831" />
            <stop offset="0.33" stopColor="#FF313D" />
            <stop offset="0.36" stopColor="#FD3F49" />
            <stop offset="0.42" stopColor="#FB5C63" />
            <stop offset="0.47" stopColor="#F96D72" />
            <stop offset="0.51" stopColor="#F97478" />
            <stop offset="0.67" stopColor="#FF313D" />
            <stop offset="0.69" stopColor="#F92C37" />
            <stop offset="0.81" stopColor="#DD141A" />
            <stop offset="0.92" stopColor="#CC0509" />
            <stop offset="1" stopColor="#C70003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint109_linear_1_13854" x1="98.766" x2="106.616" y1="4.06405" y2="2.41476">
            <stop stopColor="#DA0000" />
            <stop offset="0.09" stopColor="#E61014" />
            <stop offset="0.24" stopColor="#F82831" />
            <stop offset="0.33" stopColor="#FF313D" />
            <stop offset="0.36" stopColor="#FD3F49" />
            <stop offset="0.42" stopColor="#FB5C63" />
            <stop offset="0.47" stopColor="#F96D72" />
            <stop offset="0.51" stopColor="#F97478" />
            <stop offset="0.67" stopColor="#FF313D" />
            <stop offset="0.69" stopColor="#F92C37" />
            <stop offset="0.81" stopColor="#DD141A" />
            <stop offset="0.92" stopColor="#CC0509" />
            <stop offset="1" stopColor="#C70003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint110_linear_1_13854" x1="97.9748" x2="115.629" y1="15.4971" y2="11.74">
            <stop stopColor="#DA0000" />
            <stop offset="0.09" stopColor="#E61014" />
            <stop offset="0.24" stopColor="#F82831" />
            <stop offset="0.33" stopColor="#FF313D" />
            <stop offset="0.36" stopColor="#FD3F49" />
            <stop offset="0.42" stopColor="#FB5C63" />
            <stop offset="0.47" stopColor="#F96D72" />
            <stop offset="0.51" stopColor="#F97478" />
            <stop offset="0.67" stopColor="#FF313D" />
            <stop offset="0.69" stopColor="#F92C37" />
            <stop offset="0.81" stopColor="#DD141A" />
            <stop offset="0.92" stopColor="#CC0509" />
            <stop offset="1" stopColor="#C70003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint111_linear_1_13854" x1="98.6103" x2="105.247" y1="8.00071" y2="5.60562">
            <stop stopColor="#DA0000" />
            <stop offset="0.09" stopColor="#E61014" />
            <stop offset="0.24" stopColor="#F82831" />
            <stop offset="0.33" stopColor="#FF313D" />
            <stop offset="0.36" stopColor="#FD3F49" />
            <stop offset="0.42" stopColor="#FB5C63" />
            <stop offset="0.47" stopColor="#F96D72" />
            <stop offset="0.51" stopColor="#F97478" />
            <stop offset="0.67" stopColor="#FF313D" />
            <stop offset="0.69" stopColor="#F92C37" />
            <stop offset="0.81" stopColor="#DD141A" />
            <stop offset="0.92" stopColor="#CC0509" />
            <stop offset="1" stopColor="#C70003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint112_linear_1_13854" x1="99.8667" x2="106.735" y1="13.4889" y2="11.0104">
            <stop stopColor="#DA0000" />
            <stop offset="0.09" stopColor="#E61014" />
            <stop offset="0.24" stopColor="#F82831" />
            <stop offset="0.33" stopColor="#FF313D" />
            <stop offset="0.36" stopColor="#FD3F49" />
            <stop offset="0.42" stopColor="#FB5C63" />
            <stop offset="0.47" stopColor="#F96D72" />
            <stop offset="0.51" stopColor="#F97478" />
            <stop offset="0.67" stopColor="#FF313D" />
            <stop offset="0.69" stopColor="#F92C37" />
            <stop offset="0.81" stopColor="#DD141A" />
            <stop offset="0.92" stopColor="#CC0509" />
            <stop offset="1" stopColor="#C70003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint113_linear_1_13854" x1="614.074" x2="620.341" y1="53.4315" y2="56.6427">
            <stop stopColor="#0038AB" />
            <stop offset="0.16" stopColor="#0061C9" />
            <stop offset="0.38" stopColor="#0097EF" />
            <stop offset="0.48" stopColor="#00ACFF" />
            <stop offset="0.57" stopColor="#00ACFF" />
            <stop offset="0.64" stopColor="#00A1F7" />
            <stop offset="0.75" stopColor="#0085E3" />
            <stop offset="0.9" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint114_linear_1_13854" x1="603.883" x2="620.9" y1="65.0523" y2="67.9693">
            <stop stopColor="#0038AB" />
            <stop offset="0.16" stopColor="#0061C9" />
            <stop offset="0.38" stopColor="#0097EF" />
            <stop offset="0.48" stopColor="#00ACFF" />
            <stop offset="0.57" stopColor="#00ACFF" />
            <stop offset="0.64" stopColor="#00A1F7" />
            <stop offset="0.75" stopColor="#0085E3" />
            <stop offset="0.9" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint115_linear_1_13854" x1="608.136" x2="622.869" y1="59.0453" y2="59.6029">
            <stop stopColor="#0038AB" />
            <stop offset="0.16" stopColor="#0061C9" />
            <stop offset="0.38" stopColor="#0097EF" />
            <stop offset="0.48" stopColor="#00ACFF" />
            <stop offset="0.57" stopColor="#00ACFF" />
            <stop offset="0.64" stopColor="#00A1F7" />
            <stop offset="0.75" stopColor="#0085E3" />
            <stop offset="0.9" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint116_linear_1_13854" x1="612.214" x2="616.025" y1="62.0228" y2="63.9757">
            <stop stopColor="#0038AB" />
            <stop offset="0.16" stopColor="#0061C9" />
            <stop offset="0.38" stopColor="#0097EF" />
            <stop offset="0.48" stopColor="#00ACFF" />
            <stop offset="0.57" stopColor="#00ACFF" />
            <stop offset="0.64" stopColor="#00A1F7" />
            <stop offset="0.75" stopColor="#0085E3" />
            <stop offset="0.9" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint117_linear_1_13854" x1="605.426" x2="611.876" y1="68.3281" y2="71.6327">
            <stop stopColor="#0038AB" />
            <stop offset="0.16" stopColor="#0061C9" />
            <stop offset="0.38" stopColor="#0097EF" />
            <stop offset="0.48" stopColor="#00ACFF" />
            <stop offset="0.57" stopColor="#00ACFF" />
            <stop offset="0.64" stopColor="#00A1F7" />
            <stop offset="0.75" stopColor="#0085E3" />
            <stop offset="0.9" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint118_linear_1_13854" x1="101.688" x2="116.697" y1="71.1043" y2="63.635">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint119_linear_1_13854" x1="87.2698" x2="104.555" y1="46.3847" y2="40.6678">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint120_linear_1_13854" x1="102.098" x2="117.107" y1="71.9365" y2="64.4672">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint121_linear_1_13854" x1="100.587" x2="108.227" y1="65.3485" y2="61.3424">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint122_linear_1_13854" x1="94.3229" x2="113.23" y1="57.9859" y2="54.141">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint123_linear_1_13854" x1="93.3175" x2="99.7233" y1="51.3163" y2="47.9572">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint124_linear_1_13854" x1="107.598" x2="111.415" y1="69.8885" y2="67.887">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint125_linear_1_13854" x1="540.168" x2="565.542" y1="57.9182" y2="57.9182">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint126_linear_1_13854" x1="530.828" x2="544.27" y1="31.3249" y2="31.3249">
            <stop stopColor="#0038AB" />
            <stop offset="0.16" stopColor="#0061C9" />
            <stop offset="0.38" stopColor="#0097EF" />
            <stop offset="0.48" stopColor="#00ACFF" />
            <stop offset="0.57" stopColor="#00ACFF" />
            <stop offset="0.64" stopColor="#00A1F7" />
            <stop offset="0.75" stopColor="#0085E3" />
            <stop offset="0.9" stopColor="#0059C3" />
            <stop offset="1" stopColor="#0038AB" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint127_linear_1_13854" x1="-18.6797" x2="27.0277" y1="53.1464" y2="53.1464">
            <stop stopColor="#DA0000" />
            <stop offset="0.09" stopColor="#E61014" />
            <stop offset="0.24" stopColor="#F82831" />
            <stop offset="0.33" stopColor="#FF313D" />
            <stop offset="0.36" stopColor="#FD3F49" />
            <stop offset="0.42" stopColor="#FB5C63" />
            <stop offset="0.47" stopColor="#F96D72" />
            <stop offset="0.51" stopColor="#F97478" />
            <stop offset="0.67" stopColor="#FF313D" />
            <stop offset="0.69" stopColor="#F92C37" />
            <stop offset="0.81" stopColor="#DD141A" />
            <stop offset="0.92" stopColor="#CC0509" />
            <stop offset="1" stopColor="#C70003" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint128_linear_1_13854" x1="129.212" x2="146.683" y1="47.1931" y2="47.1931">
            <stop stopColor="#003400" />
            <stop offset="0.08" stopColor="#005104" />
            <stop offset="0.19" stopColor="#00770A" />
            <stop offset="0.3" stopColor="#00920E" />
            <stop offset="0.4" stopColor="#00A311" />
            <stop offset="0.47" stopColor="#00A912" />
            <stop offset="0.6" stopColor="#00A912" />
            <stop offset="0.67" stopColor="#009D10" />
            <stop offset="0.78" stopColor="#007F0B" />
            <stop offset="0.92" stopColor="#004F04" />
            <stop offset="1" stopColor="#003400" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint129_linear_1_13854" x1="59.6977" x2="68.6449" y1="4.76956" y2="3.2795">
            <stop stopColor="#920040" />
            <stop offset="0.08" stopColor="#AD0052" />
            <stop offset="0.19" stopColor="#D00069" />
            <stop offset="0.29" stopColor="#EA0079" />
            <stop offset="0.39" stopColor="#F90083" />
            <stop offset="0.47" stopColor="#FF0087" />
            <stop offset="0.6" stopColor="#FF0087" />
            <stop offset="0.67" stopColor="#F90083" />
            <stop offset="0.75" stopColor="#EA0079" />
            <stop offset="0.84" stopColor="#D10069" />
            <stop offset="0.93" stopColor="#AE0052" />
            <stop offset="1" stopColor="#920040" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint130_linear_1_13854" x1="15.2059" x2="17.8108" y1="5.7544" y2="33.4334">
            <stop stopColor="#AB3C00" />
            <stop offset="0.47" stopColor="#FFC700" />
            <stop offset="0.59" stopColor="#FFC700" />
            <stop offset="1" stopColor="#AB3C00" />
          </linearGradient>
          <clipPath id="clip0_1_13854">
            <rect fill="white" height="98.0707" width="641.352" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211f26] text-[16px] whitespace-nowrap">Ashraf Idrishi</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,0,17,0.61)] tracking-[0.04px] whitespace-nowrap">1s</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Name">
      <Name1 />
      <Frame1 />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Abstract / dots-horizontal">
        <div className="absolute inset-[42.5%_9.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0667 2.4">
            <path clipRule="evenodd" d={svgPaths.p2c198100} fill="var(--fill-0, #211F26)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="relative shrink-0 w-full" data-name="Profile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
              <img alt="" className="absolute h-[200.48%] left-[-13.97%] max-w-none top-[-36.68%] w-[133.7%]" src={imgAvatar} />
            </div>
          </div>
          <Name />
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
            <ContentContainer1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Containt() {
  return (
    <div className="relative shrink-0 w-full" data-name="Containt">
      <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
          <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#211f26] text-[14px]">Today’s challenge workout completed—feeling stronger already</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(239,230,254,0.15)] relative rounded-[9999px] shrink-0 size-[48px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Fill">
          <div className="absolute bottom-[9.37%] left-1/4 right-[6.25%] top-[9.37%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 16.2508">
              <path d={svgPaths.p1e344b00} fill="var(--fill-0, #EEEEF0)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(241,230,253,0.19)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex h-[307px] items-center justify-center relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame237827} />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer2 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame23 />
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] content-stretch flex gap-[4px] h-[32px] items-center justify-center leading-[0] overflow-clip px-[12px] py-px relative rounded-[9999px] shrink-0 whitespace-nowrap" data-name="content-container">
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">🙏</p>
      </div>
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">😍</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#211f26] text-[14px]">
        <p className="leading-[20px]">18</p>
      </div>
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Smiley">
          <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
              <path d={svgPaths.p3a264a00} fill="var(--fill-0, #211F26)" id="Vector" stroke="var(--stroke-0, #211F26)" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function ContentContainer5() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="ChatCircle">
          <div className="absolute inset-[9.38%_9.39%_9.38%_9.37%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2484 16.25">
              <g id="Vector">
                <mask fill="white" id="path-1-inside-1_1_13837">
                  <path d={svgPaths.p975b0b0} />
                </mask>
                <path d={svgPaths.p975b0b0} fill="var(--fill-0, #211F26)" />
                <path d={svgPaths.p1c0926c0} fill="var(--stroke-0, #211F26)" mask="url(#path-1-inside-1_1_13837)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Reactions() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <ContentContainer3 />
      <ContentContainer4 />
      <ContentContainer5 />
    </div>
  );
}

function CommentCount() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Comment count">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">10 Comments</p>
      </div>
    </div>
  );
}

function ActivityBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Activity Bar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[16px] py-[12px] relative w-full">
          <Reactions />
          <CommentCount />
        </div>
      </div>
    </div>
  );
}

function PostContainer() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-[640px]" data-name="Post Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Profile />
        <Containt />
        <Frame8 />
        <ActivityBar />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eae7ec] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#e6f6eb] content-stretch flex flex-col gap-[12px] items-center pt-[12px] relative rounded-[24px] shrink-0 w-[640px]">
      <Bg />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#218358] text-[14px] whitespace-nowrap">Your Submission</p>
      </div>
      <PostContainer />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center pointer-events-none pr-[8px] relative shrink-0">
      <div className="mr-[-8px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar1} />
        <div aria-hidden="true" className="absolute border border-[#f2eff3] border-solid inset-[-1px] rounded-[10000px]" />
      </div>
      <div className="mr-[-8px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar2} />
        <div aria-hidden="true" className="absolute border border-[#f2eff3] border-solid inset-[-1px] rounded-[10000px]" />
      </div>
      <div className="mr-[-8px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar3} />
        <div aria-hidden="true" className="absolute border border-[#f2eff3] border-solid inset-[-1px] rounded-[10000px]" />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#211f26] text-[20px] tracking-[-0.016px] whitespace-nowrap">See what others</p>
      </div>
      <Frame28 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#211f26] text-[20px] tracking-[-0.016px] whitespace-nowrap">shared</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[4px] shrink-0" data-name="div">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">
          <span className="font-['Be_Vietnam_Pro:Bold',sans-serif] leading-[16px] tracking-[0.04px]">85+</span>
          <span className="leading-[20px]">{` participants already completed`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <Frame61 />
      <Div />
    </div>
  );
}

function FeedSidebarMenuItem() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip relative rounded-[3px] shrink-0" data-name="feed-sidebar-menu-item">
      <div className="relative shrink-0 size-[14px]" data-name="PushPin">
        <div className="absolute inset-[6.26%_6.25%_12.5%_12.51%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3743 11.3743">
            <path d={svgPaths.p38ee600} fill="var(--fill-0, #211F26)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#211f26] text-[12px] tracking-[0.04px] whitespace-nowrap">This is a pinned post</p>
      </div>
    </div>
  );
}

function Profile1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Profile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative w-full">
          <FeedSidebarMenuItem />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#eae7ec] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211f26] text-[16px] whitespace-nowrap">Russell Brunson</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,0,17,0.61)] tracking-[0.04px] whitespace-nowrap">3 hrs ago</p>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Name">
      <Name3 />
      <Frame2 />
    </div>
  );
}

function ContentContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Abstract / dots-horizontal">
        <div className="absolute inset-[42.5%_9.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0667 2.4">
            <path clipRule="evenodd" d={svgPaths.p2c198100} fill="var(--fill-0, #211F26)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Profile2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Profile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar4} />
          </div>
          <Name2 />
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
            <ContentContainer6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[18px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Minimum 20 minutes of sit-up</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[18px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Mention Intensity</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[18px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Upload Media (Optional)</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[18px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Upload Media (Optional)</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[18px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Upload Media (Optional)</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame41 />
      <Frame42 />
      <Frame43 />
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Containt1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Containt">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] px-[16px] relative w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
          <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#211f26] text-[14px]">This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.</p>
        </div>
        <Frame55 />
      </div>
    </div>
  );
}

function ContentContainer7() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] content-stretch flex gap-[4px] h-[32px] items-center justify-center leading-[0] overflow-clip px-[12px] py-px relative rounded-[9999px] shrink-0 whitespace-nowrap" data-name="content-container">
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">🙏</p>
      </div>
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">😍</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#211f26] text-[14px]">
        <p className="leading-[20px]">18</p>
      </div>
    </div>
  );
}

function ContentContainer8() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Smiley">
          <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
              <path d={svgPaths.p3a264a00} fill="var(--fill-0, #211F26)" id="Vector" stroke="var(--stroke-0, #211F26)" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function ContentContainer9() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="ChatCircle">
          <div className="absolute inset-[9.38%_9.39%_9.38%_9.37%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2484 16.25">
              <g id="Vector">
                <mask fill="white" id="path-1-inside-1_1_13837">
                  <path d={svgPaths.p975b0b0} />
                </mask>
                <path d={svgPaths.p975b0b0} fill="var(--fill-0, #211F26)" />
                <path d={svgPaths.p1c0926c0} fill="var(--stroke-0, #211F26)" mask="url(#path-1-inside-1_1_13837)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Reactions1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <ContentContainer7 />
      <ContentContainer8 />
      <ContentContainer9 />
    </div>
  );
}

function CommentCount1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Comment count">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">10 Comments</p>
      </div>
    </div>
  );
}

function ActivityBar1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Activity Bar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[16px] py-[12px] relative w-full">
          <Reactions1 />
          <CommentCount1 />
        </div>
      </div>
    </div>
  );
}

function PostContainer1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Post Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Profile1 />
        <Profile2 />
        <Containt1 />
        <ActivityBar1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eae7ec] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211f26] text-[16px] whitespace-nowrap">Sayantan Chandra</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,0,17,0.61)] tracking-[0.04px] whitespace-nowrap">1 hrs ago</p>
      </div>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Name">
      <Name5 />
      <Frame3 />
    </div>
  );
}

function ContentContainer10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Abstract / dots-horizontal">
        <div className="absolute inset-[42.5%_9.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0667 2.4">
            <path clipRule="evenodd" d={svgPaths.p2c198100} fill="var(--fill-0, #211F26)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Profile3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Profile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <div className="bg-[#b8860b] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
            <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.04px] whitespace-nowrap">S</p>
          </div>
          <Name4 />
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
            <ContentContainer10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Containt2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Containt">
      <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
          <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#211f26] text-[14px]">Completed today’s challenge workout, one step closer to my goal.</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer11() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] content-stretch flex gap-[4px] h-[32px] items-center justify-center leading-[0] overflow-clip px-[12px] py-px relative rounded-[9999px] shrink-0 whitespace-nowrap" data-name="content-container">
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">🙏</p>
      </div>
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">😍</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#211f26] text-[14px]">
        <p className="leading-[20px]">18</p>
      </div>
    </div>
  );
}

function ContentContainer12() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Smiley">
          <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
              <path d={svgPaths.p3a264a00} fill="var(--fill-0, #211F26)" id="Vector" stroke="var(--stroke-0, #211F26)" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function ContentContainer13() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="ChatCircle">
          <div className="absolute inset-[9.38%_9.39%_9.38%_9.37%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2484 16.25">
              <g id="Vector">
                <mask fill="white" id="path-1-inside-1_1_13837">
                  <path d={svgPaths.p975b0b0} />
                </mask>
                <path d={svgPaths.p975b0b0} fill="var(--fill-0, #211F26)" />
                <path d={svgPaths.p1c0926c0} fill="var(--stroke-0, #211F26)" mask="url(#path-1-inside-1_1_13837)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Reactions2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <ContentContainer11 />
      <ContentContainer12 />
      <ContentContainer13 />
    </div>
  );
}

function CommentCount2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Comment count">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">10 Comments</p>
      </div>
    </div>
  );
}

function ActivityBar2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Activity Bar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[16px] py-[12px] relative w-full">
          <Reactions2 />
          <CommentCount2 />
        </div>
      </div>
    </div>
  );
}

function PostContainer2() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Post Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Profile3 />
        <Containt2 />
        <ActivityBar2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eae7ec] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Name7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211f26] text-[16px] whitespace-nowrap">Pappu Saha</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,0,17,0.61)] tracking-[0.04px] whitespace-nowrap">2 day ago</p>
      </div>
    </div>
  );
}

function Name6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Name">
      <Name7 />
      <Frame4 />
    </div>
  );
}

function ContentContainer14() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Abstract / dots-horizontal">
        <div className="absolute inset-[42.5%_9.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0667 2.4">
            <path clipRule="evenodd" d={svgPaths.p2c198100} fill="var(--fill-0, #211F26)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Profile4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Profile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
              <img alt="" className="absolute h-[142.86%] left-0 max-w-none top-[-13.39%] w-full" src={imgAvatar5} />
            </div>
          </div>
          <Name6 />
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
            <ContentContainer14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Containt3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Containt">
      <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
          <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#211f26] text-[14px]">Today’s challenge workout completed—feeling stronger already</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer15() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(239,230,254,0.15)] relative rounded-[9999px] shrink-0 size-[48px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Fill">
          <div className="absolute bottom-[9.37%] left-1/4 right-[6.25%] top-[9.37%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 16.2508">
              <path d={svgPaths.p1e344b00} fill="var(--fill-0, #EEEEF0)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(241,230,253,0.19)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-[346px] items-center justify-center relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame237826} />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
        <ContentContainer15 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame24 />
    </div>
  );
}

function ContentContainer16() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] content-stretch flex gap-[4px] h-[32px] items-center justify-center leading-[0] overflow-clip px-[12px] py-px relative rounded-[9999px] shrink-0 whitespace-nowrap" data-name="content-container">
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">🙏</p>
      </div>
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">😍</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#211f26] text-[14px]">
        <p className="leading-[20px]">18</p>
      </div>
    </div>
  );
}

function ContentContainer17() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Smiley">
          <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
              <path d={svgPaths.p3a264a00} fill="var(--fill-0, #211F26)" id="Vector" stroke="var(--stroke-0, #211F26)" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function ContentContainer18() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="ChatCircle">
          <div className="absolute inset-[9.38%_9.39%_9.38%_9.37%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2484 16.25">
              <g id="Vector">
                <mask fill="white" id="path-1-inside-1_1_13837">
                  <path d={svgPaths.p975b0b0} />
                </mask>
                <path d={svgPaths.p975b0b0} fill="var(--fill-0, #211F26)" />
                <path d={svgPaths.p1c0926c0} fill="var(--stroke-0, #211F26)" mask="url(#path-1-inside-1_1_13837)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Reactions3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <ContentContainer16 />
      <ContentContainer17 />
      <ContentContainer18 />
    </div>
  );
}

function CommentCount3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Comment count">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">10 Comments</p>
      </div>
    </div>
  );
}

function ActivityBar3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Activity Bar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between p-[12px] relative w-full">
          <Reactions3 />
          <CommentCount3 />
        </div>
      </div>
    </div>
  );
}

function PostContainer3() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Post Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Profile4 />
        <Containt3 />
        <Frame10 />
        <ActivityBar3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eae7ec] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Name9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211f26] text-[16px] whitespace-nowrap">Srijan Chandra</p>
      </div>
    </div>
  );
}

function ReactIconsBsBsDot() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="react-icons/bs/BsDot">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="react-icons/bs/BsDot">
          <path d={svgPaths.p854cea0} fill="var(--fill-0, #040011)" fillOpacity="0.611765" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,0,17,0.61)] tracking-[0.04px] whitespace-nowrap">{`Posted in `}</p>
      </div>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,0,17,0.61)] tracking-[0.0048px] whitespace-nowrap">Silver Pass</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(4,0,17,0.61)] tracking-[0.04px] whitespace-nowrap">1d</p>
      </div>
      <ReactIconsBsBsDot />
      <Frame25 />
    </div>
  );
}

function Name8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Name">
      <Name9 />
      <Frame5 />
    </div>
  );
}

function ContentContainer19() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="content-container">
      <div className="bg-[rgba(255,255,255,0)] relative shrink-0 size-[16px]" data-name="Abstract / dots-horizontal">
        <div className="absolute inset-[42.5%_9.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0667 2.4">
            <path clipRule="evenodd" d={svgPaths.p2c198100} fill="var(--fill-0, #211F26)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Profile5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Profile">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start p-[12px] relative w-full">
          <div className="bg-[#5bb98b] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
            <p className="font-['Be_Vietnam_Pro:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.04px] whitespace-nowrap">S</p>
          </div>
          <Name8 />
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start relative shrink-0" data-name="Icon Button">
            <ContentContainer19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Containt4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Containt">
      <div className="content-stretch flex flex-col items-start pb-[16px] px-[16px] relative w-full">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0 w-full" data-name="Text">
          <p className="flex-[1_0_0] font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#211f26] text-[14px]">Taking part in the workout challenge and staying consistent.</p>
        </div>
      </div>
    </div>
  );
}

function ContentContainer20() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] content-stretch flex gap-[4px] h-[32px] items-center justify-center leading-[0] overflow-clip px-[12px] py-px relative rounded-[9999px] shrink-0 whitespace-nowrap" data-name="content-container">
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">🙏</p>
      </div>
      <div className="flex flex-col font-['Literata:Light',sans-serif] font-light justify-center relative shrink-0 text-[#1c2024] text-[16px]">
        <p className="leading-[24px]">😍</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[#211f26] text-[14px]">
        <p className="leading-[20px]">18</p>
      </div>
    </div>
  );
}

function ContentContainer21() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="Smiley">
          <div className="absolute inset-[9.38%_9.37%_9.37%_9.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 16.25">
              <path d={svgPaths.p3a264a00} fill="var(--fill-0, #211F26)" id="Vector" stroke="var(--stroke-0, #211F26)" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function ContentContainer22() {
  return (
    <div className="bg-[rgba(48,0,64,0.06)] relative rounded-[9999px] shrink-0 size-[32px]" data-name="content-container">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[20px]" data-name="ChatCircle">
          <div className="absolute inset-[9.38%_9.39%_9.38%_9.37%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2484 16.25">
              <g id="Vector">
                <mask fill="white" id="path-1-inside-1_1_13837">
                  <path d={svgPaths.p975b0b0} />
                </mask>
                <path d={svgPaths.p975b0b0} fill="var(--fill-0, #211F26)" />
                <path d={svgPaths.p1c0926c0} fill="var(--stroke-0, #211F26)" mask="url(#path-1-inside-1_1_13837)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,0,54,0.09)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Reactions4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <ContentContainer20 />
      <ContentContainer21 />
      <ContentContainer22 />
    </div>
  );
}

function CommentCount4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[9999px] shrink-0" data-name="Comment count">
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">10 Comments</p>
      </div>
    </div>
  );
}

function ActivityBar4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Activity Bar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[16px] py-[12px] relative w-full">
          <Reactions4 />
          <CommentCount4 />
        </div>
      </div>
    </div>
  );
}

function PostContainer4() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Post Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Profile5 />
        <Containt4 />
        <ActivityBar4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eae7ec] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(20,0,53,0.15)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[12px] pt-[16px] px-[12px] relative w-full">
        <Frame59 />
        <PostContainer1 />
        <PostContainer2 />
        <PostContainer3 />
        <PostContainer4 />
      </div>
    </div>
  );
}

function PostList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[24px] relative shrink-0 w-[640px]" data-name="Post List">
      <Frame40 />
      <Frame60 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#eae7ec] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]">
      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 w-[31px]" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame58 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Minimum 20 minutes of sit-up</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#eae7ec] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]">
      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 w-[31px]" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame62 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Mention Intensity</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#eae7ec] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]">
      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 w-[31px]" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame63 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Upload Media (Optional)</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#eae7ec] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]">
      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 w-[31px]" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame64 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Upload Media (Optional)</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#eae7ec] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]">
      <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 w-[31px]" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame65 />
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
        <p className="font-['Be_Vietnam_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">Upload Media (Optional)</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[12px] relative w-full">
          <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-start relative shrink-0" data-name="Text">
            <p className="font-['Be_Vietnam_Pro:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#211f26] text-[16px] whitespace-nowrap">Day 3 Instructions</p>
          </div>
          <Frame56 />
          <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[9999px] shrink-0" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[rgba(4,0,17,0.61)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
            <div className="flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#211f26] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">View Full Instructions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-0 pr-[24px] pt-[24px] relative shrink-0 w-[60px]">
      <Frame14 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative w-full">
      <CheckinDayPanel />
      <PostList />
      <Frame27 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex flex-col h-[963px] items-start left-0 top-[60px] w-[1440px]">
      <Wrapper />
      <Frame />
    </div>
  );
}

export default function AfterChallengeUploadDay() {
  return (
    <div className="bg-[#f7f6fc] relative size-full" data-name="After Challenge upload - Day - 10">
      <Background />
      <Header />
      <Frame47 />
    </div>
  );
}