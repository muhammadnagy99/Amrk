interface SectionIIIProps {
    content: {
        heading: string;
        paragraph1: string;
        paragraph2: string;
    };
}

export default function SectionIII({ content }: SectionIIIProps) {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-4 w-full h-auto">
            <div className="flex items-start w-full md:w-[40%]">
                <h2 className="text-xl md:text-[32px] font-semibold text-primText md:leading-[3.5rem]">
                    {content.heading}
                </h2>
            </div>

            <div className="flex flex-col justify-between gap-8 items-start w-full md:w-[40%]">
                <p className="text-primText text-xl md:text-base font-normal">
                    {content.paragraph1}
                </p>
                <p className="text-primText text-sm md:text-xs font-normal">
                    {content.paragraph2}
                </p>
            </div>
        </div>
    );
}
