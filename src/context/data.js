import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { IntialState, reducerFunction } from "../reducer/reducer";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, IntialState);

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
        dispatch({ type: "ADD_VEDIOS", payload: response.data.videos });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <DataContext.Provider
      value={{
        genres: state.genres,
        vedios: state.vedios,
        filter: state.filter,
        filterData: state.filterData,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
