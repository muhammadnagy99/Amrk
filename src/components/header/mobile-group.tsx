import SideBarToggle from "./mobile/side-bar-toggle";
import Sidebar  from "./mobile/side-bar";
import { ReactNode } from "react";
import Link from "next/link";
import LanguageSwithcher from "./language-switcher";

interface MobileHeaderGroupProps {
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
}

export default function MobileHeaderGroup({ sidebarData }: MobileHeaderGroupProps) {
    const {switcher} = sidebarData;
    return(
        <div className="flex flex-row items-center justify-between gap-4 xl:hidden">
            <LanguageSwithcher icon={switcher} />
            <SideBarToggle />
            <Sidebar data={sidebarData} />
        </div>
    );
}