import Image, { StaticImageData } from 'next/image';
import PostProps from './post-props';

interface PostCardProps {
    imageSrc: StaticImageData;
    heading: string;
    paragraph: string;
}

export default function PostCard({ imageSrc, heading, paragraph }: PostCardProps) {
    return (
        <div className="flex flex-col gap-[24px] h-[480px] post-card rounded-[16px]">
            <Image
                src={imageSrc}
                width={384}
                height={240}
                alt={heading}
                placeholder="blur"
                priority={false}
            />
            <div className="flex flex-col gap-[28px] pr-4 pl-4">
                <div className="flex flex-col gap-[16px]">
                    <h3 className="text-primText text-[20px] leading-normal font-medium">
                        {heading}
                    </h3>
                    <p className="text-primText text-base font-light">
                        {paragraph}
                    </p>
                </div>
                <PostProps />
            </div>
        </div>
    );
}
