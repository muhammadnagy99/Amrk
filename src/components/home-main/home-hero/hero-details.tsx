import PrimaryBtn from "../../buttons/primary-button";
import SecondaryBtn from "../../buttons/secondary-button";
import HeroHeading from "./hero-heading";

type HeroDetailsProps = {
  heroText: string[];
  headingText: string;
  links: {
    primaryLink: string;
    secondaryLink: string;
    footerLink: string;
  };
};

export default function HeroDetails({
  heroText,
  headingText,
  links,
}: HeroDetailsProps) {
  return (
    <div className="flex flex-col justify-center align-baseline text-primText w-full md:w-1/2 gap-[64px] h-full md:h-full mt-[72px] md:mt-0">
      <div className="flex flex-col gap-4">
        <HeroHeading headingText={headingText} />
        <p>
          {heroText[0]}
          {heroText[1] === "أمـركـ" ? (
            <strong className="font-bold">&nbsp;{heroText[1]}</strong>
          ) : (
            heroText[1]
          )}
          {heroText[2]}
        </p>
      </div>

      <div className="flex flex-col align-baseline w-full mb-[32px] gap-[24px] h-1/2 md:h-auto">
        <div className="flex flex-col md:flex-row gap-[24px]">
          <a href={links.primaryLink} className="w-full md:w-[156px]">
            <PrimaryBtn text={heroText[3]} />
          </a>

          <a href={links.secondaryLink} className="w-full md:w-[131px]">
            <SecondaryBtn text={heroText[4]} />
          </a>
        </div>

        <a
          href={links.footerLink}
          className="hidden md:flex flex-row align-baseline items-center gap-[16px]"
        >
          <p className="text-transparent bg-gradient-to-r from-[#b0438a] to-[#dc87be] font-rubik text-[12px] font-medium text-right bg-clip-text">
            {heroText[5]}
          </p>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12V10.6667H1.33333V1.33333H6V0H1.33333C0.966668 0 0.652668 0.130667 0.391335 0.392C0.130002 0.653333 -0.000442505 0.967111 1.90735e-06 1.33333V10.6667C1.90735e-06 11.0333 0.130446 11.3473 0.391335 11.6087C0.652224 11.87 0.966224 12.0004 1.33333 12H6ZM7.33333 9.33333L8.25 8.36667L6.55 6.66667H12V5.33333H6.55L8.25 3.63333L7.33333 2.66667L4 6L7.33333 9.33333Z"
              fill="url(#paint0_linear_291_3637)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_291_3637"
                x1="12"
                y1="6"
                x2="0"
                y2="6"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B0438A" />
                <stop offset="1" stopColor="#DC87BE" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  );
}
