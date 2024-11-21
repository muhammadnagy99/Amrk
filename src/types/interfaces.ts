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
    more: string
    flag: number
    name: string
  }[];
}

export interface StoryCardProps {
  imageSrc: StaticImageData;
  heading: string;
  paragraph: string;
  searchKey: string;
  more: string;
  flag: number;
  name: string;
}

// Services Interfaces

// Props for ServiceHero
export interface ServiceHeroProps {
  heading: string;
  description: string;
  btnText?: string
  image: {
    src: StaticImageData;
    alt: string;
  };

}
export interface ServiceHeroPropsModified {
  heading: string;
  description: string;
  btnText: string
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
  heading: {
    primary: string;
    secondary: string;
  };
  listItems: {
    heading: string;
    paragraph: string;
  }[];
}

// Union type for contentData
export type ServicesContentType =
  | { type: "ServiceHero"; props: ServiceHeroPropsModified }
  | { type: "BulletPoints"; props: BulletPointsProps }
  | { type: "ServiceSummary"; props: ServiceSummaryProps };

export type BusinessContentType =
  | { type: "ServiceHero"; props: ServiceHeroPropsModified }
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
  height: number;
  priority: boolean;
}

interface Button2 {
  label: string;
}

interface Article2 {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  priority: boolean;
  dir: number
  more: string
  url: string
}

export interface Section {
  id: number;
  button: Button;
  article: Article;
  url: string;
  more: string;
  dir: number;
}

export interface ScreensSection {
  id: number;
  button: Button2;
  article: Article2;
}

export interface Package {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: "primary" | "outline";
  highlight?: boolean;
}

interface AccordionRowData {
  rowTitle: string;
  iconStates: boolean[];
}

export interface AccordionData {
  type: "accordion" | "simpleRow";
  title?: string; 
  rows: AccordionRowData[];
}

export interface AccordionContainerProps {
  content: AccordionData[];
}


export interface BaseArticleContent {
    title: string;
    quoteBefore?: string;
    quoteAfter?: string;
    introText?: string;
  }
  
export interface HighlightedRow extends BaseArticleContent {
    content: {
      text: string;
      highlight: boolean;
    }[];
  }
  
export interface NormalRow extends BaseArticleContent {
    text: string;
  }
  
export  interface RowDottedWithIntro extends BaseArticleContent {
    content: string[];
  }
  
  export type Row =
    | { type: 'highlightedRow'; props: HighlightedRow }
    | { type: 'normalRow'; props: NormalRow }
    | { type: 'rowDottedWithIntro'; props: RowDottedWithIntro };




export interface DemoData {
    backgroundImage: {
      src: StaticImageData;
      alt: string;
    };
    heading: string;
    description: string;
    privacyPolicy: {
      title: string;
      text: string;
    };
    demoFormContent: {
      labels: {
        name: string;
        phone: string;
        email: string;
        restaurantName: string;
        branches: string;
        countryPlaceholder: string;
        submit: string;
        successMessage: string;
        failedMessage: string
      };
      branchOptions: {
        value: string;
        label: string;
      }[];
      lang: "en" | "ar";
    };
  }