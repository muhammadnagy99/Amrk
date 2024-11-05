import PageHeader from "@/src/components/assets/page-header";
import AccordionContainer from "@/src/components/pricing/accordion-container";
import PackagesCards from "@/src/components/pricing/packages-cards";
import PromoSection from "@/src/components/promotion-section/promotion-section";


export default function PricingPage() {
    return(
        <section className="flex flex-col justify-center items-center w-full" aria-labelledby="Amrk-Business-Types">
            <div className="flex flex-col w-special md:w-[95%] justify-between gap-[80px] mt-[120px] mb-[40px]">
                <PageHeader
                        title="باقات مرنة لدعم مستقبل مطبخك"
                        description="ابدأ مجاناً مع إمكانية إضافة الأدوات حسب الحاجة، أو اختر من خططنا الشاملة لتلبية جميع احتياجات مطبخك من البداية."
                /> 

                <PackagesCards />

                <AccordionContainer />
            </div>
            <PromoSection />
        </section>
    );
}