import PromoSection from "@/src/components/promotion-section/promotion-section";
import BulletPoints from "@/src/components/services/bullet-points";
import ServiceHero from "@/src/components/services/hero";
import ServiceSummary from "@/src/components/services/service-summary";
import { Locale } from "@/src/i18n-config";

import { promoContent, promoContent_en } from "@/src/data/global/promo-text";
import { contentData, contentData_en } from "@/src/data/cloud-kitchen-system/kitchen-navigator";

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const isEnglish = params.lang === 'en';

  const metaData = isEnglish
      ? contentData_en.find(item => item.type === "ServiceHero")
      : contentData.find(item => item.type === "ServiceHero");

  if (!metaData) {
      throw new Error("Metadata not found");
  }

  const { heading: title, description, image } = metaData.props;

  return {
      title,
      description,
      openGraph: {
          title,
          description,
          images: [
              {
                  url: image.src.src,
                  alt: image.alt,
              },
          ],
          type: 'website',
      },
      twitter: {
          card: 'summary_large_image',
          title,
          description,
          image: image.src,
      },
  };
}


export default async function KitchenNavigatorPage(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const params = await props.params;
    const isEnglish = params.lang === 'en';

    const contentDataToUse = isEnglish ? contentData_en : contentData;
    const promoContentToUse = isEnglish ? promoContent_en : promoContent;

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-10 md:gap-[120px] mt-12 md:mt-[120px] mb-[80px]">
            {contentDataToUse.map((content, index) => {
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
            <PromoSection content={promoContentToUse} />
        </section>
    );
}