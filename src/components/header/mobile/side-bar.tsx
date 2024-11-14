"use client";
import { useState } from "react";
import PrimaryBtn from "../../buttons/primary-button";
import SecondaryBtn from "../../buttons/secondary-button";
import LoginBtn from "./login-btn";
import SidebarBtn from "./sidebar-btn";
import SidebarMenu from "./sidebar-drop-menu";
import SidebarSubMenu from "./sidebar-drop-menu2";

interface SidebarData {
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
}

interface SidebarProps {
    data: SidebarData;
}

export default function Sidebar({ data }: SidebarProps) {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const handleMenuClick = (index: number) => {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    const { solutionsMenu, resourcesMenu, navLinks, login } = data;

    return (
        <div className="fixed top-[64px] flex justify-center inset-y-104 left-0 z-40 w-full h-[1000px] overflow-scroll bg-white shadow-lg transition-transform transform -translate-x-full peer-checked:translate-x-0 duration-300">
            <div className="w-full h-full p-6 flex flex-col gap-4">
                <SidebarMenu
                    title={solutionsMenu.title}
                    subMenus={solutionsMenu.subMenus}
                    isOpen={openMenuIndex === 0}
                    onToggle={() => handleMenuClick(0)}
                />
                <a href={navLinks[0].url}>
                    <SidebarBtn text={navLinks[0].text} />
                </a>
                <SidebarSubMenu
                    title={resourcesMenu.title}
                    items={resourcesMenu.items}
                    isOpen={openMenuIndex === 1}
                    onToggle={() => handleMenuClick(1)}
                />
                <a href={navLinks[1].url}>
                    <SidebarBtn text={navLinks[1].text} />
                </a>
                <a href={navLinks[2].url}>
                    <PrimaryBtn text={navLinks[2].text} />
                </a>
                <a href={navLinks[3].url}>
                    <SecondaryBtn text={navLinks[3].text} />
                </a>
                <LoginBtn {...login} />
            </div>
        </div>
    );
}
