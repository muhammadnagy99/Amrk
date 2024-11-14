import PromoSection from "../promotion-section/promotion-section";
import MainHero from "./home-hero/main-hero";
import HomeSectionI from "./home-section-I/home-section-I";
import HomeSectionII from "./home-section-II/home-section-II";
import HomeSectionIII from "./home-section-III/home-section-III";

import { sectionData, sectionHeading } from "@/src/data/home/section-one-data"; 
import { sectionData as sectionTwoData, sectionHeading as sectionTwoHeading } from "@/src/data/home/section-two-data"; 
import { articlesData } from '../../data/home/section-three-data';

type HomeContentProps = {
  heroContent: {
    headingText: string;
    heroText: string[];
    links: {
      primaryLink: string;
      secondaryLink: string;
      footerLink: string;
    };
  };
  sectionOneContent: {
    sectionData: typeof sectionData;
    sectionHeading: typeof sectionHeading;
  };
  sectionTwoContent: {
    sections: typeof sectionTwoData;
    headerInfo: typeof sectionTwoHeading;
  };
  sectionThreeContent: {
    headingContent: {
      title: string;
      description: string;
    };
    articles: typeof articlesData;
    collapseText: {
      showMore: string;
      showLess: string;
    };
  };
  promoContent: {
    heading: string;
    buttonText: string;
    buttonLink: string;
  };
};

export default function HomeMain({ homeContent }: { homeContent: HomeContentProps }) {
  const { heroContent, sectionOneContent, sectionTwoContent, sectionThreeContent, promoContent } = homeContent;

  return (
    <main className="flex flex-col justify-center items-center w-full gap-10 md:gap-14 lg:gap-[80px]">
      <MainHero heroContent={heroContent} />
      <HomeSectionI sectionContent={sectionOneContent} />
      <HomeSectionII sectionContent={sectionTwoContent} />
      <HomeSectionIII sectionContent={sectionThreeContent} />
      <PromoSection content={promoContent} />
    </main>
  );
}
