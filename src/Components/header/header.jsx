import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header flex-row flex-space-between">
      <Link to="/">
        <h1 className="text-l">StrangeLibrary</h1>
      </Link>
      <div>
        <button className="button-secondary">Login</button>
      </div>
    </div>
  );
};
