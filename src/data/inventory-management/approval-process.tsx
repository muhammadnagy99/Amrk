import { ServicesContentType } from "@/src/types/interfaces";
import Hero from '@/public/inventory-management/ap/hero.png';
import Screen from '@/public/inventory-management/ap/screen.png';
import Screen_en from '@/public/inventory-management/ap/screen_en.png';
import { IconApprovalEase, IconErrorReduction, IconInstantNotification } from './icons';

export const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "صلاحيات الموافقات الإلكترونية",
            description: "تبسيط عمليات الموافقات على المشتريات المختلفة",
            btnText: "احجز موعداً للتجربة",
            image: {
                src: Hero,
                alt: "صلاحيات الموافقات الإلكترونية"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "تعيين أذونات لمراقبة الموافقات",
            listItems: [
                { icon: <IconApprovalEase />, text: "موافقات سهلة للمشترين." },
                { icon: <IconErrorReduction />, text: "تقليل الأخطاء والإهدار في المشتريات." },
                { icon: <IconInstantNotification />, text: "إشعارات فورية للتنبيهات والإجراءات." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen,
            heading: "ضمان التحكم الأمثل في عمليات الشراء من خلال إدارة فعالة",
            listItems: [
               "منع المشتريات غير المصرح بها بفضل التحكم في الموافقات والأذونات.",
               "تسريع أوقات الموافقة بفضل الأذونات الآلية.",
               "رفع مستوى الرقابة على المشتريات بفضل تتبع عمليات الشراء ونقل المخزون بين المواقع.",
               "تقليل الإفراط في الإنفاق من خلال الموافقات المنضبطة على المشتريات."
            ]
        }
    }
];

export const contentData_en: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "Approval Process",
            description: "Streamline Your Permissions Process",
            btnText: "Book a Demo",
            image: {
                src: Hero,
                alt: "Approval Process Screen"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "Assign permissions to monitor approvals",
            listItems: [
                { icon: <IconApprovalEase />, text: "Controlled purchasing approvals." },
                { icon: <IconErrorReduction />, text: "Clear oversight of procurement activities." },
                { icon: <IconInstantNotification />, text: "Eliminate unauthorized purchases." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: Screen_en,
            heading: "Ensure optimal control over purchasing through effective management",
            listItems: [
                "Eliminate unauthorized purchases with improved approval control.",
                "Faster approval times with automated permissions.",
                "Increase in procurement accountability through detailed tracking.",
                "Decrease in overspending through controlled purchase approvals."
            ]
        }
    }
];
