import React from "react";
import Separator from "../../Common/Seperator/Separator";
import { ProjectData } from "../../Data/Projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
