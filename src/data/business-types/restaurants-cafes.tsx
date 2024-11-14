import RACHero from '@/public/business-types/types/rac-hero.png'
import { BusinessContentType } from "@/src/types/interfaces"

export const contentData: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "مطاعم ومقاهي",
            description: "قم بتشغيل مطعمك بكفاءة ورفع مستوى رضا العملاء",
            btnText:"احجز موعد للتجربة",
            image: {
                src: RACHero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading:{
                text: "حسّن كل جزء من عمليات مطعمك، بدءًا من إدارة المخزون إلى التفاعل مع العملاء، باستخدام منصة إدارة المطاعم الشاملة من أمـركـ",
                highlited: "إدارة المطاعم الشاملة"
            } ,
            listItems: [
                "تسريع معالجة الطلبات لتقليل أوقات الانتظار وزيادة رضا العملاء.",
                "الحفاظ على دقة المخزون لتقليل الهدر وإدارة التكاليف بفعالية.",
                "تسهيل الدفع السريع والآمن باستخدام أنظمة اجهزة المدفوعات المدمجة لتسريع عمليات الدفع.",
                "تتبع اتجاهات المبيعات وأداء القائمة لتعديل العروض حسب تفضيلات العملاء.",
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
                    heading: "إدارة المنيو",
                    paragraph: "تخصيص قوائم الطعام بسهولة، إضافة وتعديل الأسعار، وتصميم أوصاف الأصناف."
                },
                {
                    heading: "إدارة الطاولات",
                    paragraph: "يشمل إدارة الطاولات وتطبيق النادل، حجوزات الطاولات، قائمة انتظار العملاء، طلب ودفع وتقسيم الفاتورة عبر QR، وتحليلات الطاولات."
                },
                {
                    heading: "أمرك أونلاين",
                    paragraph: "يشمل طلب ودفع عبر QR، الطلبات للاستلام أو عبر وسائل التواصل، توصيل منزلي، تحديد المناطق جغرافياً، مدفوعات إلكترونية، برامج الولاء، وقوائم طعام رقمية."
                },
                {
                    heading: "إدارة متطورة للمخزون",
                    paragraph: "تشمل المشتريات والموردين، مراقبة المخزون، إدارة المستودعات والمطابخ المركزية والسحابية، وإجراءات الموافقات."
                },
                {
                    heading: "العروض التسويقية",
                    paragraph: "تنفيذ العروض التسويقية المرنة، العروض الخاصة، والقسائم الرقمية."
                },
                {
                    heading: "بطاقات الهدايا",
                    paragraph: "تشمل بطاقات الهدايا الرقمية والفيزيائية لتشجيع ولاء العملاء."
                },
                {
                    heading: "شاشة المطبخ",
                    paragraph: "تنظيم أوامر المطبخ لتحسين الإنتاجية وتقليل الأخطاء."
                },
                {
                    heading: "شاشة الخدمة",
                    paragraph: "تسهيل التواصل بين النادل والمطبخ لتسريع الخدمة."
                },
                {
                    heading: "ورديات الموظفين",
                    paragraph: "تشمل إدارة سجلات حضور الموظفين وتحسين تسجيل ساعات العمل لزيادة الكفاءة."
                },
                {
                    heading: "صفحات ويب لنقاط البيع",
                    paragraph: "عرض معلومات متنوعة على شاشات الويب لتحسين تجربة البيع."
                },
                {
                    heading: "فواتير ZATCA",
                    paragraph: "تضم إصدار الفواتير المعتمدة من هيئة الزكاة والضريبة والجمارك السعودية (زاتكا) بما يتوافق مع المتطلبات القانونية."
                },
                {
                    heading: "وضع عدم الاتصال",
                    paragraph: "تضمن استمرار العمليات وإدارة المبيعات حتى في حالة انقطاع الإنترنت."
                },
                {
                    heading: "ووك توك مدمج",
                    paragraph: "يدعم التواصل السريع بين الموظفين في المطعم."
                },
                {
                    heading: "تنبيهات SMS للعملاء",
                    paragraph: "تشمل إرسال رسائل نصية تلقائية للتأكيد، التحديثات، أو العروض."
                },
                {
                    heading: "إدارة علاقات العملاء",
                    paragraph: "تشمل إدارة حسابات العملاء، تفضيلاتهم، وتحليل بياناتهم لتحسين خدماتهم."
                },
                {
                    heading: "لوحة تحليلات البيانات",
                    paragraph: "تشمل تحليل البيانات والأداء باستخدام تقارير مفصلة لتمكين اتخاذ قرارات استراتيجية."
                },
                {
                    heading: "واجهة الربط البرمجي",
                    paragraph: "تشمل تكاملات API المخصصة التي تربط المنصة مع أنظمة خارجية أخرى لزيادة المرونة."
                },
                {
                    heading: "ربط تطبيقات التوصيل",
                    paragraph: "تشمل ربط المنصة مع تطبيقات توصيل الطعام لتحسين الكفاءة والسرعة في إدارة الطلبات."
                }
            ]
        }
    }
];

export const contentData_en: BusinessContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Restaurants & Cafés",
            description: "Run Your Restaurant Efficiently, Boost Satisfaction",
            btnText: "Book a Demo",
            image: {
                src: RACHero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: {
                text: "Optimize all aspects of your operations from inventory to customer engagement with Amrk’s complete restaurant management platform.",
                highlited: "complete restaurant management"
            },
            listItems: [
                "Streamline order processing to reduce wait times and enhance customer satisfaction.",
                "Maintain precise inventory control to minimize waste and manage costs effectively.",
                "Facilitate quick, secure payments with integrated POS systems for smoother transactions.",
                "Track sales trends and menu performance to adjust offerings based on customer preferences.",
                "Automate loyalty programs to encourage repeat visits and build customer loyalty."
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
                    heading: "Menu Management",
                    paragraph: "Manage multiple menus, customize items, add new ones, and set special offers."
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
                    heading: "Advanced Inventory",
                    paragraph: "Includes purchasing and suppliers, inventory monitoring, management of central and cloud kitchens, and approval processes."
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
                    heading: "Kitchen Display",
                    paragraph: "Order organization ensures preparation accuracy and service speed."
                },
                {
                    heading: "Serving Screen",
                    paragraph: "Facilitates communication among team members by displaying orders and streamlining the service process."
                },
                {
                    heading: "Web Cashier",
                    paragraph: "Includes cashier, kitchen, and service screens to efficiently manage orders and enhance customer experience."
                },
                {
                    heading: "Employees Timecard",
                    paragraph: "Includes employee time tracking and shift scheduling for improved labor efficiency."
                },
                {
                    heading: "Walkie-Talkie",
                    paragraph: "Instant communication among staff for effective coordination and improved workflow."
                },
                {
                    heading: "Offline Mode",
                    paragraph: "Works offline for flexibility in managing operations."
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
