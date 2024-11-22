import { HighlightedDottedRow as Rowpros } from "@/src/types/interfaces";


interface ArticleContent {
  title: string;
  content: {
    text: string;
    highlight: boolean;
    description: string;
  }[];
  quoteBefore?: string;
  quoteAfter?: string;
}

interface ArticleComponentProps {
  content: ArticleContent;
}



export default function RowDotted({
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
      <ul className="customList list-disc list-inside w-full md:w-1/2 text-primText font-light text-base md:text-xl">
        {quoteBefore && (
          <blockquote className="text-primText mb-4">
            {quoteBefore}
          </blockquote>
        )}
        {content.map((part, index) => (
          <li key={index} className="mb-4 ml-5">
            <strong className="text-PrimBtn">{part.text}</strong>{" "}
            {part.description}
          </li>
        ))}
        {quoteAfter && (
          <blockquote className="text-primText mt-4">
            {quoteAfter}
          </blockquote>
        )}
      </ul>
    </div>
  );
}
