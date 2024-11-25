import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/cloud-kitchen-system/kd/hero.png';
import Screen from '@/public/cloud-kitchen-system/kd/screen.png';
import Screen_en from '@/public/cloud-kitchen-system/kd/screen_en.png';
import { IconOrderTracking, IconUnifiedDisplay, IconKitchenEfficiency } from './icons';

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "شاشة موحدة لمطبخك",
            description: "الطلبات المركزية من علامات تجارية وقوائم متعددة",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "شاشة موحدة لمطبخك"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "توحيد الطلبات في مطبخك السحابي",
            listItems: [
                { icon: <IconOrderTracking />, text: "تتبع لحظي للطلبات." },
                { icon: <IconUnifiedDisplay />, text: "عرض موحد لتحسين التنسيق." },
                { icon: <IconKitchenEfficiency />, text: "زيادة كفاءة المطبخ." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "سرعة التحضير ودقة الطلبات باستخدام نظام عرض المطبخ",
            listItems: [
               "رفع نسبة الطلبات المكتملة بدقة ضمن الإطار الزمني المحدد.",
               "تحسين عرض الطلبات بين العلامات التجارية المختلفة، تحت شاشة مطبخ موحدة.",
               "زيادة سرعة تحضير الطلبات للعلامات التجارية المتعددة.",
               "تقليل الارتباك أو التأخير في المطبخ بفضل تتبع الطلبات المركزي."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Kitchen Display Screen (KDS)",
            description: "Centralized Orders from Multiple Brands & Menus",
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
            heading: "Consolidate orders in your cloud kitchen",
            listItems: [
                { icon: <IconOrderTracking />, text: "Real-time order tracking." },
                { icon: <IconUnifiedDisplay />, text: "Centralized display for better coordination." },
                { icon: <IconKitchenEfficiency />, text: "Increased kitchen efficiency." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Accelerate order prep and accuracy with the Kitchen Display System",
            listItems: [
                "Ensure accurate order completion within the timeframe.",
                "Improvement in orders display between different brands under one KDS.",
                "Boost order preparation speed in multi-brand operations.",
                "Decrease in kitchen confusion or delays with centralized order tracking."
            ]
        }
    }
];
