import "./App.css";
import { useRef } from "react";
import Title from "./components/title/Title";
import Description from "./components/description/Description";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/contacts/Contacts";
import Resume from "./components/resume/Resume";
require("dotenv").config();

function App() {
  const headerSectionRef = useRef(null);
  const descriptionSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const resumeSectionRef = useRef(null);
  const contactsSectionRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        headerSectionRef={headerSectionRef}
        descriptionSectionRef={descriptionSectionRef}
        projectsSectionRef={projectsSectionRef}
        contactsSectionRef={contactsSectionRef}
        resumeSectionRef={resumeSectionRef}
      />
      <Title ref={headerSectionRef} />
      <Description ref={descriptionSectionRef} />
      <Projects ref={projectsSectionRef} />
      <Resume ref={resumeSectionRef} />
      <Contacts ref={contactsSectionRef} />
    </div>
  );
}

export default App;
