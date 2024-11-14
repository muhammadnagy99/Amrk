"use client";

import BlogGrid from "@/src/components/blog/blog-grid";
import BlogHero from "@/src/components/blog/blog-hero";
import BlogHeading from "@/src/components/blog/heading";
import heroImage from "@/public/blog/thumbnails/hero.png"
import herothumb from '@/public/blog/thumbnails/hero-thumb.png'
import { blogHeadingContent } from "@/src/data/blog/blog-data";
import blogsData from "@/src/data/blogs.json";

export default function BlogPage() {
    const heroPost = {
        ...blogsData[0],
        imageSrc: heroImage
    };

    const postCardsData = blogsData.map((post, index) => {
        if (index === 0) {
            return {
                ...post,
                imageSrc: herothumb
            };
        } else {
            return {
                ...post,
                imageSrc: require(`@/public/blog/thumbnails/bp${index}.png`)
            };
        }
    });
    

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] md:max-w-[1200px] justify-between gap-14 md:gap-[120px] mt-[120px] mb-[80px]">
                <BlogHeading headingContent={blogHeadingContent}/>
                <BlogHero 
                    imageSrc={heroPost.imageSrc} 
                    heading={heroPost.heading} 
                    paragraph={heroPost.paragraph}
                    searchKey={heroPost.searchKey} 
                />
                <BlogGrid postCardsData={postCardsData} />
            </div>
        </section>
    );
}
