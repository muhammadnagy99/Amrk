import Logo from "./logo";
import NavBar from "./nav-bar";
import BtnGroup from "./btn-group";
import MobileHeaderGroup from "./mobile/mobile-group";
import SideBarToggle from "./mobile/side-bar-toggle";

export default function MainHeader() {
    return(
        <header className="flex items-center justify-center h-[64px] md:h-[104px] w-full header-shadow sticky top-0 bg-white z-[100]">
            <div className="w-[88%] flex items-center justify-between lg:justify-end xl:w-10/12">
                <a href="/" aria-label="Amrk-Logo">
                    <Logo />
                </a>
                <NavBar />
                <BtnGroup />
                <MobileHeaderGroup />
            </div>
        </header>
    );
}