import { StaticImageData } from 'next/image';
import BlogGrid from "@/src/components/blog/blog-grid";
import BlogHero from "@/src/components/blog/blog-hero";
import BlogHeading from "@/src/components/blog/heading";
import blogsData from "@/src/data/blogs.json";
import HeroImage from '@/public/blog/hero.png';
import P1Image from '@/public/blog/thumbnails/p1.png';
import P2Image from '@/public/blog/thumbnails/p2.png';
import P3Image from '@/public/blog/thumbnails/p3.png';
import P4Image from '@/public/blog/thumbnails/p4.png';
import P5Image from '@/public/blog/thumbnails/p5.png';
import P6Image from '@/public/blog/thumbnails/p6.png';

interface BlogPost {
    id: number;
    imageSrc: StaticImageData;
    heading: string;
    paragraph: string;
    content: string;
}

export default function BlogPage() {
    const imagesMap: { [key: number]: StaticImageData } = {
        2: P1Image,
        3: P2Image,
        4: P3Image,
        5: P4Image,
        6: P5Image,
        7: P6Image,
    };

    const heroPost = {
        ...blogsData[0],
        imageSrc: HeroImage
    };

    const postCardsData: BlogPost[] = blogsData.slice(1).map(post => ({
        ...post,
        imageSrc: imagesMap[post.id]
    }));

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-special md:w-[95%] justify-between gap-[120px] mt-[120px] mb-[80px]">
                <BlogHeading />
                <BlogHero 
                    imageSrc={heroPost.imageSrc} 
                    heading={heroPost.heading} 
                    paragraph={heroPost.paragraph} 
                />
                <BlogGrid postCardsData={postCardsData} />
            </div>
        </section>
    );
}
