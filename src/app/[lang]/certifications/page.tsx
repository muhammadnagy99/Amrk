import { Locale } from "@/src/i18n-config";
import PrimaryLine from "@/src/components/assets/primary-line";
import CertificatoinHeading from "@/src/components/certifications/heading";
import SectionI from "@/src/components/certifications/section-1";
import SectionII from "@/src/components/certifications/section-2";
import SectionIII from "@/src/components/certifications/section-3";
import SectionIV from "@/src/components/certifications/section-4";
import SectionV from "@/src/components/certifications/section-5";
import SectionVII from "@/src/components/certifications/section-7";
import SectionVI from "@/src/components/certifications/section-6";
import PromoSection from "@/src/components/promotion-section/promotion-section";
import { certficatoinData, certficatoinData_en, metadata } from "@/src/data/certifications/cert-data";
import { promoContent, promoContent_en } from "@/src/data/global/promo-text";

export async function generateMetadata(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const params = await props.params;
    const isEnglish = params.lang === 'en';

    const cerData = isEnglish ? certficatoinData_en : certficatoinData;
    const title = isEnglish ? metadata.title_en : metadata.title_ar;
    const description = cerData.heading.description;

    return {
        title: title,
        description: description
    }
}

export default async function CertificationsPage(props: {
    params: Promise<{ lang: Locale }>;
}) {

    const params = await props.params;
    const isEnglish = params.lang === 'en';

    const cerData = isEnglish ? certficatoinData_en : certficatoinData;
    const promoContentToUse = isEnglish ? promoContent_en : promoContent;

    return(
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between items-center gap-10 mt-10 mb-10 md:gap-[120px] md:mt-[120px] md:mb-[80px]">
                <CertificatoinHeading title={cerData.heading.title} description={cerData.heading.description} />
                <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-8 md:gap-[80px]">
                    <SectionI content={cerData.section1} />
                    <SectionII content={cerData.section2} />
                    <SectionIII content={cerData.section3} />
                    <PrimaryLine />
                    <SectionIV content={cerData.section4}/>
                    <PrimaryLine />
                    <SectionV content={cerData.section5} />
                    <PrimaryLine />
                    <SectionVI content={cerData.section6} />
                    <PrimaryLine />
                    <SectionVII content={cerData.section7} />
                </div>
            </div>
            <PromoSection content={promoContentToUse} />
        </section>
    );
}