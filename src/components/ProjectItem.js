import React from "react";
import user from "../data/user";


function ProjectItem() {
return user.projects.map(
      project => 
      {return <div className="project-item">
        <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div className="technologies">
      {project.technologies.map(tech =>
          {return <>
        <span key={tech.indexOf}>{tech}</span>
        </>})}
    </div>
    </div>
  })
  }

export default ProjectItem;
