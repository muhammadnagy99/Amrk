import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/cloud-kitchen-system/mb/hero.png';
import Screen from '@/public/cloud-kitchen-system/mb/screen.png';
import Screen_en from '@/public/cloud-kitchen-system/mb/screen_en.png';
import { IconMultiBrandManagement, IconInventoryEfficiency, IconUnifiedReporting } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "علامات متعددة في مطبخك",
            description: "إدارة عدة علامات تجارية تحت سقف واحد",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "علامات متعددة في مطبخك"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "تشغيل عدة علامات تجارية من مطبخ واحد",
            listItems: [
                { icon: <IconMultiBrandManagement />, text: "إدارة سلسة للعلامات التجارية المتعددة." },
                { icon: <IconInventoryEfficiency />, text: "تحسين كفاءة المخزون." },
                { icon: <IconUnifiedReporting />, text: "تقارير موحدة لاتخاذ قرارات مبنية على البيانات." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تسريع معالجة الطلبات وزيادة الكفاءة بإدارة منيوهات متعددة",
            listItems: [
                "زيادة الكفاءة في مطبخ السحابة عبر إدارة العلامات التجارية المتعددة في آن واحد.",
                "تقليل الأخطاء في الطلبات من خلال توحيد إدارة المنيوهات.",
                "تحسين دقة المخزون من خلال تتبع الاستهلاك عبر العلامات المختلفة.",
                "تقرير موحد يجعل اتخاذ القرارات الاستراتيجية أكثر فعالية."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Kitchen Multi-Brands",
            description: "Manage Multiple Brands Under One Roof",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Kitchen Multi-Brands Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Operate multiple brands from a single kitchen",
            listItems: [
                { icon: <IconMultiBrandManagement />, text: "Seamless multi-brand management." },
                { icon: <IconInventoryEfficiency />, text: "Maximize inventory efficiency." },
                { icon: <IconUnifiedReporting />, text: "Consolidated reporting for data-driven decisions." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Speed up order processing and boost efficiency with menu management",
            listItems: [
                "Increase in Cloud Kitchen efficiency by managing multiple brands simultaneously.",
                "Reduction in brand-specific order errors with streamlined menu management.",
                "Accurate stock count within your location, across multiple brands' consumption.",
                "Centralized reporting efficiency for data-driven decision-making."
            ]
        }
    }
];
