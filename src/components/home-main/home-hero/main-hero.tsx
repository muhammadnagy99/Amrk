import Image from "next/image";
import heroImage from '@/public/hero-full-art-1.webp';
import heroImageMobile from '@/public/hero-full-art-1(1).webp';
import HeroDetails from "./hero-details";

export default function MainHero() {
    return(
        <div className="flex flex-col md:flex-row xl:max-w-[1200px] w-[88%] justify-between h-full md:h-[500px] lg:h-[600px]">
            <HeroDetails />
            <div className="hidden md:block">
                <Image
                    src={heroImage}
                    alt="Amrk Restaurant Systems"
                    placeholder="blur"
                    priority={true}
                    width={690} 
                    height={798} 
                />
            </div>

            <div className="block md:hidden">
                <Image
                    src={heroImageMobile}
                    alt="Amrk Restaurant Systems"
                    placeholder="blur"
                    priority={true}
                    width={341} 
                    height={332} 
                />
            </div>

        </div>
    );
}
