import Image from "next/image";
import RightIcon2 from "@/src/components/assets/right-check-icon2";
import { ServiceSummaryProps } from "@/src/types/interfaces";

export default function ServiceSummary({ imageSrc, heading, listItems }: ServiceSummaryProps) {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between bg-primText rounded-[24px] p-6 md:p-special" aria-labelledby="Features-Bullets-List">
            <div className="relative flex flex-col gap-[24px] h-[200px] md:h-[480px] md:w-[50%] justify-center items-center">
                <Image
                className="h-full object-contain"
                    src={imageSrc}
                    fill
                    alt="Amrk Restaurant Systems"
                    placeholder="blur"
                    priority={false}
                />
            </div>

            <div className="flex flex-col justify-center h-auto w-full md:w-[50%] gap-[32px] p-4">
                <h3 className="text-2xl md:text-[32px] leading-8 md:leading-[3rem]  font-bold text-white">
                    {heading}
                </h3>
                <ul className="flex flex-col gap-4">
                    {listItems.map((item, index) => (
                        <li key={index} className="flex flex-row items-center gap-4">
                            <RightIcon2 />
                            <p className="w-4/5 text-xs md:text-xl font-normal text-white">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
