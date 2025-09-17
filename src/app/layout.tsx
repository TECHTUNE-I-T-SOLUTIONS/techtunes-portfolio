import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechTunes Portfolio",
  description: "Portfolio website for TechTunes I.T. Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
