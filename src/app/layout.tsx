import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
const goatproduct = localfont({
  src: [
    {
      path: "../../public/fonts/GOATProductVariableVF.woff2",
      weight: "400",
    },
  ],
  variable: "--font-goatproduct",
});
export const metadata: Metadata = {
  title: "GitHub ReadMe Generator",
  description:
    "A web app to generate beautiful and simple readme file for Github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${goatproduct.variable}`}>
        <div className="m-auto h-screen  py-2  flex flex-col justify-between">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
