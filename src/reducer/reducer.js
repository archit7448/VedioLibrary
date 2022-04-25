import { FilterData } from "./filter";
import { IntialGenres, Intialvideo } from "./intializeData";

const reducer = {
  ADD_GENRES: IntialGenres,
  ADD_videoS: Intialvideo,
  ADD_FILTER: FilterData,
};

export const reducerFunction = (state, action) => {
  return reducer[action.type](state, action);
};

export const IntialState = {
  genres: [],
  videos: [],
  filter: "All",
  filterData: [],
};
