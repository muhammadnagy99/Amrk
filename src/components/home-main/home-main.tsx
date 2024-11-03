import MainHero from "./home-hero/main-hero";
import HomeSectionI from "./home-section-I/home-section-I";
import HomeSectionII from "./home-section-II/home-section-II";

export default function HomeMain() {
    return(
        <main className="flex flex-col justify-center items-center w-full gap-[80px]">
            <MainHero />
            <HomeSectionI />
            <HomeSectionII />
        </main>
    );
}