import { redirect } from 'next/navigation';
import { Locale } from "@/src/i18n-config";
import BlogGrid from "@/src/components/blog/blog-grid";
import BlogHero from "@/src/components/blog/blog-hero";
import BlogHeading from "@/src/components/blog/heading";
import thumbnail1 from '@/public/blog/thumbnails/bp1.png'
import thumbnail2 from '@/public/blog/thumbnails/bp2.png'
import thumbnail3 from '@/public/blog/thumbnails/bp3.png'
import thumbnail4 from '@/public/blog/thumbnails/bp4.png'
import thumbnail5 from '@/public/blog/thumbnails/bp5.png'
import thumbnail6 from '@/public/blog/thumbnails/bp6.png'
import thumbnail7 from '@/public/blog/thumbnails/bp7.png'




import { blogHeadingContent, blogHeadingContent_en } from "@/src/data/blog/blog-data";
import blogs_ar from "@/src/data/blogs_ar.json";
import blogs_en from "@/src/data/blogs_en.json";


export async function generateMetadata(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const params = await props.params;
    const isEnglish = params.lang === 'en';

    const heading = isEnglish ? blogHeadingContent_en : blogHeadingContent;

    return {
        title: heading.pageTitle,
        description: heading.subtitle
    }
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {


    const { lang } = await params;

    const isEnglish = lang === 'en';

    const blogsData = isEnglish ? blogs_en : blogs_ar;
    const heading = isEnglish ? blogHeadingContent_en : blogHeadingContent;

    const heroPost = {
        ...blogsData[0],
        imageSrc: thumbnail1
    };

    const thumbnails = [
        thumbnail1,
        thumbnail2,
        thumbnail3,
        thumbnail4,
        thumbnail5,
        thumbnail6,
        thumbnail7
    ];

    const postCardsData = blogsData.map((post, index) => {
        return {
            ...post,
            imageSrc: thumbnails[index]
        };
    });

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] md:max-w-[1200px] justify-between gap-14 mt-12 mb-12 md:gap-[120px] md:mt-[120px] md:mb-[80px]">
                <BlogHeading headingContent={heading} />
                <BlogHero
                    imageSrc={heroPost.imageSrc}
                    heading={heroPost.heading}
                    paragraph={heroPost.paragraph}
                    searchKey={heroPost.searchKey}
                    lang={lang}
                />
                <BlogGrid postCardsData={postCardsData} lang={lang} />
            </div>
        </section>
    );
}
