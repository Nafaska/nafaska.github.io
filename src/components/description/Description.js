import "./Description.css";
import React from "react";
import ProfessionalCompetence from "./ProfessionalCompetence";

const Description = React.forwardRef((props, ref) => {
  return (
    <div className="description" ref={ref}>
      <div className="text">
        Always curious & learning 📚 <b />
        Enjoy cooking 🧑‍🍳 traveling ✈️ cats 🐈 <b />
        #WomenWhoCode 💻 <b />
      </div>
      <ProfessionalCompetence />
    </div>
  );
});

export default Description;
