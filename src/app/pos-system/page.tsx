import PromoSection from "@/src/components/promotion-section/promotion-section";
import BulletPoints from "@/src/components/services/bullet-points";
import ServiceHero from "@/src/components/services/hero";
import ServiceSummary from "@/src/components/services/service-summary";
import { ServicesContentType } from "@/src/types/interfaces";

import PosHero from '@/public/rms/pos/pos-hero.png';
import PosScreen from '@/public/rms/pos/pos-screen.png';
import PosIcon1 from "@/src/app/pos-system/icons/1";
import PosIcon2 from "@/src/app/pos-system/icons/2";
import PosIcon3 from "@/src/app/pos-system/icons/3";

const contentData: ServicesContentType[] = [
    {
        type: "ServiceHero",
        props: {
            heading: "نظام نقاط البيع",
            description: "إدارة الطلبات بسهولة وكفاءة لتحسين العمليات",
            image: {
                src: PosHero,
                alt: "Amrk Restaurant Systems"
            }
        }
    },
    {
        type: "BulletPoints",
        props: {
            heading: "أسهل نظام نقاط بيع لمعالجة الطلبات بسرعة!",
            listItems: [
                { icon: <PosIcon1 />, text: "واجهة سهلة الاستخدام للمعاملات السريعة." },
                { icon: <PosIcon2 />, text: "تكامل سلس مع باقي خدمات المطعم." },
                { icon: <PosIcon3 />, text: "تكامل سلس مع أجهزة الدفع." }
            ]
        }
    },
    {
        type: "ServiceSummary",
        props: {
            imageSrc: PosScreen,
            heading: "نتائج معالجة الطلبات من أي جهاز، متصل أو غير متصل",
            listItems: [
                "تقليل متوسط وقت ادخال الطلبات بعد تنفيذ أمرك POS.",
                "زيادة سرعة معالجة الطلبات لكل موظف خلال ساعات الذروة.",
                "تقليل الأخطاء للطلبات الملغاة او المعدلة لوجود آلية سير عمل الكترونية.",
                "نسبة عالية لوقت التشغيل تصل الى 99.99% دون انقطاع، لضمان أعلى قدر لتوفر الخدمة."
            ]
        }
    }
];

export default function PosPage() {
    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-10 md:gap-[120px] mt-12 md:mt-[120px] mb-[80px]">
                {contentData.map((content, index) => {
                    switch (content.type) {
                        case "ServiceHero":
                            return <ServiceHero key={index} {...content.props} />;
                        case "BulletPoints":
                            return <BulletPoints key={index} {...content.props} />;
                        case "ServiceSummary":
                            return <ServiceSummary key={index} {...content.props} />;
                        default:
                            return null;
                    }
                })}
            </div>
            <PromoSection />
        </section>
    );
}
