"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {SiMongodb ,SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, provident ullam tenetur ea consequatur maiores!",
  info: [
    {
      fieldname: "Name",
      fieldicon: "Tanay Kumar",
    },
    {
      fieldname: "Phone",
      fieldicon: "+91 9931302202",
    },
    {
      fieldname: "Experience",
      fieldicon: "Freshers",
    },
    {
      fieldname: "Nationality",
      fieldicon: "Indian",
    },
    {
      fieldname: "FreeLancer",
      fieldicon: "Available",
    },
    {
      fieldname: "Email",
      fieldicon: "tanayjhunjhunwala.official@gmail.com",
    },
    {
      fieldname: "Languages",
      fieldicon: "English, Hindi",
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
      duration: "2023-2024",
      position: "Coordinator",
      company: "Scholarship Cell",
    },
    {
      duration: "2022-2025",
      position: "Head Coordinator",
      company: "Badminton, IIIT Bhopal",
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
      institution: "IIIT, Bhopal",
      degree: "Btech in Electronics and Communication",
      year: "2021-2025",
    },
    {
      institution: "Online Course",
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
      icon: <FaHtml5 />,
      name: "HTML",
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
      name: "MongoDb",
      icon: <SiMongodb />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next JS",
      icon: <SiNextdotjs />
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
import { motion } from "framer-motion";

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
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.year}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid gird-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.info.map((skill , index)=> {
                    return (
                      <li key={index}>
                         <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider> 
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item , index)=>{
                  return (
                    <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldname}</span>
                      <span className="text-xl">{item.fieldicon}</span>
                    </li>
                  );
                })}
              </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
