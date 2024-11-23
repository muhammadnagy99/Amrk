import Hero from '@/public/business-types/types/ck-hero.png'
import { BusinessContentType } from "@/src/types/interfaces"

export const contentData_en: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Cloud Kitchens",
            description: "Streamline Your Virtual Brand Management, From Kitchen to Customer",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Kitchen Integration"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "Enhance your cloud kitchen's performance with Amrk’s seamless kitchen management, inventory tracking, and delivery integration tools.",
                highlited: "cloud kitchen's"
            },
            listItems: [
                "Centralize multiple brand operations with simplified menu updates and customization.",
                "Track ingredient usage and inventory in real time to reduce waste and ensure availability.",
                "Integrate with major food delivery platforms for efficient order management and tracking.",
                "Enhance kitchen workflows with real-time order updates, reducing preparation times.",
                "Access detailed brand performance analytics to refine offerings and boost profitability."
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
                    heading: "Cloud Kitchen",
                    paragraph: "Includes multi-brand management, kitchen display, inventory management, menu customization, POS system, navigation tools, performance monitoring, and delivery platform integration."
                },
                {
                    heading: "Multi-Brand Management",
                    paragraph: "Seamlessly handle multiple virtual brands from one platform."
                },
                {
                    heading: "Efficient Operations",
                    paragraph: "Centralize everything from online orders to inventory and kitchen workflows."
                },
                {
                    heading: "SMS Notification",
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

export const contentData: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "مطابخ سحابية",
            description: "تبسيط عمليات العلامات الافتراضية، من المطبخ الى العميل",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "تكامل المطبخ"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "قم بتحسين أداء المطبخ السحابي الخاص بك باستخدام أدوات أمرك لإدارة العلامات التجارية، وتتبع المخزون، وتكامل خدمات التوصيل.",
                highlited: "المطبخ السحابي"
            },
            listItems: [
                "إدارة العلامات التجارية المتعددة بواجهة واحدة مع تحديثات وتخصيصات مبسطة لقوائم الطعام.",
                "تتبع استخدام المكونات والمخزون لحظياً لتقليل الهدر وضمان توفر المنتجات.",
                "التكامل مع منصات التوصيل الرئيسية لإدارة الطلبات وتتبعها بفعالية.",
                "تحسين سير العمل في المطبخ من خلال تحديثات الطلبات الفورية لتقليل أوقات التحضير.",
                "الوصول إلى تحليلات أداء العلامات التجارية التفصيلية لتحسين العروض وزيادة الربحية."
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
                    heading: "المطبخ السحابي",
                    paragraph: "يشمل إدارة العلامات التجارية المتعددة، عرض المطبخ، إدارة المخزون، تخصيص القوائم، نظام نقاط البيع، أدوات التنقل، مراقبة الأداء، وتكامل منصات التوصيل."
                },
                {
                    heading: "إدارة العلامات التجارية المتعددة",
                    paragraph: "إدارة عدة علامات افتراضية بسهولة عبر منصة واحدة."
                },
                {
                    heading: "عمليات مرنة",
                    paragraph:"مركزية جميع العمليات من طلبات التوصيل إلى المخزون وتدفقات العمل في المطبخ."
                },
                {
                    heading: "تنبيهات SMS",
                    paragraph: "تشمل الإشعارات عبر الرسائل النصية الطلبات، إشعارات الجاهزية، وإيصالات رقمية عبر الرسائل النصية."
                },
                {
                    heading: "إدارة علاقات العملاء",
                    paragraph: "تحليل تفضيلات وسلوكيات العملاء، بالإضافة إلى حملات تسويقية مستهدفة لتعزيز المشاركة والولاء."
                },
                {
                    heading: "لوحة البيانات",
                    paragraph: "تشمل لوحات المعلومات وتقارير الأداء لتحليل البيانات واتخاذ قرارات مدروسة."
                },
                {
                    heading: "ربط تطبيقات التوصيل",
                    paragraph: "تشمل تكاملاً مع منصات توصيل الطعام لتبسيط إدارة الطلبات وتوسيع نطاق العملاء."
                },
                {
                    heading: "واجهة الربط البرمجي",
                    paragraph: "توفر الوصول إلى واجهة برمجة التطبيقات (API) للتكامل وتوسيع وظائف النظام."
                }
            ]
        }
    }
];
