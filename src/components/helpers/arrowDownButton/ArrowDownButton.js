import "./ArrowDownButton.css";
import { ReactComponent as ArrowDownIcon } from "./arrow-down.svg";

const ArrowDownButton = () => {
  return (
    <button className="arrow-down-button">
      <ArrowDownIcon />
    </button>
  );
};

export default ArrowDownButton;
