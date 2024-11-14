import React from "react";
import PrimaryLine from "@/src/components/assets/primary-line";

interface SectionIIProps {
    content: {
        id: number;
        title: string;
        content: string;
    }[];
}

export default function SectionII({ content }: SectionIIProps) {
    return (
        <div className="flex flex-col gap-[24px]">
            {content.map(article => (
                <React.Fragment key={article.id}>
                    <article className="flex flex-col md:flex-row w-full justify-between gap-4 md:h-[32]">
                        <div className="flex flex-row items-center gap-[24px] w-full md:w-1/5 h-full">
                            <div className="flex items-center justify-center w-6 h-6 rounded border-2 border-[#b0438a] bg-white text-PrimBtn">
                                <p className="text-xs">{article.id}</p>
                            </div>
                            <h2 className="text-2xl font-normal text-primText">
                                {article.title}
                            </h2>
                        </div>
                        <div className="flex items-center h-full w-full md:w-4/5">
                            <p className="text-primText text-base font-normal">
                                {article.content}
                            </p>
                        </div>
                    </article>
                    <PrimaryLine />
                </React.Fragment>
            ))}
        </div>
    );
}
