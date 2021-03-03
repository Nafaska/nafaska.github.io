import "./Description.css";
import React from "react";

const Description = React.forwardRef((props, ref) => {
return (
    <div className="description" ref={ref}>
      {/* <p>JavaScript | React | Node 🚀</p> */}
      <div>
        Always curious & learning 📚 <b />
        Enjoy cooking 🧑‍🍳 traveling ✈️ cats 🐈 <b />
        #WomenWhoCode 💻 <b />
      </div>
    </div>
  );
})

export default Description;
