import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/rms/tm/hero.png';
import Screen from '@/public/rms/tm/screen.png';
import Screen_en from '@/public/rms/tm/screen_en.png';

import { TbIcon1, TbIcon2, TbIcon3 } from "./icons";

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "إدارة الطاولات",
            description: "تحسين توزيع الطاولات والخدمة على الطاولة",
            btnText: "احجز موعد للتجربة",
            image: {
                src: Hero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "تحسين توزيع الطاولات ومراقبة الإشغال",
            listItems: [
                { icon: <TbIcon1 />, text: "تتبع الطاولات لحظياً." },
                { icon: <TbIcon2 />, text: "تحسين تجربة جلوس العملاء." },
                { icon: <TbIcon3 />, text: "إدارة رسوم الحد الأدنى وخدمات الطاولات." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تعزيز كفاءة العمل لتحقيق نتائج إيجابية وتجربة مميزة",
            listItems: [
                "زيادة في استخدام الطاولات خلال ساعات الذروة.",
                "تقليل أوقات انتظار العملاء بفضل تتبع توافر الطاولات.",
                "مساعدة العملاء المترددين في الساعة مع تحسين توزيع الجلوس.",
                "الالتزام بنسبة رسوم الحد الأدنى لتحقيق أهداف الإيرادات."
            ]
        }
    }
];


export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Table Management",
            description: "Optimize Seating and Service",
            btnText: "Book a Demo",
            image: {
                src: Hero, // Replace with actual image variable
                alt: "Table Management Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Optimized table allocation and occupancy",
            listItems: [
                { icon: <TbIcon1 />, text: "Real-time table tracking." },
                { icon: <TbIcon2 />, text: "Enhanced customer seating experience." },
                { icon: <TbIcon3 />, text: "Manage Minimum Charge and other table-specific services." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en, // Replace with actual image variable
            heading: "Enhance efficiency for exceptional results",
            listItems: [
                "Increased average table utilization during peak hours.",
                "Reduced wait times with better table tracking.",
                "Percentage increase in customers served per hour through optimized seating.",
                "Minimum charge compliance rate, ensuring revenue targets are met."
            ]
        }
    }
];