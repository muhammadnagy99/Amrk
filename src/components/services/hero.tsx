import Image from "next/image";
import { ServiceHeroProps } from "@/src/types/interfaces";
import HeroDetails from "./hero-details";


export default function ServiceHero({ heading, description, image }: ServiceHeroProps) {
    return (
        <div className="flex flex-col md:flex-row gap-10" aria-labelledby="Service-Hero-Section">

            <HeroDetails heading={heading} description={description} />

            <div className="w-full md:w-1/2">
                <Image
                    src={image.src}
                    width={588}
                    height={588}
                    alt={image.alt}
                    placeholder="blur"
                    priority={true}
                />
            </div>
        </div>
    );
}
