export default function PrimaryBtn({ text }: { text: string }){
    return(
        <button className="button">
            <span className="font-semibold">
                {text}
            </span>
        </button>
    );
}