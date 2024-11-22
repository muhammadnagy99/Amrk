import Hero from '@/public/business-types/types/fra-hero.png'
import { BusinessContentType } from "@/src/types/interfaces"

export const contentData: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "مانحي الامتياز",
            description: "توحيد العمليات لضمان كفاءة أعلى لأعمال ممنوحي الامتياز",
            btnText: "احجز موعد للتجربة",
            image: {
                src: Hero,
                alt: "Franchise Expansion"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "الحفاظ على الكفاءة والاتساق عبر مواقع الامتياز باستخدام أدوات إدارة مطاعم الامتيازات التجارية من أمرك",
                highlited: "الكفاءة والاتساق"
            },
            listItems: [
                "مزامنة تغييرات القائمة والأسعار عبر جميع المواقع من لوحة تحكم واحدة.",
                "تتبع المخزون والمبيعات حسب الموقع لتحسين مستويات المخزون.",
                "مراقبة الامتثال للوصفات الموحدة والتحكم في الجودة لضمان الاتساق.",
                "أتمتة إعداد التقارير لتبسيط جمع البيانات وتحليلها.",
                "إدارة برامج الولاء للعملاء عبر المواقع المتعددة لتشجيع تكرار الزيارات."
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
                    heading: "نقاط البيع للامتيازات",
                    paragraph: "يضمن اتساق الخدمة عبر المواقع مع إدارة موحدة للقوائم."
                },
                {
                    heading: "إدارة المخزون للامتيازات",
                    paragraph: "تتيح التحكم والتتبع عبر المواقع المتعددة لضمان توافر المنتجات."
                },
                {
                    heading: "إدارة المينو للامتيازات",
                    paragraph: "تساعد على توحيد عروض الطعام والأسعار عبر جميع المواقع لضمان الاتساق والجودة."
                },
                {
                    heading: "الخدمات الإلكترونية",
                    paragraph: "توفر إمكانية الطلب والدفع عبر الإنترنت، مما يعزز تجربة العملاء وزيادة كفاءة العمليات."
                },
                {
                    heading: "العروض التسويقية",
                    paragraph: "برامج ولاء العملاء لتحفيز التكرار وبناء علاقات طويلة الأمد."
                },
                {
                    heading: "إدارة علاقات العملاء",
                    paragraph: "يشمل تحليل تفضيلات وسلوكيات العملاء، بالإضافة إلى تنفيذ حملات تسويقية مستهدفة لتعزيز التواصل وزيادة ولاء العملاء."
                },
                {
                    heading: "لوحة تحليلات البيانات",
                    paragraph: "تشمل لوحات المعلومات وتقرير الأداء لتحليل البيانات بشكل فعال، مما يمكنك من متابعة النتائج واتخاذ قرارات مستنيرة."
                },
                {
                    heading: "واجهة الربط البرمجي",
                    paragraph: "يوفر إمكانية الوصول إلى واجهة برمجة التطبيقات (API) لتمكين التكامل مع أنظمة أخرى وتوسيع وظائف النظام بحسب احتياجات العمل."
                }
            ]
        }
    }
];


export const contentData_en: BusinessContentType[]  = [
    {
        type: "ServiceHero",
        props: {
            heading: "Franchisors",
            description: "Standardize and Scale Across Franchisee Locations",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Franchisor Service"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "Maintain consistency and efficiency across franchise locations with Amrk’s centralized franchise management tools.",
                highlited: "consistency and efficiency"
            },
            listItems: [
                "Synchronize menu and pricing changes across all locations from a single dashboard.",
                "Track inventory and sales by location to identify trends and optimize stock levels.",
                "Monitor compliance with standardized recipes and portion controls to ensure consistency.",
                "Automate franchise reporting to streamline data collection and analysis.",
                "Manage customer loyalty programs across locations to encourage repeat visits."
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
                    heading: "Franchisor POS",
                    paragraph: "Ensures service consistency across locations with unified menu management."
                },
                {
                    heading: "Franchisor Inventory",
                    paragraph: "Enables control and tracking across multiple locations to ensure product availability."
                },
                {
                    heading: "Franchisor Menu",
                    paragraph: "Helps standardize food offerings and prices across all locations to ensure consistency and quality."
                },
                {
                    heading: "Online Services",
                    paragraph: "Provides the ability to order and pay online, enhancing customer experience and increasing operational efficiency."
                },
                {
                    heading: "Loyalty Programs",
                    paragraph: "Customer loyalty programs to encourage repeat business and build long-term relationships."
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
                    heading: "API Access",
                    paragraph: "Offers API access for integration and extending system functionality."
                }
            ]
        }
    }
];
