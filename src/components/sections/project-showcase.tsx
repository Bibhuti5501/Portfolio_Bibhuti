
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  projectUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Personal Portfolio",
    description: "My digital canvas showcasing my journey, skills, and projects. Built with Next.js and Tailwind CSS for a sleek, responsive experience.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "modern website design",
    projectUrl: "#", // Link to this site's repo or live URL
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: "2",
    title: "Advanced E-commerce Suite",
    description: "A comprehensive e-commerce solution featuring product catalogs, user authentication, secure payments, and an admin dashboard for managing inventory and orders.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store interface",
    projectUrl: "#",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
  },
  {
    id: "3",
    title: "Agile Task Manager",
    description: "A collaborative platform for agile teams to manage sprints, track tasks, and visualize project progress with interactive boards and real-time updates.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "project management dashboard",
    projectUrl: "#",
    tags: ["Java", "Spring Boot", "React", "WebSockets", "PostgreSQL"],
  },
   {
    id: "4",
    title: "AI-Powered Content Generator",
    description: "An innovative tool leveraging generative AI to create engaging marketing copy, blog posts, and social media updates based on user prompts and preferences.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "AI writing assistant",
    projectUrl: "#",
    tags: ["Python", "FastAPI", "Next.js", "OpenAI API"],
  },
];

export const ProjectShowcase: FC = () => {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into problems I've solved and products I've built.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] duration-300 ease-out">
              <div className="relative h-56 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full transition-transform hover:scale-105">
                  <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
