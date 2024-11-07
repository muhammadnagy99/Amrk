import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import React from "react";
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

export interface BusinessBulletPointsProps {
    heading: {
        text: string;
        highlited: string;
    };
    listItems: string[];
}


// Props for ServiceSummary
export interface ServiceSummaryProps {
    imageSrc: StaticImageData;
    heading: string;
    listItems: string[];
}

export interface ServiceDetailsProps {
    heading:{
        primary: string;
        secondary: string;
    }
    listItems:{
        heading: string;
        paragraph: string;
    }[];
}

// Union type for contentData
export type ServicesContentType = 
    | { type: "ServiceHero"; props: ServiceHeroProps }
    | { type: "BulletPoints"; props: BulletPointsProps }
    | { type: "ServiceSummary"; props: ServiceSummaryProps };


export type BusinessContentType = 
    | { type: "ServiceHero"; props: ServiceHeroProps }
    | { type: "BulletPoints"; props: BusinessBulletPointsProps }
    | { type: "ServiceDetails"; props: ServiceDetailsProps };


export interface heading {
    primary: string;
    secondary: string;
}

interface Button {
    label: string;
    iconLight: ReactNode;
    iconDark: ReactNode;
}
    
interface Article {
    title: string;
    description: string;
    imgSrc: StaticImageData;
    imgAlt: string;
    width: number;
    height:number;
}
    
export interface Section {
    id: number;
    button: Button;
    article: Article;
}