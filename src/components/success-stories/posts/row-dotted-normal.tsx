import { RowDottedWithIntro as Rowpros } from "@/src/types/interfaces";

export default function RowDottedWithIntro({
  title,
  quoteBefore,
  introText,
  content,
  quoteAfter,
}: Rowpros) {
  return (
    <div className="flex flex-col md:flex-row w-full border-b pt-6 pb-6 md:pt-8 md:pb-8 gap-4 justify-between">
      <div className="flex flex-row items-baseline gap-[24px] w-full md:w-2/5">
        <h2 className="text-xl md:text-4xl font-medium text-primText">
          {title}
        </h2>
      </div>
      <ul className="list-disc list-inside w-full md:w-1/2 text-primText text-base md:text-xl">
        {quoteBefore && (
          <blockquote className="text-base font-normal text-primText mb-4">
            {quoteBefore}
          </blockquote>
        )}
        {introText && (
          <p className="text-base font-normal text-primText mb-4">{introText}</p>
        )}
        {content.map((text, index) => (
          <li key={index} className="text-base font-medium mb-2">
            {text}
          </li>
        ))}
        {quoteAfter && (
          <blockquote className="text-base font-normal text-primText mt-4">
            {quoteAfter}
          </blockquote>
        )}
      </ul>
    </div>
  );
}
