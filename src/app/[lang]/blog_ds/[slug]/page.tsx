import PrimaryLine from "@/src/components/assets/primary-line";
import PostBody from "@/src/components/post/post-body";
import PostCover from "@/src/components/post/post-cover";
import PostHeading from "@/src/components/post/post-heading";
import PostSuggestions from "@/src/components/post/post-suggestions";
import blogs_ar from "@/src/data/blogs_ar.json";
import blogs_en from "@/src/data/blogs_en.json";
import { Locale } from "@/src/i18n-config";


async function getRandomPostsWithImages(posts: typeof blogs_ar, count: number) {
    const postsFromSecond = posts.slice(1);
    const shuffled = postsFromSecond.sort(() => 0.5 - Math.random());
    const selectedPosts = shuffled.slice(0, count);

    const postsWithImages = await Promise.all(
        selectedPosts.map(async (post) => ({
            ...post,
            imageSrc: (await import(`@/public/blog/thumbnails/bp${post.id - 1}.png`)).default
        }))
    );

    return postsWithImages;
}

type Params = Promise<{ lang: Locale, slug: string }>

export default async function PostPage({ params }: { params: Params}) {
    const { lang, slug } = await params;
    const isEnglish = lang === 'en';
    const blogsData = isEnglish ? blogs_en : blogs_ar;
    const currentPost = blogsData.find(post => post.searchKey === slug);

    if (!currentPost) {
        return <div>Post not found</div>; 
    }

    const postCoverImage = (await import(`@/public/blog/posts/p${currentPost.id}.png`)).default;

    const postCardsData = await getRandomPostsWithImages(blogsData, 3);

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col items-center w-[88%] md:max-w-[1200px] justify-between gap-10 md:gap-[68px] mt-[40px] mb-[40px] md:mt-[120px] md:mb-[80px]">
                <PostHeading heading={currentPost.heading} lang={lang }/>
                <PostCover src={postCoverImage} />
                <PostBody content={currentPost.content} />
                <PrimaryLine />
                <PostSuggestions postCardsData={postCardsData} lang={lang} />
            </div>
        </section>
    );
}
