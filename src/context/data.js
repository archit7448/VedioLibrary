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
  const encodedToken = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      setLoaderState(true);
      try {
        const response = await axios.get("/api/categories");
        dispatch({
          type: "ADD_GENRES",
          payload: response.data.categories,
        });
        setTimeout(() => setLoaderState(false), 2000);
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
      setTimeout(() => setLoaderState(false), 2000);
    })();
  }, []);

  const AddPlaylist = async () => {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: {
          authorization: encodedToken,
        },
      });
      dispatch({ type: "ADD_PLAYLIST", payload: response.data.playlists });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    encodedToken !== null ? AddPlaylist() : null;
  }, [encodedToken]);

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
