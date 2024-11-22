import Image from "next/image";
import heroImage from '@/public/hero.jpg';
import HeroDetails from "./hero-details";

type HeroContent = {
    heroText: string[];
    headingText: string;
    links: {
        primaryLink: string;
        secondaryLink: string;
        footerLink: string;
    };
};

type MainHeroProps = {
    heroContent: HeroContent;
};

export default function MainHero({ heroContent }: MainHeroProps) {
    return (
        <div className="flex flex-col md:flex-row xl:max-w-[1200px] w-[88%] justify-between h-full md:h-[500px] xl:h-[750px] lg:h-[600px]">
            <HeroDetails {...heroContent} />
            <div className="flex items-center">
                <Image
                    src={heroImage}
                    alt="Amrk Restaurant Systems"
                    placeholder="blur"
                    priority={true}
                    width={690}
                    height={800}
                />
            </div>

            
        </div>
    );
}
