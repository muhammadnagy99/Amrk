import { ReactNode } from 'react';

interface LogoProps {
    children: ReactNode;
}

export default function Logo({ children }: LogoProps) {
    return (
        <div className="w-logo">
            {children}
        </div>
    );
}
