import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Panel } from "@/components/Panel";
import { Screen } from "@/components/Screen";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "JPDESU",
  description: "Become a god of Japanese",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} grid grid-cols-12 antialiased`}
      >
        <Nav />

        <div className="col-span-10 h-full py-3 pr-3">
          <div className="bg-white h-full border border-neutral-300 overflow-hidden rounded-xl  grid grid-cols-12">
            <Screen children={children} />
            <Panel />
          </div>
        </div>
      </body>
    </html>
  );
}
