"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Heading() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref); // Trigger the animation only once when in view

  const headingText = "حل شامل لإدارة وتبسيط\nجميع جوانب مطعمك.";
  const words = headingText.split(/(\s|\n)/);

  const wordAnimation = {
    hidden: { opacity: 0, y: 25 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
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
          animate={isInView ? "visible" : "hidden"} // Apply animation only when in view
          variants={wordAnimation}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
