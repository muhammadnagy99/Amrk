import PostPageProps from "./post-page-props";
interface PostHeadingProps {
    heading: string;
    lang: string
}

export default function PostHeading({ heading, lang }: PostHeadingProps) {
    return (
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-2 md:gap-8">
            <h1 className="flex text-xl xl:text-[36px] md:text-3xl font-bold text-primText leading-[1.5]">
                {heading}
            </h1>
            <PostPageProps lang={lang} />
        </div>
    );
}
