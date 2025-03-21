import React from "react";
import { SiCss3, SiWordpress } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Scbright - Agency Website",
      tech: [SiWordpress, SiCss3],
      link: "https://scbright.com",
      cover: "/portfolio1.jpg",
      background: "bg-indigo-500",
    },
    {
      title: "Bright Store - Merchendice Store",
      tech: [SiWordpress, SiCss3],
      link: "https://bright-store.scbright.com/",
      cover: "/portfolio2.jpg",
      background: "bg-green-500",
    },
    {
      title: "Coffee House - Cafe",
      tech: [SiWordpress, SiCss3],
      link: "https://coffee.scbright.com/",
      cover: "/portfolio3.jpg",
      background: "bg-green-500",
    },
    {
      title: "Portfolio - My",
      tech: [SiWordpress, SiCss3],
      link: "https://satyabrata.scbright.com/",
      cover: "/portfolio4.jpg",
      background: "bg-indigo-500",
    },
  ];

  return (
    <div className="py-10 p-4 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link target="_blank" href={project.link} key={index}>
              <div className={cn("p-4 sm:p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className=" space-y-4 bg-black bg-opacity-50 pt-2 pb-2 pr-3 pl-3 rounded-sm">
                    <h1 className="text-lg sm:text-2xl font-bold">
                      {project.title}
                    </h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return (
                          <Icon className="w-5 h-5 sm:w-8 sm:h-8" key={index} />
                        );
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
