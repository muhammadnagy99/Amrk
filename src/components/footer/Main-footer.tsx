import SiteLinks from "./site-links";
import Line from "@/src/components/assets/line";
import SocialMedia from "./social-media";

interface MainFooterProps {
    data: {
        footerNavLinks: {
            title: string;
            items: { label: string; url: string }[];
            additionalSection?: {
                title: string;
                items: { label: string; url: string }[];
            };
        }[];
        socialMediaData: {
            logo: React.ReactNode;
            description: string;
            socialLinks: {
                ariaLabel: string;
                url: string;
                icon: React.ReactNode;
            }[];
        };
    };
}

export default function MainFooter({ data }: MainFooterProps) {
    return (
        <footer className="flex items-center justify-center w-full bg-FooterBg">
            <div className="flex flex-col items-center w-[95%] xl:w-10/12">
                <SiteLinks links={data.footerNavLinks} />
                <Line />
                <SocialMedia data={data.socialMediaData} />
            </div>
        </footer>
    );
}
