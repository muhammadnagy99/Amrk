import R1Image from '@/public/business-types/image-1.png'
import R2Image from '@/public/business-types/image-2.png'
import R3Image from '@/public/business-types/image-3.png'
import R4Image from '@/public/business-types/image-4.png'
import R5Image from '@/public/business-types/image-5.png'
import R6Image from '@/public/business-types/image-6.png'
import R7Image from '@/public/business-types/image-7.png'
import R8Image from '@/public/business-types/image-8.png'

import ImageCardI from "./image-card-1";
import ImageCardII from './image-card-2'

const R1imageCards = [
    {
      imgSrc: R1Image,
      title: "مطاعم ومقاهي",
      description: "قم بتشغيل مطعمك بكفاءة ورفع مستوى رضا العملاء",
    },
    {
      imgSrc: R2Image,
      title: "مطابخ سحابية",
      description: "تبسيط عمليات العلامات التجارية المتعددة مع تكامل تطبيقات التوصيل",
    },
    {
      imgSrc: R3Image,
      title: "عربات الطعام",
      description: "تسهيل عمليات الطلب والدفع عبر نقاط بيع متوافقة مع الهواتف المحمولة",
    },
];

const R2imageCards = [
    {
      imgSrc: R4Image,
      title: "الخدمة السريعة",
      description: "تسريع الخدمة وتبسيط العمليات لتحقيق كفاءة أفضل وتجربة عملاء محسنة",
    },
    {
      imgSrc: R5Image,
      title: "الخدمة على الطاولة",
      description: "تحسين تجربة الضيوف من خلال خدمة طاولات سلسة",
    },
  ];

  
const R3imageCards = [
    {
      imgSrc: R6Image,
      title: "توريد الطعام",
      description: "تنظيم الفعاليات بدقة وموثوقية لضمان تجربة سلسة واحترافية",
    },
    {
      imgSrc: R7Image,
      title: "مانحي الامتياز",
      description: "التوحيد والتوسع عبر المواقع المتعددة لضمان اتساق العمليات وجودة الخدمة",
    },
    {
      imgSrc: R8Image,
      title: "قطاعات التجزئة",
      description: "تحسين عمليات البيع بالتجزئة عبر نقاط البيع المتكاملة وإدارة المخزون",
    },
  ];
  


export default function ImagesGrid() {
    return(
        <div className="flex flex-col w-full gap-[24px]">
            <div className="flex flex-col md:flex-row w-full justify-between gap-6">
                {R1imageCards.map((card, index) => (
                    <ImageCardI 
                    key={index} 
                    imgSrc={card.imgSrc} 
                    title={card.title} 
                    description={card.description} 
                    />
                ))}
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between gap-6">
                {R2imageCards.map((card, index) => (
                    <ImageCardII 
                    key={index} 
                    imgSrc={card.imgSrc} 
                    title={card.title} 
                    description={card.description} 
                    />
                ))}
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between gap-6">
                {R3imageCards.map((card, index) => (
                    <ImageCardI 
                    key={index} 
                    imgSrc={card.imgSrc} 
                    title={card.title} 
                    description={card.description} 
                    />
                ))}
            </div>
        </div>
    );
}