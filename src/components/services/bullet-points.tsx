import { BulletPointsProps } from "@/src/types/interfaces";

export default function BulletPoints({ heading, listItems }: BulletPointsProps) {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-4" aria-labelledby="Features-Bullets-Lists">
            <div className="flex flex-col justify-center h-auto w-full md:w-[40%] gap-[64px]">
                <article className="flex flex-col">
                    <h2 className="text-2xl md:text-[44px] font-bold text-primText leading-8 md:leading-[3rem]">
                        {heading}
                    </h2>
                </article>
            </div>
            <ul className="flex flex-col gap-[24px] w-full md:w-[50%]">
                {listItems.map((item, index) => (
                    <li key={index} className="flex flex-row gap-[16px] items-center">
                        <p className="w-12 md:w-16">
                            {item.icon}
                        </p>
                        <p className="flex justify-start items-center h-full text-sm md:text-2xl font-normal text-primText">
                            {item.text}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
