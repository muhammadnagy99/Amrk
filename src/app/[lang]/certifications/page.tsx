import PrimaryLine from "@/components/assets/primary-line";
import CertificatoinHeading from "@/components/certifications/heading";
import SectionI from "@/components/certifications/section-1";
import SectionII from "@/components/certifications/section-2";
import SectionIII from "@/components/certifications/section-3";
import SectionIV from "@/components/certifications/section-4";
import SectionV from "@/components/certifications/section-5";
import SectionVII from "@/components/certifications/section-7";
import SectionVI from "@/components/certifications/section-6";
import PromoSection from "@/components/promotion-section/promotion-section";
import { promoContent } from "@/data/global/promo-text";
import { sectionIContent, sectionIIContent, sectionIIIContent, sectionIVContent, sectionVContent, sectionVIContent, sectionVIIContent } from "@/data/certifications/cert-data";

export default function CertificationsPage() {

    return(
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between items-center gap-10 mt-10 mb-10 md:gap-[120px] md:mt-[120px] md:mb-[80px]">
                <CertificatoinHeading />
                <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-8 md:gap-[80px]">
                    <SectionI content={sectionIContent} />
                    <SectionII content={sectionIIContent} />
                    <SectionIII content={sectionIIIContent} />
                    <PrimaryLine />
                    <SectionIV content={sectionIVContent}/>
                    <PrimaryLine />
                    <SectionV content={sectionVContent} />
                    <PrimaryLine />
                    <SectionVI content={sectionVIContent} />
                    <PrimaryLine />
                    <SectionVII content={sectionVIIContent} />
                </div>
            </div>
            <PromoSection content={promoContent} />
        </section>
    );
}