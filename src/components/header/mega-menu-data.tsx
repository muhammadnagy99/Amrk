import { Icon1, Icon2, Icon3, Icon4 } from '@/src/data/header/icons';
export const sections = [
    {
        heading: "نظام إدارة المطاعم",
        icon: <Icon1 />, 
        links: [
            { text: "نظام نقاط البيع", url: "/pos-system" },
            { text: "شاشة المطبخ", url: "/kitchen-screen" },
            { text: "شاشة الخدمات", url: "/service-screen" },
            { text: "إدارة الطاولات", url: "/table-management" },
            { text: "ووك توكي مدمج", url: "/integrated-walkie-talkie" },
            { text: "وضع عدم الاتصال", url: "/offline-mode" },
            { text: "إدارة علاقات العملاء وعمل حملات تسويقية", url: "/crm-marketing" },
            { text: "الربط مع تطبيقات التوصيل", url: "/delivery-app-integration" }
        ]
    },
    {
        heading: "حلول أمرك أون لاين",
        icon: <Icon2 />, 
        links: [
            { text: "توصيل الطلبات", url: "/order-delivery" },
            { text: "طلبات الاستلام", url: "/pickup-orders" },
            { text: "الطلب والدفع عبر (QR)", url: "/qr-order-payment" },
            { text: "الطلب عبر وسائل التواصل الاجتماعي", url: "/social-media-orders" },
            { text: "برامج الولاء", url: "/loyalty-programs" },
            { text: "حجز الطاولات", url: "/table-reservation" }
        ]
    },
    {
        heading: "إدارة متطورة للمخزون",
        icon: <Icon3 />, 
        links: [
            { text: "إدارة المشتريات والموارد", url: "/purchasing-management" },
            { text: "إدارة المينو والوصفات", url: "/menu-recipe-management" },
            { text: "التحكم الشامل في المخزون", url: "/inventory-control" },
            { text: "إدارة المستودعات، المطابخ المركزية، والمطابخ السحابية", url: "/warehouse-central-kitchens" },
            { text: "صلاحيات الموافقات الإلكترونية", url: "/electronic-approvals" }
        ]
    },
    {
        heading: "تشغيل المطابخ السحابية",
        icon: <Icon4 />,
        links: [
            { text: "علامات متعددة في مطبخك", url: "/multiple-kitchen-brands" },
            { text: "شاشة واحدة لمطبخك", url: "/single-kitchen-screen" },
            { text: "مخزون مطبخك", url: "/kitchen-inventory" },
            { text: "قوائم طعام مطبخك", url: "/kitchen-menus" },
            { text: "نظام نقاط بيع مطبخك", url: "/kitchen-pos-system" },
            { text: "دليل تعليمي لمطبخك", url: "/kitchen-guide" },
            { text: "مراقبة مطبخك", url: "/kitchen-monitoring" },
            { text: "ربط تطبيقات التوصيل بمطبخك", url: "/kitchen-delivery-integration" }
        ]
    },
];
