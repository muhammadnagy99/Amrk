import PrimaryLine from "@/src/components/assets/primary-line";
import PostBody from "@/src/components/post/post-body";
import PostCover from "@/src/components/post/post-cover";
import PostHeading from "@/src/components/post/post-heading";
import PostSuggestions from "@/src/components/post/post-suggestions";
import blogsData from "@/src/data/blogs.json";

async function getRandomPostsWithImages(posts: typeof blogsData, count: number) {
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

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
    const { slug } = await params; 

    const currentPost = blogsData.find(post => post.searchKey === slug);

    if (!currentPost) {
        return <div>Post not found</div>; 
    }

    const postCoverImage = (await import(`@/public/blog/posts/p${currentPost.id}.png`)).default;

    const postCardsData = await getRandomPostsWithImages(blogsData, 3);

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col items-center w-special md:w-[95%] justify-between gap-[68px] mt-[120px] mb-[80px]">
                <PostHeading heading={currentPost.heading} />
                <PostCover src={postCoverImage} />
                <PostBody content={currentPost.content} />
                <PrimaryLine />
                <PostSuggestions postCardsData={postCardsData} />
            </div>
        </section>
    );
}
