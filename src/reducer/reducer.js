import { FilterData } from "./filter";
import { IntialGenres, IntialVedio } from "./intializeData";

const reducer = {
  ADD_GENRES: IntialGenres,
  ADD_VEDIOS: IntialVedio,
  ADD_FILTER: FilterData,
};

export const reducerFunction = (state, action) => {
  return reducer[action.type](state, action);
};

export const IntialState = {
  genres: [],
  vedios: [],
  filter: "All",
  filterData: [],
};
