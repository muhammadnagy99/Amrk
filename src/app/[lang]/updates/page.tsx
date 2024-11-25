import Main from "@/src/components/pricing/main-page";
import { Locale } from "@/src/i18n-config";
import UpdatesNotes from "@/src/components/updates/updates-card";
import PromoSection from "@/src/components/promotion-section/promotion-section";
import CertificationHeading from "@/src/components/certifications/heading";

import { updatesHeading, updatesHeading_en } from "@/src/data/updates/data";
import { updateData, updateData_en } from "@/src/data/updates/data";
import { promoContent, promoContent_en } from "@/src/data/global/promo-text";

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const isEnglish = params.lang === "en";

  const pageData = isEnglish ? updatesHeading_en : updatesHeading;

  return {
    title: pageData.pageTitle,
    description: pageData.subtitle,
  };
}


export default async function Pricing(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const isEnglish = params.lang === "en";
  const heading = isEnglish ? updatesHeading_en : updatesHeading;
  const data = isEnglish ? updateData_en : updateData;
  const promoData = isEnglish ? promoContent_en : promoContent;

  return (
    <section
      className="flex flex-col justify-center items-center w-full"
      aria-labelledby="Amrk-Business-Types"
    >
      <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-10 md:gap-[120px] mt-12 md:mt-[120px] mb-[80px]">
        <CertificationHeading title={heading.title} description={heading.subtitle} />
        <div className="flex flex-col gap-8">
            {data.map(update => (
                    <UpdatesNotes version={update.version} title={update.title} description={update.description} />
            ))}
        </div>
      </div>
      <PromoSection content={promoData} />
    </section>
  );
}
