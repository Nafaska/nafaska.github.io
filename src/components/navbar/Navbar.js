import BurgerButton from "./BurgerButton";
import "./Navbar.css";
import { useState } from "react";

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

  return (
    <header className="navbar">
      <BurgerButton onButtonClick={onButtonClick} isChecked={isChecked} />
      {isChecked ? (
        <div>
          <button onClick={() => scrollTo(headerSectionRef)}>Main</button>
          <button onClick={() => scrollTo(descriptionSectionRef)}>
            Description
          </button>
          <button onClick={() => scrollTo(projectsSectionRef)}>Projects</button>
          <button onClick={() => scrollTo(resumeSectionRef)}>CV</button>
          <button onClick={() => scrollTo(contactsSectionRef)}>Contacts</button>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
