import { ReactNode } from "react";
import { StaticImageData } from "next/image";
// Success stories 

export interface StoryGridProps {
    StoryGridProps: {
        id: number;
        imageSrc: StaticImageData;
        heading: string;
        paragraph: string;
        content: string;
        searchKey: string;
    }[];
}

export interface StoryCardProps {
    imageSrc: StaticImageData;
    heading: string;
    paragraph: string;
    searchKey: string
}

// Services Interfaces


// Props for ServiceHero
export interface ServiceHeroProps {
    heading: string;
    description: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
}

// Props for BulletPoints
export interface BulletPointsProps {
    heading: string;
    listItems: {
        icon: ReactNode;
        text: string;
    }[];
}

// Props for ServiceSummary
export interface ServiceSummaryProps {
    imageSrc: StaticImageData;
    heading: string;
    listItems: string[];
}

// Union type for contentData
export type ContentType = 
    | { type: "ServiceHero"; props: ServiceHeroProps }
    | { type: "BulletPoints"; props: BulletPointsProps }
    | { type: "ServiceSummary"; props: ServiceSummaryProps };
