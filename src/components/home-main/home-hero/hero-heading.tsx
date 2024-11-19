"use client";

import { motion } from "framer-motion";

type HeroHeadingProps = {
  headingText: string;
};

export default function HeroHeading({ headingText }: HeroHeadingProps) {
  const words = headingText.split(/(\s|\n)/);

  const wordAnimation = {
    hidden: { opacity: 0, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <h1 className="flex flex-wrap">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={` inline-block mr-1 ${word === "\n" ? "w-full" : ""}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={wordAnimation}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
