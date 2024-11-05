import React from 'react';
import IconCheck from './icon-check';

interface AccordionRowProps {
  rowTitle: string;
  iconStates: boolean[];
  type?: 'accordion' | 'simpleRow';
}

const AccordionRow: React.FC<AccordionRowProps> = ({ rowTitle, iconStates, type = 'accordion' }) => {
  return (
    <div
      className={`flex flex-row justify-between h-[50px] ${
        type === 'simpleRow' ? 'bg-primeHeader rounded-lg border border-solid border-border1 font-medium text-[14px]' : ''
      }`}
    >
      <div
        className={`flex justify-start items-center w-[180px] h-full ${
          type === 'simpleRow' ? 'p-2' : 'p-4 rounded-lg border border-solid border-border1 font-normal text-[12px]'
        }`}
      >
        {rowTitle}
      </div>
      <div
        className={`flex flex-row w-[990px] h-full ${
          type === 'simpleRow' ? '' : 'rounded-lg border border-solid border-border1 font-medium'
        }`}
      >
        {iconStates.map((isCorrect, index) => (
          <span key={index} className="flex w-1/5 h-full justify-center items-center">
            <IconCheck isCorrect={isCorrect} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default AccordionRow;
