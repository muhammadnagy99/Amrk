interface PostBodyProps {
    content: string;
}

export default function PostBody({ content }: PostBodyProps) {
    return (
        <div className="w-[90%] lg:w-[85%] flex flex-col items-start justify-center">
            <p className="text-primText font-normal text-xl">
                {content.split('\n').map((paragraph, index) => (
                    <span key={index}>
                        {paragraph}
                        <br /><br />
                    </span>
                ))}
            </p>
        </div>
    );
}
