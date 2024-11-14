import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/rms/sd/hero.png';
import Screen from '@/public/rms/sd/screen.png';
import Screen_en from '@/public/rms/sd/screen_en.png';


import { SdIcon1, SdIcon2, SdIcon3 } from "./icons";


export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "شاشة الخدمة",
            description: "تبسيط استلام الطلبات للموظفين لتحسين الكفاءة والخدمة",
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
            heading: "شاشة تنبه الموظفين عند جاهزية الطلب",
            listItems: [
                { icon: <SdIcon1 />, text: "إشعارات فورية للموظفين." },
                { icon: <SdIcon2 />, text: "تقليل أوقات الانتظار للعملاء." },
                { icon: <SdIcon3 />, text: "تنظيم أفضل في محطات الاستلام." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تقليل التأخير وضمان نتائج سلسلة في طلبات العملاء",
            listItems: [
                "تسريع تجهيز الطلبات للعملاء.",
                "تقليل الوقت المستغرق في انتظار الطلب وإخطار العميل.",
                "تقليل عدد الشكاوى المتعلقة بتأخر تسليم الطعام.",
                "تحسين معدل دوران الطاولات بفضل سرعة تسليم الطعام."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Serving Station Screen (SSS)",
            description: "Simplify Food Pickup for Staff",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Screen alerts staff when orders are ready",
            listItems: [
                { icon: <SdIcon1 />, text: "Instant notifications for serving staff." },
                { icon: <SdIcon2 />, text: "Reduces wait times for customers." },
                { icon: <SdIcon3 />, text: "Better organization at pickup stations." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Reduce delays and ensure smooth customer orders",
            listItems: [
                "Faster orders served to customers.",
                "Reduced wait time for kitchen alerts to waiters.",
                "Less customer complaints about delayed food pickups.",
                "Improved table turnover rate from faster food service."
            ]
        }
    }
];
