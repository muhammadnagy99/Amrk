import React from "react";
import AccordionElement from "./accordion-element";
import AccordionRow from "./accordion-row";

import { AccordionContainerProps } from "@/src/types/interfaces";


export default function AccordionContainer({ content, isOpen }: AccordionContainerProps) {
  return (
    <div className="flex flex-col gap-4">
      {content.map((item, index) => {
        if (item.type === "accordion") {
          return (
            <AccordionElement key={index} title={item.title!} rows={item.rows} isOpened={isOpen} />
          );
        } else if (item.type === "simpleRow") {
          return (
            <div key={index} className="flex flex-col gap-2">
              {item.rows.map((row, rowIndex) => (
                <AccordionRow
                  key={rowIndex}
                  rowTitle={row.rowTitle}
                  iconStates={row.iconStates}
                  type="simpleRow"
                />
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
