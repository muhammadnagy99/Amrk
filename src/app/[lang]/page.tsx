import HomeMain from "@/src/components/home-main/home-main";
import { Locale } from "@/src/i18n-config";

import { heroContent, heroContent_en } from "@/src/data/home/hero-content";

import {
  sectionData,
  sectionHeading,
  sectionData_en,
  sectionHeading_en,
} from "@/src/data/home/section-one-data";

import {
  sectionData as sectionTwoData,
  sectionHeading as sectionTwoHeading,
  sectionData_en as sectionTwoData_en,
  sectionHeading_en as sectionTwoHeading_en,
} from "@/src/data/home/section-two-data";

import {
  sectionThreeHeadingContent,
  sectionThreeCollapseText,
  articlesData,
  sectionThreeHeadingContent_en,
  sectionThreeCollapseText_en,
  articlesData_en,
} from "@/src/data/home/section-three-data";

import { promoContent, promoContent_en } from "@/src/data/global/promo-text";

export default async function Home(props: { params: Promise<{ lang: Locale }> }) {
  const params = await props.params;

  const isEnglish = params.lang === 'en';

  const homeContent = {
    heroContent: isEnglish ? heroContent_en : heroContent,
    sectionOneContent: {
      sectionData: isEnglish ? sectionData_en : sectionData,
      sectionHeading: isEnglish ? sectionHeading_en : sectionHeading,
    },
    sectionTwoContent: {
      sections: isEnglish ? sectionTwoData_en : sectionTwoData,
      headerInfo: isEnglish ? sectionTwoHeading_en : sectionTwoHeading,
    },
    sectionThreeContent: {
      headingContent: isEnglish ? sectionThreeHeadingContent_en : sectionThreeHeadingContent,
      articles: isEnglish ? articlesData_en : articlesData,
      collapseText: isEnglish ? sectionThreeCollapseText_en : sectionThreeCollapseText,
    },
    promoContent: isEnglish ? promoContent_en : promoContent, 
  };

  return (
    <>
      <HomeMain homeContent={homeContent} />
    </>
  );
}
