import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/rms/crm/hero.png';
import Screen from '@/public/rms/crm/screen.png';
import Screen_en from '@/public/rms/crm/screen_en.png'
import { CrmIcon1, CrmIcon2, CrmIcon3 } from "./icons";


export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "إدارة علاقات العملاء (CRM) والحملات التسويقية",
            description: "تفاعل مع عملائك واحتفظ بهم عبر تجربة تلبي احتياجاتهم.",
            btnText: "احجز موعد للتجربة",
            image: {
                src: Hero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "أدوات متقدمة لإدارة علاقات العملاء",
            listItems: [
                { icon: <CrmIcon1 />, text: "تحليل بيانات العملاء." },
                { icon: <CrmIcon2 />, text: "حملات ترويجية مخصصة ومؤتمتة." },
                { icon: <CrmIcon3 />, text: "زيادة زيارات العملاء المتكررة بعروض مخصصة." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "حملات تسويقية مستهدفة لتعزيز ولاء العملاء وتحقيق نتائج أفضل",
            listItems: [
                "زيادة معدلات عودة العملاء من خلال الحملات المستهدفة.",
                "رفع نسبة المبيعات من خلال العروض الترويجية المخصصة.",
                "تحسين القيمة الدائمة للعميل (CLV) بفضل تقسيم شرائح العملاء عبر نظام أمرك.",
                "معدل استجابة أعلى في التعامل مع استفسارات العملاء."
            ]
        }
    }
];


export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "CRM & Targeted Campaigns",
            description: "Engage and Retain Your Customers",
            btnText: "Book a Demo",
            image: {
                src: Hero, 
                alt: "CRM & Targeted Campaigns Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Advanced tools for customer relationship management",
            listItems: [
                { icon: <CrmIcon1 />, text: "Analyze insights for better targeting." },
                { icon: <CrmIcon2 />, text: "Automated and personalized campaigns." },
                { icon: <CrmIcon3 />, text: "Increase repeat visits through tailored promotions." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en, 
            heading: "Targeted marketing campaigns to enhance loyalty and results",
            listItems: [
                "Increased return rate through targeted campaigns.",
                "Percentage of sales growth from personalized promotions.",
                "Customer lifetime value (CLV) improvement due to effective segmentation.",
                "Campaign engagement rates, leading to higher conversion rates."
            ]
        }
    }
]