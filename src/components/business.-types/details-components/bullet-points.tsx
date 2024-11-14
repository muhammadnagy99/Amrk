import React from "react";
import RightIcon2 from "../../assets/right-check-icon2";
import { BusinessBulletPointsProps } from "@/src/types/interfaces";

export default function BusinessBulletPoints({ heading, listItems }: BusinessBulletPointsProps) {
    return (
        <div className="flex flex-row justify-between rounded-[24px] p-7 md:p-[72px] border border-solid border-border1" aria-labelledby="Features-Bullets-List">
            <div className="flex flex-col justify-center h-auto w-full gap-4 md:gap-8">
                <h3 className="text-base md:text-[32px] font-medium md:font-bold text-primText md:leading-[3.5rem]">
                    {heading.text.split(heading.highlited).map((part, index) => (
                        <React.Fragment key={index}>
                            {part}
                            {index < heading.text.split(heading.highlited).length - 1 && (
                                <span className="text-PrimBtn font-bold">
                                    {heading.highlited}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </h3>
                <ul className="flex flex-col gap-4 pr-6 md:pr-10">
                    {listItems.map((item, index) => (
                        <li key={index} className="flex flex-row items-center gap-4">
                            <RightIcon2 />
                            <p className="w-4/5 text-xs md:text-xl font-normal text-primText">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
