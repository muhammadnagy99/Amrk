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
      } flex flex-col relative justify-between h-[280px] w-[185px] p-4 rounded-2xl`}
    >
      {highlight && (
        <span className="flex justify-center items-center text-xs font-normal text-white w-[80px] h-[24px] bg-BorderHighlight rounded-[4px] absolute -top-4 left-[50px]">
          حزمة رائدة
        </span>
      )}
      <div className="flex flex-col gap-2">
        <h2 className="text-base text-primText text-center">{title}</h2>
        <p className="text-sm text-primText text-center font-light">{description}</p>
      </div>
      <div>
        <button
          className={`w-full h-[48px] p-3 text-[14px] font-medium rounded-lg ${
            buttonVariant === 'primary'
              ? 'bg-PrimBtn text-white'
              : 'border-2 border-solid border-PrimBtn text-PrimBtn'
          }`}
        >
          <a href="/demo-schedule">
          {buttonText}
          </a>
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
