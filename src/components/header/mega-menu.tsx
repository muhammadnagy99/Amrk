"use client"

import { useState, useEffect, useRef } from 'react';

export default function MegaMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className="relative flex">
            <div
                className={`flex w-auto items-center mx-2 gap-[8px] relative`}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <label className="flex items-center text-primText cursor-pointer relative">
                    الخدمات
                </label>

                <svg
                    className={`mb-1 duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
                    width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1.00012L6 6.00049L1 1.00012ZM6 6.00049L11 1.00012L6 6.00049Z" fill="#23314C" />
                    <path d="M1 1.00012L6 6.00049L11 1.00012" stroke="#23314C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div> 
            <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-PrimBtn transform transition-all duration-300 ${
                    isOpen ? 'scale-x-100' : 'scale-x-0'
                }`}
            ></span>

            <div
                className={`fixed left-1/2 transform -translate-x-1/2 w-[95%] h-[370px] xl:w-[1200px] mt-[70px] z-10 p-1 bg-white shadow-lg rounded-lg transition-all duration-300 
                ${isOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible translate-y-[-20px]'}`}
            >
                <div className="grid grid-cols-4 gap-4">
                    <div className="flex flex-col h-full">
                        <header className="w-full flex justify-start">
                            نظام إدارة المطاعم
                        </header>
                        <ul>
                            <li>
                            نظام نقاط البيع
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}
