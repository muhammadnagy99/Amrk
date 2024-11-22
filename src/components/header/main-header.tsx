import Logo from "./logo";
import NavBar from "./nav-bar";
import BtnGroup from "./btn-group";
import MobileHeaderGroup from "./mobile-group";
import { ReactNode } from "react";

interface MainHeaderProps {
    data: {
        logo: React.ReactNode;
        navData: {
            megaMenuData: any;
            dropListData: any;
            links: any[];
        };
        btnGroupData: {
            buttons: {
                type: 'primary' | 'secondary';
                text: string;
                url: string;
            }[];
            icon?: {
                url: string;
                source: React.ReactNode;
            };
        };
        sidebarData: {
            switcher: {
                url: string
                source: React.ReactNode
            }
            solutionsMenu: {
                title: string;
                subMenus: {
                    title: string;
                    items: { label: string; url: string }[];
                }[];
            };
            resourcesMenu: {
                title: string;
                items: { label: string; url: string }[];
            };
            navLinks: { text: string; url: string }[];
            login: {text: string; flag:number}
        };
    };
}

export default function MainHeader({ data }: MainHeaderProps) {
    return (
        <header className="flex items-center justify-center h-[64px] md:h-[104px] w-full header-shadow sticky top-0 bg-white z-[100]">
            <div className="w-[88%] flex items-center justify-between xl:justify-end xl:w-10/12">
                <a href="/" aria-label="Amrk-Logo">
                    <Logo>{data.logo}</Logo>
                </a>
                <NavBar data={data.navData} />
                <BtnGroup data={data.btnGroupData} />
                <MobileHeaderGroup sidebarData={data.sidebarData} />
            </div>
        </header>
    );
}
