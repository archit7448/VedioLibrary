import "./header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useData } from "../../context/data";
export const Header = () => {
  const { LogOutHandler } = useAuth();
  const { token } = useData();
  return (
    <div className="header flex-row flex-space-between">
      <Link to="/">
        <h1 className="text-l">StrangeLibrary</h1>
      </Link>
      <div>
        {token !== null ? (
          <button className="button-secondary" onClick={() => LogOutHandler()}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="button-secondary">LogIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};
