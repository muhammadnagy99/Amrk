'use client'

import SuccessHeading from "@/src/components/success-stories/heading";
import StoryGrid from "@/src/components/success-stories/stories-grid";
import StoriessData from "@/src/data/success-stories.json";


export default function SuccessesPage(){

    const StoryGridProps = StoriessData.map((post, index) => ({
        ...post,
        imageSrc: require(`@/public/blog/thumbnails/sp${index+1}.png`) 
    }));

    return(
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-special md:w-[95%] justify-between gap-[120px] mt-[120px] mb-[80px]">
                <SuccessHeading />
                <StoryGrid StoryGridProps={StoryGridProps} />
            </div>
        </section>
    );
}