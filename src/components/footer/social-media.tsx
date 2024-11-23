import React from "react";

interface SocialMediaProps {
    data: {
        logo: React.ReactNode;
        description: string;
        socialLinks: {
            ariaLabel: string;
            url: string;
            icon: React.ReactNode;
        }[];
    };
}

export default function SocialMedia({ data }: SocialMediaProps) {
    return (
        <div className="flex flex-col justify-start w-full social-media-padding gap-[32px]">
            <div className="flex flex-col justify-start w-full gap-[16px]">
                {data.logo}
                <p className="text-SecTextV2 font-light text-[14px]">
                    {data.description}
                </p>
            </div>

            <ul
                className="flex flex-row justify-start gap-[16.5px]"
                aria-label="Amrk Social Media Links"
            >
                {data.socialLinks.map((link, index) => (
                    <li key={index} aria-label={link.ariaLabel}>
                        <a href={link.url} className="text-[0px]" target="_blank">
                            {link.ariaLabel}
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
