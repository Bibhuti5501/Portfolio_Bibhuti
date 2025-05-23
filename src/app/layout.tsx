
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Bibhuti's Portfolio",
  description: 'Personal portfolio of Bibhuti, a Full-Stack Developer.',
  keywords: ['Bibhuti', 'Full-Stack Developer', 'Portfolio', 'React', 'Nodejs', 'Java', 'Spring Boot', 'MongoDB', 'Expressjs'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen font-sans antialiased",
          geistSans.variable, 
          geistMono.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
