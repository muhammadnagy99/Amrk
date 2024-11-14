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

export default function RowDotted({ content }: ArticleComponentProps) {
  return (
    <div className="flex flex-col md:flex-row w-full border-b pt-6 pb-6 md:p-8 gap-4">
      <div className="flex flex-row items-baseline gap-[24px] w-full md:w-1/2">
        <h2 className="text-xl md:text-2xl font-medium text-primText">
          {content.title}
        </h2>
      </div>
      <ul className="customList list-disc list-inside w-full md:w-1/2 text-primText">
        {content.quoteBefore && (
          <blockquote className="text-primText mb-4">
            {content.quoteBefore}
          </blockquote>
        )}
        {content.content.map((part, index) => (
          <li key={index} className="mb-2">
            <strong className="text-PrimBtn">{part.text}</strong>:{" "}
            {part.description}
          </li>
        ))}
        {content.quoteAfter && (
          <blockquote className="text-primText mt-4">
            {content.quoteAfter}
          </blockquote>
        )}
      </ul>
    </div>
  );
}
