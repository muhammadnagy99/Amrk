interface BlogHeadingProps {
    headingContent: {
        title: string;
        subtitle: string;
    };
}

export default function BlogHeading({ headingContent }: BlogHeadingProps) {
    return (
        <div className="flex flex-col gap-[40px] w-full">
            <div className="flex flex-col items-center gap-[24px] w-full">
                <h1 className="flex items-center xl:text-[48px] text-4xl font-bold text-primText leading-[1.5]">
                    {headingContent.title}
                </h1>
                <p className="flex items-center text-primText font-normal leading-normal text-2xl text-center">
                    {headingContent.subtitle}
                </p>
            </div>
        </div>
    );
}
