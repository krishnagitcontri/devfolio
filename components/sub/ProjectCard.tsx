// import { link } from "fs";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link:string;
  
}



const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <a
      href={link}
      className="block relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-xl"
    >
      <div className="w-full h-64">
        <Image
          src={src}
          alt={title}
          width={800}
          height={800}
          className="w-full object-contain"
        />
      </div>
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
