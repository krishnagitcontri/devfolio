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
          description=""
          link="https://www.figma.com/proto/7IfYlaLzt026uiPiC8kn6E/UI-Design-a-Dark-Mode-NFT-app-(Community)?node-id=60-545"
        />
      
<br />
      <ProjectCard
        src="/Clueless.png"
        title="Clueless Website Redesign"
        description=""
        link="https://www.clueless.live/"
      />
       <br></br>
      <ProjectCard
        src="/Movie.png"
        title="Movie Booking App "
        description=""
        link=""
      />
       <br></br>

      <ProjectCard
        src="/Nav.jpg"
        title="Navigation Map App"
        description=""
        link="https://www.figma.com/proto/FcaXhehBKHSXAp6UHv0AGa/Navigation-app-(Community)?type=design&node-id=126-3417&t=QvxIbAu85gdvqGQa-0&scaling=min-zoom&page-id=126%3A2812&starting-point-node-id=126%3A3417"
      />
       <br></br>

      <ProjectCard
        src="/Car.png"
        title="UI Tesla App"
        description=""
        link="https://www.clueless.live/"
      />
      <br></br>
     
    </div>
  );
};

export default Projects;
