"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  heading: string;
  paragraph: string;
  color?: string; // Optional color prop
}

export default function SectionHeader({ heading, paragraph, color = "inherit" }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center gap-[24px]"
    >
      <motion.h1
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={1}
        variants={variants}
        style={{ color }} // Apply color to the heading
      >
        {heading}
      </motion.h1>

      <motion.p
        initial="hidden"
        custom={2}
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        style={{ color }} // Apply color to the paragraph
      >
        {paragraph}
      </motion.p>
    </div>
  );
}
