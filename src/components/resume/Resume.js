import React from "react";
import "./Resume.css";
import { ReactComponent as DownloadPDFIcon } from "../../assets/downloadPdf.svg";

const Resume = React.forwardRef((props, ref) => {
  return (
    <div className="resume" ref={ref}>
      <div>Download my CV</div>
      <a
        href="/documents/CV_Viktoriia_Kovalenko.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <DownloadPDFIcon />
      </a>
    </div>
  );
});

export default Resume;
