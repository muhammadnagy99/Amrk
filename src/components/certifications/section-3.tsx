
export default function SectionIII() {
    return(
        <div className="flex flex-row justify-between w-full h-auto">
            <div className="flex items-start w-[40%]">
                <h2 className="text-[32px] font-semibold text-primText">
                    دعم الفوترة الإلكترونية لمساعدتك في التحول الرقمي
                </h2>
            </div>

            <div className="flex flex-col justify-between gap-8 items-start w-[40%]">
                <p className="text-primText text-base font-normal">
                تقدم هيئة الزكاة والضريبة والجمارك برنامج
                &nbsp;
                <strong className="text-PrimBtn">
                    دعم الفوترة الإلكترونية 
                </strong>
                &nbsp;
                وهو دعم مالي للمنشآت الصغيرة والمتوسطة، الخاضعة للائحة الفوترة الإلكترونية. بحيث يصل الدعم المالي إلى 2,500 ريال للمنشأة الواحدة، لتشجيع المنشآت للتحويل الرقمي للفوترة.
                </p>
                <p className="text-primText text-xs font-normal">
                    يمكن للمنشآت التقدم للحصول على الدعم عبر بوابة هيئة الزكاة والضريبة والجمارك.
                </p>
            </div>
        </div>
    );
}