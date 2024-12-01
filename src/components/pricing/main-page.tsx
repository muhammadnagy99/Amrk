"use client"

import { useState } from 'react';
import MinusIcon from "@/src/components/assets/minus-icon";
import PageHeader from "@/src/components/assets/page-header";
import PrimPlusIcon from "@/src/components/assets/primary-plus";
import AccordionContainer from "@/src/components/pricing/accordion-container";
import PackagesCards from "@/src/components/pricing/packages-cards";
import PromoSection from "@/src/components/promotion-section/promotion-section";
import ContactUs from '@/src/components/demo-schedule/contact-us';

interface MainProps {
    heading: {
        title: string;
        description: string;
        show: {
            more: string;
            less: string;
        };
    };
    packagesData: Array<any>;
    accordionData: Array<any>;
    promoContent: any;
    lang: string
}

export default function Main({ heading, packagesData, accordionData, promoContent, lang }: MainProps) {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-10 mt-10 mb-10 md:gap-[48px] md:mt-[100px] md:mb-[40px]">
                <PageHeader
                    title={heading.title}
                    description={heading.description}
                /> 

                <PackagesCards packages={packagesData} />

                <div className="flex flex-row justify-end w-full">
                    <button 
                        onClick={toggleAccordion} 
                        className="flex flex-row items-center pl-[24px] text-PrimBtn gap-4"
                    >
                        <span className="text-sm md:text-base font-medium">
                            {isAccordionOpen ? heading.show.less : heading.show.more}
                        </span>
                        {isAccordionOpen ? <MinusIcon /> : <PrimPlusIcon />}
                    </button>
                </div>


                <div className={`transition-all duration-300 w-full`}>
                    <AccordionContainer content={accordionData} isOpen={isAccordionOpen} />
                </div>

                <div className="flex justify-start w-full">
                    <ContactUs lang={lang} />
                </div>
            </div>

            <PromoSection content={promoContent} />
        </section>
    );
}
