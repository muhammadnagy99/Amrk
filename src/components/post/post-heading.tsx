import PostPageProps from "./post-page-props";
interface PostHeadingProps {
    heading: string;
    lang: string
}

export default function PostHeading({ heading, lang }: PostHeadingProps) {
    return (
        <div className="w-[90%] lg:w-[85%] flex flex-col items-start justify-center gap-8">
            <h1 className="flex text-2xl xl:text-[40px] md:text-4xl font-bold text-primText leading-[1.5]">
                {heading}
            </h1>
            <PostPageProps lang={lang} />
        </div>
    );
}
