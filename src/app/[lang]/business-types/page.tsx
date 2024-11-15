import ImagesGrid from "@/src/components/business.-types/images-grid";
import PageHeader from "@/src/components/assets/page-header";
import PromoSection from "@/src/components/promotion-section/promotion-section";
import { Locale } from "@/src/i18n-config";
import { imagesGridContent, pageHeading, imagesGridContent_en, pageHeading_en, metedate } from "@/src/data/business-types/landing-page";
import { promoContent, promoContent_en } from "@/src/data/global/promo-text";

export async function generateMetadata(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const params = await props.params;
    const isEnglish = params.lang === 'en';

    const title = isEnglish ? metedate.title_en : metedate.title_ar;
    const description = isEnglish ? pageHeading_en.description : pageHeading.description;

    return {
        title: title,
        description: description
    }
}


export default async function BusinessTypes(props: {
    params: Promise<{ lang: Locale }>;
}) {

    const params = await props.params;
    const isEnglish = params.lang === 'en';

    const gridData = isEnglish ? imagesGridContent_en : imagesGridContent;
    const heading = isEnglish ? pageHeading_en : pageHeading;
    const promoContentToUse = isEnglish ? promoContent_en : promoContent;

    return(
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-[56px] md:gap-[160px] mt-10 mb-10 md:mt-[120px] md:mb-[120px]">
                <PageHeader title={heading.title} description={heading.description} />
                   
                <ImagesGrid content={gridData} />
            </div>
            <PromoSection content={promoContentToUse} />
        </section>
    );
}