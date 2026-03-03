import { Locale } from "@/src/i18n-config";
import CertificationHeading from "@/src/components/certifications/heading";
import PromoSection from "@/src/components/promotion-section/promotion-section";
import { contactUsHeading, contactUsHeading_en, contactData, contactData_en } from "@/src/data/contact-us/data";
import { promoContent, promoContent_en } from "@/src/data/global/promo-text";

export async function generateMetadata(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const params = await props.params;
    const isEnglish = params.lang === "en";
    const pageData = isEnglish ? contactUsHeading_en : contactUsHeading;

    return {
        title: pageData.pageTitle,
        description: pageData.subtitle,
    };
}

export default async function ContactUsPage(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const params = await props.params;
    const isEnglish = params.lang === "en";
    const heading = isEnglish ? contactUsHeading_en : contactUsHeading;
    const data = isEnglish ? contactData_en : contactData;
    const promoData = isEnglish ? promoContent_en : promoContent;

    return (
        <section
            className="flex flex-col justify-center items-center w-full"
            aria-labelledby="Amrk-Contact-Us"
        >
            <div className="flex flex-col w-[88%] xl:max-w-[1200px] justify-between gap-12 md:gap-20 mt-12 md:mt-[120px] mb-[80px]">
                <CertificationHeading title={heading.title} description={heading.subtitle} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Phone Section */}
                    <div className="flex flex-col items-center p-8 bg-white rounded-3xl form-shadow gap-4 text-center cursor-pointer hover:scale-105 transition-transform">
                        <div className="w-12 h-12 flex items-center justify-center bg-InputColor rounded-full mb-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.24 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#B0438A" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-primText">{data.phone.label}</h3>
                        <a href={data.phone.link} className="text-lg text-primText hover:text-PrimBtn transition-colors">
                            {data.phone.value}
                        </a>
                    </div>

                    {/* Email Section */}
                    <div className="flex flex-col items-center p-8 bg-white rounded-3xl form-shadow gap-4 text-center cursor-pointer hover:scale-105 transition-transform">
                        <div className="w-12 h-12 flex items-center justify-center bg-InputColor rounded-full mb-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#B0438A" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-primText">{data.email.label}</h3>
                        <a href={data.email.link} className="text-lg text-primText hover:text-PrimBtn transition-colors">
                            {data.email.value}
                        </a>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col items-center gap-8 py-10">
                    <h3 className="text-2xl font-bold text-primText">{data.social.label}</h3>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {data.social.links.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                aria-label={social.ariaLabel}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 flex items-center justify-center bg-FooterBg rounded-full hover:scale-110 transition-transform shadow-md"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <PromoSection content={promoData} />
        </section>
    );
}
