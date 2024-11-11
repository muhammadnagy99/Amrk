"use client";
import { useState } from 'react';
import SubMenu from './sub-menu-';

interface SubMenuItem {
    title: string;
    items: {
        label: string;
        url: string;
    }[];
}

interface SidebarMenuProps {
    title: string;
    subMenus: SubMenuItem[];
    isOpen: boolean;
    onToggle: () => void;
}

export default function SidebarMenu({ title, subMenus, isOpen, onToggle }: SidebarMenuProps) {
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

    const handleSubMenuClick = (index: number) => {
        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            <div
                className={`w-full h-12 pr-4 pl-4 rounded-xl gap-4 cursor-pointer transition-colors duration-300 ${
                    isOpen ? 'bg-white' : 'bg-primeHeader'
                }`}
                onClick={onToggle}
            >
                <div className="relative h-full w-full flex justify-between items-center">
                    <p className="text-sm font-medium text-primText">
                        {title}
                    </p>
                    <p>
                        <svg
                            className={`mb-1 cursor-pointer duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
                            width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 1.00012L6 6.00049L1 1.00012ZM6 6.00049L11 1.00012L6 6.00049Z" fill="#23314C" />
                            <path d="M1 1.00012L6 6.00049L11 1.00012" stroke="#23314C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </p>
                    <span
                        className={`absolute bottom-2 left-0 w-full h-[2px] bg-PrimBtn transform transition-all duration-400 transform-origin-left ${
                            isOpen ? 'scale-x-100' : 'scale-x-0'
                        }`}
                    ></span>
                </div>
            </div>
            <div
                className={`pl-4 pr-4 flex flex-col gap-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    isOpen ? 'max-h-[600px]' : 'max-h-0'
                }`}
            >
                {subMenus.map((subMenu, index) => (
                    <div key={index} onClick={() => handleSubMenuClick(index)}>
                        <SubMenu
                            title={subMenu.title}
                            items={subMenu.items}
                            isOpen={openSubMenuIndex === index}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
