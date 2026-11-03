
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import { Toaster } from "@/components/ui/toast";
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Footer from "@/components/shared/footer/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HelpHive",
  description:
    "Discover, organize, and join local volunteering events to make a meaningful difference in your community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <Navbar></Navbar>
            <main>
              {children}
            </main>
            <Toaster />
            <Footer></Footer>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
