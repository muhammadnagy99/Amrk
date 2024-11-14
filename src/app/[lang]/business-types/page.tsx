import ImagesGrid from "@/components/business.-types/images-grid";
import PageHeader from "@/components/assets/page-header";
import PromoSection from "@/components/promotion-section/promotion-section";
import { promoContent } from "@/data/global/promo-text";
import { imagesGridContent, pageHeading } from "@/data/business-types/landing-page";

export default function BusinessTypes() {
    return(
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-[56px] md:gap-[160px] mt-10 mb-10 md:mt-[120px] md:mb-[120px]">
                <PageHeader title={pageHeading.title} description={pageHeading.description} />
                   
                <ImagesGrid content={imagesGridContent} />
            </div>
            <PromoSection content={promoContent} />
        </section>
    );
}