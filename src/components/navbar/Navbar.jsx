import BurgerButton from "./BurgerButton";
import "./Navbar.css";
import React, { useState } from "react";

const Navbar = ({
  headerSectionRef,
  descriptionSectionRef,
  projectsSectionRef,
  resumeSectionRef,
  contactsSectionRef,
}) => {
  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [isChecked, setIsChecked] = useState(false);

  const onButtonClick = () => {
    setIsChecked(!isChecked);
  };

  const NAVBAR_TARGETS = {
    headerNavButton: headerSectionRef,
    profileNavButton: descriptionSectionRef,
    projectsNavButton: projectsSectionRef,
    cvNavButton: resumeSectionRef,
    contactsNavButton: contactsSectionRef,
  };

  const onNavButtonClick = (e) => {
    const id = e.currentTarget.id;
    scrollTo(NAVBAR_TARGETS[id]);
  };

  return (
    <header className="navbar">
      <BurgerButton onButtonClick={onButtonClick} isChecked={isChecked} />
      {isChecked ? (
        <div>
          <button id="headerNavButton" onClick={onNavButtonClick}>
            <span>Main</span>
          </button>
          <button id="profileNavButton" onClick={onNavButtonClick}>
            <span>Profile</span>
          </button>
          <button id="projectsNavButton" onClick={onNavButtonClick}>
            <span>Projects</span>
          </button>
          <button id="cvNavButton" onClick={onNavButtonClick}>
            <span>CV</span>
          </button>
          <button id="contactsNavButton" onClick={onNavButtonClick}>
            <span>Contacts</span>
          </button>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
