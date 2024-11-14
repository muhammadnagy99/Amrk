import Hero from '@/public/business-types/types/cat-hero.png'
import { BusinessContentType } from "@/src/types/interfaces"

export const contentData: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "توريد الطعام",
            description: "تنظيم الفعاليات بدقة وموثوقية لضمان تجربة سلسة واحترافية",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "Amrk Catering Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "تأكد من سلاسة عمليات التموين من تتبع المخزون إلى تنسيق الخدمات اللوجستية باستخدام أدوات إدارة التوريد من أمرك",
                highlited: "سلاسة عمليات التموين"
            },
            listItems: [
                "إدارة الطلبات الكبيرة من خلال معالجة فعالة للطلبات الجماعية وتنسيق الخدمات اللوجستية.",
                "تتبع المخزون خلال المناسبات للحفاظ على مستوياته وتقليل الهدر.",
                "تواصل مباشر ومستمر مع الموردين لإعادة الطلبات وتعبئة المخزون بسهولة.",
                "إنشاء تقارير تفصيلية لتحليل الأداء وتحسين المناسبات المستقبلية.",
                "مراقبة معدلات تنفيذ الطلبات لتلبية توقعات العملاء وزيادة رضاهم."
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
                    heading: "نظام نقاط البيع مطبخك",
                    paragraph: "نظام نقاط البيع للمطبخ يتيح معالجة الطلبات بسرعة وكفاءة لضمان سير العمل بسلاسة."
                },
                {
                    heading: "إدارة علامات متعددة",
                    paragraph: "يدير علامات تجارية متعددة في المطبخ لتسهيل تخصيص القوائم وتحضيرها."
                },
                {
                    heading: "شاشة المطبخ",
                    paragraph: "تنظيم الطلبات وإدارتها بشكل فعال، مما يضمن دقة التحضير وسرعة الخدمة."
                },
                {
                    heading: "منيو مطبخك",
                    paragraph: "إدارة قوائم المطبخ بما يتناسب مع احتياجات العلامات التجارية المتعددة."
                },
                {
                    heading: "مراقبة مطبخك",
                    paragraph: "شاشة لعرض مقاييس أداء المطبخ ومتابعة العمليات بشكل لحظي."
                },
                {
                    heading: "دليل تعليمي",
                    paragraph: "إرشادات خطوة بخطوة لتحضير الوجبات بدقة وسرعة."
                },
                {
                    heading: "العروض التسويقية",
                    paragraph: "برامج ولاء العملاء لتحفيز التكرار وبناء علاقات طويلة الأمد."
                },
                {
                    heading: "تنبيهات SMS للعملاء",
                    paragraph: "تتضمن الإشعارات عبر الرسائل النصية تحديثات الطلبات، إشعارات جاهزية الطلبات، وتوفير إيصالات رقمية عبر الرسائل النصية."
                },
                {
                    heading: "إدارة علاقات العملاء",
                    paragraph: "يشمل تحليل تفضيلات وسلوكيات العملاء، بالإضافة إلى تنفيذ حملات تسويقية مستهدفة لتعزيز التواصل وزيادة ولاء العملاء."
                },
                {
                    heading: "واجهة الربط البرمجي",
                    paragraph: "يوفر إمكانية الوصول إلى واجهة برمجة التطبيقات (API) لتمكين التكامل مع أنظمة أخرى وتوسيع وظائف النظام بحسب احتياجات العمل."
                },
                {
                    heading: "ربط تطبيقات التوصيل",
                    paragraph: "يتضمن تكاملاً مع منصات توصيل الطعام المختلفة، مما يسهل إدارة الطلبات ويوسع نطاق الوصول للعملاء عبر قنوات متعددة."
                },
                {
                    heading: "لوحة تحليلات البيانات",
                    paragraph: "يشمل لوحات المعلومات وتقرير الأداء لتحليل البيانات بشكل فعال، مما يمكنك من متابعة النتائج واتخاذ قرارات مستنيرة."
                }
            ]
        }
    }
];

export const contentData_en: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Catering",
            description: "Organize Events with Precision and Reliability",
            btnText: "Book a Demo",
            image: {
                src: Hero, // Keeping 'Hero' as requested for future responses
                alt: "Amrk Catering Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "Ensure seamless catering operations from inventory tracking to logistics with Amrk’s catering management tools.",
                highlited: "seamless catering operations"
            },
            listItems: [
                "Manage large orders with efficient bulk order processing and logistics coordination.",
                "Track inventory across events to maintain accurate stock levels and reduce waste.",
                "Keep real-time channel with suppliers, for seamless re-ordering and stock refill.",
                "Generate detailed reports to assess performance and improve future events.",
                "Monitor order fulfillment rates to meet customer expectations and service standards."
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
                    heading: "Kitchen POS",
                    paragraph: "The kitchen POS system enables fast and efficient order processing to ensure smooth workflow."
                },
                {
                    heading: "Kitchen Multi-Brand",
                    paragraph: "Manages multiple brands in the kitchen to simplify menu customization and updates."
                },
                {
                    heading: "Kitchen Display",
                    paragraph: "Order organization ensures preparation accuracy and service speed."
                },
                {
                    heading: "Kitchen Menu",
                    paragraph: "Step-by-step guidelines for accurate and quick meal preparation."
                },
                {
                    heading: "Kitchen Navigator",
                    paragraph: "Includes QR order & payment, pickup and social media orders, delivery, geolocation zones, e-payments, loyalty programs, and digital menus."
                },
                {
                    heading: "Kitchen Monitor",
                    paragraph: "Screen to display kitchen performance metrics and monitor operations in real-time."
                },
                {
                    heading: "Loyalty Programs",
                    paragraph: "Customer loyalty programs to encourage repeat business and build long-term relationships."
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
