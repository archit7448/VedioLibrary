import axios from "axios";
const token = localStorage.getItem("token");
export const LikeVideo = (video, dispatch) => {
  (async () => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "UPDATE_LIKES", payload: response.data.likes });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const UnlikeVideo = (videoId, dispatch) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "UPDATE_LIKES", payload: response.data.likes });
    } catch (error) {
      console.log(error);
    }
  })();
};
