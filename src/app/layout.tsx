import type { Metadata, Viewport } from "next";
import "./globals.css";
// ThemeProvider removed
import { ParticleSystem } from "@/components/particles/ParticleSystem";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "TECHTUNE I. T. SOLUTIONS | Professional IT Solutions",
  description: "Portfolio website for TECHTUNE I. T. SOLUTIONS - Showcasing our expertise in web development, software solutions, and IT consulting services.",
  keywords: "TECHTUNE, IT Solutions, Web Development, Software Development, Portfolio",
  authors: [{ name: "TECHTUNE I. T. SOLUTIONS" }],
  robots: "index, follow",
  openGraph: {
    title: "TECHTUNE I. T. SOLUTIONS | Professional IT Solutions",
    description: "Portfolio website for TECHTUNE I. T. SOLUTIONS - Showcasing our expertise in web development, software solutions, and IT consulting services.",
    type: "website",
    siteName: "TECHTUNE I. T. SOLUTIONS Portfolio",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
    <html lang="en">
      <body className="antialiased min-h-screen bg-white text-gray-900 transition-colors duration-200">
        <ParticleSystem particleCount={60} interactive className="fixed inset-0 -z-10" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
