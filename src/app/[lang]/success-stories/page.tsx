
import SuccessHeading from "@/src/components/success-stories/heading";
import StoryGrid from "@/src/components/success-stories/stories-grid";

import { successHeadingContent, successHeadingContent_en } from "@/src/data/success-stories/data";
import stories_ar from "@/src/data/success-stories/success-stories_ar.json";
import stories_en from "@/src/data/success-stories/success-stories_en.json";
import { Locale } from "@/src/i18n-config";


import thumbnail1 from '@/public/blog/thumbnails/sp1.png';
import thumbnail2 from '@/public/blog/thumbnails/sp2.png';
import thumbnail3 from '@/public/blog/thumbnails/sp3.png';
import thumbnail4 from '@/public/blog/thumbnails/sp4.png';
import thumbnail5 from '@/public/blog/thumbnails/sp5.png';
import thumbnail6 from '@/public/blog/thumbnails/sp6.png';
import thumbnail7 from '@/public/blog/thumbnails/sp7.png';
import thumbnail8 from '@/public/blog/thumbnails/sp8.png';
import thumbnail9 from '@/public/blog/thumbnails/sp9.png';
import thumbnail10 from '@/public/blog/thumbnails/sp10.png';

const thumbnails = [
    thumbnail1,
    thumbnail2,
    thumbnail3,
    thumbnail4,
    thumbnail5,
    thumbnail6,
    thumbnail7,
    thumbnail8,
    thumbnail9,
    thumbnail10
];



export default function SuccessesPage({ params }: { params: { lang: Locale } }) {
    const { lang } = params;
    const isEnglish = lang === 'en';


    const StoriessData = isEnglish ? stories_en : stories_ar;
    const heading = isEnglish ? successHeadingContent_en : successHeadingContent;

    const StoryGridProps = StoriessData.map((post, index) => ({
        ...post,
        imageSrc: thumbnails[index]
    }));
    

    return(
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] md:max-w-[1200px] justify-between gap-[120px] mt-[120px] mb-[80px]">
                <SuccessHeading {...heading} />
                <StoryGrid StoryGridProps={StoryGridProps} />
            </div>
        </section>
    );
}