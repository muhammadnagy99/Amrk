import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/rms/di/hero.png';
import Screen from '@/public/rms/di/screen.png';
import Screen_en from '@/public/rms/di/screen_en.png';

import { DlIcon1, DlIcon2, DlIcon3 } from "./icons";


export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "الربط مع تطبيقات التوصيل",
            description: "تكامل سلس وفعال مع تطبيقات توصيل الطعام",
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
            heading: "تكامل مع منصات توصيل الطعام الشهيرة",
            listItems: [
                { icon: <DlIcon1 />, text: "منصة مركزية لإدارة طلبات التوصيل." },
                { icon: <DlIcon2 />, text: "تحديثات تلقائية لبيانات المخزون والمبيعات." },
                { icon: <DlIcon3 />, text: "تقليل الإدخال اليدوي وتقليل الأخطاء." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "إدارة الطلبات من مكان واحد لتحقيق نتائج مضمونة",
            listItems: [
                "تجميع الطلبات القادمة من تطبيقات التوصيل في منصة أمرك، مما يساعد في توفير الوقت مع محافظة على الدقة.",
                "تقليل أخطاء الإدخال اليدوي وتوفير الدقة من خلال الأنظمة المتقدمة من نظام أمرك.",
                "زيادة حجم المبيعات من خلال التكامل مع تطبيقات التوصيل.",
                "تقديم تجربة توصيل متميزة مبنية على بيانات تحليل الأداء."
            ]
        }
    }
];


export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Food Aggregators",
            description: "Integrate Seamlessly with Delivery Aggregators",
            btnText: "Book a Demo",
            image: {
                src: Hero, // Replace with actual image variable
                alt: "Food Aggregators Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Integration with popular food delivery platforms",
            listItems: [
                { icon: <DlIcon1 />, text: "Centralized platform for managing deliveries." },
                { icon: <DlIcon2 />, text: "Automated updates for inventory and sales." },
                { icon: <DlIcon3 />, text: "Reduces manual entry and errors." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en, // Replace with actual image variable
            heading: "Managing orders from one place for outstanding results",
            listItems: [
                "Centralized processing time from Food Delivery Applications orders.",
                "Reduction in manual entry errors and time savings through automation.",
                "Increase in online sales from integrated delivery platforms.",
                "Real-time stock adjustments based on delivery order fulfillment."
            ]
        }
    }
];