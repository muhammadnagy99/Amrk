interface props{
    lang: string
}

export default function PostPageProps({lang}: props) {
    const text = lang == "en" ? '4 minutes' : ' 4 دقائق قراءة';

    return(
        <div className="flex justify-start w-full gap-[24px] text-[16px]">
            <p className="text-textInfo text-[16px] font-normal">
                2024
            </p>
            <p className="text-textInfo text-[16px] font-normal">
                |
            </p>
            <p className="text-textInfo text-[16px] font-normal">
               {text}
            </p>
        </div>
    );
}