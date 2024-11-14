import { ServicesContentType } from "@/src/types/interfaces";

import PosHero from '@/public/rms/pos/pos-hero.png';
import PosScreen from '@/public/rms/pos/pos-screen.png';
import PosScreen_en from '@/public/rms/pos/pos-screen_en.png';

import { PosIcon1, PosIcon2, PosIcon3 } from "./icons";

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "نظام نقاط البيع",
            description: "إدارة الطلبات بسهولة وكفاءة لتحسين العمليات",
            btnText: "احجز موعد للتجربة",
            image: {
                src: PosHero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "أسهل نظام نقاط بيع لمعالجة الطلبات بسرعة!",
            listItems: [
                { icon: <PosIcon1 />, text: "واجهة سهلة الاستخدام للمعاملات السريعة." },
                { icon: <PosIcon2 />, text: "تكامل سلس مع باقي خدمات المطعم." },
                { icon: <PosIcon3 />, text: "تكامل سلس مع أجهزة الدفع." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: PosScreen,
            heading: "نتائج معالجة الطلبات من أي جهاز، متصل أو غير متصل",
            listItems: [
                "تقليل متوسط وقت ادخال الطلبات بعد تنفيذ أمرك POS.",
                "زيادة سرعة معالجة الطلبات لكل موظف خلال ساعات الذروة.",
                "تقليل الأخطاء للطلبات الملغاة او المعدلة لوجود آلية سير عمل الكترونية.",
                "نسبة عالية لوقت التشغيل تصل الى 99.99% دون انقطاع، لضمان أعلى قدر لتوفر الخدمة."
            ]
        }
    }
];


export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Point of Sale System (POS)",
            description: "Easily manage and track all your orders in one place",
            btnText: "Book a Demo",
            image: {
                src: PosHero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "The simplest POS for fast, efficient orders!",
            listItems: [
                { icon: <PosIcon1 />, text: "Simple interface for faster transactions." },
                { icon: <PosIcon2 />, text: "Seamless integration with other services." },
                { icon: <PosIcon3 />, text: "Seamless integration with payment devices." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: PosScreen_en,
            heading: "Process orders from any device, online or offline",
            listItems: [
                "Reduce average order entry time with Amrk POS.",
                "Boost order processing speed per employee during peaks.",
                "Reduction in errors or voided transactions due to automated workflows.",
                "Amrk POS uptime 99.99%, ensuring minimal service disruptions."
            ]
        }
    }
];
