"use client"

import { useState, useEffect, useRef } from 'react';

import { Icon1, Icon2, Icon3, Icon4 } from './icons';
const sections = [
    {
        heading: "نظام إدارة المطاعم",
        icon: <Icon1 />, 
        links: [
            { text: "نظام نقاط البيع", url: "/pos-system" },
            { text: "شاشة المطبخ", url: "/kitchen-screen" },
            { text: "شاشة الخدمات", url: "/service-screen" },
            { text: "إدارة الطاولات", url: "/table-management" },
            { text: "ووك توكي مدمج", url: "/integrated-walkie-talkie" },
            { text: "وضع عدم الاتصال", url: "/offline-mode" },
            { text: "إدارة علاقات العملاء وعمل حملات تسويقية", url: "/crm-marketing" },
            { text: "الربط مع تطبيقات التوصيل", url: "/delivery-app-integration" }
        ]
    },
    {
        heading: "حلول أمرك أون لاين",
        icon: <Icon2 />, 
        links: [
            { text: "توصيل الطلبات", url: "/order-delivery" },
            { text: "طلبات الاستلام", url: "/pickup-orders" },
            { text: "الطلب والدفع عبر (QR)", url: "/qr-order-payment" },
            { text: "الطلب عبر وسائل التواصل الاجتماعي", url: "/social-media-orders" },
            { text: "برامج الولاء", url: "/loyalty-programs" },
            { text: "حجز الطاولات", url: "/table-reservation" }
        ]
    },
    {
        heading: "إدارة متطورة للمخزون",
        icon: <Icon3 />, 
        links: [
            { text: "إدارة المشتريات والموارد", url: "/purchasing-management" },
            { text: "إدارة المينو والوصفات", url: "/menu-recipe-management" },
            { text: "التحكم الشامل في المخزون", url: "/inventory-control" },
            { text: "إدارة المستودعات، المطابخ المركزية، والمطابخ السحابية", url: "/warehouse-central-kitchens" },
            { text: "صلاحيات الموافقات الإلكترونية", url: "/electronic-approvals" }
        ]
    },
    {
        heading: "تشغيل المطابخ السحابية",
        icon: <Icon4 />,
        links: [
            { text: "علامات متعددة في مطبخك", url: "/multiple-kitchen-brands" },
            { text: "شاشة واحدة لمطبخك", url: "/single-kitchen-screen" },
            { text: "مخزون مطبخك", url: "/kitchen-inventory" },
            { text: "قوائم طعام مطبخك", url: "/kitchen-menus" },
            { text: "نظام نقاط بيع مطبخك", url: "/kitchen-pos-system" },
            { text: "دليل تعليمي لمطبخك", url: "/kitchen-guide" },
            { text: "مراقبة مطبخك", url: "/kitchen-monitoring" },
            { text: "ربط تطبيقات التوصيل بمطبخك", url: "/kitchen-delivery-integration" }
        ]
    },
];


export default function MegaMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    return (
        <div 
            ref={menuRef} 
            className="relative flex"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className={`flex w-auto items-center justify-center mx-2 gap-[8px] relative`}>
                <label className="flex items-center text-primText cursor-pointer relative">
                    الخدمات
                </label>

                <svg
                    className={`mb-1 cursor-pointer duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
                    width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1 1.00012L6 6.00049L1 1.00012ZM6 6.00049L11 1.00012L6 6.00049Z" fill="#23314C" />
                    <path d="M1 1.00012L6 6.00049L11 1.00012" stroke="#23314C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div> 
            <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-PrimBtn transform transition-all duration-300 transform-origin-left ${
                    isOpen ? 'scale-x-100' : 'scale-x-0'
                }`}
            ></span>


            <div
                className={`fixed left-1/2 transform -translate-x-1/2 w-[95%] h-[370px] xl:w-[1200px] mt-[64px] z-10 p-1 bg-white shadow-lg rounded-lg transition-all duration-300 
                ${isOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible translate-y-[-20px]'}`}
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
                                    <a key={linkIndex} href={link.url} className="text-primText text-sm font-normal hover:text-PrimBtn">
                                        {link.text}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}