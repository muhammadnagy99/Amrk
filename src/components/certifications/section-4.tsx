import Image, {StaticImageData} from "next/image";

interface SectionIVProps {
    content: {
        text: string;
        image: {
            src: StaticImageData;
            alt: string;
        };
    };
}

export default function SectionIV({ content }: SectionIVProps) {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between gap-4 w-full md:h-[260px]">
            <div className="flex justify-center items-center w-full md:w-[55%] h-full">
                <p className="text-base md:text-xl text-primText font-normal">
                    {content.text}
                </p>
            </div>

            <div className="w-full md:w-[30%]">
                <Image
                    src={content.image.src}
                    width={384}
                    height={260}
                    alt={content.image.alt}
                    placeholder="blur"
                    priority={false}
                />
            </div>
        </div>
    );
}
