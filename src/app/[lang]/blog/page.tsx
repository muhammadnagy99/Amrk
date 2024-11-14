import { Locale } from "@/src/i18n-config";
import BlogGrid from "@/src/components/blog/blog-grid";
import BlogHero from "@/src/components/blog/blog-hero";
import BlogHeading from "@/src/components/blog/heading";
import heroImage from "@/public/blog/thumbnails/hero.png";
import herothumb from '@/public/blog/thumbnails/hero-thumb.png';
import thumbnail1 from '@/public/blog/thumbnails/bp1.png';
import thumbnail2 from '@/public/blog/thumbnails/bp2.png';
import thumbnail3 from '@/public/blog/thumbnails/bp3.png';
import thumbnail4 from '@/public/blog/thumbnails/bp4.png';
import thumbnail5 from '@/public/blog/thumbnails/bp5.png';
import thumbnail6 from '@/public/blog/thumbnails/bp6.png';

import { blogHeadingContent, blogHeadingContent_en } from "@/src/data/blog/blog-data";
import blogs_ar from "@/src/data/blogs_ar.json";
import blogs_en from "@/src/data/blogs_en.json";

export default async function BlogPage({ params }: { params: { lang: Locale } }) {
    const { lang } = params;
    const isEnglish = lang === 'en';

    const blogsData = isEnglish ? blogs_en : blogs_ar;
    const heading = isEnglish ? blogHeadingContent_en : blogHeadingContent;

    const heroPost = {
        ...blogsData[0],
        imageSrc: heroImage
    };

    const thumbnails = [
        herothumb,
        thumbnail1, 
        thumbnail2,
        thumbnail3, 
        thumbnail4, 
        thumbnail5, 
        thumbnail6  
    ];
    
    const postCardsData = blogsData.map((post, index) => {
        return {
            ...post,
            imageSrc: thumbnails[index] || herothumb
        };
    });

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] md:max-w-[1200px] justify-between gap-14 mt-12 mb-12 md:gap-[120px] md:mt-[120px] md:mb-[80px]">
                <BlogHeading headingContent={heading}/>
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
