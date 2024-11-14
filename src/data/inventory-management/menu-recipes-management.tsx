import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/inventory-management/me/hero.png';
import Screen from '@/public/inventory-management/me/screen.png';
import Screen_en from '@/public/inventory-management/me/screen_en.png';
import { IconProfitTracking, IconRecipeAdjustment, IconDataEntry } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "إدارة المنيو والوصفات",
            description: "تتبع ربحية منتجاتك لتحسين الأداء وزيادة العائدات",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "إدارة القوائم والوصفات"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "تتبع تكاليف العناصر لضمان ربحية عالية",
            listItems: [
                { icon: <IconProfitTracking />, text: "مراقبة ربحية المنتجات لحظياً." },
                { icon: <IconRecipeAdjustment />, text: "تعديل الوصفات والأسعار حسب الحاجة." },
                { icon: <IconDataEntry />, text: "تبسيط إدخال البيانات والتحديثات." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "تعديل الأسعار بناءً على تكاليف المكونات لتحقيق النتائج المثلى",
            listItems: [
                "زيادة الربحية من خلال تتبع تكاليف المكونات.",
                "تحسين هوامش الربح من خلال تعديل الوصفات.",
                "تتبع تغييرات الأسعار وتأثيرها على الأرباح في الوقت الفعلي.",
                "تقليل هدر الطعام من خلال تتبع الحصص والوصفات بدقة."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Menus and Recipes",
            description: "Track and Manage Your Menu Profitability",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Menu Profitability Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Track menu item cost to ensure high profitability",
            listItems: [
                { icon: <IconProfitTracking />, text: "Monitor menu profitability in real-time." },
                { icon: <IconRecipeAdjustment />, text: "Adjust recipes and prices as needed." },
                { icon: <IconDataEntry />, text: "Simplified data entry and updates entry." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Optimize pricing based on ingredient costs",
            listItems: [
                "Menu profitability boost by tracking ingredient costs.",
                "Profit margin boost with recipe adjustments.",
                "Track price changes and profit impact in real time.",
                "Reduced food waste through accurate portion and recipe tracking."
            ]
        }
    }
];
