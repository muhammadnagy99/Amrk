import { StaticImageData } from "next/image";

interface ImageCardProps {
  imgSrc: StaticImageData;
  title: string;
  description: string;
  more: string;
  key: number;
}

interface ImagesGridProps {
  content: {
      section1: ImageCardProps[];
      section2: ImageCardProps[];
      section3: ImageCardProps[];
  };
}

import ImageCardI from "./image-card-1";
import ImageCardII from './image-card-2';

export default function ImagesGrid({ content }: ImagesGridProps) {
  return (
      <div className="flex flex-col w-full gap-[24px]">
          <div className="flex flex-col md:flex-row w-full justify-between gap-6">
              {content.section1.map((card, index) => (
                  <ImageCardI
                      key={index}
                      imgSrc={card.imgSrc}
                      title={card.title}
                      description={card.description}
                      more={card.more}
                      flag={card.key}
                  />
              ))}
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between gap-6">
              {content.section2.map((card, index) => (
                  <ImageCardII
                      key={index}
                      imgSrc={card.imgSrc}
                      title={card.title}
                      description={card.description}
                      more={card.more}
                      flag={card.key}
                  />
              ))}
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between gap-6">
              {content.section3.map((card, index) => (
                  <ImageCardI
                      key={index}
                      imgSrc={card.imgSrc}
                      title={card.title}
                      description={card.description}
                      more={card.more}
                      flag={card.key}
                  />
              ))}
          </div>
      </div>
  );
}
