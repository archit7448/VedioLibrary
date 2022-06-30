import { AiFillDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removePlaylist } from "../../reducer/index";
import { useData } from "../../context/data";
export const PlaylistCard = ({ prop }) => {
  const { playlistEach } = prop;
  const { dispatch, token } = useData();
  const { videos, title, _id } = playlistEach;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="video-card video-playlist">
      <img
        src={`https://i.ytimg.com/vi/${videos[0]?._id}/maxresdefault.jpg`}
        onClick={() => navigate(`/playlist/${_id}`)}
      />
      <div className="flex-row flex-space-between flex-center video-data-div">
        <h1 className="text-sm">{title} Playlist</h1>
        <div className="video-card-func-wrapper flex-row">
          {show && (
            <div className="video-card-hover playlist-card-hover">
              <h3
                onClick={() =>
                  removePlaylist({ playlistId: _id, token }, dispatch)
                }
              >
                {" "}
                <AiFillDelete />
                Delete Playlist
              </h3>
            </div>
          )}
          <div
            className="video-card-vertical"
            onClick={() => setShow((setShow) => !setShow)}
          >
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};
