import { ServicesContentType } from "@/src/types/interfaces";

import PosHero from '@/public/rms/pos/pos-hero.png';
import PosScreen from '@/public/rms/pos/pos-screen.png';
import { PosIcon1, PosIcon2, PosIcon3 } from "./icons";

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "نظام نقاط البيع",
            description: "إدارة الطلبات بسهولة وكفاءة لتحسين العمليات",
            image: {
                src: PosHero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "أسهل نظام نقاط بيع لمعالجة الطلبات بسرعة!",
            listItems: [
                { icon: <PosIcon1 />, text: "واجهة سهلة الاستخدام للمعاملات السريعة." },
                { icon: <PosIcon2 />, text: "تكامل سلس مع باقي خدمات المطعم." },
                { icon: <PosIcon3 />, text: "تكامل سلس مع أجهزة الدفع." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: PosScreen,
            heading: "نتائج معالجة الطلبات من أي جهاز، متصل أو غير متصل",
            listItems: [
                "تقليل متوسط وقت ادخال الطلبات بعد تنفيذ أمرك POS.",
                "زيادة سرعة معالجة الطلبات لكل موظف خلال ساعات الذروة.",
                "تقليل الأخطاء للطلبات الملغاة او المعدلة لوجود آلية سير عمل الكترونية.",
                "نسبة عالية لوقت التشغيل تصل الى 99.99% دون انقطاع، لضمان أعلى قدر لتوفر الخدمة."
            ]
        }
    }
];