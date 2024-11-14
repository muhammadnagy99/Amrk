import type { Metadata } from "next";
import localFont from "next/font/local";
import MainHeader from "@/src/components/header/main-header";
import MainFooter from "@/src/components/footer/Main-footer";
import { siteMetadata } from "@/src/data/metadata";
import { i18n, type Locale } from "@/src/i18n-config";
import "./globals.css";

import { mainHeaderData_ar, mainHeaderData_en } from "@/src/data/header/header-data";
import { footerData_ar, footerData_en } from "@/src/data/footer/footer-data";

const rubik = localFont({
  src: [
    {
      path: "./fonts/Rubik/Rubik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-rubik",
});

export const metadata: Metadata = siteMetadata;

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {

  const params = await props.params;
  let dir = 'rtl';

  let HeaderData = mainHeaderData_ar;
  let FooterData = footerData_ar;

  if(params.lang == 'en'){
    dir = 'ltr'
    HeaderData = mainHeaderData_en
    FooterData = footerData_en
  } 

  const { children } = props;

  return (
    <html lang={params.lang} dir={dir}>
      <body
        className={`flex flex-col justify-center ${rubik.variable} antialiased bg-white`}
      >
        <MainHeader data={HeaderData} />
        {children}
        <MainFooter data={FooterData} />
      </body> 
    </html>
  );
}