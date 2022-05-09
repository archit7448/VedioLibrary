import axios from "axios";
const token = localStorage.getItem("token");
export const AddPlayList = (payload, dispatch) => {
  (async () => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        {
          playlist: {
            title: payload,
            description: "",
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "ADD_PLAYLIST", payload: response.data.playlists });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const AddVideoToPlaylist = (video, playlistId, dispatch) => {
  (async () => {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({
        type: "UPDATE_VIDEO_PLAYLIST",
        payload: { playlistData: response.data.playlist, playlistId },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const RemoveVideoFromPlaylist = (video, playlistId, dispatch) => {
  const { _id } = video;
  (async () => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${_id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({
        type: "UPDATE_VIDEO_PLAYLIST",
        payload: { playlistData: response.data.playlist, playlistId },
      });
    } catch (error) {
      console.log(error);
    }
  })();
};
