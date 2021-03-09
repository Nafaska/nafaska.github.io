import React from "react";
import "./Resume.css";
import CV_Viktoriia_Kovalenko from "../../documents/CV_Viktoriia_Kovalenko.pdf";
import { ReactComponent as DownloadPDFIcon } from "../../assets/downloadPdf.svg";

const Resume = React.forwardRef((props, ref) => {
  return (
    <div className="resume" ref={ref}>
      <div>Download my CV</div>
      <a href={CV_Viktoriia_Kovalenko} target="_blank" rel="noreferrer">
        <DownloadPDFIcon />
      </a>
    </div>
  );
});

export default Resume;
