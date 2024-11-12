import ImagesGrid from "@/src/components/business.-types/images-grid";
import PageHeader from "@/src/components/assets/page-header";
import PromoSection from "@/src/components/promotion-section/promotion-section";

export default function BusinessTypes() {
    return(
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-[56px] md:gap-[160px] mt-10 mb-10 md:mt-[120px] md:mb-[120px]">
                <PageHeader
                    title="حلول مصممة خصيصاً لمطعمك"
                    description="استكشف مجموعة واسعة من الحلول المتنوعة والمتخصصة التي تلبي احتياجات مختلف أنواع الأعمال، مما يمكّنك من تحسين الكفاءة، وتلبية المتطلبات المتزايدة، وتحقيق نمو سلس ومستدام."
                /> 
                <ImagesGrid />
            </div>
            <PromoSection />
        </section>
    );
}