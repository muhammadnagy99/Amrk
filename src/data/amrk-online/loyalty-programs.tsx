import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/amrk-online/lp/hero.png';
import Screen from '@/public/amrk-online/lp/screen.png';
import Screen_en from '@/public/amrk-online/lp/screen_en.png';
import { IconCustomOffer, IconCRMIntegration2, IconWhiteLabel } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "برامج الولاء",
            description: "كافئ عملائك بعروض مميزة واكسب ولائهم",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "برامج الولاء"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "شجع عملاءك للعودة مع برامج ولاء جذابة",
            listItems: [
                { icon: <IconCustomOffer />, text: "عروض ولاء مخصصة." },
                { icon: <IconCRMIntegration2 />, text: "متكاملة مع إدارة علاقات العملاء CRM." },
                { icon: <IconWhiteLabel />, text: "مخصصة لتلبية احتياجاتك التجارية." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "خصومات ومكافآت لتعزيز الولاء وتحقيق نتائج متميزة",
            listItems: [
                "زيادة تكرار الشراء من العملاء من خلال برامج الولاء.",
                "زيادة في معدلات استرداد المكافآت من قبل العملاء.",
                "تحسين الاحتفاظ بالعملاء من خلال مكافآت مخصصة.",
                "زيادة الإنفاق لكل عميل بفضل تكامل برامج الولاء."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Loyalty Programs",
            description: "Reward Your Customers and Build Loyalty",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Loyalty Programs Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Encourage customer return with appealing loyalty programs",
            listItems: [
                { icon: <IconCustomOffer />, text: "Customizable loyalty offerings." },
                { icon: <IconCRMIntegration2 />, text: "Integrated with CRM for targeted rewards." },
                { icon: <IconWhiteLabel />, text: "White-labeled to your brand." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Discounts and rewards to boost loyalty and achieve results",
            listItems: [
                "Growth in repeat business from loyalty participants.",
                "Increase in redemption rates for loyalty rewards.",
                "Improved retention through tailored loyalty incentives.",
                "Higher average spend per customer due to loyalty rewards integration."
            ]
        }
    }
];
