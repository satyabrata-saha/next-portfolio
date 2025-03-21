"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "HTML",
      Icon: SiHtml5,
    },
    {
      text: "CSS",
      Icon: SiCss3,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "WordPress",
      Icon: SiWordpress,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />

      <HoverEffect items={skills} />
    </div>
  );
}
