import { ScreensSection } from "@/src/types/interfaces";
import { heading } from "@/src/types/interfaces";
import Screen1 from '@/public/screens/pos_screen.png'
import Screen2 from '@/public/screens/cloud_screen.png'
import Screen3 from '@/public/screens/truck_screen.png'
import Screen4 from '@/public/screens/table_screen.png'
import Screen5 from '@/public/screens/quick_screen.png'
import Screen6 from '@/public/screens/catering_screen.png'

import Screen1_en from "@/public/screens/pos_screen_en.png"
import Screen2_en from "@/public/screens/clound_screen_en.png"
import Screen3_en from '@/public/screens/truck_screen_en.png'
import Screen4_en from '@/public/screens/table_screen_en.png'
import Screen5_en from '@/public/screens/quick_screen_en.png'
import Screen6_en from '@/public/screens/catering_screen_en.png'


export const sectionHeading: heading = {
    primary: "قطاعات نخدمها",
    secondary: "حلول مصممة خصيصًا لتلبية احتياجاتكم وتعزيز نجاح أعمالكم"
}
export const sectionData: ScreensSection[] = [
    {
        id: 1,
        button: {
            label: "مطاعم ومقاهي",
        },
        article: {
            title: "مطاعم ومقاهي",
            description: "تبسيط العمليات من خلال نظام نقاط البيع وإدارة المخزون، وتوفير تجربة ممتعة للعملاء، مع حلول إدارة المطاعم الشاملة من أمرك.",
            imgSrc: Screen1,
            imgAlt: "Amrk Restaurant Systems",
            priority: true,
            dir: 0,
            more: 'عرض المزيد',
            url: "/restaurants-cafes"
        },
    },
    {
        id: 2,
        button: {
            label: "مطابخ سحابية",
        },
        article: {
            title: "مطابخ سحابية",
            description: "تسهيل إدارة العمليات التجارية المتعددة وتخصيص القوائم وتتبع المخزون، وإدارة طلبات التوصيل، المصممة خصيصًا لتلبية متطلبات المطابخ السحابية المتسارعة.",
            imgSrc: Screen2,
            imgAlt: "Amrk Cloud Kitchen Systems",
            priority: false,
            dir: 0,
            more: 'عرض المزيد',
            url: "/cloud-kitchens"
        },
    },
    {
        id: 3,
        button: {
            label: "عربات الطعام",
        },
        article: {
            title: "عربات الطعام",
            description: "إدارة الطلبات والمدفوعات بسهولة عبر نظام ملائم للأجهزة المحمولة، مما يحافظ على سير العمليات بسلاسة أثناء التنقل.",
            imgSrc: Screen3,
            imgAlt: "Amrk Food Truck Systems",
            priority: false,
            dir: 0,
            more: 'عرض المزيد',
            url: "/food-trucks"
        },
    },
    {
        id: 4,
        button: {
            label: "خدمة على الطاولة",
        },
        article: {
            title: "خدمة على الطاولة",
            description: "تحسين تجربة العملاء داخل المطعم من خلال إدارة طاولات مبسطة للداخل، حجوزات الطاولات، الطلب والدفع عبر QR، لضمان تجربة ضيافة سلسة.",
            imgSrc: Screen4,
            imgAlt: "Amrk Table Service Systems",
            priority: false,
            dir: 0,
            more: 'عرض المزيد',
            url: "/table-service"
        },
    },
    {
        id: 5,
        button: {
            label: "الخدمة السريعة",
        },
        article: {
            title: "الخدمة السريعة",
            description: "تسريع معالجة الطلبات، إدارة القوائم، والتعامل مع المدفوعات، لتقليل أوقات الانتظار وزيادة ولاء العملاء.",
            imgSrc: Screen5,
            imgAlt: "Amrk Quick Service Systems",
            priority: false,
            dir: 0,
            more: 'عرض المزيد',
            url: "/quick-service"
        },
    },
    {
        id: 6,
        button: {
            label: "توريد الطعام",
        },
        article: {
            title: "توريد الطعام",
            description: "إدارة الطلبات الكبيرة، وتتبع المخزون، وتنسيق الخدمات اللوجستية، لضمان تقديم الخدمات المناسبة للفعاليات والمناسبات.",
            imgSrc: Screen6,
            imgAlt: "Amrk Catering Systems",
            dir: 0,
            more: 'عرض المزيد',
            url: "/catering",
            priority: false,
        },
    },    
];

//////////////////////////////////////////////////////////////////////////

export const sectionHeading_en: heading = {
    primary: "Industries We Serve",
    secondary: "Solutions Tailored to Your Needs, Driving Business Success."
}

export const sectionData_en: ScreensSection[] = [
    {
        id: 1,
        button: {
            label: "Restaurants & Cafés",
        },
        article: {
            title: "Restaurants & Cafés",
            description: "Streamline operations, manage inventory, and provide exceptional customer experiences with Amrk's comprehensive restaurant management solution.",
            imgSrc: Screen1_en,
            imgAlt: "Amrk Restaurant Systems",
            url: "/restaurants-cafes",
            dir: 1,
            more: 'Learn more',
            priority: true
        },
    },
    {
        id: 2,
        button: {
            label: "Cloud Kitchens",
        },
        article: {
            title: "Cloud Kitchens",
            description: "Simplify the management of multiple brands, menu customization, inventory tracking, and delivery orders with solutions designed for Cloud Kitchens.",
            imgSrc: Screen2_en,
            imgAlt: "Amrk Cloud Kitchen Systems",
            url: "/cloud-kitchens",
            dir: 1,
            more: 'Learn more',
            priority: false
        },
    },
    {
        id: 3,
        button: {
            label: "Food Trucks",
        },
        article: {
            title: "Food Trucks",
            description: "Manage orders and payments through a mobile-friendly system, ensuring smooth operations while on the move.",
            imgSrc: Screen3_en,
            imgAlt: "Amrk Food Truck Systems",
            url: "/food-trucks",
            dir: 1,
            more: 'Learn more',
            priority: false
        },
    },
    {
        id: 4,
        button: {
            label: "Dine-In Service",
        },
        article: {
            title: "Dine-In Service",
            description: "Enhance customer experience with simplified table management, table reservations, and QR ordering and payment.",
            imgSrc: Screen4_en,
            imgAlt: "Amrk Table Service Systems",
            url: "/table-service",
            dir: 1,
            more: 'Learn more',
            priority: false
        },
    },
    {
        id: 5,
        button: {
            label: "Quick Service",
        },
        article: {
            title: "Quick Service",
            description: "Accelerate order processing, menu management, and payment handling to reduce wait times and increase customer loyalty.",
            imgSrc: Screen5_en,
            imgAlt: "Amrk Quick Service Systems",
            url: "/quick-service",
            dir: 1,
            more: 'Learn more',
            priority: false
        },
    },
    {
        id: 6,
        button: {
            label: "Catering",
        },
        article: {
            title: "Catering",
            description: "Manage large orders, track inventory, and coordinate logistics, ensuring efficient service for Events and Special Occasions.",
            imgSrc: Screen6_en,
            imgAlt: "Amrk Catering Systems",
            url: "/catering",
            dir: 1,
            more: 'Learn more',
            priority: false
        },
    },    
];
