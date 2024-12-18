import { HighlightedRow } from "@/src/types/interfaces";

export default function RowHighlited({ title, content }: HighlightedRow) {
  return (
    <article className="flex flex-col md:flex-row w-full border-b pt-6 pb-6 md:p-8 gap-4">
      <div className="flex flex-row items-baseline gap-[24px] w-full md:w-1/2">
        <h2 className="text-xl md:text-2xl font-medium text-primText">
          {title}
        </h2>
      </div>
      <p className="w-full md:w-1/2 text-primText text-base font-light">
        {content.map((part, index) =>
          part.highlight ? (
            <strong key={index} className="text-PrimBtn">
              {part.text}
            </strong>
          ) : (
            <span key={index}>{part.text}</span>
          )
        )}
      </p>
    </article>
  );
}
