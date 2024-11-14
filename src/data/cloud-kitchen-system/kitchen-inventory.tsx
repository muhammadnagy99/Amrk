import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/cloud-kitchen-system/ki/hero.png';
import Screen from '@/public/cloud-kitchen-system/ki/screen.png';
import Screen_en from '@/public/cloud-kitchen-system/ki/screen_en.png';
import { IconStockControl, IconAutomatedReorder, IconWasteReduction } from './icons';

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "مخزون مطبخك",
            description: "إدارة المخزون المتقدمة للمطابخ السحابية",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "إدارة المخزون المتقدمة"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "تتبع لحظي لمستويات المخزون بمطبخك",
            listItems: [
                { icon: <IconStockControl />, text: "تحكم لحظي للمخزون." },
                { icon: <IconAutomatedReorder />, text: "أتمتة إعادة الطلبات من الموردين." },
                { icon: <IconWasteReduction />, text: "تقليل الهدر وإدارة المخزون بدقة." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "أتمتة إعادة الطلبات لضمان تجهيز مستمر للطلبات المتعددة",
            listItems: [
                "تقليل نفاد المخزون من خلال إعادة الطلبات المؤتمتة.",
                "تقليل هدر الطعام عبر تتبع دقيق للمكونات.",
                "تحسين دقة المخزون في المطابخ السحابية.",
                "تسريع تجهيز الطلبات بفضل الرؤية الشاملة للمخزون."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Kitchen Inventory",
            description: "Advanced Cloud Kitchen Inventory Management",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Kitchen Inventory Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Real-time tracking of inventory levels in your kitchen",
            listItems: [
                { icon: <IconStockControl />, text: "Real-time stock control." },
                { icon: <IconAutomatedReorder />, text: "Automated supplier reorders." },
                { icon: <IconWasteReduction />, text: "Reduce waste and manage stock precisely." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Automate reordering for continuous preparation of multiple orders",
            listItems: [
                "Decrease in stockouts from automated reordering.",
                "Decrease in food wastage with precise ingredient tracking across brands.",
                "Improvement in stock level accuracy for cloud kitchens.",
                "Faster order fulfillment with real-time inventory insights in the Cloud Kitchen."
            ]
        }
    }
];

