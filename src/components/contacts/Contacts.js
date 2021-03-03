import React from "react";
import "./Contacts.css";

const Contacts = React.forwardRef((props, ref) => {
  return (
    <div className="contacts" ref={ref}>
      Contact me
    </div>
  );
})

export default Contacts;