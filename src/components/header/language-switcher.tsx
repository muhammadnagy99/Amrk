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

const LanguageSwithcher: React.FC<IconProps> = ({ icon, ariaLabel = 'Lanuage Swithcer' }) => {
    const pathname = usePathname();
    const adjustedPathname = pathname.substring(3);

    return (
        <Link 
            href={`${icon.url}${adjustedPathname}`} 
            className="w-[5%]" 
            aria-label={ariaLabel}
        >
            {icon.source}
        </Link>
    );
};

export default LanguageSwithcher;
