import axios from "axios";
import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { IntialState, reducerFunction } from "../reducer/reducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, IntialState);
  const [loaderState, setLoaderState] = useState(false);
  const { token } = state;
  useEffect(() => {
    (async () => {
      setLoaderState(true);
      try {
        const response = await axios.get("/api/categories");
        dispatch({
          type: "ADD_GENRES",
          payload: response.data.categories,
        });
        setTimeout(() => setLoaderState(false), 1000);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoaderState(true);
      try {
        const response = await axios.get("/api/videos");
        dispatch({ type: "ADD_VIDEOS", payload: response.data.videos });
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => setLoaderState(false), 1000);
    })();
  }, []);

  const addPlaylist = async () => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "ADD_PLAYLIST", payload: response.data.playlists });
    } catch (error) {
      console.log(error);
    }
  };

  const addLiked = async () => {
    try {
      const response = await axios.get("/api/user/likes", {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "UPDATE_LIKES", payload: response.data.likes });
    } catch (error) {
      console.log(error);
    }
  };
  const addWatchLater = async () => {
    try {
      const response = await axios.get("/api/user/watchlater", {
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
  };
  const addHistory = async () => {
    try {
      const response = await axios.get("/api/user/history", {
        headers: {
          authorization: token,
        },
      });
      dispatch({
        type: "UPDATE_HISTORY",
        payload: response.data.history,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_TOKEN", payload: localStorage.getItem("token") });
  }, []);

  useEffect(() => {
    token !== null
      ? addPlaylist() && addLiked() && addWatchLater() && addHistory()
      : null;
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        genres: state.genres,
        videos: state.videos,
        filter: state.filter,
        filterData: state.filterData,
        setModal: state.setModal,
        playList: state.playlist,
        dataVideoPlaylist: state.dataVideoPlaylist,
        liked: state.liked,
        watchLater: state.watchLater,
        history: state.history,
        token: state.token,
        loaderState,
        setLoaderState,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
