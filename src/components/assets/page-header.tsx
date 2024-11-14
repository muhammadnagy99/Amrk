import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between gap-4">
      <h1 className="w-full md:w-[35%] text-2xl xl:text-[48px] md:text-4xl font-bold text-primText md:leading-[1.5]">
        {title}
      </h1>
      <p className="flex items-center w-full md:w-[56%] text-primText font-normal leading-normal text-sm md:text-2xl">
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
