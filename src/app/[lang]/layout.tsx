import type { Metadata } from "next";
import localFont from "next/font/local";
import MainHeader from "@/src/components/header/main-header";
import MainFooter from "@/src/components/footer/Main-footer";
import { siteMetadata_ar, siteMetadata_en } from "@/src/data/metadata";
import { i18n, type Locale } from "@/src/i18n-config";
import { Rubik } from 'next/font/google';
import "./globals.css";

import { mainHeaderData_ar, mainHeaderData_en } from "@/src/data/header/header-data";
import { footerData_ar, footerData_en } from "@/src/data/footer/footer-data";

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rubik',
  display: 'swap',
});

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  return getMetadata(params.lang);
}

function getMetadata(lang: Locale): Metadata {
  return lang === 'en' ? siteMetadata_en : siteMetadata_ar;
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = await props.params;
  let dir = 'rtl';

  let HeaderData = mainHeaderData_ar;
  let FooterData = footerData_ar;

  if (lang === 'en') {
    dir = 'ltr';
    HeaderData = mainHeaderData_en;
    FooterData = footerData_en;
  }

  const { children } = props;

  return (
    <html lang={lang} dir={dir}>
      
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

//end of file