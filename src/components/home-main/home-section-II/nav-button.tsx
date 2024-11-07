import React from 'react';

interface NavButtonProps {
    id: number;
    label: string;
    isActive: boolean;
    onClick: (id: number) => void;
}

const NavButton: React.FC<NavButtonProps> = ({ id, label, isActive, onClick }) => {
    return (
        <button
            onClick={() => onClick(id)}
            className={`w-[183px] h-[48px] text-xl md:text-lg font-medium rounded-[40px] ${
                isActive ? 'text-SecTextV2 bg-primText' : 'text-gray-500 bg-white'
            } cursor-pointer transition-colors duration-200`}
        >
            {label}
        </button>
    );
};

export default NavButton;
