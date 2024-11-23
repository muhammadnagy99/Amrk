"use client";

import { useState, useEffect, useRef } from "react";

interface MegaMenuData {
  title: string;
  sections: {
    icon: React.ReactNode;
    heading: string;
    links: { text: string; url: string }[];
  }[];
}

interface MegaMenuProps {
  data: MegaMenuData;
}

export default function MegaMenu({ data }: MegaMenuProps) {
  const { title, sections } = data;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      ref={menuRef}
      className="relative flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex w-auto items-center justify-center mx-2 gap-[8px] relative`}
      >
        <label className="flex items-center text-primText cursor-pointer relative">
          {title}
        </label>

        <svg
          className={`mb-1 cursor-pointer duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.00012L6 6.00049L1 1.00012ZM6 6.00049L11 1.00012L6 6.00049Z"
            fill="#23314C"
          />
          <path
            d="M1 1.00012L6 6.00049L11 1.00012"
            stroke="#23314C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span
        className={`absolute bottom-0 left-0 w-full h-[2px] bg-PrimBtn transform transition-all duration-300 transform-origin-left ${
          isOpen ? "scale-x-100" : "scale-x-0"
        }`}
      ></span>

      <div
        className={`z-[1000] fixed inset-0 mt-[104px] ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-[95%] h-[370px] xl:w-[1200px]  p-1 bg-white shadow-lg rounded-lg transition-all duration-300 
                ${
                  isOpen
                    ? "opacity-100 scale-100 visible translate-y-0"
                    : "opacity-0 scale-95 invisible translate-y-[-20px]"
                }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-4 gap-4 p-4">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col h-full gap-4">
                <header className="w-full flex items-center justify-start gap-2 p-2 bg-primeHeader">
                  {section.icon}
                  <p className="text-primText text-sm font-normal">
                    {section.heading}
                  </p>
                </header>
                <nav className="flex flex-col gap-4 p-2">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="text-primText text-sm font-normal hover:text-PrimBtn"
                    >
                      {link.text}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
