import { StaticImageData } from "next/image";
import PostCard from "../blog/post-card";

interface BlogGridProps {
    postCardsData: {
        id: number;
        imageSrc: StaticImageData;
        heading: string;
        paragraph: string;
        content: string;
        searchKey: string;
    }[];
}

export default function PostSuggestions({ postCardsData }: BlogGridProps) {
    return(
        <div className="flex flex-col w-full gap-[24px]">
            <h2 className="flex xl:text-[32px] text-4xl font-bold text-primText leading-[1.5]">
                المزيد من المقالات  
            </h2>
            <div className="grid grid-cols-3 gap-[24px] w-full">
                {postCardsData.map((post) => (
                    <PostCard
                        key={post.id}
                        imageSrc={post.imageSrc}
                        heading={post.heading}
                        paragraph={post.paragraph}
                        searchKey={post.searchKey}

                    />
                ))}
            </div>
        </div>
    );
}