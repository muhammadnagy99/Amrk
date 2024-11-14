import SideBarToggle from "./mobile/side-bar-toggle";
import Sidebar  from "./mobile/side-bar";
import { ReactNode } from "react";

interface MobileHeaderGroupProps {
    sidebarData: {
        switcher: {
            icon: ReactNode
            url: string
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
        <div className="flex flex-row items-center gap-4 md:hidden">
            <a href={switcher.url}>
                {switcher.icon}
            </a>
            <SideBarToggle />
            <Sidebar data={sidebarData} />
        </div>
    );
}