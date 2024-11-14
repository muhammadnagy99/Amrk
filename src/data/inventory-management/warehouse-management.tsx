import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/inventory-management/wa/hero.png';
import Screen from '@/public/inventory-management/wa/screen.png';
import Screen_en from '@/public/inventory-management/wa/screen_en.png';
import { IconInventoryControl, IconSupplyChainOptimization, IconStockTransfer } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "إدارة المستودعات، المطابخ المركزية، والمطابخ السحابية",
            description: "إدارة سلسلة مخزونك عبر موقع واحد أو عدة مواقع مختلفة",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "إدارة المخزون عبر مواقع متعددة"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "إدارة المخزون عبر مواقع متعددة لتوفر دائم",
            listItems: [
                { icon: <IconInventoryControl />, text: "إدارة مركزية أو لامركزية للمخزون." },
                { icon: <IconSupplyChainOptimization />, text: "تحسين سلسلة التوريد لمواقع متعددة." },
                { icon: <IconStockTransfer />, text: "نقل وتتبع المخزون بسهولة." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تحسين استخدام المخزون في المستودعات والمطابخ المركزية والسحابية",
            listItems: [
                "تقليل وقت نقل المخزون بين المواقع.",
                "تقليل فقدان المخزون من خلال إدارة مركزية.",
                "تحسين كفاءة سلسلة التوريد بتتبع المخزون في الوقت الفعلي.",
                "تحسين توزيع المخزون باستخدام توقعات الطلب."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Warehouse, Central Kitchen, and Cloud Kitchen",
            description: "Centralize or Decentralize Your Supply Chain",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Supply Chain Management Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Multi-site inventory management for reliable supply",
            listItems: [
                { icon: <IconInventoryControl />, text: "Centralized or Decentralized inventory control." },
                { icon: <IconSupplyChainOptimization />, text: "Optimize supply chains for multiple locations." },
                { icon: <IconStockTransfer />, text: "Seamless stock transfers and tracking." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Optimize inventory use in warehouses, central kitchens, and cloud facilities",
            listItems: [
                "Reduced stock transfer times between kitchens.",
                "Less stock loss from centralized inventory management.",
                "Improved supply chain efficiency with real-time tracking.",
                "Optimal inventory allocation using demand forecasting."
            ]
        }
    }
];
