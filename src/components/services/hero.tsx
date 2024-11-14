import Image, {StaticImageData} from "next/image";
import HeroDetails from "./hero-details";

export interface HeroProps {
    heading: string;
    description: string;
    btnText: string
    image: {
      src: StaticImageData;
      alt: string;
    };
  }

export default function ServiceHero({ heading, description, btnText, image }: HeroProps) {
    return (
        <div className="flex flex-col md:flex-row gap-10" aria-labelledby="Service-Hero-Section">

            <HeroDetails heading={heading} description={description} btnText={btnText} />

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
