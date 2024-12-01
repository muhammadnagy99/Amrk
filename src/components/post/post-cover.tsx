import Image, { StaticImageData } from "next/image";

interface PostCoverProps {
    src: StaticImageData;
}

export default function PostCover({ src }: PostCoverProps) {
    return (
        <div className="w-full md:w-1/2">
            <Image
                className="w-full object-cover h-auto rounded-lg"
                src={src}
                width={550}
                height={550}
                alt="Post Cover"
                placeholder="blur"
                priority={false}
            />
        </div>
    );
}
