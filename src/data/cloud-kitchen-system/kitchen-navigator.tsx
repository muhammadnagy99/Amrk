import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/cloud-kitchen-system/kn/hero.png';
import Screen from '@/public/cloud-kitchen-system/kn/screen.png';
import Screen_en from '@/public/cloud-kitchen-system/kn/screen_en.png';
import { IconMealPrep, IconCookingProcess, IconErrorReduction } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "دليل تعليمي لمطبخك",
            description: "دليل إرشادي لمساعدة الطهاة وتسهيل تحضير الوجبات",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "دليل تعليمي لمطبخك"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "إرشادات خطوة بخطوة لتحضير الوجبات",
            listItems: [
                { icon: <IconMealPrep />, text: "تحضير أسرع للوجبات." },
                { icon: <IconCookingProcess />, text: "تبسيط عملية الطهي." },
                { icon: <IconErrorReduction />, text: "تقليل الأخطاء." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "ضمان تحضير الوجبات بسرعة ودقة عبر تكامل مع شاشة المطبخ (KDS)",
            listItems: [
                "تقليل وقت التحضير بفضل الإرشادات التوجيهية للطهاة.",
                "تقليل الأخطاء في الطهي بفضل التعليمات التفصيلية.",
                "تحسين الاتساق في تحضير الوجبات للعلامات التجارية المتعددة.",
                "زيادة الإنتاجية في المطبخ خلال فترات الذروة مع تعليمات موجهة."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Kitchen Navigator",
            description: "Guide Your Chefs with Kitchen Navigator for Efficient Cooking",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Kitchen Navigator Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Step-by-step meal preparation instructions",
            listItems: [
                { icon: <IconMealPrep />, text: "Faster meal prep." },
                { icon: <IconCookingProcess />, text: "Simplified cooking process." },
                { icon: <IconErrorReduction />, text: "Reduced errors." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Ensure quick and accurate meal preparation with the KDS",
            listItems: [
                "Reduced cooking time with guided meal preparation.",
                "Fewer cooking errors with structured guidance for chefs.",
                "Enhanced consistency in multi-brand meal preparation.",
                "Increase in kitchen output during peak times with guided workflows."
            ]
        }
    }
];

