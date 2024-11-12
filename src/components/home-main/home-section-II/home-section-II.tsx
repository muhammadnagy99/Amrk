"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { sectionData, sectionHeading } from "./section-data";
import NavButton from "./nav-button";
import ScreenContent from "./screen-content";
import BG from "@/public/bg/BG.png";
import BG2 from "@/public/bg/BG(1).png";

import SectionHeader from "../section-heading";

export default function HomeSectionII() {
  const [activeId, setActiveId] = useState<number | null>(
    sectionData[0]?.id || null
  );
  const [visibleId, setVisibleId] = useState<number | null>(
    sectionData[0]?.id || null
  );
  const [isFading, setIsFading] = useState<boolean>(false);

  const handleButtonClick = (id: number) => {
    if (id !== activeId) {
      setIsFading(true);
      setTimeout(() => {
        setActiveId(id);
        setIsFading(false);
        setVisibleId(id);

        // Scroll the clicked button into the center of the nav
        const buttonElement = document.getElementById(`nav-button-${id}`);
        if (buttonElement) {
          buttonElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }, 300);
    }
  };

  return (
    <div
      className="flex flex-col w-[88%] xl:max-w-[1200px] h-[700px] md:h-[800px] lg:h-[880px] justify-start md:justify-center items-center gap-[56px]"
      aria-labelledby="Amrk-Served-Sectors"
    >
      <SectionHeader
        heading={sectionHeading.primary}
        paragraph={sectionHeading.secondary}
        color="#23314c"
      />

      <div className="flex flex-col w-full gap-6 lg:gap-[80px]">
        <nav className="section-bar flex flex-row items-center lg:w-full overflow-x-auto overflow-y-hidden h-[64px] lg:h-[80px] rounded-[80px] p-4 gap-2 md:gap-[16px]">
          {sectionData.map((section) => (
            <NavButton
              key={section.id}
              id={`nav-button-${section.id}`} 
              label={section.button.label}
              isActive={activeId === section.id}
              onClick={() => handleButtonClick(section.id)}
            />
          ))}
        </nav>

        <div className="relative h-[480px]">
          <div className="block md:hidden bg-primText h-[320px] w-[342px] rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0">
            <Image
              className="w-full h-full"
              src={BG2}
              fill
              alt="Background Image"
              placeholder="blur"
              priority={false}
            />
          </div>

          <div className="hidden md:block w-full bg-primText h-[320px] rounded-3xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0">
            <Image
              className="w-full h-full"
              src={BG}
              fill
              alt="Background Image"
              placeholder="blur"
              priority={false}
            />
          </div>

          <div className="h-[530px] lg:h-full relative overflow-hidden">
            {sectionData.map((section) => (
              <div
                key={section.id}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  visibleId === section.id
                    ? isFading
                      ? "opacity-0"
                      : "opacity-100"
                    : "opacity-0"
                }`}
                style={{
                  pointerEvents: visibleId === section.id ? "auto" : "none",
                  zIndex: visibleId === section.id ? 1 : 0,
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
