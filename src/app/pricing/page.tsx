"use client"

import { useState } from 'react';
import MinusIcon from "@/src/components/assets/minus-icon";
import PageHeader from "@/src/components/assets/page-header";
import PrimPlusIcon from "@/src/components/assets/primary-plus";
import AccordionContainer from "@/src/components/pricing/accordion-container";
import PackagesCards from "@/src/components/pricing/packages-cards";
import PromoSection from "@/src/components/promotion-section/promotion-section";
import ContactUs from '@/src/components/demo-schedule/contact-us';

export default function PricingPage() {
    // State to manage the collapse state
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Function to toggle the collapse state
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-10 mt-10 mb-10 md:gap-[64px] md:mt-[120px] md:mb-[40px]">
                <PageHeader
                    title="باقات مرنة لدعم مستقبل مطبخك"
                    description="ابدأ مجاناً مع إمكانية إضافة الأدوات حسب الحاجة، أو اختر من خططنا الشاملة لتلبية جميع احتياجات مطبخك من البداية."
                /> 

                <PackagesCards />

                <div className="flex flex-row justify-end w-full">
                    <button 
                        onClick={toggleCollapse} 
                        className="flex flex-row items-center pl-[24px] text-PrimBtn gap-4"
                    >
                        <span className="text-sm md:text-base font-medium">
                            {isCollapsed ? 'عرض المزيد' : 'عرض أقل'}
                        </span>
                        {isCollapsed ? <PrimPlusIcon /> : <MinusIcon />}
                    </button>
                </div>

                {/* Outer div to control the AccordionContainer display */}
                <div className={`transition-all duration-300 ${isCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-[2500px]'} w-full`}>
                    <AccordionContainer />
                </div>

                <div className="flex justify-start w-full">
                    <ContactUs />
                </div>
            </div>

            <PromoSection />
        </section>
    );
}
