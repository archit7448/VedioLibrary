import axios from "axios";
import { notifyMessage } from "../utility/notification/utility-toast";
export const addWatchLater = ({ token, video }, dispatch) => {
  (async () => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
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
        type: "UPDATE_WATCHLATER",
        payload: response.data.watchlater,
      });
      notifyMessage("Added to Watchlater");
    } catch (error) {
      console.log(error);
    }
  })();
};

export const removeWatchLater = ({ videoId, token }, dispatch) => {
  (async () => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: "UPDATE_WATCHLATER",
        payload: response.data.watchlater,
      });
    } catch (error) {
      console.log(error);
    }
  })();
};
