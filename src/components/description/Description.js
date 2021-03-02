import "./Description.css";
import ArrowDownButton from "../helpers/arrowDownButton/ArrowDownButton";

const Description = () => {
  return (
    <div className="description">
      {/* <p>JavaScript | React | Node 🚀</p> */}
      <div>
        Always curious & learning 📚 <b />
        Enjoy cooking 🧑‍🍳 traveling ✈️ cats 🐈 <b />
        #WomenWhoCode 💻 <b />
      </div>
      <ArrowDownButton />
    </div>
  );
};

export default Description;
