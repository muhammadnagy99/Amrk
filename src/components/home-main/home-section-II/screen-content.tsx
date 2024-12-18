import React from "react";
import Image, { StaticImageData } from "next/image";

interface ScreenContentProps {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  priority: boolean;
  dir: number
  more: string
  url: string
}

const ScreenContent: React.FC<ScreenContentProps> = ({
  title,
  description,
  imgSrc,
  imgAlt,
  priority,
  dir,
  more,
  url
}) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row absolute z-1 h-full gap-4 md:gap-0 justify-end md:justify-around items-center w-full">
      <div className="flex h-auto lg:h-full justify-center lg:items-end lg:pb-[42px]">
        <section className="screen-card rounded-3xl w-[88%] h-[200px] md:h-[230px] lg:w-[440px] lg:h-[255px] bg-white">
          <article className="flex flex-col p-[24px] gap-[16px]">
            <h2 className="text-primText">{title}</h2>
            <p className="text-primText text-ellipsis">{description}</p>
          </article>
          <div className="flex flex-row items-center justify-end pl-[24px] pr-[24px] text-PrimBtn">
            <a
              href={url}
              aria-label={title}
              className="flex flex-row items-center justify-between content-center text-PrimBtn hover-underline w-[116px] text-[0px]"
            >
                {title}
              <span className="text-base font-medium">{more}</span>
              <svg
                className={`${dir == 0 ? "m-special rotate-0" : "rotate-180"}`}
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.26389 5.3517C0.0949211 5.52072 -2.73199e-07 5.74993 -2.62752e-07 5.98892C-2.52306e-07 6.22792 0.0949212 6.45713 0.26389 6.62615L5.36258 11.7248C5.44573 11.8109 5.54518 11.8796 5.65514 11.9268C5.76511 11.9741 5.88338 11.9989 6.00305 12C6.12273 12.001 6.24141 11.9782 6.35218 11.9329C6.46294 11.8876 6.56358 11.8206 6.6482 11.736C6.73283 11.6514 6.79975 11.5508 6.84507 11.44C6.89039 11.3292 6.9132 11.2105 6.91216 11.0909C6.91112 10.9712 6.88625 10.8529 6.83902 10.743C6.79178 10.633 6.72311 10.5335 6.63703 10.4504L3.07687 6.89023L19.0987 6.89023C19.3377 6.89023 19.567 6.79527 19.736 6.62624C19.905 6.45722 20 6.22796 20 5.98892C20 5.74988 19.905 5.52063 19.736 5.3516C19.567 5.18258 19.3377 5.08762 19.0987 5.08762L3.07687 5.08762L6.63703 1.52745C6.80121 1.35747 6.89206 1.12979 6.89 0.893475C6.88795 0.657156 6.79316 0.431096 6.62605 0.263986C6.45894 0.0968768 6.23288 0.00208637 5.99656 3.31165e-05C5.76024 -0.00202013 5.53257 0.0888259 5.36258 0.253007L0.26389 5.3517Z"
                  fill="#B0438A"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
      <figure className="h-[250px] w-[260px] md:w-[295px] lg:h-auto lg:w-auto">
        <Image
          src={imgSrc}
          width={480}
          height={490}
          alt={imgAlt}
          placeholder="blur"
          priority={priority}
          className="object-contain"
        />
        <figcaption className="hidden">{imgAlt}</figcaption>
      </figure>
    </div>
  );
};

export default ScreenContent;
