import React from 'react';

interface PackageCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: 'primary' | 'outline';
  highlight?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  description,
  buttonText,
  buttonVariant = 'primary',
  highlight = false,
}) => {
  return (
    <div
      className={`${
        highlight ? 'package-card-highlight' : 'package-card'
      } flex flex-col relative justify-between items-center h-[86px] md:h-[280px] w-[67px] md:w-[185px] p-2 xl:p-4 rounded-lg xl:rounded-2xl`}
    >
      {highlight && (
        <span className="flex justify-center items-center text-[10px] xl:text-xs font-normal text-white w-[62px] xl:w-[80px] h-4 xl:h-[24px] bg-BorderHighlight rounded-[4px] absolute -top-4 left-0 xl:left-[50px]">
          حزمة رائدة
        </span>
      )}
      <div className="flex flex-col gap-2">
        <h2 className="font-light xl:font-semibold text-[10px] xl:text-base text-primText text-center">{title}</h2>
        <p className="hidden xl:block text-sm text-primText text-center font-light">{description}</p>
      </div>
      <div className="w-full">
        <button
          className={`flex w-full rounded-lg ${
            buttonVariant === 'primary'
              ? 'bg-PrimBtn text-white'
              : 'border-2 border-solid border-PrimBtn text-PrimBtn'
          }`}
        >
          <a href="/demo-schedule" className="flex items-center justify-center w-full h-6 xl:h-[48px] text-[8px] xl:text-[14px] font-light xl:font-medium">
          {buttonText}
          </a>
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
