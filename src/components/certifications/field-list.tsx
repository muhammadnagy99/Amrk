import Image, {StaticImageData} from 'next/image';

interface ImageProps {
    src: StaticImageData;
    alt?: string;
    width?: number;
    height?: number;
}

interface FieldListProps {
    legendText: string;
    images: ImageProps[];
}

export default function FieldList({ legendText, images }: FieldListProps) {
    return (
        <div className="flex flex-row justify-center md:justify-around items-center w-full h-[120px] md:h-[130px] relative p-10 gap-4">
            <fieldset className="absolute h-full w-full border border-solid border-border1 text-center rounded-2xl">
                <legend className="inline-block text-base font-normal text-filedList m-1">
                    &nbsp;
                    {legendText}
                    &nbsp;
                </legend>
            </fieldset>
            {images.map((image, index) => (
                <div key={index} className="h-full flex justify-between items-center">
                    <Image
                        src={image.src}
                        width={image.width || 262} // Default width
                        height={image.height || 40} // Default height
                        alt={image.alt || 'Image description'}
                        placeholder="blur"
                        priority={false}
                    />
                </div>
            ))}
        </div>
    );
}
