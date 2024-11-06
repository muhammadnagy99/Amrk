import { BulletPointsProps } from "@/src/types/interfaces";

export default function BulletPoints({ heading, listItems }: BulletPointsProps) {
    return (
        <div className="flex flex-row justify-between" aria-labelledby="Features-Bullets-Lists">
            <div className="flex flex-col justify-center h-auto w-[40%] gap-[64px]">
                <article className="flex flex-col">
                    <h2 className="text-[44px] font-bold text-primText">
                        {heading}
                    </h2>
                </article>
            </div>
            <ul className="flex flex-col gap-[24px] w-[50%]">
                {listItems.map((item, index) => (
                    <li key={index} className="flex flex-row gap-[16px]">
                        {item.icon}
                        <p className="flex justify-start items-center h-full text-2xl font-normal text-primText">
                            {item.text}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
