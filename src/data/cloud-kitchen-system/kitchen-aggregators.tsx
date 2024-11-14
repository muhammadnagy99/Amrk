import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/cloud-kitchen-system/di/hero.png';
import Screen from '@/public/cloud-kitchen-system/di/screen.png';
import Screen_en from '@/public/cloud-kitchen-system/di/screen_en.png';
import { IconMultiChannelOrdering, IconRealTimeTracking, IconSeamlessIntegration } from './icons'; // Unique icon names

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "ربط تطبيقات التوصيل بمطبخك",
            description: "تبسيط استقبال الطلبات من تطبيقات التوصيل",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "ربط تطبيقات التوصيل بمطبخك"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "معالجة طلبات التوصيل عبر شركاء موثوقين",
            listItems: [
                { icon: <IconMultiChannelOrdering />, text: "تسهيل استقبال الطلبات من عدة مصادر." },
                { icon: <IconRealTimeTracking />, text: "تتبع لحظي للطلبات من تطبيقات التوصيل." },
                { icon: <IconSeamlessIntegration />, text: "تكامل سلس مع تقنيات إدارة الطلبات بإدارة فعالة." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "متابعة لحظية وتقارير شاملة لضمان كفاءة العمليات وإدارة الطلبات بسلاسة",
            listItems: [
                "نسبة الطلبات المستلمة من التطبيقات دون تدخل يدوي.",
                "تقليل وقت معالجة الطلبات من تطبيقات التوصيل.",
                "زيادة حجم الطلبات المستلمة بفضل التكامل مع شركاء موثوقين.",
                "تقليل الفروقات المخزنية بفضل التتبع الفوري للاستهلاك."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Kitchen Aggregator Integration",
            description: "Streamline Orders from Delivery Apps",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Kitchen Aggregator Integration Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Processing delivery orders through trusted partners",
            listItems: [
                { icon: <IconMultiChannelOrdering />, text: "Streamlined multi-channel ordering." },
                { icon: <IconRealTimeTracking />, text: "Track inventory in real-time." },
                { icon: <IconSeamlessIntegration />, text: "Integrates seamlessly with Amrk’s Cloud Kitchen technology." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Real-time monitoring for efficient order management",
            listItems: [
                "Percentage of aggregated orders processed without manual intervention.",
                "Reduction in time spent managing delivery orders from Food Delivery Apps.",
                "Increase in overall delivery order volume through seamless aggregator integration.",
                "Decrease in inventory discrepancies due to real-time consumption tracking."
            ]
        }
    }
];

