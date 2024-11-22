// NavButton.tsx
import React, { ReactNode } from 'react';

interface NavButtonProps {
    id: number;
    label: string;
    iconLight: ReactNode;
    iconDark: ReactNode;
    isActive: boolean;
    onClick: (id: number) => void;
}

const NavButton: React.FC<NavButtonProps> = ({ id, label, iconLight, iconDark, isActive, onClick }) => {
    return (
        <button
            className={`flex flex-row justify-start items-center rounded-[8px] w-full lg:w-[320px] h-[40px] md:h-[64px] pl-4 pr-4 ${
                isActive ? 'bg-primText text-white border border-solid border-white' : 'bg-white text-primText'
            } gap-4`}
            onClick={() => onClick(id)}
            style={{ cursor: 'pointer' }}
        >
            <p>{isActive ? iconLight : iconDark}</p>
            <p className="xl:text-base text-sm">{label}</p>
        </button>
    );
};

export default NavButton;
