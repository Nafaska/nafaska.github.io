import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";

const ProfessionalCompetence = () => {
  SyntaxHighlighter.registerLanguage("jsx", jsx);
  const codeString = `const ProfessionalCompetence = () => {
  return (
    <ul>
      <li>JavaScript</li>
      <li>React/Redux</li>
      <li>Node/Express</li>
      <li>Git</li>
      <li>MongoDB/Mongoose</li>
      <li>Tailwind</li>
      <li>Heroku</li>
      <li>Jest</li>
      <li>Cypress</li>
    </ul>
  )
}`;

  return (
    <SyntaxHighlighter
      language="jsx"
      style={a11yDark}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ProfessionalCompetence;
