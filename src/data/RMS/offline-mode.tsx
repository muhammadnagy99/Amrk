import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/rms/off/hero.png';
import Screen from '@/public/rms/off/screen.png';
import Screen_en from '@/public/rms/off/screen_en.png';

import { OfIcon1, OfIcon2, OfIcon3 } from "./icons";


export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "وضع عدم الاتصال",
            description: "ابق متصلاً في حال انقطاع الإنترنت لضمان استمرارية العمل",
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
            heading: "معالجة الطلبات والمدفوعات بدون إنترنت",
            listItems: [
                { icon: <OfIcon1 />, text: "لا يوجد توقف في الخدمة خلال انقطاع الإنترنت." },
                { icon: <OfIcon2 />, text: "مزامنة البيانات عند إعادة الاتصال." },
                { icon: <OfIcon3 />, text: "استمرار العمليات بسلاسة." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "ضمان استمرار الخدمة دون أي انقطاع حتى في حالات تعطل الإنترنت",
            listItems: [
                "عدم فقدان أي طلب خلال انقطاع الشبكة.",
                "سرعة مزامنة الطلبات بعد استعادة الإنترنت مما يضمن عدم وجود تفاوت.",
                "استمرار معالجة البيانات بسلاسة حتى استعادة الإنترنت لضمان عدم وجود تأخير في التقارير."
            ]
        }
    }
];


export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Offline Mode",
            description: "Stay Fully Operational, Even Offline",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Offline Mode Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Processing orders and payments without internet",
            listItems: [
                { icon: <OfIcon1 />, text: "No service disruption during outages." },
                { icon: <OfIcon2 />, text: "Syncs data when reconnected." },
                { icon: <OfIcon3 />, text: "Keeps your business running smoothly." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en, // Replace with actual image variable
            heading: "Ensures uninterrupted service, even during internet outages",
            listItems: [
                "Zero transaction loss during network outages.",
                "Percentage of orders processed seamlessly offline.",
                "Speed of data sync post-internet recovery, ensuring no data discrepancies.",
                "Reduction in customer complaints due to service interruptions."
            ]
        }
    }
];