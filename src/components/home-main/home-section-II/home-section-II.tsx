"use client"

import { useState } from "react";
import Image from "next/image";
import { sectionData } from "./section-data";
import NavButton from "./nav-button";
import ScreenContent from "./screen-content";
import BG from '@/public/bg/BG.png'

export default function HomeSectionII() {
    const [activeId, setActiveId] = useState<number | null>(sectionData[0]?.id || null);
    const [visibleId, setVisibleId] = useState<number | null>(sectionData[0]?.id || null);
    const [isFading, setIsFading] = useState<boolean>(false);

    const handleButtonClick = (id: number) => {
        if (id !== activeId) {
            setIsFading(true); 
            setTimeout(() => {
                setActiveId(id);
                setIsFading(false);
                setVisibleId(id);
            }, 300); 
        }
    };

    return (
        <div className="flex flex-col md:w-[95%] w-special h-[880px] justify-center items-center gap-[56px]" aria-labelledby="Amrk-Served-Sectors">
            <div className="flex flex-col w-full justify-center items-center text-primText gap-[24px]">
                <h1>قطاعات نخدمتها</h1>
                <p>حلول مصممة خصيصًا لتلبية احتياجاتكم وتعزيز نجاح أعمالكم</p>
            </div>

            <div className="flex flex-col w-full gap-[80px]">
                <nav className="section-bar flex flex-row items-center w-full h-[80px] rounded-[80px] p-4 gap-[16px]">
                    {sectionData.map((section) => (
                        <NavButton
                            key={section.id}
                            id={section.id}
                            label={section.button.label}
                            isActive={activeId === section.id}
                            onClick={handleButtonClick}
                        />
                    ))}
                </nav>

                <div className="relative h-[480px]">
                    <div className="w-full bg-primText h-[320px] rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0">
                        <Image 
                            src={BG}
                            fill
                            alt="Background Image"
                            placeholder="blur"
                            priority={false}
                        />
                    </div>

                    <div className="h-full relative overflow-hidden">
                        {sectionData.map((section) => (
                            <div
                                key={section.id}
                                className={`absolute inset-0 transition-opacity duration-300 ${
                                    visibleId === section.id ? (isFading ? 'opacity-0' : 'opacity-100') : 'opacity-0'
                                }`}
                                style={{
                                    pointerEvents: visibleId === section.id ? 'auto' : 'none',
                                    zIndex: visibleId === section.id ? 1 : 0
                                }}
                            >
                            <ScreenContent
                                        key={section.id}
                                        title={section.article.title}
                                        description={section.article.description}
                                        imgSrc={section.article.imgSrc}
                                        imgAlt={section.article.imgAlt}
                                        priority={section.article.priority}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
