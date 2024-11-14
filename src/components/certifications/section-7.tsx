import { StaticImageData } from "next/image";
import FieldList from "./field-list";

interface SectionVIIProps {
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

export default function SectionVII({ content }: SectionVIIProps) {
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

      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12">
        {content.fieldLists.map((field, index) => (
          <div
            key={index}
            className={`${
              index === 0
                ? "col-span-2 w-full mt-[20px]" // First row, full width
                : index === content.fieldLists.length - 1
                ? "w-full md:col-span-2 flex justify-center"
                : "w-full"
            } flex justify-center items-center`}
          >
            <FieldList legendText={field.legendText} images={field.images} />
          </div>
        ))}
      </div>
    </div>
  );
}
