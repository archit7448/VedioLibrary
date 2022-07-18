import axios from "axios";
export const addPlaylist = ({ value, token }, dispatch) => {
  (async () => {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        {
          playlist: {
            title: value,
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

export const addVideoToPlaylist = ({ video, playlistId, token }, dispatch) => {
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

export const removeVideoFromPlaylist = (
  { videoId, playlistId, token },
  dispatch
) => {
  (async () => {
    try {
      const response = await axios.delete(
        `/api/user/playlists/${playlistId}/${videoId}`,
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

export const removePlaylist = ({ playlistId, token }, dispatch) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: token,
        },
      });
      console.log(response.data.playlists);
      dispatch({
        type: "ADD_PLAYLIST",
        payload: response.data.playlists,
      });
    } catch (error) {
      console.log(error);
    }
  })();
};
