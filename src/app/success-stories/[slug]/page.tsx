import StoriessData from "@/src/data/success-stories.json";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
    const { slug } = await params;
    
    console.log(slug);

    const currentStory= StoriessData.find(story => story.searchKey === slug);

    if (!currentStory) {
        return <div>Post not found</div>; 

    }

    const storyCover = (await import(`@/public/blog/stories/posts/p${currentStory.id}.png`)).default;


    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col items-center w-special md:w-[95%] justify-between gap-[68px] mt-[120px] mb-[80px]">
                
            </div>
        </section>
    );
}
