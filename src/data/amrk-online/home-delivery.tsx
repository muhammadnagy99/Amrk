import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/amrk-online/hd/hero.png';
import Screen from '@/public/amrk-online/hd/screen.png';
import Screen_en from '@/public/amrk-online/hd/screen_en.png';
import { IconGeofence, IconRealTimeTrack, IconCRMIntegration } from './icons'; 

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "التوصيل إلى المنازل",
            description: "ضمان وصول الطلبات بسهولة إلى أبواب عملائك",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "التوصيل إلى المنازل"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "توصيل الطلبات مباشرة إلى عملائك بسهولة",
            listItems: [
                { icon: <IconGeofence />, text: "تحديد مناطق جغرافية لحدود التوصيل." },
                { icon: <IconRealTimeTrack />, text: "تتبع لحظي لطلبات التوصيل." },
                { icon: <IconCRMIntegration />, text: "متكاملة مع إدارة المخزون وحسابات العملاء." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تحسين إدارة الطلبات وكفاءة السائقين في نظام أمرك",
            listItems: [
                "زيادة نسبة الطلبات التي يتم تسليمها في الوقت المحدد ضمن نطاق التوصيل المحدد.",
                "تقليل تكاليف التوصيل من خلال تحسين مسارات التوصيل.",
                "تحسين دقة تتبع الطلبات عبر تحديد المواقع الجغرافية.",
                "زيادة رضا العملاء بفضل السرعة والدقة في التوصيل."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Home Delivery",
            description: "Deliver Directly to Your Customers",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Home Delivery Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Delivering orders directly to your customers with ease",
            listItems: [
                { icon: <IconGeofence />, text: "Geofence delivery areas." },
                { icon: <IconRealTimeTrack />, text: "Real-time tracking for delivery orders." },
                { icon: <IconCRMIntegration />, text: "Seamless integration with your CRM and Inventory." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Enhancing order management and driver efficiency with Amrk",
            listItems: [
                "Percentage of orders delivered on time within the designated delivery zone.",
                "Reduced delivery costs via optimized delivery routes.",
                "Improvement in order tracking accuracy via real-time geofencing.",
                "Increased customer satisfaction scores related to delivery speed."
            ]
        }
    }
];
