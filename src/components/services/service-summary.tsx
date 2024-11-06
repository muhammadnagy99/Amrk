import Image from "next/image";
import RightIcon2 from "../assets/right-check-icon2";
import { ServiceSummaryProps } from "@/src/types/interfaces";

export default function ServiceSummary({ imageSrc, heading, listItems }: ServiceSummaryProps) {
    return (
        <div className="flex flex-row justify-between bg-primText rounded-[24px] p-special" aria-labelledby="Features-Bullets-List">
            <div className="flex flex-col gap-[24px] w-[50%]">
                <Image
                    src={imageSrc}
                    width={588}
                    height={360}
                    alt="Amrk Restaurant Systems"
                    placeholder="blur"
                    priority={false}
                />
            </div>

            <div className="flex flex-col justify-center h-auto w-[50%] gap-[32px]">
                <h3 className="text-[32px] font-bold text-white">
                    {heading}
                </h3>
                <ul className="flex flex-col gap-4">
                    {listItems.map((item, index) => (
                        <li key={index} className="flex flex-row items-center gap-4">
                            <RightIcon2 />
                            <p className="text-xl font-normal text-white">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
