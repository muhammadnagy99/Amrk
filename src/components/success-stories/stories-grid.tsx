import StroryCard from "./story-card";
import { StoryGridProps } from "@/src/types/interfaces";


export default function StoryGrid({ StoryGridProps }: StoryGridProps) {
    return (
        <div className="grid grid-cols-2 gap-[24px] w-full">
            {StoryGridProps.map((story) => (
                <StroryCard
                    key={story.id}
                    imageSrc={story.imageSrc}
                    heading={story.heading}
                    paragraph={story.paragraph}
                    searchKey={story.searchKey}
                />
            ))}
        </div>
    );
}
