"use client";

import { useState, useEffect, useRef } from "react";

interface DropListProps {
  data: {
    title: string;
    menuItems: { text: string; url: string }[];
  };
}

export default function DropList({ data }: DropListProps) {
  const { title, menuItems } = data;
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

  const [positions, setPositions] = useState<{
    top: number;
    left: number | string;
    right: number | string;
  }>({
    top: 0,
    left: 0,
    right: "unset",
  });

  useEffect(() => {
    if (menuRef.current && typeof window !== "undefined") {
      const { offsetTop, offsetLeft, offsetHeight, offsetWidth } =
        menuRef.current;
      const clientWidth = document.documentElement.clientWidth;

      const calculatedPositions = {
        top: offsetTop + offsetHeight,
        left: document.documentElement.dir === "ltr" ? offsetLeft : "unset",
        right:
          document.documentElement.dir === "rtl"
            ? `${clientWidth - (offsetLeft + offsetWidth)}px`
            : "unset",
      };
      setPositions(calculatedPositions);
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="relative flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex w-auto items-center mx-2 gap-[8px] relative">
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
        className={`absolute bottom-0 left-0 w-full h-[2px] bg-PrimBtn transform transition-all duration-300 ${
          isOpen ? "scale-x-100" : "scale-x-0"
        }`}
      ></span>
      <div
        className="z-[1000] fixed inset-0 pointer-events-none"
        style={{
            top: `${positions.top}px`,
            left: positions.left !== "unset" ? `${positions.left}px` : "unset",
            right: positions.right,
          }}
      >
        <div
          className={`absolute mt-10 w-[188px] h-[168px] p-1 bg-white shadow-lg rounded-lg transition-all duration-300 
                ${
                  isOpen
                    ? "opacity-100 scale-100 visible translate-y-0"
                    : "opacity-0 scale-95 invisible translate-y-[-20px]"
                }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 gap-4 p-4">
            <div className="flex flex-col h-full">
              <nav className="flex flex-col gap-4">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="text-primText text-sm font-normal hover:text-PrimBtn"
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
