
import type { FC } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://github.com/yourusername", // Replace with actual GitHub link
      label: "GitHub",
      icon: <Github className="h-6 w-6" />,
    },
    {
      href: "https://linkedin.com/in/yourusername", // Replace with actual LinkedIn link
      label: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      href: "https://instagram.com/yourusername", // Replace with actual Instagram link
      label: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-8 md:flex-row max-w-screen-2xl px-4 md:px-8">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          © {currentYear} Bibhuti's Digital Canvas. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
