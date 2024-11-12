"use client";

import { motion } from "framer-motion";
import PrimaryBtn from "../../buttons/primary-button";
import SecondaryBtn from "../../buttons/secondary-button";

export default function HeroDetails() {
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
    <div className="flex flex-col justify-center align-baseline text-primText h-1/2 md:h-full">
      <div className="flex flex-col h-1/2">
        <motion.h1
          className="mb-[16px] mt-16"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={variants}
        >
          تكنولوجيا متقدمة
          <br />
          لتبسيط عمليات مطعمك
        </motion.h1>

        <motion.p
          className="mb-[64px]"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={variants}
        >
          نظام
          <strong className="font-bold">&nbsp; أمـركـ &nbsp;</strong>
          الشامل. تبسيط العمليات. زيادة تفاعل العملاء.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row align-baseline w-full mb-[32px] gap-[24px] h-1/2 md:h-auto">
        <motion.a
          href="/demo-schedule"
          className="w-full md:w-[156px]"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={variants}
        >
          <PrimaryBtn text={`احجز موعد للتجربة`} />
        </motion.a>

        <motion.a href="/" className="w-full md:w-[131px]"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={variants}
        >
          <SecondaryBtn text={`أمـركـ أونلاين`} />
        </motion.a>
      </div>

      <motion.div
        className="hidden md:flex flex-row align-baseline items-center gap-[16px]"
        initial="hidden"
        animate="visible"
        custom={4}
        variants={variants}
      >
        <p className=" text-transparent bg-gradient-to-r from-[#b0438a] to-[#dc87be] font-rubik text-[12px] font-medium text-right bg-clip-text">
          تسجيل الدخول
        </p>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12V10.6667H1.33333V1.33333H6V0H1.33333C0.966668 0 0.652668 0.130667 0.391335 0.392C0.130002 0.653333 -0.000442505 0.967111 1.90735e-06 1.33333V10.6667C1.90735e-06 11.0333 0.130446 11.3473 0.391335 11.6087C0.652224 11.87 0.966224 12.0004 1.33333 12H6ZM7.33333 9.33333L8.25 8.36667L6.55 6.66667H12V5.33333H6.55L8.25 3.63333L7.33333 2.66667L4 6L7.33333 9.33333Z"
              fill="url(#paint0_linear_291_3637)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_291_3637"
                x1="12"
                y1="6"
                x2="0"
                y2="6"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B0438A" />
                <stop offset="1" stopColor="#DC87BE" />
              </linearGradient>
            </defs>
          </svg>
      </motion.div>
    </div>
  );
}
