'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface IconProps {
    icon: {
        url: string;
        source: React.ReactNode;
    };
    ariaLabel?: string;
}

const LanguageSwitcher: React.FC<IconProps> = ({ icon, ariaLabel = 'Language Switcher' }) => {
    const pathname = usePathname();
    const adjustedPathname = pathname.substring(3);

    const handleSwitchLanguage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const newLocale = icon.url.substring(1);
        document.cookie = `locale=${newLocale}; path=/;`;

        window.location.href = `${icon.url}${adjustedPathname}`;
    };

    return (
        <a 
            href={`${icon.url}${adjustedPathname}`} 
            className="w-[5%]" 
            aria-label={ariaLabel} 
            onClick={handleSwitchLanguage}
        >
            {icon.source}
        </a>
    );
};

export default LanguageSwitcher;
