import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/amrk-online/qr/hero.png';
import Screen from '@/public/amrk-online/qr/screen.png';
import Screen_en from '@/public/amrk-online/qr/screen_en.png';
import { IconMenuView, IconTimeReduction, IconContactInfo } from  './icons';

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "الطلب والدفع عبر (QR)",
            description: "الطلب والدفع مباشرة من الطاولة باستخدام خدمة أمريك أون لاين",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "نظام الطلب والدفع عبر QR"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "تجربة تناول طعام سريعة عبر مسح QR",
            listItems: [
                { icon: <IconMenuView />, text: "سهولة عرض القائمة والعروض على الوحدات." },
                { icon: <IconTimeReduction />, text: "تقليل أوقات الانتظار للطلب والدفع." },
                { icon: <IconContactInfo />, text: "جمع معلومات الاتصال وتفضيلات العملاء." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تحقيق النتائج المثلى مع نظام الطلب والدفع السلس من هواتف العملاء",
            listItems: [
                "توفير الوقت من خلال الطلب عبر طاولة QR مقارنة بالطلب التقليدي.",
                "زيادة الفاتورة الخاصة بك من خلال العروض الرقمية الخاصة.",
                "سهولة دفع الفاتورة وتقسيمها عبر الهاتف.",
                "إزالة الأخطاء الناتجة عن الإدخال اليدوي وتحسين دقة الطلبات."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "QR Order & Pay",
            description: "Contactless Ordering and Payment",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "QR Order & Pay Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Fast dining experience via QR scan",
            listItems: [
                { icon: <IconMenuView />, text: "Simple menu and special offers view." },
                { icon: <IconTimeReduction />, text: "Reduces wait times for ordering and payments." },
                { icon: <IconContactInfo />, text: "Gather contact information and preferences." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Achieve optimal results with seamless ordering and payment from phones",
            listItems: [
                "Average time savings in order-taking per customer using Table QR vs. traditional ordering.",
                "Boost your bill with special digital deals.",
                "Mobile bill pay and splitting made easy.",
                "Eliminate manual entry errors and improve order accuracy."
            ]
        }
    }
];
