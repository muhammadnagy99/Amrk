export default function SecondaryBtn({ text }: { text: string }) {
    return(
        <button className="hover:before:bg-primText relative flex items-center justify-center w-full h-[48px] rounded-[12px] text-primText overflow-hidden border-2 border-primText bg-white px-3 transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-primText before:transition-all before:duration-500 hover:text-white hover:before:right-0 hover:before:w-full">
            <span className="relative z-10">{text}</span>
        </button>
    );
}