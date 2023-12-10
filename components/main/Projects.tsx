import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

   
        <ProjectCard
          src="/NFT UI APP.png"
          title="NFT Market Place"
          description="Discover the latest NFTs with an elegant design, providing a seamless browsing experience for users"
          link="https://www.figma.com/file/KmWdjnB5QshuwUkpilOtbH/Dark-Neumorphism-UI-Tesla-app-(Community)?type=design&node-id=301-612&mode=design&t=C5iNk9w0EEXsKvEI-0"
        />
      
<br />
      <ProjectCard
        src="/Clueless.png"
        title="Clueless Website Redesign"
        description="Designed the main website for Clueless with a focus on a seamless and engaging user interface"
        link="https://www.figma.com/file/KmWdjnB5QshuwUkpilOtbH/Dark-Neumorphism-UI-Tesla-app-(Community)?type=design&node-id=301-612&mode=design&t=C5iNk9w0EEXsKvEI-0"
      />
       <br></br>
      <ProjectCard
        src="/Movie.png"
        title="Movie Booking App "
        description="lorem"
        link="https://www.figma.com/file/KmWdjnB5QshuwUkpilOtbH/Dark-Neumorphism-UI-Tesla-app-(Community)?type=design&node-id=301-612&mode=design&t=C5iNk9w0EEXsKvEI-0"
      />
       <br></br>

      <ProjectCard
        src="/Nav.jpg"
        title="Navigation Map App"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="https://www.figma.com/file/KmWdjnB5QshuwUkpilOtbH/Dark-Neumorphism-UI-Tesla-app-(Community)?type=design&node-id=301-612&mode=design&t=C5iNk9w0EEXsKvEI-0"
      />
       <br></br>

      <ProjectCard
        src="/Car.png"
        title="UI Tesla App"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="https://www.figma.com/file/KmWdjnB5QshuwUkpilOtbH/Dark-Neumorphism-UI-Tesla-app-(Community)?type=design&node-id=301-612&mode=design&t=C5iNk9w0EEXsKvEI-0"
      />
      <br></br>
     
    </div>
  );
};

export default Projects;
