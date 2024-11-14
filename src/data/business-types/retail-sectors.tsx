import Hero from '@/public/business-types/types/ret-hero.png'
import { BusinessContentType } from "@/src/types/interfaces"


export const contentData: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "قطاعات التجزئة",
            description: "تحسين البيع بالتجزئة عبر نقاط البيع المتكاملة وإدارة المخزون",
            btnText: "احجز موعد للتجربة",
            image: {
                src: Hero, // Replace with the actual image variable if needed
                alt: "Retail Management"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "تعزيز المبيعات وإدارة المخزون بكفاءة وسهولة من خلال حلول أمرك المخصصة خصيصاً لتلبية احتياجات بيئة البيع بالتجزئة",
                highlited: "إدارة المخزون"
            },
            listItems: [
                "تمكين الدفع السريع ومعالجة نقاط البيع لتقليل أوقات الانتظار للعملاء.",
                "تتبع المخزون بتحديثات لحظية لمنع الهدر ونقص المخزون.",
                "مراقبة اتجاهات المبيعات لإدارة المخزون الموسمي وتعديل العروض.",
                "تنفيذ حملات ترويجية وتوسع ولاء العملاء لتشجيع تكرار الزيارات.",
                "الوصول إلى بيانات الأداء حسب الموقع لتحسين توزيع الموظفين وتخصيص المخزون."
            ]
        }
    },
    {
        type: "ServiceDetails",
        props: {
            heading: {
                primary: "ميزات مصممة لتلبية احتياجات عملك",
                secondary: "اكتشف الميزات المصممة لدعم عملك وتحقيق أهدافك"
            },
            listItems: [
                {
                    heading: "نظام نقاط البيع",
                    paragraph: "يشمل نظام نقاط البيع عبر الأجهزة المحمولة واللوحي، لتسهيل إدارة البيع."
                },
                {
                    heading: "جهاز دفع مدمج",
                    paragraph: "نقاط بيع متكاملة مع أجهزة الدفع لتسريع وتسهل عمليات الدفع."
                },
                {
                    heading: "تحديد نطاقات التوصيل",
                    paragraph: "تحديد نطاقات توصيل الطلبات لضمان خدمة فعالة وتحسين إدارة الطلبات."
                },
                {
                    heading: "الدفع الإلكتروني",
                    paragraph: "تسهيل المدفوعات عبر الإنترنت لضمان شراء سلس وآمن للعملاء."
                },
                {
                    heading: "ورديات الموظفين",
                    paragraph: "يشمل إدارة ساعات وقت الموظفين وتحسين جداول الورديات مما يسهل تتبع ساعات العمل وزيادة كفاءة الموارد البشرية."
                },
                {
                    heading: "إدارة المخزون",
                    paragraph: "تشمل إدارة المشتريات والموردين، مراقبة المخزون والتحكم في الصرف وتطبيق إجراءات الموافقات."
                },
                {
                    heading: "العروض التسويقية",
                    paragraph: "برامج ولاء العملاء لتحفيز التكرار وبناء علاقات طويلة الأمد."
                },
                {
                    heading: "ZATCA فواتير",
                    paragraph: "تضمن الإيصالات التوافق مع هيئة الزكاة والضريبة والمحاسبة (زاتكا) لتلبية المتطلبات القانونية."
                },
                {
                    heading: "بطاقات الهدايا",
                    paragraph: "تتيح بطاقات الهدايا للعملاء تقديم هدايا مرنة، مما يعزز جذب العملاء الجدد وولاء السائقين."
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
                    heading: "لوحة تحليلات البيانات",
                    paragraph: "يشمل لوحات المعلومات وتقارير الأداء لتحليل البيانات بشكل فعال مما يمكنك من متابعة النتائج واتخاذ قرارات مستنيرة."
                }
            ]
        }
    }
];


export const contentData_en: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Retail",
            description: "Drive Faster Service and Streamline Operations",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Retail Service"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "Optimize Retail Operations with Streamlined POS, Inventory, and integrated payment.",
                highlited: "Optimize Retail Operations"
            },
            listItems: [
                "Enable rapid checkout and payment processing to reduce customer wait times.",
                "Track inventory with real-time stock updates to prevent overstock and stockouts.",
                "Monitor sales trends to manage seasonal inventory and adjust product offerings.",
                "Implement promotional campaigns and track customer loyalty for repeat business.",
                "Access location-based performance data to optimize staffing and stock allocation."
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
                    heading: "POS",
                    paragraph: "Includes mobile, tablet, and web POS to simplify sales management."
                },
                {
                    heading: "Payment Terminal",
                    paragraph: "Integrated POS with payment devices for faster, smoother transactions."
                },
                {
                    heading: "Special Offers",
                    paragraph: "Offering special promotions and discounts to boost sales, attract customers, and increase their loyalty."
                },
                {
                    heading: "Home Delivery",
                    paragraph: "Facilitating fast and reliable home delivery of orders to enhance customer experience and satisfaction."
                },
                {
                    heading: "Delivery Geofencing",
                    paragraph: "Defining precise delivery zones to ensure efficient service and improve order management."
                },
                {
                    heading: "Online Payment",
                    paragraph: "Facilitating online payments to ensure a smooth and secure purchasing experience for customers."
                },
                {
                    heading: "Employees Timecard",
                    paragraph: "Includes employee time tracking and shift scheduling for improved labor efficiency."
                },
                {
                    heading: "Manage Inventory",
                    paragraph: "Includes managing purchases and suppliers, inventory monitoring, stock control, and implementing approval procedures."
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
                    heading: "ZATCA Receipts",
                    paragraph: "Receipts ensure compliance with ZATCA regulations."
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
                    heading: "API Access",
                    paragraph: "Offers API access for integration and extending system functionality."
                }
            ]
        }
    }
];
