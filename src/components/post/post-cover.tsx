import Image, { StaticImageData } from "next/image";

interface PostCoverProps {
    src: StaticImageData;
}

export default function PostCover({ src }: PostCoverProps) {
    return (
        <div className="w-full">
            <Image
                className="object-cover h-[240px] md:h-auto rounded-lg"
                src={src}
                width={1200}
                height={400}
                alt="Post Cover"
                placeholder="blur"
                priority={false}
            />
        </div>
    );
}
