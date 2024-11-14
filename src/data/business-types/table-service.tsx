import Hero from '@/public/business-types/types/ts-hero.png'
import { BusinessContentType } from "@/src/types/interfaces"

export const contentData: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "الخدمة على الطاولة",
            description: "تحسين تجربة الضيوف من خلال خدمة طاولات سلسة",
            btnText: "احجز موعد للتجربة",
            image: {
                src: Hero,
                alt: "الخدمة على الطاولة"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "تجربة ضيافة فريدة من خلال إدارة الطاولات بكفاءة، تطبيق النادل، حجوزات الطاولات، رسوم الحد الأدنى، الطلب والدفع عبر QR",
                highlited: "إدارة الطاولات"
            },
            listItems: [
                "تسريع معالجة الطلبات لتقليل أوقات الانتظار وزيادة رضا العملاء.",
                "الحفاظ على دقة المخزون لتقليل الهدر وإدارة التكاليف بفعالية.",
                "تسريع الدفع السريع واستخدام أجهزة الدفع المدمجة لتسريع عمليات الدفع.",
                "تحسين اتساق المبيعات وأداء القائمة لتعديل العروض حسب تفضيلات العملاء.",
                "أتمتة برامج الولاء لتشجيع العملاء على العودة وبناء ولاء العملاء."
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
                    heading: "نظام نقاط البيع",
                    paragraph: "يشمل نقاط البيع عبر الهاتف المحمول، الجهاز اللوحي، والويب لتسهيل إدارة البيع."
                },
                {
                    heading: "جهاز دفع مدمج",
                    paragraph: "يدعم جميع أجهزة الدفع المدمجة لتسريع عمليات الدفع."
                },
                {
                    heading: "ووك توك مدمج",
                    paragraph: "يشمل التواصل الفوري بين الموظفين لتسهيل التنسيق وسير العمل في المطعم."
                },
                {
                    heading: "شاشة المطبخ",
                    paragraph: "تنظيم الطلبات وإدارتها بشكل فعال، مما يضمن دقة التحضير وسرعة الخدمة."
                },
                {
                    heading: "شاشة الخدمة",
                    paragraph: "تسهيل التواصل بين النادل والمطبخ لتحسين الخدمة."
                },
                {
                    heading: "إدارة الطاولات",
                    paragraph: "إدارة الطاولات، تطبيق النادل، حجوزات الطاولات، الطلب والدفع عبر QR."
                },
                {
                    heading: "إدارة المنيو",
                    paragraph: "إدارة وتخصيص القوائم وإضافة قوائم جديدة."
                },
                {
                    heading: "ورديات الموظفين",
                    paragraph: "تتبع ساعات العمل وجدولة الورديات لتحسين الكفاءة."
                },
                {
                    heading: "العروض التسويقية",
                    paragraph: "تنفيذ العروض التسويقية المرنة لزيادة التفاعل."
                },
                {
                    heading: "تنبيهات SMS للعملاء",
                    paragraph: "تتبع التحديثات وإرسال الرسائل النصية لزيادة التفاعل."
                },
                {
                    heading: "إدارة علاقات العملاء",
                    paragraph: "تحليل بيانات العملاء لتحسين الخدمات وزيادة الولاء."
                },
                {
                    heading: "لوحة تحليلات البيانات",
                    paragraph: "تقارير مفصلة لتحليل البيانات واتخاذ قرارات استراتيجية."
                },
                {
                    heading: "واجهة الربط البرمجي",
                    paragraph: "يوفر إمكانية الوصول إلى واجهة برمجة التطبيقات (API) لتمكين التكامل مع أنظمة أخرى وتوسيع وظائف النظام بحسب احتياجات العمل."
                }
            ]
        }
    }
];

export const contentData_en: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Dine-In Service",
            description: "Enhance Guest Experience with Seamless Table Service",
            btnText: "Book a Demo",
            image: {
                src: Hero, 
                alt: "Dine-In Service"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "Deliver top-notch hospitality through efficient table management, waiter App, Table reservations, Minimum Charges, and QR ordering.",
                highlited: "table management"
            },
            listItems: [
                "Simplify table management to optimize seating and reduce wait times.",
                "Enable online reservations to manage peak dining hours and improve customer flow.",
                "Integrate QR code ordering for fast menu browsing, ordering, bill splitting, and payment.",
                "Monitor table turnover rates to maximize seating efficiency during busy hours.",
                "Collect guest preferences for tailored service and improved guest satisfaction."
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
                    heading: "Walkie-Talkie",
                    paragraph: "Instant communication among staff for effective coordination and improved workflow."
                },
                {
                    heading: "Kitchen Display",
                    paragraph: "Order organization ensures preparation accuracy and service speed."
                },
                {
                    heading: "Serving Screen",
                    paragraph: "Facilitates communication among team members by displaying orders."
                },
                {
                    heading: "Web Cashier",
                    paragraph: "Includes cashier, kitchen, and service screens to efficiently manage orders and enhance customer experience."
                },
                {
                    heading: "Table Management",
                    paragraph: "Manage tables, waiter app, reservations, customer waitlist, QR order & payment with bill-splitting, and table analytics."
                },
                {
                    heading: "Online Service",
                    paragraph: "Includes QR order & payment, pickup and social media orders, delivery, geolocation zones, e-payments, loyalty programs, and digital menus."
                },
                {
                    heading: "Menu Management",
                    paragraph: "Manage multiple menus, customize items, add new ones, and set special offers."
                },
                {
                    heading: "Employees Timecard",
                    paragraph: "Includes employee time tracking and scheduling for improved efficiency."
                },
                {
                    heading: "Gift Cards",
                    paragraph: "Offers flexible gifting, boosting new customer attraction and loyalty."
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
