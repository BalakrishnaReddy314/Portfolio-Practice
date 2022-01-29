import React from "react";
import "./ProjectCard.css";

interface IProject {
  id: number;
  title: string;
  about: string;
  tags: string[];
  demo: string;
  github: string;
  image: string;
}

interface IProjectCardProps {
  project: IProject;
}

function ProjectCard({ project }: IProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              href={project.demo}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                <i className="fi fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                <i className="devicon-github-original"></i>GitHub
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="projects-tags">
            {
                project.tags.map((tag) => {
                    return(
                        <label className="tag">{tag}</label>
                    )
                })
            }
        </div>
      </div>
      <img src={project.image} alt="" className="project-photo" />
    </div>
  );
}

export default ProjectCard;
