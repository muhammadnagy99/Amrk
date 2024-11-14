import PrimaryBtn from "@/src/components/buttons/primary-button";
import HeroDescription from "./hero-heading";

interface HeroDetails {
  heading: string;
  description: string;
}

export default function HeroDetails({ heading, description }: HeroDetails) {

  return (
    <div className="flex flex-col justify-center h-auto w-full md:w-1/2 gap-10 md:gap-[64px]">
      <article 
        className="flex flex-col gap-2 md:gap-[24px]"
        >

        <h1 className="text-xs md:text-2xl font-normal text-primText">{heading}</h1>
        <HeroDescription text={description} />
        
      </article>

      <a 
        href="/demo-schedule" 
        className="inline-flex w-full md:w-1/3"
        >
        <PrimaryBtn text="احجز موعد للتجربة" />
      </a>
    </div>
  );
}
