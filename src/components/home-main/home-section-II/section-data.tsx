import { ScreensSection } from "@/src/types/interfaces";
import { heading } from "@/src/types/interfaces";
import Screen1 from '@/public/screens/pos_screen.png'
import Screen2 from '@/public/screens/cloud_screen.png'
import Screen3 from '@/public/screens/truck_screen.png'
import Screen4 from '@/public/screens/table_screen.png'
import Screen5 from '@/public/screens/quick_screen.png'
import Screen6 from '@/public/screens/catering_screen.png'


export const sectionHeading: heading = {
    primary: "قطاعات نخدمتها",
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
            imgAlt: "Amrk Restaurant Systems"
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
            imgAlt: "Amrk Cloud Kitchen Systems"
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
            imgAlt: "Amrk Food Truck Systems"
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
            imgAlt: "Amrk Table Service Systems"
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
            imgAlt: "Amrk Quick Service Systems"
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
            imgAlt: "Amrk Catering Systems"
        },
    },    
];

