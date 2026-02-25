"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

import MinusIcon from '../../assets/minus-icon';
import PrimPlusIcon from '../../assets/primary-plus';
import Heading from './heading';

type HomeSectionIIIProps = {
  sectionContent: {
    headingContent: {
      title: string;
      description: string;
    };
    articles: {
      id: number;
      title: string;
      content: {
        text: string;
        highlight: boolean;
      }[];
    }[];
    collapseText: {
      showMore: string;
      showLess: string;
    };
  };
};

export default function HomeSectionIII({ sectionContent }: HomeSectionIIIProps) {
  const { headingContent, articles, collapseText } = sectionContent;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isCollapsed) {
        contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
      } else {
        contentRef.current.style.maxHeight = 'none';
      }
    }
  }, [isCollapsed]);

  const sectionAnimation: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };


  return (
    <div
      className="flex flex-col w-[88%] xl:max-w-[1200px] justify-center items-center gap-8 md:gap-[80px]"
      aria-labelledby="Amrk-solution-and-advantages"
    >
      <header className="flex flex-col md:flex-row w-full justify-center gap-4" ref={sectionRef}>
        <Heading headingContent={headingContent} />
      </header>

      <motion.section
        ref={contentRef}
        className="flex flex-col w-full transition-all duration-500 ease-in-out overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
      >
        {articles.slice(0, isCollapsed ? 3 : articles.length).map((article) => (
          <React.Fragment key={article.id}>
            <article className="flex flex-col md:flex-row w-full border-bottom pt-6 pb-6 md:p-8 gap-4">
              <div className="flex flex-row items-baseline gap-[24px] w-full md:w-1/2">
                <div className="flex items-center justify-center w-8 h-8 rounded border-2 border-[#b0438a] bg-white text-PrimBtn">
                  <p className="text-xl">{article.id}</p>
                </div>
                <h2 className="text-xl md:text-[32px] font-normal text-primText">
                  {article.title}
                </h2>
              </div>
              <p className="items-center w-full md:w-1/2 text-primText">
                {article.content.map((part, index) =>
                  part.highlight ? (
                    <strong key={index} className="text-PrimBtn">
                      {part.text}
                    </strong>
                  ) : (
                    <span key={index}>{part.text}</span>
                  )
                )}
              </p>
            </article>
          </React.Fragment>
        ))}
      </motion.section>

      <div className="flex flex-row justify-end w-full">
        <button
          onClick={toggleCollapse}
          className="flex flex-row items-center pl-[24px] text-PrimBtn gap-4"
        >
          <span className="text-base font-medium">
            {isCollapsed ? collapseText.showMore : collapseText.showLess}
          </span>

          {isCollapsed ? <PrimPlusIcon /> : <MinusIcon />}
        </button>
      </div>
    </div>
  );
}
