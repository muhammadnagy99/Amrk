"use client";
import PrimaryBtn from "../buttons/primary-button";
import { motion } from "framer-motion";

interface HeroDetails {
  heading: string;
  description: string;
}

export default function HeroDetails({ heading, description }: HeroDetails) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
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
    <div className="flex flex-col justify-center h-auto w-full md:w-1/2 gap-10 md:gap-[64px]">
      <motion.article 
        className="flex flex-col gap-2 md:gap-[24px]"
        initial="hidden"
        animate="visible"
        custom={0}
        variants={variants}
        >

        <h1 className="text-xs md:text-2xl font-normal text-primText">{heading}</h1>
        <p className="text-2xl md:text-[40px] leading-8 md:leading-[3rem] font-bold text-primText">{description}</p>
      </motion.article>

      <motion.a 
        href="/demo-schedule" 
        className="inline-flex w-full md:w-1/3"
        initial="hidden"
        animate="visible"
        custom={1}
        variants={variants}
        >
        <PrimaryBtn text="احجز موعد للتجربة" />
      </motion.a>
    </div>
  );
}
