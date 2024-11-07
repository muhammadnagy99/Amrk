import React from "react";
import PrimaryLine from "../../assets/primary-line";
import { ServiceDetailsProps } from "@/src/types/interfaces";

export default function ServicesDetails({heading, listItems}: ServiceDetailsProps) {
    return(
        <div className="flex flex-row">
            <article className="flex flex-col h-auto w-1/3 gap-4 items-start justify-start">
                <h3 className="text-[32px] font-bold text-primText w-[70%]">
                    {heading.primary}
                </h3>
                <p className="text-xl font-normal text-primText w-[70%]">
                    {heading.secondary}
                </p>
            </article>

            <div className="flex flex-col gap-8 w-2/3">
                {listItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {index % 3 === 0 && (
                            <div className="grid grid-cols-3 gap-4">
                                {listItems.slice(index, index + 3).map((subItem, subIndex) => (
                                    <article key={subIndex} className="flex flex-col h-auto gap-4 items-start justify-start">
                                        <h3 className="text-[24px] font-medium text-primText w-[80%]">
                                            {subItem.heading}
                                        </h3>
                                        <p className="text-base font-normal text-primText w-[80%]">
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