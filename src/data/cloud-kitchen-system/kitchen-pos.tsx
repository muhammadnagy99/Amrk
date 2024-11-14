import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/cloud-kitchen-system/po/hero.png';
import Screen from '@/public/cloud-kitchen-system/po/screen.png';
import Screen_en from '@/public/cloud-kitchen-system/po/screen_en.png';
import { IconUnifiedPOS, IconOrderProcessing, IconUserInterface } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "نظام نقاط بيع مطبخك",
            description: "معالجة الطلبات متعددة العلامات التجارية في نظام نقاط بيع واحد",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "نظام نقاط بيع مطبخك"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "إدارة الطلبات من عدة علامات تجارية بسهولة",
            listItems: [
                { icon: <IconUnifiedPOS />, text: "نظام نقاط بيع موحد للعلامات التجارية المتعددة." },
                { icon: <IconOrderProcessing />, text: "معالجة الطلبات بشكل أسرع وأكثر دقة." },
                { icon: <IconUserInterface />, text: "واجهة سهلة الاستخدام." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "زيادة كفاءة إدخال ومعالجة الطلبات في مطبخك السحابي",
            listItems: [
                "زيادة سرعة معالجة الطلبات في المطبخ السحابي للعلامات التجارية المتعددة.",
                "تحسين دقة الطلبات عبر استخدام نظام موحد.",
                "تقليل الأخطاء الناتجة عن الإدخال اليدوي.",
                "تسهيل إدارة الطلبات عبر جميع العلامات التجارية من خلال واجهة واحدة."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Kitchen POS",
            description: "Process Multi-Brand Orders in One POS System",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Kitchen POS Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Managing orders from multiple brands easily",
            listItems: [
                { icon: <IconUnifiedPOS />, text: "Unified POS for multiple brands." },
                { icon: <IconOrderProcessing />, text: "Faster, more accurate order processing." },
                { icon: <IconUserInterface />, text: "Simple to use interface." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Increase the efficiency of order entry and processing in your cloud kitchen",
            listItems: [
                "Increase in order processing speed for multi-brand kitchens.",
                "Improvement in order accuracy across multiple brands using one POS.",
                "Percentage of time saved per order using a unified system.",
                "Reduction in manual entry errors due to integrated POS."
            ]
        }
    }
];

