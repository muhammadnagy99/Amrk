interface props {
    text: string
}

export default function SidebarBtn({ text }: props ) {
    return(
        <div className="w-full h-12 flex justify-between bg-primeHeader p-4 rounded-xl">
            <p className="flex h-full items-center text-sm font-medium text-primText">
                {text}
            </p>
        </div>
    );
}