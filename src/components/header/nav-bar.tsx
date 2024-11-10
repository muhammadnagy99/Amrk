import Link from "next/link";
import MegaMenu from "./mega-menu";

export default function NavBar() {
    return(
        <div className="flex justify-center w-7/12" aria-labelledby="Amrk-NavBar">
            <nav className="flex w-special-nav justify-between">
                <MegaMenu />


                <a href="/business-types" className="flex items-center mx-2  text-primText hover-underline">
                    قطاعات نخدمها
                </a>

                <a href="" className="flex items-center mx-2 gap-[8px]  text-primText">
                    الموارد
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.00012L6 6.00049L1 1.00012ZM6 6.00049L11 1.00012L6 6.00049Z" fill="#23314C"/>
                    <path d="M1 1.00012L6 6.00049L11 1.00012" stroke="#23314C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>

                <a href="/pricing" className="relative flex items-center mx-2 text-primText hover-underline">
                    الباقات
                </a>

            </nav>
        </div>
    );
}