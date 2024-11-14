import { StaticImageData } from 'next/image';
import FieldList from './field-list';

interface SectionVIProps {
    content: {
        heading: string;
        subheading: string;
        fieldLists: {
            legendText: string;
            images: {
                src: StaticImageData;
                alt: string;
                width: number;
                height: number;
            }[];
        }[];
    };
}

export default function SectionVI({ content }: SectionVIProps) {
    return (
        <div className="flex flex-col w-full gap-8 md:gap-[70px]"> 
            <article className="flex flex-col w-full items-center justify-center gap-2">
                <h2 className="text-xl md:text-[32px] text-center font-semibold text-primText">
                    {content.heading}               
                </h2>
                <p className="text-primText text-center text-sm md:text-base font-normal">
                    {content.subheading}
                </p>
            </article>

            <div className="w-full flex flex-col gap-2 md:gap-9">
                <div className="flex flex-col md:flex-row w-full justify-between gap-6">
                    {content.fieldLists.slice(0, 2).map((field, index) => (
                        <div key={index} className="w-full md:w-[49%] flex justify-center items-center">
                            <FieldList
                                legendText={field.legendText}
                                images={field.images}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-row w-full mt-[20px]">
                    <FieldList
                        legendText={content.fieldLists[2].legendText}
                        images={content.fieldLists[2].images}
                    />
                </div>
            </div>
        </div>
    );
}
