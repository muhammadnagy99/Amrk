interface SuccessHeadingProps {
  title: string;
  description: string;
}

const SuccessHeading: React.FC<SuccessHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4 md:gap-[40px] w-full">
      <div className="flex flex-col items-center gap-[24px] w-full">
        <h1 className="flex items-center text-center text-2xl pr-7 pl-7 xl:text-[40px] md:text-4xl font-bold text-primText leading-[1.5]">
          {title}
        </h1>
        <p className="flex items-center text-primText font-normal leading-normal text-sm md:text-2xl text-center md:pr-40 md:pl-40">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SuccessHeading;
