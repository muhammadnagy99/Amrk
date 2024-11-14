interface SiteLinksProps {
    links: {
        title: string;
        items: { label: string; url: string }[];
        additionalSection?: {
            title: string;
            items: { label: string; url: string }[];
        };
    }[];
}

export default function SiteLinks({ links }: SiteLinksProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[24px] site-links-padding">
            {links.map((nav, index) => (
                <nav key={index} aria-labelledby={`footer footer-links-${index}`} className="flex flex-col gap-[12px]">
                    <h2 className="text-SecTextV1 text-base">{nav.title}</h2>
                    <ul className="flex flex-col gap-[12px]">
                        {nav.items.map((item, i) => (
                            <li key={i} className="text-SecTextV2 text-[14px] font-light">
                                <a href={item.url} className="text-SecTextV2 text-[14px] font-light hover:text-PrimBtn">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {nav.additionalSection && (
                        <nav className="flex flex-col gap-[12px] pt-[64px]">
                            <h2 className="text-SecTextV1 text-base">{nav.additionalSection.title}</h2>
                            <ul className="flex flex-col gap-[12px]">
                                {nav.additionalSection.items.map((item, i) => (
                                    <li key={i} className="text-SecTextV2 text-[14px] font-light">
                                        <a href={item.url} className="text-SecTextV2 text-[14px] font-light hover:text-PrimBtn">
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </nav>
            ))}
        </div>
    );
}
