import React from 'react';
import MinusIcon from '../assets/minus-icon';
import PlusIcon from '../assets/plus-icon';

interface AccordionTitleProps {
  title: string;
  onClick: () => void;
  isOpen: boolean;
}

const AccordionTitle: React.FC<AccordionTitleProps> = ({ title, onClick, isOpen }) => {
  return (
    <button
      className="flex justify-between items-center p-4 w-full h-[51px] bg-header rounded-lg border border-solid border-border1 font-medium"
      onClick={onClick}
    >
      {title}
      {isOpen ? <MinusIcon /> : <PlusIcon />}
    </button>
  );
};

export default AccordionTitle;
