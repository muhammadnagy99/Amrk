import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-row w-full justify-between">
      <h1 className="w-[30%] xl:text-[48px] text-4xl font-bold text-primText leading-[1.5]">
        {title}
      </h1>
      <p className="flex items-center w-[56%] text-primText font-normal leading-normal text-2xl">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
