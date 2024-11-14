import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/amrk-online/sm/hero.png';
import Screen from '@/public/amrk-online/sm/screen.png';
import Screen_en from '@/public/amrk-online/sm/screen_en.png';
import { IconCampaignTrack, IconBrandReach, IconPOSIntegration } from './icons';

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "الطلب عبر وسائل التواصل الاجتماعي",
            description: "المبيعات من خلال وسائل التواصل الاجتماعي",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "الطلب عبر وسائل التواصل الاجتماعي"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "اطلب مباشرة عبر وسائل التواصل الاجتماعي!",
            listItems: [
                { icon: <IconCampaignTrack />, text: "تتبع مؤشرات حملاتك في منصات التواصل." },
                { icon: <IconBrandReach />, text: "زيادة الانتشار والوصول بالشريحة المستهدفة." },
                { icon: <IconPOSIntegration />, text: "تكامل سلس مع نقاط البيع الخاصة بك." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "زيادة المبيعات وتحقيق نتائج متميزة من خلال التكامل مع Google",
            listItems: [
                "زيادة حجم الطلبات الواردة من منصات التواصل الاجتماعي.",
                "تحويل المتابعين على وسائل التواصل إلى عملاء فعليين.",
                "تحسين التفاعل مع العملاء من خلال الحملات المستهدفة.",
                "تقليل الوقت المستغرق في معالجة الطلبات الواردة عبر منصات التواصل."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Social Media Ordering",
            description: "Drive Sales Through Social Media",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Social Media Ordering Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Order directly through social media!",
            listItems: [
                { icon: <IconCampaignTrack />, text: "Track your social media campaigns." },
                { icon: <IconBrandReach />, text: "Increases brand reach and engagement." },
                { icon: <IconPOSIntegration />, text: "Integrates seamlessly with your POS." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Boost sales and achieve great results with Google integration",
            listItems: [
                "Increase in order volume from social media platforms.",
                "Conversion rate of social media followers to customers.",
                "Improvement in customer engagement from targeted social media campaigns.",
                "Time saved from processing orders directly through social media channels."
            ]
        }
    }
];
