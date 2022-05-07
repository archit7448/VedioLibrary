import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { IntialState, reducerFunction } from "../reducer/reducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, IntialState);
  const encodedToken = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        dispatch({ type: "ADD_GENRES", payload: response.data.categories });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        dispatch({ type: "ADD_VIDEOS", payload: response.data.videos });
      } catch (error) {
        console.log(error);
      }
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
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
