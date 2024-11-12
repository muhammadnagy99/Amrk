import Image from "next/image";
import C2 from '@/public/certifications/p2.png'
export default function SectionIV() {
    return(
        <div className="flex flex-col-reverse md:flex-row justify-between gap-4 w-full md:h-[260px]">
            <div className="flex justify-center items-center w-full md:w-[55%] h-full">
                <p className="text-base md:text-xl text-primText font-normal">
                    نظام أمـركـ مسجل كمنتج تقني محلي حسب تصنيف هيئة الاتصالات والفضاء والتقنية السعودية، حيث تفخر أمـركـ كونها شركة سعودية قامت بتصميم وتطوير تقنيتها محلياً. وتم ادراجها في دليل المنتجات التقنية المحلية.
                </p>
            </div>

            <div className="w-full md:w-[30%]">
                <Image
                    src={C2}
                    width={384}
                    height={260}
                    alt={`This is alt text`}
                    placeholder="blur"
                    priority={false}
                />
            </div>
            
        </div>
    );
}