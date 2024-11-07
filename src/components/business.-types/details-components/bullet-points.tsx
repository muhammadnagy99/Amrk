import React from "react";
import RightIcon2 from "../../assets/right-check-icon2";
import { BusinessBulletPointsProps } from "@/src/types/interfaces";

export default function BusinessBulletPoints({ heading, listItems }: BusinessBulletPointsProps) {
    return (
        <div className="flex flex-row justify-between rounded-[24px] p-[72px] border border-solid border-border1" aria-labelledby="Features-Bullets-List">
            <div className="flex flex-col justify-center h-auto w-full gap-[32px]">
                <h3 className="text-[32px] font-bold text-primText">
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
                <ul className="flex flex-col gap-4 pr-10">
                    {listItems.map((item, index) => (
                        <li key={index} className="flex flex-row items-center gap-4">
                            <RightIcon2 />
                            <p className="text-xl font-normal text-primText">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
