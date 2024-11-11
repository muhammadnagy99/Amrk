"use client"
import { useState, useEffect } from "react";
import PrimaryBtn from "../../buttons/primary-button";
import SecondaryBtn from "../../buttons/secondary-button";
import LoginBtn from "./login-btn";
import SidebarBtn from "./sidebar-btn";
import SidebarMenu from "./sidebar-drop-menu";
import SidebarSubMenu from "./sidebar-drop-menu2";
import SubMenu from "./sub-menu-";

const amrkSolutinosNavs = {
    title: "حلول أمرك",
    subMenus: [
        {
            title: "نظام إدارة المطاعم",
            items: [
                { label: "نظام نقاط البيع", url: "/pos-system" },
                { label: "شاشة المطبخ", url: "/kitchen-display" },
                { label: "شاشة الخدمات", url: "/service-display" },
                { label: "إدارة الطاولات", url: "/table-management" },
                { label: "ووكي توكي مدمج", url: "/integrated-walkie-talkie" },
                { label: "وضع عدم الإتصال", url: "/offline-mode" },
                { label: "إدارة علاقات العملاء وعمل حملات تسويقية", url: "/crm-marketing" },
                { label: "الربط مع تطبيقات التوصيل", url: "/delivery-integration" }
            ]
        },
        {
            title: "حلول أمـركـ أونلاين",
            items: [
                { label: "الطلب والدفع عبر (QR)", url: "/qr-ordering" },
                { label: "طلبات الاستلام", url: "/pickup-orders" },
                { label: "الطلب عبر وسائل التواصل الاجتماعي", url: "/social-media-ordering" },
                { label: "التوصيل إلى المنزل", url: "/home-delivery" },
                { label: "برامج الولاء", url: "/loyalty-programs" },
                { label: "حجوزات الطاولات", url: "/table-reservations" }
            ]
        },
        {
            title: "إدارة متطورة للمخزون",
            items: [
                { label: "إدارة المشتريات", url: "/purchase-management" },
                { label: "إدارة المنيو والوصفات", url: "/menu-recipes-management" },
                { label: "التحكم الشامل في المخزون", url: "/inventory-control" },
                { label: "إدارة المستودعات، المطابخ المركزية، والمطابخ السحابية", url: "/warehouse-management" },
                { label: "صلاحيات الموافقات الإلكترونية", url: "/approval-permissions" }
            ]
        },
        {
            title: "تشغيل المطابخ السحابية",
            items: [
                { label: "علامات متعددة في مطبخك", url: "/multi-brands-kitchen" },
                { label: "شاشة واحدة لمطبخك", url: "/single-kitchen-display" },
                { label: "مخزون مطبخك", url: "/kitchen-inventory" },
                { label: "قوائم طعام مطبخك", url: "/kitchen-menu" },
                { label: "نظام نقاط بيع مطبخك", url: "/kitchen-pos-system" },
                { label: "دليل تعليمي لمطبخك", url: "/kitchen-tutorial" },
                { label: "مراقبة مطبخك", url: "/kitchen-monitoring" },
                { label: "لوحة تقييم مطبخك", url: "/kitchen-rating" },
                { label: "ربط تطبيقات التوصيل بمطبخك", url: "/kitchen-delivery-integration" }
            ]
        }
    ]
};

const subMenuResources = {
    title: "الموارد",
    items: [
        { label: "قصص نجاح", url: "/success-stories" },
        { label: "المدونة", url: "/blog" },
        { label: "الاعتمادات", url: "/certifications" },
        { label: "تحديثات أمرك", url: "/updates" }
    ]
};





export default function Sidebar() {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

    const handleMenuClick = (index: number) => {
        setOpenMenuIndex(openMenuIndex === index ? null : index);
    };

    return (
        <div className="fixed top-[64px] flex justify-center inset-y-104 left-0 z-40 w-full h-full bg-white shadow-lg transition-transform transform -translate-x-full peer-checked:translate-x-0 duration-300">
            <div className="w-full h-full p-6 flex flex-col gap-4">
                <SidebarMenu
                    title={amrkSolutinosNavs.title}
                    subMenus={amrkSolutinosNavs.subMenus}
                    isOpen={openMenuIndex === 0}
                    onToggle={() => handleMenuClick(0)}
                />
                <a href="/business-types">
                    <SidebarBtn text="قطاعات نخدمها" />
                </a>
                <SidebarSubMenu
                    title={subMenuResources.title}
                    items={subMenuResources.items}
                    isOpen={openMenuIndex === 1}
                    onToggle={() => handleMenuClick(1)}
                />
                <a href="/pricing">
                    <SidebarBtn text="الباقات" />
                </a>
                <a href="/demo-schedule">
                    <PrimaryBtn text={`احجز موعد للتجربة`} />
                </a>
                <a href="/">
                    <SecondaryBtn text={`أمـركـ أونلاين`} />
                </a>
                <LoginBtn />
            </div>
        </div>
    );
}