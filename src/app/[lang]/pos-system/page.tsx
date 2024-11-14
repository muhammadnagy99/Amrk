import PromoSection from "@/src/components/promotion-section/promotion-section";
import BulletPoints from "@/src/components/services/bullet-points";
import ServiceHero from "@/src/components/services/hero";
import ServiceSummary from "@/src/components/services/service-summary";
import { Locale } from "@/src/i18n-config";

import { promoContent } from "@/src/data/global/promo-text";
import { contentData } from "@/src/data/RMS/pos";


export default async function PosPage(props: {
    params: Promise<{ lang: Locale }>;
  }) {
    const params  = await props.params;
    
    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-10 md:gap-[120px] mt-12 md:mt-[120px] mb-[80px]">
                {contentData.map((content, index) => {
                    switch (content.type) {
                        case "ServiceHero":
                            return <ServiceHero key={index} {...content.props} />;
                        case "BulletPoints":
                            return <BulletPoints key={index} {...content.props} />;
                        case "ServiceSummary":
                            return <ServiceSummary key={index} {...content.props} />;
                        default:
                            return null;
                    }
                })}
            </div>
            <PromoSection content={promoContent} />
        </section>
    );
}