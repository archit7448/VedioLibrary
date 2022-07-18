import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { useData } from "../../context/data";
import { clearHistory } from "../../reducer/history";
export const Header = () => {
  const { logOutHandler } = useAuth();
  const { token, dispatch } = useData();
  const location = useLocation();
  return (
    <div className="header flex-row flex-space-between">
      <Link to="/">
        <h1 className="text-l">StrangeLibrary</h1>
      </Link>
      <div>
        {token !== null ? (
          location.pathname !== "/history" ? (
            <button
              className="button-secondary"
              onClick={() => logOutHandler()}
            >
              Logout
            </button>
          ) : (
            <button
              className="button-secondary"
              onClick={() => clearHistory({ token }, dispatch)}
            >
              Clear History
            </button>
          )
        ) : (
          <Link to="/login">
            <button className="button-secondary">LogIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};
