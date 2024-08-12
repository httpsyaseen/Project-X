import { GeistSans } from "geist/font/sans";
import { Poppins, Roboto } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const poppins = Poppins({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white">
        <Header />
        {/* <body className="bg-[#006A4E] min-h-screen"> */}
        {/* <main className="min-h-screen flex flex-col items-center"> */}
        {children}
        {/* </main> */}
      </body>
    </html>
  );
}
