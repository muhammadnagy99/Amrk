import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/amrk-online/pcu/hero.png';
import Screen from '@/public/amrk-online/pcu/screen.png';
import ScreenEn from '@/public/amrk-online/pcu/screen_en.png';
import { IconPickup, IconPOS, IconNotify } from './icons' // Updated import with unique names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "طلبات الاستلام",
            description: "استلام الطلبات وتوصيلها مباشرة إلى السيارة",
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
            heading: "تمكين العملاء من الطلب من المنصات المختلفة",
            listItems: [
                { icon: <IconPickup />, text: "تجربة استلام أسرع وأكثر راحة." },
                { icon: <IconPOS />, text: "متكامل مع نظام نقاط البيع وشاشة المطبخ." },
                { icon: <IconNotify />, text: "إشعارات فورية للعملاء." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تحقيق نتائج مميزة عبر إشعارات لحظية لعملائك بكفاءة",
            listItems: [
                "تقليل متوسط أوقات الانتظار للعملاء عبر الطلب والدفع قبل الوصول، والاستلام من السيارة.",
                "زيادة نسبة الطلبات المستلمة في الوقت المحدد لضمان المعايير العالية للخدمة.",
                "زيادة الكفاءة التشغيلية للموظفين عند استلام واستكمال طلبات العملاء بسرعة أكبر.",
                "تعزيز الرضا العام للعملاء عبر تقديم إشعارات فورية لاستفساراتهم."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Pickup Orders",
            description: "Streamlined Curbside Pickup for a Hassle-Free Experience",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Pickup Orders Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Enabling orders from multiple platforms",
            listItems: [
                { icon: <IconPickup />, text: "Faster, more convenient pickup experiences." },
                { icon: <IconPOS />, text: "Integrated with POS and KDS for easy management." },
                { icon: <IconNotify />, text: "Real-time customer notifications." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: ScreenEn,
            heading: "Achieving results through efficient instant customer notifications",
            listItems: [
                "Reduction in average wait times for curbside pickup customers.",
                "Percentage of on-time pickup orders vs. delayed or missed pickups.",
                "Increase in repeat customers using the pickup service, with their preference for a quicker service.",
                "Real-time notifications effectiveness, reducing customer inquiries."
            ]
        }
    }
];
