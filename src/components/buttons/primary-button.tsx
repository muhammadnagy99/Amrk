export default function PrimaryBtn({ text }: { text: string }){
    return(
        <button className="button">
            <span>
                {text}
            </span>
        </button>
    );
}