import { useData } from "../../context/data";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./videoCard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const VideoCard = ({ prop }) => {
  const { data } = prop;
  const [show, setShow] = useState(false);
  const { dispatch } = useData();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { _id, MovieName } = data;
  const PlayListHandler = () => {
    if (token !== null) {
      dispatch({ type: "TOGGLE_MODAL", payload: data });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="video-card">
      <img
        src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`}
        onClick={() => navigate(`/explore/${_id}`)}
      />
      <div className="flex-row flex-space-between flex-center video-data-div">
        <h1 className="text-sm">{MovieName}</h1>
        <div className="video-card-func-wrapper flex-row">
          {show && (
            <div className="video-card-hover">
              <h3>
                {" "}
                <MdWatchLater />
                Add to WatchLater
              </h3>
              <h3 onClick={() => PlayListHandler()}>
                <MdPlaylistAdd />
                Add to Playlist
              </h3>
            </div>
          )}
          <div
            className="video-card-vertical"
            onClick={() => setShow((show) => !show)}
          >
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};
