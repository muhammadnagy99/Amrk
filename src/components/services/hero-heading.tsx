"use client";

import { motion } from "framer-motion";

interface props {
  text: string
}

export default function HeroDescription({ text }: props) {
  const headingText = text;

  const words = headingText.split(/(\s|\n)/);

  const wordAnimation = {
    hidden: { opacity: 0, y: 2 },
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
    <p className="flex flex-wrap text-2xl md:text-[40px] leading-8 md:leading-[3rem] font-bold text-primText">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={` inline-block ${index == 0 ? 'mr-0' : 'mr-1'}${word === "\n" ? "w-full" : ""}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={wordAnimation}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
