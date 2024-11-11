import type { Metadata } from "next";
import localFont from "next/font/local";
import MainHeader from "@/src/components/header/main-header";
import MainFooter from "@/src/components/footer/Main-footer";
import "./globals.css";


const rubik = localFont({
  src: [
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

export const metadata: Metadata = {
  title: "Amrk RMS",
  description: "This is the first version of the home page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`flex flex-col justify-center ${rubik.variable} antialiased bg-white`}
      >
        <MainHeader />
        {children}
        <MainFooter />
      </body> 
    </html>
  );
}
