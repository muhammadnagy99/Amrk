import PostCard from "./post-card";
import { StaticImageData } from 'next/image';

interface BlogGridProps {
    postCardsData: {
        id: number;
        imageSrc: StaticImageData;
        heading: string;
        paragraph: string;
        content: string;
    }[];
}

export default function BlogGrid({ postCardsData }: BlogGridProps) {
    return (
        <div className="grid grid-cols-3 gap-[24px] w-full">
            {postCardsData.map((post) => (
                <PostCard
                    key={post.id}
                    imageSrc={post.imageSrc}
                    heading={post.heading}
                    paragraph={post.paragraph}
                />
            ))}
        </div>
    );
}
