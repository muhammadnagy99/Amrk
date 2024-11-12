import PrimaryLine from "@/src/components/assets/primary-line";
import FieldList from "@/src/components/certifications/field-list";
import CertificatoinHeading from "@/src/components/certifications/heading";
import SectionI from "@/src/components/certifications/section-1";
import SectionII from "@/src/components/certifications/section-2";
import SectionIII from "@/src/components/certifications/section-3";
import SectionIV from "@/src/components/certifications/section-4";
import SectionV from "@/src/components/certifications/section-5";
import SectionVII from "@/src/components/certifications/section-7";
import SectionVI from "@/src/components/certifications/sectoin-6";
import PromoSection from "@/src/components/promotion-section/promotion-section";

export default function CertificationsPage() {
    return(
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between items-center gap-10 mt-10 mb-10 md:gap-[120px] md:mt-[120px] md:mb-[80px]">
                <CertificatoinHeading />
                <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-8 md:gap-[80px]">
                    <SectionI />
                    <SectionII />
                    <SectionIII />
                    <PrimaryLine />
                    <SectionIV />
                    <PrimaryLine />
                    <SectionV />
                    <PrimaryLine />
                    <SectionVI />
                    <PrimaryLine />
                    <SectionVII />
                </div>
            </div>
            <PromoSection />
        </section>
    );
}