import React, { useState } from "react";
import "./Projects.css";
import Matster from "../../assets/matster.png";
import Taskster from "../../assets/taskster.png";
import Chatter from "../../assets/chatter.png";
import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import SimpleImageSlider from "react-simple-image-slider";

const images = [{ url: Chatter }, { url: Matster }, { url: Taskster }];

const Projects = React.forwardRef((props, ref) => {
  const [currentImageURL, setCurrentImageURL] = useState(
    "https://github.com/Nafaska/chatter"
  );

  const processOnStartSlide = (idx) => {
    switch (idx) {
      case 1:
        setCurrentImageURL("https://github.com/Nafaska/chatter");
        break;
      case 2:
        setCurrentImageURL("https://github.com/Nafaska/matster-online-shop");
        break;
      case 3:
        setCurrentImageURL("https://github.com/Nafaska/taskster");
        break;
      default:
        setCurrentImageURL("https://github.com/Nafaska/chatter");
        break;
    }
  };

  return (
    <div className="projects" ref={ref}>
      <a
        className="goToProjectBtn"
        href={currentImageURL}
        target="_blank"
        rel="noreferrer"
        alt="Go To Sourse"
      >
        <GithubLogo />
      </a>
      <SimpleImageSlider
        width={"70vmin"}
        height={"70vmin"}
        images={images}
        navStyle={2}
        showNavs={true}
        onStartSlide={processOnStartSlide}
      />
    </div>
  );
});

export default Projects;