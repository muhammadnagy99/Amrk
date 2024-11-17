import Art1 from '@/public/info-graph/Art-1.png';
import Art2 from '@/public/info-graph/Art-2.png';
import Art3 from '@/public/info-graph/Art-3.png';
import Art4 from '@/public/info-graph/Art-4.png';
import Art5 from '@/public/info-graph/Art-5.png';
import Art6 from '@/public/info-graph/Art-6.png';
import Art7 from '@/public/info-graph/Art-7.png';


import {
    PosIconLight,
    PosIconDark,
    KitchenScreenIconLight,
    KitchenScreenIconDark,
    IntercomIconLight,
    IntercomIconDark,
    OnlineOrderingIconLight,
    OnlineOrderingIconDark,
    CloudKitchenIconLight,
    CloudKitchenIconDark,
    InventoryManagementIconLight,
    InventoryManagementIconDark,
    MultiBrandKitchenIconLight,
    MultiBrandKitchenIconDark
} from '../../components/home-main/home-section-I/icons';
import { Section } from "@/src/types/interfaces";
import { heading } from "@/src/types/interfaces";

export const sectionHeading: heading = {
    primary: "حلول أمـركـ ",
    secondary: "نوفر لك جميع الحلول المتكاملة التي تحتاجها لإدارة مطعمك بكفاءة أعلى "
}

export const sectionData: Section[] = [
    {
        id: 1,
        button: {
            label: "نظام نقاط البيع",
            iconLight: <PosIconLight />,
            iconDark: <PosIconDark />,
        },
        article: {
            title: "نظام نقاط البيع",
            description: "أسهل نظام نقاط بيع! يمكّن موظفيك من معالجة الطلبات بسرعة، من أي مكان، وعبر أي جهاز، سواء كان متصلًا أو غير متصل، مما يسرّع سير العمل.",
            imgSrc: Art1,
            imgAlt: "Amrk Restaurant Systems",
            width: 355,
            height: 111,
            priority: false
        },
        url: "/pos-system",
        more:"معرفة المزيد",
        dir: 0
    },
    {
        id: 2,
        button: {
            label: "شاشة المطبخ",
            iconLight: <KitchenScreenIconLight />,
            iconDark: <KitchenScreenIconDark />,  
        },
        article: {
            title: "شاشة المطبخ",
            description: "بسط عملية معالجة الطلبات لتقليل الأخطاء وتحسين كفاءة المطبخ، مع إبقاء موظفيك على اطلاع دائم وضمان تدفق الطلبات بسلاسة لضمان تقديم خدمة متميزة.",
            imgSrc: Art2,
            imgAlt: "Kitchen Screen",
            width: 349,
            height: 278,
            priority: false
        },
        url: "/kitchen-display",
        more:"معرفة المزيد",
        dir: 0
    },
    {
        id: 3,
        button: {
            label: "نظام الاتصال الداخلي",
            iconLight: <IntercomIconLight />,
            iconDark: <IntercomIconDark />, 
        },
        article: {
            title: "نظام الاتصال الداخلي",
            description: "ووكي توكي المدمج في نظام أمرك يمكّن الموظفين من بين الأقسام، مما يضمن معالجة المشكلات بسرعة",
            imgSrc: Art3,
            imgAlt: "Internal Communication System",
            width: 277,
            height: 275,
            priority: false
        },
        url: "/integrated-walkie-talkie",
        more:"معرفة المزيد",
        dir: 0
    },
    {
        id: 4,
        button: {
            label: "أمـركـ أون لاين",
            iconLight: <OnlineOrderingIconLight />,
            iconDark: <OnlineOrderingIconDark />, 
        },
        article: {
            title: "أمـركـ أون لاين",
            description: "تعمل أمرك أونلاين على تعزيز التفاعل مع العملاء، عبر اتاحة طلبات التوصيل، الاستلام، الطلب عبر QR، وبرامج الولاء لتجربة العملاء أفضل.",
            imgSrc: Art4,
            imgAlt: "Internal Communication System",
            width: 217,
            height: 226,
            priority: false
        },
        url: "/online-services",
        more:"معرفة المزيد",
        dir: 0
    },
    {
        id: 5,
        button: {
            label: "نظام المطابخ السحابية",
            iconLight: <CloudKitchenIconLight />,
            iconDark: <CloudKitchenIconDark />, 
        },
        article: {
            title: "نظام المطابخ السحابية",
            description: "بسّط اعمال مطبخك السحابي من أمرك. إدارة علامات تجارية متعددة. قوائم طعام متعددة من موقع واحد، مع تحكم مخصص بالمخزون صمم خصيصاً للمطابخ السحابية.",
            imgSrc: Art5,
            imgAlt: "Internal Communication System",
            width: 300,
            height: 150,
            priority: false
        },
        url: "/cloud-kitchen-system",
        more:"معرفة المزيد",
        dir: 0
    },
    {
        id: 6,
        button: {
            label: "إدارة متطورة للمخزون",
            iconLight: <InventoryManagementIconLight />,
            iconDark: <InventoryManagementIconDark />, 
        },
        article: {
            title: "إدارة متطورة للمخزون",
            description: "تحكم لحظي بالمخزون، إعادة الطلب الآلي، تتبع التكاليف، لضمان تحسين العمليات عبر مواقعك المتعددة.",
            imgSrc: Art6,
            imgAlt: "Internal Communication System",
            width: 320,
            height: 192,
            priority: false
        },
        url: "/stock-control",
        more:"معرفة المزيد",
        dir: 0
    },
    {
        id: 7,
        button: {
            label: "علامات متعددة في مطبخك السحابي",
            iconLight: <MultiBrandKitchenIconLight />,
            iconDark: <MultiBrandKitchenIconDark />, 
        },
        article: {
            title: "علامات متعددة في مطبخك السحابي",
            description: "فعّل عدة علامات تجارية من مطبخ واحد، مع القدرة على إدارة قوائم متعددة وتبسيط سير العمل في مطبخك السحابي.",
            imgSrc: Art7,
            imgAlt: "MultiBrand Kitchen",
            width: 320,
            height: 215,
            priority: false
        },
        url: "/kitchen-multi-brand",
        more:"معرفة المزيد",
        dir: 0
    },
    
];

////////////////////////////////////////////////////////////

export const sectionHeading_en: heading = {
    primary: "Amrk Solutions",
    secondary: "Complete solutions for efficient restaurant management"
}

export const sectionData_en: Section[] = [
    {
        id: 1,
        button: {
            label: "Point of Sale System",
            iconLight: <PosIconLight />,
            iconDark: <PosIconDark />,
        },
        article: {
            title: "Point of Sale System",
            description: "The simplest POS system. Process orders quickly, from anywhere, on any device, whether online or offline, streamlining workflows effectively.",
            imgSrc: Art1,
            imgAlt: "Amrk Restaurant Systems",
            width: 355,
            height: 111,
            priority: false
        },
        url: "/pos-system",
        more: "Learn more",
        dir: 1
    },
    {
        id: 2,
        button: {
            label: "Kitchen Display Screen",
            iconLight: <KitchenScreenIconLight />,
            iconDark: <KitchenScreenIconDark />,  
        },
        article: {
            title: "Kitchen Display Screen",
            description: "Streamline kitchen orders in real-time, improving front-to-back communication for timely meal preparation and delivery.",
            imgSrc: Art2,
            imgAlt: "Kitchen Screen",
            width: 349,
            height: 278,
            priority: false
        },
        url: "/kitchen-display",
        more: "Learn more",
        dir: 1
    },
    {
        id: 3,
        button: {
            label: "E-Walkie Talkie",
            iconLight: <IntercomIconLight />,
            iconDark: <IntercomIconDark />, 
        },
        article: {
            title: "E-Walkie Talkie",
            description: "Amrk’s built-in Walkie-Talkie feature enables quick communication between staff, ensuring that any issues can be addressed immediately.",
            imgSrc: Art3,
            imgAlt: "Internal Communication System",
            width: 277,
            height: 275,
            priority: false
        },
        url: "/integrated-walkie-talkie",
        more: "Learn more",
        dir: 1
    },
    {
        id: 4,
        button: {
            label: "Online Services",
            iconLight: <OnlineOrderingIconLight />,
            iconDark: <OnlineOrderingIconDark />, 
        },
        article: {
            title: "Online Services",
            description: "Amrk’s Online streamlines delivery, pickup, QR ordering, and loyalty programs for seamless customer engagement.",
            imgSrc: Art4,
            imgAlt: "Online Services",
            width: 217,
            height: 226,
            priority: false
        },
        url: "/online-services",
        more: "Learn more",
        dir: 1
    },
    {
        id: 5,
        button: {
            label: "Cloud Kitchen System",
            iconLight: <CloudKitchenIconLight />,
            iconDark: <CloudKitchenIconDark />, 
        },
        article: {
            title: "Cloud Kitchen Operation",
            description: "Amrk’s Cloud Kitchen Operation simplifies multiple brands and menus from a single location, with specialized inventory control tailored for Cloud Kitchens.",
            imgSrc: Art5,
            imgAlt: "Cloud Kitchen Operation",
            width: 300,
            height: 150,
            priority: false
        },
        url: "/cloud-kitchen-system",
        more: "Learn more",
        dir: 1
    },
    {
        id: 6,
        button: {
            label: "Advanced Inventory Management",
            iconLight: <InventoryManagementIconLight />,
            iconDark: <InventoryManagementIconDark />, 
        },
        article: {
            title: "Advanced Inventory Management",
            description: "Real-time stock control, automated reordering, and cost tracking, ensuring optimized operations across multiple locations.",
            imgSrc: Art6,
            imgAlt: "Advanced Inventory Management",
            width: 320,
            height: 192,
            priority: false
        },
        url: "/stock-control",
        more: "Learn more",
        dir: 1
    },
    {
        id: 7,
        button: {
            label: "Cloud Kitchen Multi-Brand",
            iconLight: <MultiBrandKitchenIconLight />,
            iconDark: <MultiBrandKitchenIconDark />, 
        },
        article: {
            title: "Cloud Kitchen Multi-Brand",
            description: "Amrk’s Multi-Brand feature lets you operate several brands from a single kitchen, with the ability to manage multiple menus and streamline workflows.",
            imgSrc: Art7,
            imgAlt: "MultiBrand Kitchen",
            width: 320,
            height: 215,
            priority: false
        },
        url: "/multi-brands-kitchen",
        more: "Learn more",
        dir: 1
    },
];
