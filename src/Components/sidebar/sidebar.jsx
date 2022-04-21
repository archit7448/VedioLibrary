import { AiFillHome, AiFillLike } from "react-icons/ai";
import { MdExplore, MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "sidebar-active" : "sidebar-non-active"
        }
      >
        <div>
          <h1 className="text-md">
            <AiFillHome />{" "}
          </h1>
        </div>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive ? "sidebar-active" : "sidebar-non-active"
        }
      >
        <div>
          <h1 className="text-md">
            {" "}
            <MdExplore />{" "}
          </h1>
        </div>
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) =>
          isActive ? "sidebar-active" : "sidebar-non-active"
        }
      >
        <div>
          <h1 className="text-md">
            {" "}
            <MdPlaylistAdd />{" "}
          </h1>
        </div>
      </NavLink>
      <NavLink
        to="/liked"
        className={({ isActive }) =>
          isActive ? "sidebar-active" : "sidebar-non-active"
        }
      >
        <div>
          <h1 className="text-md">
            {" "}
            <AiFillLike />{" "}
          </h1>
        </div>
      </NavLink>
      <NavLink
        to="/WatchLater"
        className={({ isActive }) =>
          isActive ? "sidebar-active" : "sidebar-non-active"
        }
      >
        <div>
          <h1 className="text-md">
            {" "}
            <MdWatchLater />{" "}
          </h1>
        </div>
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) =>
          isActive ? "sidebar-active" : "sidebar-non-active"
        }
      >
        <div>
          <h1 className="text-md">
            {" "}
            <FaHistory />{" "}
          </h1>
        </div>
      </NavLink>
    </div>
  );
};
