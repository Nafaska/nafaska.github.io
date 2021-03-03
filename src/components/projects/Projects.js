import React from "react";
import "./Projects.css";

const Projects = React.forwardRef((props, ref) => {

  return (
    <div className="projects" ref={ref}>
      Here is my projects
    </div>
  );
});

export default Projects;