import Image, {StaticImageData} from "next/image";

interface SectionIProps {
    content: {
        image: {
            src: StaticImageData;
            alt: string;
        };
        text: string;
    };
}

export default function SectionI({ content }: SectionIProps) {
    return (
        <div className="flex flex-col md:flex-row w-full justify-between gap-4 md:h-[193px]">
            <div className="w-full md:w-[30%] flex justify-center">
                <Image
                    src={content.image.src}
                    width={384}
                    height={193}
                    alt={content.image.alt}
                    placeholder="blur"
                    priority={false}
                />
            </div>

            <div className="flex justify-center items-center w-full md:w-[55%] h-full">
                <p className="text-base md:text-xl text-primText font-normal">
                    {content.text}
                </p>
            </div>
        </div>
    );
}
