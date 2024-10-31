import Link from "next/link";

export default function NavBar() {
    return(
        <div className="flex justify-center w-7/12">
            <nav className="flex w-special-nav justify-between">
                <Link href={``} className="flex items-center mx-2 gap-[8px]">
                    حلول أمرك   
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.00012L6 6.00049L1 1.00012ZM6 6.00049L11 1.00012L6 6.00049Z" fill="#23314C"/>
                    <path d="M1 1.00012L6 6.00049L11 1.00012" stroke="#23314C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>

                <Link href={``} className="flex items-center mx-2">
                    قطاعات نخدمها
                </Link>

                <Link href={``} className="flex items-center mx-2 gap-[8px]">
                    الموارد
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.00012L6 6.00049L1 1.00012ZM6 6.00049L11 1.00012L6 6.00049Z" fill="#23314C"/>
                    <path d="M1 1.00012L6 6.00049L11 1.00012" stroke="#23314C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>

                <Link href={``} className="flex items-center mx-2">
                    الباقات
                </Link>
            </nav>
        </div>
    );
}