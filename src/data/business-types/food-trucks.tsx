import Hero from '@/public/business-types/types/ft-hero.png'
import { BusinessContentType } from "@/src/types/interfaces"

export const contentData: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "عربات الطعام",
            description: "تسهيل الطلب والدفع عبر نقاط بيع متوافقة مع الهواتف المحمولة",
            btnText: "احجز موعد للتجربة",
            image: {
                src: Hero,
                alt: "عربات الطعام"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "تشغيل عملياتك بكفاءة أثناء التنقل باستخدام أدوات نقاط البيع والدفع المتوافقة مع الهواتف المحمولة من أمرك والمخصصة لعربات الطعام.",
                highlited: "الهواتف المحمولة"
            },
            listItems: [
                "معالجة الطلبات بسرعة باستخدام نقاط البيع المتنقلة لتقليل أوقات الانتظار في أوقات الذروة.",
                "تسريع معالجة الدفع من خلال نظام نقاط البيع المدمج مع أمرك.",
                "إدارة مرونة القائمة لتلبية احتياجات العملاء المختلفة وتفضيلاتهم.",
                "مراقبة الأداء اليومي للمبيعات لضبط العروض وتحسين اختيار المواقع بناءً على الطلب."
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
                    paragraph: "تتيح معالجة الطلبات والدفع بسرعة وسهولة من أي مكان."
                },
                {
                    heading: "جهاز دفع مدمج",
                    paragraph: "نقاط بيع متكاملة مع أجهزة الدفع لتسريع عمليات الدفع."
                },
                {
                    heading: "إدارة المنيو",
                    paragraph: "إدارة متعددة للقوائم، تخصيص العناصر، إضافة قوائم جديدة، وتحديد العروض الخاصة."
                },
                {
                    heading: "شاشة المطبخ",
                    paragraph: "تنظيم الطلبات يضمن دقة التحضير وسرعة الخدمة."
                },
                {
                    heading: "طلب الاستلام",
                    paragraph: "تمكين الاستلام داخل المتجر مما يتيح للعملاء اختيار الوقت والمكان المناسب لهم."
                },
                {
                    heading: "طلب عبر وسائل التواصل",
                    paragraph: "تتيح للعملاء الطلب مباشرة من خلال منصات التواصل، ما يسهل الوصول إلى قوائم الطعام وإجراء الطلبات."
                },
                {
                    heading: "الدفع الإلكتروني",
                    paragraph: "تتيح إجراء عمليات الدفع بسهولة وأمان أثناء الطلبات، مما يسهل عملية الشراء ويعزز تجربة المستخدم."
                },
                {
                    heading: "برامج الولاء",
                    paragraph: "تشمل مكافأة العملاء على تكرار زياراتهم، مما يعزز التفاعل ويزيد من ولاء العملاء للعلامة التجارية."
                },
                {
                    heading: "تنبيهات SMS للعملاء",
                    paragraph: "تشمل الإشعارات عبر الرسائل النصية التحديثات، إشعارات الجاهزية، وتوفير إيصالات رقمية عبر الرسائل النصية."
                },
                {
                    heading: "إدارة علاقات العملاء",
                    paragraph: "تحليل تفضيلات وسلوكيات العملاء، بالإضافة إلى حملات تسويقية مستهدفة لتعزيز المشاركة والولاء."
                },
                {
                    heading: "لوحة تحليلات البيانات",
                    paragraph: "تشمل لوحات المعلومات وتقارير الأداء لتحليل البيانات واتخاذ قرارات مدروسة."
                }
            ]
        }
    }
];

export const contentData_en: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Food Trucks",
            description: "Keep Operations Rolling with Mobile-Friendly Order Management",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Food Trucks"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "Operate efficiently on the go with Amrk’s mobile-compatible POS and inventory tools tailored for food trucks.",
                highlited: "mobile-compatible POS"
            },
            listItems: [
                "Process orders quickly with mobile POS, reducing customer wait times at high-traffic events.",
                "Faster payment processing with integrated Payment POS within Amrk’s mobile POS.",
                "Manage menu flexibility for changing locations and customer preferences.",
                "Monitor sales performance daily to adjust offerings and optimize routes based on demand."
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
                    heading: "Menu Management",
                    paragraph: "Manage multiple menus, customize items, add new ones, and set special offers."
                },
                {
                    heading: "Kitchen Display",
                    paragraph: "Order organization ensures preparation accuracy and service speed."
                },
                {
                    heading: "Pickup Order",
                    paragraph: "Enables easy in-store pickups, allowing customers to choose their preferred time and location."
                },
                {
                    heading: "Social Media Orders",
                    paragraph: "Allows customers to order directly through social media platforms, making it easy to access menus and place orders."
                },
                {
                    heading: "Online Payment",
                    paragraph: "Facilitates secure and easy payments during orders, enhancing the purchasing process and user experience."
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
                }
            ]
        }
    }
];
