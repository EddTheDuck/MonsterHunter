import type { Metadata } from "next";
import { Inter, Merriweather_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const merriweather_sans = Merriweather_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monster Hunter DB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${merriweather_sans.className} bg-stone-200 text-stone-800 container mx-auto p-4`}
      >
        {children}
      </body>
    </html>
  );
}
