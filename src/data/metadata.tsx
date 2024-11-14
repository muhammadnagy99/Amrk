import { Metadata } from 'next'; 

export const siteMetadata: Metadata = {
  title: "Amrk Restaurant Management System (RMS)",
  description: "Amrk RMS is a powerful and comprehensive platform designed to streamline restaurant operations, improve efficiency, and optimize resource management. Tailored for modern restaurants, it provides an all-in-one solution for inventory, order management, and customer service.",
  authors: [{ name: "Bahaa Mohamed Akl" }],
  keywords: [
    "Restaurant Management System",
    "Amrk RMS",
    "Restaurant Solutions",
    "Order Management",
    "Inventory Control",
    "Operational Efficiency",
    "Restaurant Automation"
  ],
  applicationName: "Amrk Restaurant Management System",
  creator: "Amrk Co",
  publisher: "Muhammad Nagy",
  openGraph: {
    title: "Amrk Restaurant Management System",
    description: "Transform your restaurant's operations with Amrk RMS, an innovative management solution built to enhance productivity and customer satisfaction.",
    url: "https://amrk.vercel.app",
    type: "website",
    images: [
      {
        url: "/hero-full-art-1(1).webp",
        width: 341,
        height: 332,
        alt: "Amrk Restaurant Management System"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@AmrkRMS",
    creator: "@MuhammadNagy",
    title: "Amrk Restaurant Management System",
    description: "Elevate your restaurant's performance with Amrk RMS — the essential tool for modern restaurant management.",
    images: ["/hero-full-art-1(1).webp"]
  }
};
