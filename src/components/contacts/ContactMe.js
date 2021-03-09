import React, { useState } from "react";
import "./ContactMe.css";
import { init, sendForm } from "emailjs-com";

function CountactMe() {
  init(process.env.REACT_APP_USER_ID);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const regexOnlyWhiteSpace = /^\s*$/;

  function validateEmail(email) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const validateForm = () => {
    if (
      regexOnlyWhiteSpace.test(message) ||
      regexOnlyWhiteSpace.test(email) ||
      regexOnlyWhiteSpace.test(name)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is not valid, please try again.");
    } else {
      setErrorMessage("");
      sendMessage();
    }
  };

    const getSuccessMessageTimeout = () => {
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    };

  const sendMessage = () => {
    sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      "#sendEmailForm"
    ).then(
      function (response) {
        setEmail("");
        setMessage("");
        setName("");
        setIsSuccess(true);
        getSuccessMessageTimeout();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <form id="sendEmailForm">
      <input
        required
        label="Name"
        placeholder="Name"
        type="text"
        name="user_name"
        value={name}
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        required
        label="Email"
        placeholder="Email"
        name="user_email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrorMessage("");
        }}
      />
      <textarea
        required
        label="Message"
        placeholder="Message"
        type="text"
        value={message}
        name="message"
        variant="outlined"
        multiline="true"
        rows="6"
        onChange={(e) => setMessage(e.target.value)}
      />
      {errorMessage ? <div className="errorMessage">{errorMessage}</div> : null}
      {isSuccess ? (
        <div className="successMessage">
          Your email has been sent.<br />
          I will get back to you ASAP.
        </div>
      ) : null}
      <button
        variant="contained"
        color="primary"
        type="button"
        onClick={onSubmit}
        disabled={validateForm()}
      >
        Send Message
      </button>
    </form>
  );
}
export default CountactMe;
