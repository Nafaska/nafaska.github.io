import "./Description.css";
import React from "react";
import ProfessionalCompetence from "./ProfessionalCompetence";

const Description = React.forwardRef((props, ref) => {
  return (
    <div className="description" ref={ref}>
      <ProfessionalCompetence />
    </div>
  );
});

export default Description;
