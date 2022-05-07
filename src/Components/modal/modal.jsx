import { useState } from "react";
import { useData } from "../../context/data";
import "./modal.css";
import {
  AddPlayList,
  AddVideoToPlaylist,
  RemoveVideoFromPlaylist,
} from "../../reducer/playlist";
export const PlaylistModal = ({ prop }) => {
  const { dispatch, playList } = useData();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const PlayListHandler = () => {
    if (!show || value.length === 0) {
      setShow(true);
    } else {
      AddPlayList(value, dispatch);
      setShow(false);
      setValue("");
    }
  };
  const isInPlayList = (_id) => {
    return playList
      .find((playListToFind) => playListToFind._id === _id)
      .videos.find((videoInPlaylist) => videoInPlaylist._id === prop._id) ===
      undefined
      ? false
      : true;
  };
  return (
    <div className="modal-wrapper flex-center">
      <div className="modal">
        <div className="flex-row flex-space-between">
          <h3>Save</h3>
          <h3
            className="button-cross-modal"
            onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
          >
            X
          </h3>
        </div>
        {playList.length > 0 &&
          playList.map(({ _id, title }) => {
            isInPlayList(_id);
            return (
              <div key={_id}>
                <input
                  type="checkbox"
                  checked={isInPlayList(_id)}
                  onChange={() =>
                    isInPlayList(_id)
                      ? RemoveVideoFromPlaylist(prop, _id, dispatch)
                      : AddVideoToPlaylist(prop, _id, dispatch)
                  }
                />
                <label>{title}</label>
              </div>
            );
          })}
        {show && (
          <div className="flex-row playlist-input">
            <h3>Name: </h3>
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
        )}
        <button
          className="button-primary button-playlist"
          onClick={() => PlayListHandler()}
        >
          Create New playlist
        </button>
      </div>
    </div>
  );
};
