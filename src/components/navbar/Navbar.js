import "./Navbar.css";

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

  return (
    <header className="navbar">
      <button onClick={() => scrollTo(headerSectionRef)}>Main</button>
      <button onClick={() => scrollTo(descriptionSectionRef)}>
        Description
      </button>
      <button onClick={() => scrollTo(projectsSectionRef)}>Projects</button>
      <button onClick={() => scrollTo(resumeSectionRef)}>Resume</button>
      <button onClick={() => scrollTo(contactsSectionRef)}>Contacts</button>
    </header>
  );
};

export default Navbar;
