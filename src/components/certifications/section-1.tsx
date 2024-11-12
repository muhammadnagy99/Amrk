import Image from "next/image";
import C1 from '@/public/certifications/p1.png'
export default function SectionI() {
    return(
        <div className="flex flex-col md:flex-row w-full justify-between gap-4 md:h-[193px]">
            <div className="w-full md:w-[30%] flex justify-center">
                <Image
                    src={C1}
                    width={384}
                    height={193}
                    alt={`This is alt text`}
                    placeholder="blur"
                    priority={false}
                />
            </div>
            
            <div className="flex justify-center items-center w-full md:w-[55%] h-full">
                <p className="text-base md:text-xl text-primText font-normal">
                    يُعد نظام أمـركـ مزود خدمة مؤهل ومعتمد من هيئة الزكاة والضريبة والجمارك السعودية، وذلك لتقديم خدمات الفوترة الإلكترونية للمرحلتين الأولى والثانية من الفوترة الإلكترونية.
                </p>
            </div>
        </div>
    );
}