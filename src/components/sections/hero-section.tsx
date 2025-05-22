
import type { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const skills: string[] = [
  "MongoDB",
  "Express.js",
  "ReactJs",
  "Node.js",
  "Java",
  "Spring Boot",
  "REST API",
  "HTML",
  "CSS",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
];

export const HeroSection: FC = () => {
  return (
    <section id="home" className="relative w-full bg-background text-foreground min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="container mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-8 px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            I am <span className="text-primary">Bibhuti</span>
          </h1>
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
            A Full-Stack Developer
          </p>
          <p className="max-w-xl mx-auto text-foreground/80 md:text-lg">
            Crafting seamless digital experiences from concept to deployment. Passionate about building robust and scalable web applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm transition-transform hover:scale-105 shadow-sm">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="mt-8">
            <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-primary/30 transition-shadow">
                <Link href="#projects">
                    View My Work <ArrowDown className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary/50" />
      </div>
    </section>
  );
};
