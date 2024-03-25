import React from "react";
import "./Contacts.css";
import LinkedinLogo from "../../assets/linkedin.svg?react";
import GithubLogo from "../../assets/github.svg?react";
import FacebookLogo from "../../assets/facebook.svg?react";
import TwitterLogo from "../../assets/twitter.svg?react";
import ContactMe from "./ContactMe";

const Contacts = React.forwardRef((props, ref) => {
  return (
    <div className="contacts" ref={ref}>
      Follow or contact me in:
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/viktoriia-kovalenko"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo />
        </a>
        <a href="https://github.com/Nafaska" target="_blank" rel="noreferrer">
          <GithubLogo />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004770970960"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookLogo />
        </a>
        <a
          href="https://twitter.com/particular_mode"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogo />
        </a>
      </div>
      Or just send a message:
      <ContactMe />
    </div>
  );
});

export default Contacts;
