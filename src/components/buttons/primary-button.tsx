export default function PrimaryBtn({ text }: { text: string }){
    return(
        <button className="flex items-center justify-center w-full h-[48px] text-[14px] text-center rounded-[12px] bg-PrimBtn text-white">
            {text}
        </button>
    );
}