"use client"

import React, { useState, useEffect } from 'react';
import AccordionTitle from './accordion-title';
import AccordionRow from './accordion-row';

interface AccordionElementProps {
    title?: string;
    rows: {
        rowTitle: string;
        iconStates: boolean[];
    }[];
    isOpened: boolean; 
}

const AccordionElement: React.FC<AccordionElementProps> = ({ title = '', rows, isOpened }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpened) {
            setIsOpen(true); 
        } else {
            setIsOpen(false); 
        }
    }, [isOpened]); 

    const toggleAccordion = () => {
        setIsOpen(!isOpen); 
    };

    return (
        <div className="flex flex-col w-full gap-2">
            <AccordionTitle title={title} onClick={toggleAccordion} isOpen={isOpen} />
            <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[1500px]' : 'max-h-0'
                }`}
            >
                <div className="flex flex-col gap-2 p-2">
                    {rows.map((row, index) => (
                        <AccordionRow key={index} rowTitle={row.rowTitle} iconStates={row.iconStates} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AccordionElement;
