export default function SecondaryBtn({ text }: { text: string }) {
    return(
        <button className="flex items-center justify-center w-full h-[48px] rounded-[12px] secondary-btn-border">
            {text}
        </button>
    );
}