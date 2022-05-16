import axios from "axios";
const token = localStorage.getItem("token");
export const AddHistory = (video, dispatch) => {
  (async () => {
    try {
      const response = await axios.post(
        "/api/user/history",
        {
          video,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch({ type: "UPDATE_HISTORY", payload: response.data.history });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const RemoveHistory = (videoId, dispatch) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/user/history/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "UPDATE_HISTORY", payload: response.data.history });
    } catch (error) {
      console.log(error);
    }
  })();
};

export const DeleteAllHistory = (dispatch) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/user/history/all`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "UPDATE_HISTORY", payload: response.data.history });
    } catch (error) {
      console.log(error);
    }
  })();
};
