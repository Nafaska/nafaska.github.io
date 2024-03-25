import React from "react";
import "./Title.css";

const Title = React.forwardRef((props, ref) => {
  return (
    <div className="title" ref={ref}>
      <div className="perspective-text">
        <div className="perspective-line">
          <p></p>
          <p>Viktoriia</p>
        </div>
        <div className="perspective-line">
          <p>Viktoriia</p>
          <p>Kovalenko</p>
        </div>
        <div className="perspective-line">
          <p>Kovalenko</p>
          <p>FullStack</p>
        </div>
        <div className="perspective-line">
          <p>FullStack</p>
          <p>JavaScript</p>
        </div>
        <div className="perspective-line">
          <p>JavaScript</p>
          <p>Developer</p>
        </div>
        <div className="perspective-line">
          <p>Developer</p>
          <p></p>
        </div>
      </div>
    </div>
  );
});

export default Title;
