import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/inventory-management/st/hero.png';
import Screen from '@/public/inventory-management/st/screen.png';
import Screen_en from '@/public/inventory-management/st/screen_en.png';
import { IconStockManagement, IconWasteReduction, IconInstantUpdate } from './icons';

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "التحكم الشامل في المخزون",
            description: "تحكم في مستويات مخزونك لتحسين كفاءة المطبخ",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "التحكم الشامل في المخزون"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "تتبع فوري لمخزونك لتحسين إدارة مطبخك",
            listItems: [
                { icon: <IconStockManagement />, text: "إدارة لحظية للمخزون." },
                { icon: <IconWasteReduction />, text: "تحليل الفروقات في التتبع المخزني." },
                { icon: <IconInstantUpdate />, text: "تحديثات فورية للمخزون عبر الفروع." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تحديد الفروقات لضبط مستويات المخزون وتحقيق الكفاءة",
            listItems: [
               "تقليل هدر المخزون بفضل التحديثات اللحظية للمخزون.",
               "تقليل نسبة انقطاع المخزون خلال ساعات الذروة.",
               "تسريع عملية جرد المخزون للفروع.",
               "تحسين تتبع استخدام المكونات لتقليل فروقات المخزون."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Stock Control",
            description: "Take Control of Your Stock Levels",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Stock Control Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Real-time inventory for better kitchen management",
            listItems: [
                { icon: <IconStockManagement />, text: "Real-time stock management." },
                { icon: <IconWasteReduction />, text: "Reduce waste with accurate tracking." },
                { icon: <IconInstantUpdate />, text: "Instant stock updates across branches." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Identify discrepancies to adjust stock levels and improve efficiency",
            listItems: [
                "Reduced stock waste with real-time updates.",
                "Decrease in out-of-stock incidents during peak hours.",
                "Faster stock reconciliation with branch templates.",
                "Improvement in ingredient usage tracking, reducing variances."
            ]
        }
    }
];
