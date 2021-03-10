import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";

const ProfessionalCompetence = () => {
  SyntaxHighlighter.registerLanguage("jsx", jsx);
  const codeString = `const Description = () => {
  return (
    <div>
      <h3>
        Always curious & learning 📚 <br />
        Enjoy cooking 🧑‍🍳 traveling ✈️ cats 🐈 <br />
        #WomenWhoCode 💻
      </h3>
      <ul className="professional-competence">
        <li>JavaScript</li>
        <li>React/Redux</li>
        <li>Node/Express</li>
        <li>Git</li>
        <li>MongoDB/Mongoose</li>
        <li>Heroku</li>
        <li>Jest</li>
        <li>Cypress</li>
      </ul>
    </div>
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
