import PromoSection from "../promotion-section/promotion-section";
import MainHero from "./home-hero/main-hero";
import HomeSectionI from "./home-section-I/home-section-I";
import HomeSectionII from "./home-section-II/home-section-II";
import HomeSectionIII from "./home-section-III/home-section-III";

export default function HomeMain() {
    return(
        <main className="flex flex-col justify-center items-center w-full gap-10 md:gap-14 lg:gap-[80px]">
            <MainHero />
            <HomeSectionI />
            <HomeSectionII />
            <HomeSectionIII />
            <PromoSection />
        </main>
    );
}