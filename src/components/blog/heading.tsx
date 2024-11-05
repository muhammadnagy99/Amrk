import SearchBar from "./search-bar";

export default function BlogHeading() {
    return(
        <div className="flex flex-col gap-[40px] w-full">
            <div className="flex flex-col items-center gap-[24px] w-full">
                <h1 className="flex items-center xl:text-[48px] text-4xl font-bold text-primText leading-[1.5]">
                    اكتشف كل جديد في عالم إدارة المطاعم 
                </h1>
                <p className="flex items-center text-primText font-normal leading-normal text-2xl text-center">
                    تابع نصائح احترافية وأفكار مبتكرة لمساعدتك على تحسين
                    <br />
                    أداء مطعمك وزيادة كفاءته.
                </p>
            </div>

            <SearchBar />

        </div>
    );
}