import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/rms/kds/hero.png';
import Screen from '@/public/rms/kds/screen.png';
import Screen_en from '@/public/rms/kds/screen_en.png';

import { KdIcon1, KdIcon2, KdIcon3 } from "./icons";


export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "شاشة المطبخ",
            description: "تنظيم الطلبات لزيادة كفاءة مطبخك",
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
            heading: "شاشة مطبخ تنظم جميع الطلبات لحظياً",
            listItems: [
                { icon: <KdIcon1 />, text: "تحديثات الطلبات لحظياً." },
                { icon: <KdIcon2 />, text: "تحسين التواصل بين القسمين الأمامي والخلفي." },
                { icon: <KdIcon3 />, text: "تسريع عملية تحضير الطعام." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تتبع وإدارة وتحسين تحضير الطعام لتحقيق نتائج مميزة",
            listItems: [
                "تحسين سرعة تنفيذ الطلبات في المطبخ.",
                "تقليل نسبة الطلبات المتأخرة أو غير الصحيحة.",
                "تحديثات فورية للطلبات من أوراق معاينة بأنظمة التذاكر اليدوية لزيادة الدقة.",
                "زيادة كفاءة التواصل بين أقسام المطعم الأمامية والخلفية."
            ]
        }
    }
];


export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Kitchen Display Screen (KDS)",
            description: "Centralized Orders for Streamlined Efficiency",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Kitchen Display Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Kitchen display organizes all orders in real-time",
            listItems: [
                { icon: <KdIcon1 />, text: "Real-time order updates." },
                { icon: <KdIcon2 />, text: "Improved communication between front and back of house." },
                { icon: <KdIcon3 />, text: "Faster meal preparation." }
            ]
        }
    }
];