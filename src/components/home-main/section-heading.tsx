"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  heading: string;
  paragraph: string;
  color?: string; 
}

export default function SectionHeader({ heading, paragraph, color = "inherit" }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  const words = heading.split(" ");

  const variants = {
    hidden: { opacity: 0, y: 2 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div ref={ref} className="flex flex-col justify-center items-center gap-[24px]">
      <h1 className="flex flex-wrap" style={{ color }}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
            variants={variants}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <p style={{ color }}>{paragraph}</p>
    </div>
  );
}
