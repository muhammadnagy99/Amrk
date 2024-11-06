import Image from "next/image";
import PrimaryBtn from "../buttons/primary-button";
import { ServiceHeroProps } from "@/src/types/interfaces";


export default function ServiceHero({ heading, description, image }: ServiceHeroProps) {
    return (
        <div className="flex flex-row" aria-labelledby="Service-Hero-Section">
            <div className="flex flex-col justify-center h-auto w-1/2 gap-[64px]">
                <article className="flex flex-col gap-[24px]">
                    <h1 className="text-2xl font-normal text-primText">
                        {heading}
                    </h1>
                    <p className="text-[40px] font-bold text-primText">
                        {description}
                    </p>
                </article>
                <a href="/demo-schedule" className="inline-flex w-1/3">
                    <PrimaryBtn text="احجز موعد للتجربة" />
                </a>
            </div>
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
