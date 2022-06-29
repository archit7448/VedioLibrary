import axios from "axios";
export const AddHistory = ({ token, video }, dispatch) => {
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

export const RemoveHistory = ({ token, videoId }, dispatch) => {
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

export const DeleteAllHistory = (token, dispatch) => {
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
