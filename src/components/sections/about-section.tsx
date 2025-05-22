
import type { FC } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AboutSection: FC = () => {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Developer, Innovator, Problem Solver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary/50">
                    <Image 
                        src="https://placehold.co/300x300.png" 
                        alt="Bibhuti - Full-Stack Developer" 
                        layout="fill" 
                        objectFit="cover"
                        data-ai-hint="professional portrait"
                    />
                </div>
            </div>
            <div className="md:col-span-3">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl">Hello, I'm Bibhuti!</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                        <p>
                            I am a passionate Full-Stack Developer with a strong foundation in creating dynamic and user-centric web applications. My expertise spans across the MERN stack (MongoDB, Express.js, React, Node.js) and Java Spring Boot, allowing me to build comprehensive solutions from the ground up.
                        </p>
                        <p>
                            With a keen eye for detail and a commitment to clean, efficient code, I thrive on transforming complex problems into elegant digital experiences. I am continuously learning and exploring new technologies to stay at the forefront of web development.
                        </p>
                        <p>
                            When I'm not coding, I enjoy exploring new tech trends, contributing to open-source projects, and [mention a hobby or two if you like].
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
};
