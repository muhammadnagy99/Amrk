import { StaticImageData } from "next/image";
import ServiceHero from "@/src/components/success-stories/posts/hero";
import RowDotted from "@/src/components/success-stories/posts/row-dotted";
import RowDottedWithIntro from "@/src/components/success-stories/posts/row-dotted-normal";
import RowNumbered from "@/src/components/success-stories/posts/row-numbered";
import RowHighlited from "@/src/components/success-stories/posts/row-highlited";
import { Locale } from "@/src/i18n-config";
import stories_ar from "@/src/data/success-stories/success-stories_ar.json";
import stories_en from "@/src/data/success-stories/success-stories_en.json";

import Row from "@/src/components/success-stories/posts/row";
import Testmonial from "@/src/components/success-stories/posts/testomonial";
interface PageProps {
  params: Promise<{ slug: string }>;
}

interface heroDetails {
  heading: string;
  description: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
}

type Params = Promise<{ lang: Locale, slug: string }>

export default async function PostPage({ params }: { params: Params}) {
  const { lang, slug } = await params;
  const isEnglish = lang === 'en';

  const StoriessData = isEnglish ? stories_en : stories_ar;
  const currentStory = StoriessData.find((story) => story.searchKey === slug);

  if (!currentStory) {
    return <div>Post not found</div>;
  }

  const storyData = (
    await import(`@/src/data/success-stories/s${currentStory.id}_${lang}.tsx`)
  ).default;

  let testmonial;
  try {
    testmonial = (
      await import(`@/src/data/success-stories/s${currentStory.id}_${lang}.tsx`)
    ).quote;
  } catch (error) {
    console.error("Testimonial not found:", error);
    testmonial = null;
  }

  const storyCover = (
    await import(`@/public/blog/stories/posts/p${currentStory.id}.png`)
  ).default;

  const heroData: heroDetails = {
    heading: currentStory.name,
    description: currentStory.heading,
    image: {
      src: storyCover,
      alt: currentStory.name,
    },
  };

  return (
    <section
      className="flex flex-col justify-center items-center w-full"
      aria-labelledby="Amrk-Business-Types"
    >
      <div className="flex flex-col items-center w-[88%] md:max-w-[1200px] justify-between gap-[48px] mt-[64px] mb-[64px] md:gap-[68px] md:mt-[120px] md:mb-[80px]">
        <ServiceHero {...heroData} />

        <div className="flex flex-col w-full">
          {storyData.map((row: any, index: number) => {
            switch (row.type) {
              case "normalRow":
                return <Row key={index} {...row.props} />;
              case "highlightedRow":
                return <RowHighlited key={index} {...row.props} />;
              case "rowDottedWithIntro":
                return <RowDottedWithIntro key={index} {...row.props} />;
              default:
                return null;
            }
          })}
        </div>
        {testmonial && (
          <Testmonial qoute={testmonial.qoute} person={testmonial.person} lang={lang} />
        )}
      </div>
    </section>
  );
}
