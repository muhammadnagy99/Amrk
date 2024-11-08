"use client"

import { useState, useEffect } from "react";
import { sectionData, sectionHeading } from "./section-data";
import NavButton from "./nav-button";
import DetailsSection from "./details-section";

export default function HomeSectionI() {
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

    useEffect(() => {
        if (activeId !== null) {
            setVisibleId(activeId);
        }
    }, [activeId]);

    return (
        <div className="flex flex-col w-full h-[880px] justify-center items-center gap-[80px] bg-primText" aria-labelledby="Amrk-Solutions-Section">
            <div className="flex flex-col justify-center items-center text-SecTextV2 gap-[24px]">
                <h1>
                    {sectionHeading.primary}
                </h1>
                <p>
                    {sectionHeading.secondary}
                </p>
            </div>

            <div className="flex flex-row gap-[40px] w-[792px] h-[544px]">
                <nav className="flex flex-col gap-[16px]">
                    {sectionData.map((section) => (
                        <NavButton
                            key={section.id}
                            id={section.id}
                            label={section.button.label}
                            iconLight={section.button.iconLight}
                            iconDark={section.button.iconDark}
                            isActive={activeId === section.id}
                            onClick={handleButtonClick}
                        />
                    ))}
                </nav>

                <div className="h-full rounded-xl bg-SecTextV2 w-[435px] relative overflow-hidden">
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
                            <DetailsSection
                                title={section.article.title}
                                description={section.article.description}
                                imgSrc={section.article.imgSrc}
                                imgAlt={section.article.imgAlt}
                                width={section.article.width}
                                height={section.article.height}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
