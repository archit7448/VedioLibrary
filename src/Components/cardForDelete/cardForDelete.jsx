import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const CardForDelete = ({ prop }) => {
  const { data, DeleteHandler, DeleteName } = prop;
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { _id, MovieName } = data;
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
            <div className="video-card-hover playlist-card-hover">
              <button onClick={() => DeleteHandler(_id, setShow)} W>
                {" "}
                <AiFillDelete />
                {DeleteName}
              </button>
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
