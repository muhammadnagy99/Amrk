import MainHero from "./home-hero/main-hero";

export default function HomeMain() {
    return(
        <main className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col w-special">
                <MainHero />
            </div>
        </main>
    );
}