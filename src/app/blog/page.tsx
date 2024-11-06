"use client";

import BlogGrid from "@/src/components/blog/blog-grid";
import BlogHero from "@/src/components/blog/blog-hero";
import BlogHeading from "@/src/components/blog/heading";
import heroImage from '@/public/blog/thumbnails/hero.png';
import blogsData from "@/src/data/blogs.json";

export default function BlogPage() {
    const heroPost = {
        ...blogsData[0],
        imageSrc: heroImage
    };

    const postCardsData = blogsData.slice(1).map((post, index) => ({
        ...post,
        imageSrc: require(`@/public/blog/thumbnails/p${index + 1}.png`) 
    }));

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-special md:w-[95%] justify-between gap-[120px] mt-[120px] mb-[80px]">
                <BlogHeading />
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
