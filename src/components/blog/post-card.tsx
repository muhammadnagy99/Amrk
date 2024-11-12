import Image, { StaticImageData } from 'next/image';
import PostProps from './post-props';

interface PostCardProps {
    imageSrc: StaticImageData;
    heading: string;
    paragraph: string;
    searchKey: string
    index?: number
}

export default function PostCard({ imageSrc, heading, paragraph, searchKey, index }: PostCardProps) {
    return (
        <a href={`/blog/${searchKey}`} className={`flex-col w-full gap-3 md:gap-[24px] md:h-[460px] post-card rounded-[16px] ${index == 1 ? 'flex md:hidden' : 'flex'}`}
>
            <Image
                src={imageSrc}
                width={384}
                height={240}
                alt={heading}
                placeholder="blur"
                priority={false}
                className="w-full md:h-[240px]"
            />
            <div className="flex flex-col w-full gap-3 md:justify-between md:h-[180px] pr-4 pl-4 pb-4">
                <div className="flex w-full flex-col gap-2 md:gap-[16px]">
                    <h3 className="text-primText w-full text-[20px] leading-normal font-medium">
                        {heading}
                    </h3>
                    <p className="text-primText w-full text-base font-light text-ellipsis ">
                        {paragraph}
                    </p>
                </div>
                <PostProps />
            </div>
        </a>
    );
}
