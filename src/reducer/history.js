import axios from "axios";
import { notifySuccess } from "../utility/notification/utility-toast";
export const addHistory = ({ token, video }, dispatch) => {
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

export const removeHistory = ({ token, videoId }, dispatch) => {
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

export const clearHistory = ({ token }, dispatch) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/user/history/all`, {
        headers: {
          authorization: token,
        },
      });
      notifySuccess("History Cleared");
      dispatch({ type: "UPDATE_HISTORY", payload: response.data.history });
    } catch (error) {
      console.log(error);
    }
  })();
};
