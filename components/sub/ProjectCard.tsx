// import { link } from "fs";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link:string;
  
}

const ProjectCard = ({ src, title, description,link }: Props) => {
  return (
    <a href= {"https://www.figma.com/file/KmWdjnB5QshuwUkpilOtbH/Dark-Neumorphism-UI-Tesla-app-(Community)?type=design&node-id=301-612&mode=design&t=C5iNk9w0EEXsKvEI-0"} className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;