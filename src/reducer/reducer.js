import { IntialGenres } from "./intializeData";

const reducer = {
  ADD_GENRES: IntialGenres,
};

export const reducerFunction = (state, action) => {
  return reducer[action.type](state, action);
};

export const IntialState = {
  genres: [],
};
