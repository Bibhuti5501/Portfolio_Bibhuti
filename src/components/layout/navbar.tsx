
"use client";

import type { FC } from "react";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#career", label: "Career" },
  { href: "#projects", label: "Projects" },
];

export const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80" aria-label="Bibhuti's Digital Canvas Home">
          <Code2 className="h-7 w-7 ml-12 text-primary" />
          <span className="text-xl font-bold">Bibhuti's Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Button */}
        <div className="absolute right-12 transform -translate-y-2/1 hidden md:flex items-left space-x-4">
          <a
            href="/path-to-your-cv.pdf" // Replace with actual CV file path
            download
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full text-sm transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Code2 className="h-6 w-6 text-primary" />
                        <SheetTitle>Bibhuti's Canvas</SheetTitle>
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" aria-label="Close mobile menu">
                            <X className="h-6 w-6" />
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-foreground/90 transition-colors hover:text-primary py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
