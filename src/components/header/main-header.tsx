import Logo from "./logo";
import NavBar from "./nav-bar";
import BtnGroup from "./btn-group";

export default function MainHeader() {
    return(
        <header className="flex items-center justify-center h-[104px] w-full header-shadow">
            <div className="flex items-center justify-end w-10/12">
                <Logo />
                <NavBar />
                <BtnGroup />
            </div>
        </header>
    );
}