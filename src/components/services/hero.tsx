import Image from "next/image";
import PrimaryBtn from "../buttons/primary-button";
import { ServiceHeroProps } from "@/src/types/interfaces";
import HeroDetails from "./hero-details";


export default function ServiceHero({ heading, description, image }: ServiceHeroProps) {
    return (
        <div className="flex flex-row" aria-labelledby="Service-Hero-Section">

            <HeroDetails heading={heading} description={description} />

            <div className="w-1/2">
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
