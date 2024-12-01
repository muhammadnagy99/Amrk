import { StaticImageData } from "next/image";
import PostCard from "../blog/post-card";

interface BlogGridProps {
    postCardsData: {
        id: number;
        imageSrc: StaticImageData;
        heading: string;
        paragraph: string;
        searchKey: string;
    }[];
    lang: string
}

export default function PostSuggestions({ postCardsData, lang }: BlogGridProps) {

    const text = lang == "en" ? 'More Blogs' : 'المزيد من المقالات ';
    
    return(
        <div className="flex flex-col w-full gap-[24px]">
            <h2 className="flex text-2xl xl:text-[32px] md:text-4xl font-bold text-primText leading-[1.5]">
                 {text}   
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                {postCardsData.map((post) => (
                    <PostCard
                        key={post.id}
                        imageSrc={post.imageSrc}
                        heading={post.heading}
                        paragraph={post.paragraph}
                        searchKey={post.searchKey}
                        lang={lang}
                    />
                ))}
            </div>
        </div>
    );
}