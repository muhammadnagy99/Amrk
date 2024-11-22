import Image, {StaticImageData} from 'next/image';

interface SectionVProps {
    content: {
        heading: string;
        image: {
            src: StaticImageData;
            alt: string;
        };
        items: {
            name: string;
            content: string;
        }[];
    };
}

export default function SectionV({ content }: SectionVProps) {
    return (
        <div className="flex flex-col md:flex-row md:justify-between gap-6 w-full md:h-[450px]">
            <div className="flex items-start w-full md:w-[30%]">
                <Image
                    src={content.image.src}
                    width={384}
                    height={67}
                    alt={content.image.alt}
                    placeholder="blur"
                    priority={false}
                />
            </div>

            <div className="flex flex-col justify-between h-full items-start w-full gap-4 md:w-[60%]">
                <h2 className="text-primText text-base md:text-xl font-medium md:h-[10%]">
                    {content.heading}
                </h2>
                <ul className="md:h-[85%] flex flex-col gap-4 md:gap-8 list-disc mr-4 md:mr-10">
                    {content.items.map((item, index) => (
                        <li key={index} className="custom-list-item text-base text-primText">
                            <span className="text-PrimBtn">{item.name}</span> {item.content}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
