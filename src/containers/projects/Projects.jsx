import React from "react";
import Cards from "../../components/cards/Cards";
import { ProjectList } from "../../helpers/Projectlist";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="project__list">
        {ProjectList.map((project) => {
          return <Cards name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
