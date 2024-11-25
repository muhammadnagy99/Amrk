import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/cloud-kitchen-system/kmo/hero.png';
import Screen from '@/public/cloud-kitchen-system/kmo/screen.png';
import Screen_en from '@/public/cloud-kitchen-system/kmo/screen_en.png';
import { IconDataDrivenDecisions, IconPerformanceMonitoring, IconResourceManagement } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "مراقبة مطبخك",
            description: "راقب أداء مطبخك لحظياً لضمان السرعة والدقة",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "مراقبة مطبخك"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "توفير مقاييس شاملة لتحسين العمليات",
            listItems: [
                { icon: <IconDataDrivenDecisions />, text: "قرارات مبنية على البيانات." },
                { icon: <IconPerformanceMonitoring />, text: "مراقبة أداء." },
                { icon: <IconResourceManagement />, text: "إدارة فعالة للموارد." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "متابعة لحظية لمؤشرات الأداء لاتخاذ قرارات مستنيرة وتعزيز الكفاءة",
            listItems: [
                "التتبع اللحظي للمؤشرات الرئيسية لأداء المطبخ.",
                "تحسين كفاءة المطبخ من خلال بيانات تفصيلية ولحظية.",
                "سرعة تحديد الاختناقات التي تؤثر على إعداد الوجبات.",
                "تقليل الهدر في الموارد من خلال المراقبة الفعالة."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Kitchen Monitor",
            description: "Monitor Kitchen Performance In Real-Time",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Kitchen Monitor Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Comprehensive metrics for operational improvement",
            listItems: [
                { icon: <IconDataDrivenDecisions />, text: "Data-Driven Decisions." },
                { icon: <IconPerformanceMonitoring />, text: "Enhanced Performance Monitoring." },
                { icon: <IconResourceManagement />, text: "Efficient Resource Management." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Real-time performance tracking for better decision-making and efficiency",
            listItems: [
                "Real-time tracking of key kitchen performance indicators.",
                "Percentage improvement in kitchen efficiency from data.",
                "Faster identification of bottlenecks in meal preparation.",
                "Reduction in resource wastage through efficient monitoring."
            ]
        }
    }
];

