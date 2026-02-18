import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400","500", "600","700"],
});


export const metadata: Metadata = {
  title: "Temple's Portfolio Website",
  description: "Temple's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
