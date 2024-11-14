import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/cloud-kitchen-system/km/hero.png';
import Screen from '@/public/cloud-kitchen-system/km/screen.png';
import Screen_en from '@/public/cloud-kitchen-system/km/screen_en.png';
import { IconMenuCustomization, IconEasyUpdate, IconPlatformIntegration } from './icons';

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "قوائم طعام مطبخك",
            description: "إنشاء وتخصيص منيو لعلاماتك التجارية",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "قوائم طعام مطبخك"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "إنشاء وتحديث قوائم طعام لكل علامة تجارية",
            listItems: [
                { icon: <IconMenuCustomization />, text: "منيو بسيط وقابل للتخصيص." },
                { icon: <IconEasyUpdate />, text: "تحديثات سهلة ودقيقة للقوائم." },
                { icon: <IconPlatformIntegration />, text: "التكامل مع تطبيقات التوصيل." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "ضمان دقة لحظية للقوائم لتسهيل العمل على الموظفين",
            listItems: [
                "تقليل الوقت المطلوب لتحديث القوائم للعلامات التجارية المختلفة.",
                "زيادة الدقة في عرض القوائم بفضل التحديثات اللحظية.",
                "سهولة إدارة القوائم للترويج للعروض الموسمية أو الأحداث.",
                "تكامل مع منصات الطلبات لزيادة سرعة تنفيذ الطلبات."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Kitchen Menu",
            description: "Create and Customize Menus for Your Brands",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Kitchen Menu Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Creating and updating menus for each brand",
            listItems: [
                { icon: <IconMenuCustomization />, text: "Simple and customizable menus." },
                { icon: <IconEasyUpdate />, text: "Easy updates for accurate menu listings." },
                { icon: <IconPlatformIntegration />, text: "Integrates with online ordering platforms." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Ensuring real-time accuracy of menus to ease staff operations",
            listItems: [
                "Reduction in time spent updating and maintaining brand-specific menus.",
                "Percentage increase in order accuracy with real-time menu updates.",
                "Faster menu updates for promotions or seasons.",
                "Improvement in customer satisfaction from accurate online menus."
            ]
        }
    }
];
