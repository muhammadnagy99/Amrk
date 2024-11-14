import ServiceHero from "@/components/services/hero";
import PromoSection from "@/components/promotion-section/promotion-section";
import BusinessBulletPoints from "@/components/business.-types/details-components/bullet-points";
import ServicesDetails from "@/components/business.-types/details-components/service-details";

import { promoContent } from "@/data/global/promo-text";
import { contentData } from "@/data/business-types/restaurants-cafes";




export default function PosPage() {
    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-10 md:gap-[120px] mt-12 md:mt-[120px] mb-[80px]">
                {contentData.map((content, index) => {
                        switch (content.type) {
                            case "ServiceHero":
                                return <ServiceHero key={index} {...content.props} />;
                            case "BulletPoints":
                                return <BusinessBulletPoints key={index} {...content.props} />;
                            case "ServiceDetails":
                                return <ServicesDetails key={index} {...content.props} />;
                            default:
                                return null;
                        }
                    })}
            </div>
            <PromoSection content={promoContent}/>
        </section>
    );
}
