import React from "react";
import "./Title.css";

const Title = React.forwardRef((props, ref) => {
  return (
    <div className="title" ref={ref}>
      <div class="perspective-text">
        <div class="perspective-line">
          <p></p>
          <p>Viktoriia</p>
        </div>
        <div class="perspective-line">
          <p>Viktoriia</p>
          <p>Kovalenko</p>
        </div>
        <div class="perspective-line">
          <p>Kovalenko</p>
          <p>FullStack</p>
        </div>
        <div class="perspective-line">
          <p>FullStack</p>
          <p>JavaScript</p>
        </div>
        <div class="perspective-line">
          <p>JavaScript</p>
          <p>Developer</p>
        </div>
        <div class="perspective-line">
          <p>Developer</p>
          <p></p>
        </div>
      </div>
    </div>
  );
});

export default Title;
