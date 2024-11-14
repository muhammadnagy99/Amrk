import React from 'react';

interface NavButtonProps {
    id: string;
    label: string;
    isActive: boolean;
    onClick: (id: string) => void;
}

const NavButton: React.FC<NavButtonProps> = ({ id, label, isActive, onClick }) => {
    return (
        <button
            id={id}
            onClick={() => onClick(id)}
            className={`w-[180px] h-[55px] text-base md:text-xl font-medium rounded-[40px] flex-shrink-0 ${
                isActive ? 'text-SecTextV2 bg-primText' : 'text-gray-500 bg-white'
            } cursor-pointer transition-colors duration-200 `}
            aria-pressed={isActive}
        >
            {label}
        </button>
    );
};

export default NavButton;
