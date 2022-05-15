import loader from "../../assets/oval.svg";
import "./loader.css";
const Loader = () => {
  return (
    <div className="loader-wrapper flex-center">
      <img src={loader} className="loader" />
    </div>
  );
};

export { Loader };
