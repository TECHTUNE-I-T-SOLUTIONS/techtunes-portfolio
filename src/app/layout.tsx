import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "TechTunes Portfolio | Professional IT Solutions",
  description: "Portfolio website for TechTunes I.T. Solutions - Showcasing our expertise in web development, software solutions, and IT consulting services.",
  keywords: "TechTunes, IT Solutions, Web Development, Software Development, Portfolio",
  authors: [{ name: "TechTunes I.T. Solutions" }],
  robots: "index, follow",
  openGraph: {
    title: "TechTunes Portfolio | Professional IT Solutions",
    description: "Portfolio website for TechTunes I.T. Solutions - Showcasing our expertise in web development, software solutions, and IT consulting services.",
    type: "website",
    siteName: "TechTunes Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
