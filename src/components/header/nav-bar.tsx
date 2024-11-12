import Link from "next/link";
import MegaMenu from "./mega-menu";
import DropList from "./drop-list";

export default function NavBar() {
    return(
        <div className="flex justify-center w-7/12">
            <nav className="hidden lg:flex w-special-nav justify-around">
                <MegaMenu />


                <a href="/business-types" className="flex items-center mx-2  text-primText hover-underline">
                    قطاعات نخدمها
                </a>

                <DropList />

                <a href="/pricing" className="relative flex items-center mx-2 text-primText hover-underline">
                    الباقات
                </a>

            </nav>
        </div>
    );
}