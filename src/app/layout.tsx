import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const rubik = localFont({
  src: [
    {
      path: "./fonts/Rubik/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Rubik/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Rubik/Rubik-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/Rubik/Rubik-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/Rubik/Rubik-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Rubik/Rubik-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Rubik/Rubik-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Rubik/Rubik-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
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
        {children}
      </body> 
    </html>
  );
}
