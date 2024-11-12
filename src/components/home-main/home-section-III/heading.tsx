"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Heading() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref); 

  const headingText = "حل شامل لإدارة وتبسيط\nجميع جوانب مطعمك.";
  const words = headingText.split(/(\s|\n)/);

  const wordAnimation = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.25,
        ease: "easeOut",
      },
    }),
  };

  const paragraphAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: words.length * 0.05, 
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <h1
        ref={ref}
        className="flex flex-wrap w-full md:w-1/2 text-[32px] md:text-4xl font-medium leading-normal text-primText"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className={`inline-block mr-1 ${word === "\n" ? "w-full" : ""}`}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={wordAnimation}
          >
            {word}
          </motion.span>
        ))}
      </h1>
      <motion.p
        className="flex font-normal text-base md:text-xl items-baseline w-full md:w-1/2 text-primText"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={paragraphAnimation}
      >
        نظام أمرك يقدم حلاً متكاملاً لتسهيل إدارة عمليات مطعمك بمرونة وكفاءة. من
        استلام الطلبات إلى إدارة المخزون والمدفوعات، كل ما تحتاجه في مكان واحد.
      </motion.p>
    </>
  );
}
