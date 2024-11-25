import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/amrk-online/tr/hero.png';
import Screen from '@/public/amrk-online/tr/screen.png';
import Screen_en from '@/public/amrk-online/tr/screen_en.png';
import { IconEasyBooking, IconRealTimeUpdates, IconDataCollection } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "حجوزات الطاولات",
            description: "إدارة حجوزات الطاولات أون لاين لتحسين تجربة عملائك",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "حجوزات الطاولات"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "حجز الطاولات بسهولة من جميع المنصات!",
            listItems: [
                { icon: <IconEasyBooking />, text: "نظام حجز سهل الاستخدام عبر الإنترنت." },
                { icon: <IconRealTimeUpdates />, text: "تحديثات لحظية لتوفر الطاولات." },
                { icon: <IconDataCollection />, text: "جمع بيانات الاتصال وتفضيلات العملاء." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "زيادة معدلات الحجوزات المباشرة وتحسين مؤشرات الأداء الرئيسية",
            listItems: [
               "تقليل نسب التغيب عن الحضور بفضل آلية تأكيد الحجوزات من نظام أمرك.",
               "زيادة في سعة الحجوزات خلال ساعات الذروة.",
               "تحسين معدل دوران الطاولات بفضل إدارة الحجوزات بشكل أفضل.",
               "تعزيز رضا العملاء بسبب خدمة حجز الطاولات المقدمة من مطعمك."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Table Reservation",
            description: "Effortless Online Reservation Management",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Table Reservation Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Simple Table Reservation from all platforms!",
            listItems: [
                { icon: <IconEasyBooking />, text: "Easy-to-use online booking." },
                { icon: <IconRealTimeUpdates />, text: "Real-time updates on table availability." },
                { icon: <IconDataCollection />, text: "Collect contact and reservation preferences." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Boost direct bookings and enhance KPIs",
            listItems: [
                "Percentage of no-show reservations reduced with automated confirmations.",
                "Increase in reservation capacity during peak hours.",
                "Better reservation management improves table turnover.",
                "Enhanced customer satisfaction based on ease of booking and real-time availability."
            ]
        }
    }
];
