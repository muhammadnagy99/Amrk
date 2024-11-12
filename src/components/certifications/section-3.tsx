
export default function SectionIII() {
    return(
        <div className="flex flex-col md:flex-row justify-between gap-4 w-full h-auto">
            <div className="flex items-start w-full md:w-[40%]">
                <h2 className="text-xl md:text-[32px] font-semibold text-primText md:leading-[3.5rem]">
                    دعم الفوترة الإلكترونية لمساعدتك في التحول الرقمي
                </h2>
            </div>

            <div className="flex flex-col justify-between gap-8 items-start w-full md:w-[40%]">
                <p className="text-primText text-xl md:text-base font-normal">
                تقدم هيئة الزكاة والضريبة والجمارك برنامج
                &nbsp;
                <strong className="text-PrimBtn font-medium">
                    دعم الفوترة الإلكترونية 
                </strong>
                &nbsp;
                وهو دعم مالي للمنشآت الصغيرة والمتوسطة، الخاضعة للائحة الفوترة الإلكترونية. بحيث يصل الدعم المالي إلى 2,500 ريال للمنشأة الواحدة، لتشجيع المنشآت للتحويل الرقمي للفوترة.
                </p>
                <p className="text-primText text-sm md:text-xs font-normal">
                    يمكن للمنشآت التقدم للحصول على الدعم عبر بوابة هيئة الزكاة والضريبة والجمارك.
                </p>
            </div>
        </div>
    );
}