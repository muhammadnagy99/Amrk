import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/rms/wk/hero.png';
import Screen from '@/public/rms/wk/screen.png';
import Screen_en from '@/public/rms/wk/screen_en.png';

import { WkIcon1, WkIcon2, WkIcon3 } from "./icons";


export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "ووكي توكي مدمج",
            description: "تواصل فوري وفعال بين أعضاء فريقك لتحقيق أفضل النتائج",
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
            heading: "تواصل صوتي بين الأقسام مع نظام أمرك",
            listItems: [
                { icon: <WkIcon1 />, text: "تواصل صوتي سريع وفعال." },
                { icon: <WkIcon2 />, text: "تقليل التأخير في معالجة الطلبات." },
                { icon: <WkIcon3 />, text: "تحسين التنسيق بين الفريق." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "نتائج إيجابية من حل المشكلات بسرعة بالتواصل الفعال",
            listItems: [
                "تقليل التأخير في معالجة طلبات العملاء بفضل تحسين التواصل بين الموظفين.",
                "تقليل المشكلات التشغيلية الناتجة من خلال تسهيل التواصل بين الأقسام.",
                "عدة القنوات المبسطة والمحلية في المطبخ والموظفين.",
                "تسريع أوقات الاستجابة لحالات الطوارئ أو الطلبات من المطبخ."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "E-Walkie Talkie",
            description: "Instant Communication for Your Team",
            btnText: "Book a Demo",
            image: {
                src: Hero, // Replace with actual image variable
                alt: "E-Walkie Talkie Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Interdepartmental voice communication with Amrk",
            listItems: [
                { icon: <WkIcon1 />, text: "Fast and efficient voice communication." },
                { icon: <WkIcon2 />, text: "Reduces delays in order processing." },
                { icon: <WkIcon3 />, text: "Enhances team coordination." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en, // Replace with actual image variable
            heading: "Effective communication enables quick problem-solving",
            listItems: [
                "Decrease in order processing delays due to improved staff communication.",
                "Reduction in internal operational issues resolved by real-time communication.",
                "Logged kitchen-to-waiter communication interactions.",
                "Faster response times to kitchen emergencies or requests."
            ]
        }
    }
];