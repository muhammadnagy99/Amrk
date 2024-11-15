import Main from "@/src/components/pricing/main-page";
import { Locale } from "@/src/i18n-config";
import { PricingData, PricingData_en, metadata } from "@/src/data/pricing/pricing-data";
import { promoContent, promoContent_en } from "@/src/data/global/promo-text";

export async function generateMetadata(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const params = await props.params;
    const isEnglish = params.lang === 'en';

    const pageData = isEnglish ? PricingData_en : PricingData;
    const title = isEnglish ? metadata.title_en : metadata.title_ar;
    const description = pageData.heading.description;

    return {
        title: title,
        description: description
    }
}

export default async function Pricing(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const params = await props.params;
    const isEnglish = params.lang === 'en';

    const pageData = isEnglish ? PricingData_en : PricingData;
    const promoData = isEnglish ? promoContent_en : promoContent;


    return(
        <Main heading={pageData.heading} packagesData={pageData.packages} accordionData={pageData.accordion} promoContent={promoData} lang={params.lang} />
    );
}