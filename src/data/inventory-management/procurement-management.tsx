import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/inventory-management/pr/hero.png';
import Screen from '@/public/inventory-management/pr/screen.png';
import Screen_en from '@/public/inventory-management/pr/screen_en.png';
import { IconSupplierManagement, IconPOAutomation, IconStockReorder } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "إدارة المشتريات والموردين",
            description: "تبسيط سلسلة التوريد الخاصة بك لتحقيق كفاءة أكبر",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "إدارة المشتريات والموردين"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "السيطرة على الموردين وإدارة المشتريات",
            listItems: [
                { icon: <IconSupplierManagement />, text: "إدارة الموردين بكفاءة." },
                { icon: <IconPOAutomation />, text: "إصدار أوامر الشراء وتتبعها تلقائيًا." },
                { icon: <IconStockReorder />, text: "منع نفاذ المخزون بـإعادة الطلب في الوقت المناسب." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "نتائج دقيقة في تتبع الطلبات وضمان توفر الإمدادات",
            listItems: [
                "تقليل نقص المخزون بفضل الإصدار الالكتروني لأوامر الشراء.",
                "تسريع توريد المنتجات من الموردين بفضل إدارة عمليات المشتريات المدمجة في نظام أمرك.",
                "تقليل الأخطاء في المشتريات بفضل التتبع الآلي.",
                "تحسين تتبع أداء الموردين من خلال مقاييس محددة."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Procurement & Suppliers Management",
            description: "Streamline your supply chain for greater efficiency",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Procurement & Suppliers Management Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Control over suppliers and purchasing management",
            listItems: [
                { icon: <IconSupplierManagement />, text: "Efficient supplier management." },
                { icon: <IconPOAutomation />, text: "Automated PO generation and tracking." },
                { icon: <IconStockReorder />, text: "Reduce stockouts with timely reordering." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Accurate results in tracking orders and ensuring supply availability",
            listItems: [
                "Reduced stock shortages with automated PO generation.",
                "Faster supplier order fulfillment due to streamlined procurement.",
                "Less procurement errors through automated tracking.",
                "Improved supplier performance tracking with detailed metrics."
            ]
        }
    }
];
