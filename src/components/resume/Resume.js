import React from "react";
import "./Resume.css";

const Resume = React.forwardRef((props, ref) => {
  return (
    <div className="resume" ref={ref}>Download my resume</div>
  );
});

export default Resume;