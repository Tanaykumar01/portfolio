"use client";

import { Description } from "@radix-ui/react-dialog";
import { icons } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiMaterialUi,
  SiTailwindcss,
  SiNextDotJs,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, provident ullam tenetur ea consequatur maiores!",
  info: [
    {
      name: "Name",
      icon: "Tanay Kumar",
    },
    {
      name: "Phone",
      icon: "+91 9931302202",
    },
    {
      name: "Experience",
      icon: "Freshers",
    },
    {
      name: "Nationality",
      icon: "Indian",
    },
    {
      name: "Email",
      icon: "tanayjhunjhunwala.official@gmail.com",
    },
    {
      name: "FreeLancer",
      icon: "Available",
    },
    {
      name: "Languages",
      icon: "English, Hindi",
    },
  ],
};

const experience = {
  icons: "./assests/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, provident ullam tenetur ea consequatur maiores!",
  info: [
    {
      name: "Frontend",
      icon: "HTML, CSS, JS, React, Redux, Material UI, Tailwind CSS, Next JS",
    },
    {
      name: "Backend",
      icon: "Node JS, MongoDB",
    },
    {
      name: "Designing",
      icon: "Figma",
    },
  ],
};

const education = {
  icon: "./assests/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, provident ullam tenetur ea consequatur maiores!",
  info: [
    {
      institution: "Indian Institute of Information Technology, Bhopal",
      degree: "Btech in Electronics and Communication",
      year: "2021-2025",
    },
    {
      institution: "Online Course in Web Development",
      degree: "Full stack web development",
      year: "2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, provident ullam tenetur ea consequatur maiores!",
  info: [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Node JS",
      icon: <FaNodeJs />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next JS",
      icon: <SiNextDotJs />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
