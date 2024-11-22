import { NormalRow } from "@/src/types/interfaces";

export default function Row({ title, text }: NormalRow) {
  return (
    <article className="flex flex-col md:flex-row w-full border-b pt-6 pb-6 md:pt-8 md:pb-8 gap-4 justify-between">
      <div className="flex flex-row items-baseline gap-[24px] w-full md:w-2/5">
        <h2 className="text-xl md:text-4xl font-medium text-primText">
          {title}
        </h2>
      </div>
      <p className="w-full md:w-1/2 text-primText text-base md:text-xl md:font-light">
        {text}
      </p>
    </article>
  );
}
