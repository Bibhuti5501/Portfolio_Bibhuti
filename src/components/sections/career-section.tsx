
import type { FC } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

interface CareerItemProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  isCurrent?: boolean;
}

const CareerItem: FC<CareerItemProps> = ({ title, company, duration, location, description, isCurrent }) => (
  <Card className="mb-8 shadow-md hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
        <CardTitle className="text-xl sm:text-2xl text-primary">{title}</CardTitle>
        {isCurrent && <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full dark:bg-green-700 dark:text-green-100 mt-2 sm:mt-0">Current</span>}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Briefcase className="h-4 w-4" />
          <span>{company}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export const CareerSection: FC = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      location: "Remote",
      description: [
        "Led development of key features for a SaaS platform, improving user engagement by 20%.",
        "Mentored junior developers and conducted code reviews to ensure high-quality standards.",
        "Architected and implemented scalable microservices using Node.js and Spring Boot.",
        "Collaborated with product teams to define and refine project requirements.",
      ],
      isCurrent: true,
    },
    {
      title: "Software Engineer",
      company: "Innovatech Ltd.",
      duration: "Jun 2019 - Dec 2021",
      location: "San Francisco, CA",
      description: [
        "Developed and maintained web applications using React, Redux, and Java.",
        "Contributed to the design and implementation of RESTful APIs.",
        "Participated in agile development cycles, including sprint planning and daily stand-ups.",
        "Improved application performance by optimizing database queries and frontend rendering.",
      ],
    },
     {
      title: "Junior Developer",
      company: "Web Wizards Co.",
      duration: "May 2018 - May 2019",
      location: "Austin, TX",
      description: [
        "Assisted in developing client websites using HTML, CSS, JavaScript, and PHP.",
        "Gained experience with version control systems like Git.",
        "Worked closely with senior developers to learn best practices in web development.",
      ],
    },
  ];

  return (
    <section id="career" className="bg-secondary/50">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Highlights of my experience and contributions.
          </p>
        </div>
        
        <div>
          {experiences.map((exp, index) => (
            <CareerItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
