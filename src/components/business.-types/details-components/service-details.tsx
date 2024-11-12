import React from "react";
import PrimaryLine from "../../assets/primary-line";
import { ServiceDetailsProps } from "@/src/types/interfaces";

export default function ServicesDetails({heading, listItems}: ServiceDetailsProps) {
    return(
        <div className="flex flex-col md:flex-row gap-8">
            <article className="flex flex-col h-auto w-full md:w-1/3 gap-4 items-start justify-start">
                <h3 className="text-xl md:text-[32px] font-bold text-primText w-full md:w-[70%]">
                    {heading.primary}
                </h3>
                <p className="text-sm md:text-xl font-normal text-primText w-full md:w-[70%]">
                    {heading.secondary}
                </p>
            </article>

            <div className="flex flex-col gap-8 w-full md:w-2/3">
                {listItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {index % 3 === 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
                                {listItems.slice(index, index + 3).map((subItem, subIndex) => (
                                    <article key={subIndex} className="flex flex-col h-auto gap-2 md:gap-4 items-start justify-start">
                                        <h3 className="text-base md:text-2xl font-medium text-primText w-[80%]">
                                            {subItem.heading}
                                        </h3>
                                        <p className="text-xs md:text-base font-normal text-primText w-[80%]">
                                            {subItem.paragraph}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        )}
                        { (index + 1) % 3 === 0 && index < listItems.length - 1 && (
                            <PrimaryLine />
                        ) }

                    </React.Fragment>
                ))}
            </div>
        </div>
        
    );
}