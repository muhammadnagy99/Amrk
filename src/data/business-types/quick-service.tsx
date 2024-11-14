import Hero from '@/public/business-types/types/qs-hero.png'
import { BusinessContentType } from "@/src/types/interfaces"

export const contentData: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "الخدمة السريعة",
            description: "تسريع الخدمة وتبسيط العمليات لتحقيق كفاءة أفضل",
            btnText: "احجز موعد للتجربة",
            image: {
                src: Hero,
                alt: "الخدمة السريعة"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "تسريع معالجة الطلبات والدفع باستخدام حلول أمرك المصممة خصيصاً للمطاعم ذات الخدمة السريعة",
                highlited: "معالجة الطلبات"
            },
            listItems: [
                "التنقل المبسط في نقاط البيع والقائمة لتسريع معالجة الطلبات في أوقات الذروة.",
                "تقليل أوقات انتظار الطلبات باستخدام أدوات إدارة المطبخ.",
                "تتبع المخزون في الوقت الفعلي لضمان توفر العناصر الأكثر مبيعاً دائماً.",
                "تسريع الدفع السريع والآمن باستخدام أنظمة المدفوعات المدمجة لتقليل وقت الانتظار وزيادة الإنتاجية.",
                "تحليل الطلبات الأكثر مبيعاً لتحسين عروض المنيو وتقليل أوقات التحضير."
            ]
        }
    },
    {
        type: "ServiceDetails",
        props: {
            heading: {
                primary: "ميزات مصممة لتلبية احتياجات عملك",
                secondary: "اكتشف الميزات المصممة لدعم نوع عملك وتحقيق أهدافك"
            },
            listItems: [
                {
                    heading: "نقاط البيع المتنقل",
                    paragraph: "تتيح معالجة الطلبات والدفع بسهولة وسرعة من أي مكان."
                },
                {
                    heading: "جهاز دفع مدمج",
                    paragraph: "نقاط بيع متكاملة مع أجهزة الدفع لتسريع عمليات الدفع."
                },
                {
                    heading: "شاشة المطبخ",
                    paragraph: "تنظيم الطلبات وإدارتها بشكل فعال، مما يضمن دقة التحضير وسرعة الخدمة."
                },
                {
                    heading: "إدارة المنيو",
                    paragraph: "تتيح تنظيم قوائم متعددة وتخصيصها، إضافة عناصر جديدة، وعروض خاصة."
                },
                {
                    heading: "خدمة أونلاين",
                    paragraph: "تشمل الطلب عبر QR، الاستلام والطلبات عبر وسائل التواصل، والدفع الإلكتروني."
                },
                {
                    heading: "ورديات الموظفين",
                    paragraph: "تشمل إدارة سجلات حضور الموظفين وتحسين تسجيل ساعات العمل لزيادة الكفاءة."
                },
                {
                    heading: "إدارة متطورة للمخزون",
                    paragraph: "تشمل إدارة المشتريات والموردين، المكونات، وتتبع المخزون لضمان توفر المنتجات."
                },
                {
                    heading: "برامج الولاء",
                    paragraph: "تشمل مكافأة العملاء لتشجيع تكرار زيارتهم وبناء ولاء العملاء."
                },
                {
                    heading: "بطاقات الهدايا",
                    paragraph: "تتيح تقديم بطاقات الهدايا الرقمية والفيزيائية لجذب العملاء وزيادة ولائهم."
                },
                {
                    heading: "وضع عدم الاتصال",
                    paragraph: "يمكن العمل في وضع غير متصل بالإنترنت مما يوفر مرونة في إدارة العمليات."
                },
                {
                    heading: "تنبيهات SMS للعملاء",
                    paragraph: "تتضمن إشعارات عبر الرسائل النصية لتحديثات الطلبات."
                },
                {
                    heading: "العروض التسويقية",
                    paragraph: "تشمل إعداد العروض الترويجية والتسويقية لجذب العملاء."
                },
                {
                    heading: "لوحة تحليلات البيانات",
                    paragraph: "تشمل لوحات المعلومات لتقديم التقارير والتحليل لاتخاذ قرارات مستنيرة."
                },
                {
                    heading: "ربط تطبيقات التوصيل",
                    paragraph: "تشمل تكامل المنصة مع تطبيقات التوصيل لتحسين إدارة الطلبات."
                },
                {
                    heading: "واجهة الربط البرمجي",
                    paragraph: "توفر إمكانية الربط مع الأنظمة الخارجية لزيادة المرونة."
                }
            ]
        }
    }
];



export const contentData_en: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Quick Service",
            description: "Drive Faster Service and Streamline Operations",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Quick Service System"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "Accelerate order processing and payment handling with Amrk’s fast-paced solutions tailored for quick-service restaurants.",
                highlited: "order processing"
            },
            listItems: [
                "Simple POS and menu navigation to speed up order processing at peak times.",
                "Reduce order wait times with streamlined kitchen management tools.",
                "Track real-time inventory to ensure top-selling items are always in stock.",
                "Enable fast, secure payment processing to reduce checkout time and increase throughput.",
                "Analyze popular items to optimize menu offerings and reduce prep times."
            ]
        }
    },
    {
        type: "ServiceDetails",
        props: {
            heading: {
                primary: "Features tailored to meet your business needs",
                secondary: "Discover features designed to support your business type and achieve your goals"
            },
            listItems: [
                {
                    heading: "Mobile POS",
                    paragraph: "Enables easy and quick order processing and payment from anywhere."
                },
                {
                    heading: "Payment Terminal",
                    paragraph: "Integrated POS with payment devices for faster, smoother transactions."
                },
                {
                    heading: "Kitchen Display",
                    paragraph: "Order organization ensures preparation accuracy and service speed."
                },
                {
                    heading: "Menu Management",
                    paragraph: "Manage multiple menus, customize items, add new ones, and set special offers."
                },
                {
                    heading: "Online Service",
                    paragraph: "Includes QR order & payment, pickup and social media orders, delivery, geolocation zones, e-payments, loyalty programs, and digital menus."
                },
                {
                    heading: "Employees Timecard",
                    paragraph: "Includes employee time tracking and shift scheduling for improved labor efficiency."
                },
                {
                    heading: "Advanced Inventory",
                    paragraph: "Includes managing purchases and suppliers, menus and recipes, and inventory monitoring to ensure product availability."
                },
                {
                    heading: "Loyalty Programs",
                    paragraph: "Customer loyalty programs to encourage repeat business and build long-term relationships."
                },
                {
                    heading: "Gift Cards",
                    paragraph: "Offers flexible gifting, boosting new customer attraction and loyalty."
                },
                {
                    heading: "Offline Mode",
                    paragraph: "Works offline for flexibility in managing operations."
                },
                {
                    heading: "SMS Notifications",
                    paragraph: "Notifications include order updates, readiness alerts, and digital receipts via SMS."
                },
                {
                    heading: "CRM & Campaigns",
                    paragraph: "Analyzes customer preferences and behaviors, plus targeted marketing campaigns to boost engagement and loyalty."
                },
                {
                    heading: "Dashboard",
                    paragraph: "Dashboards and reports for effective data analysis and informed decision-making."
                },
                {
                    heading: "Delivery Aggregators",
                    paragraph: "Integrates with food delivery platforms for streamlined order management and expanded customer reach."
                },
                {
                    heading: "API Access",
                    paragraph: "Offers API access for integration and extending system functionality."
                }
            ]
        }
    }
];
