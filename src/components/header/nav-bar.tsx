import Link from "next/link";
import MegaMenu from "./mega-menu";
import DropList from "./drop-list";

interface NavBarProps {
    data: {
        megaMenuData: {
            title: string;
            sections: {
                icon: React.ReactNode;
                heading: string;
                links: { text: string; url: string }[];
            }[];
        };
        dropListData: {
            title: string;
            menuItems: { text: string; url: string }[];
        };
        links: { text: string; url: string }[];
    };
}

export default function NavBar({ data }: NavBarProps) {
    const { megaMenuData, dropListData, links } = data;

    return (
        <div className="flex justify-center w-7/12">
            <nav className="hidden xl:flex w-[510px] justify-around">
                <MegaMenu data={megaMenuData} />

                <Link href={links[0].url} className="flex items-center mx-2 text-primText hover-underline">
                    {links[0].text}
                </Link>

                <DropList data={dropListData} />

                <Link href={links[1].url} className="flex items-center mx-2 text-primText hover-underline">
                    {links[1].text}
                </Link>
            </nav>
        </div>
    );
}
