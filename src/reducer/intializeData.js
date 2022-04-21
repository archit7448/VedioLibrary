export const IntialGenres = (state, action) => {
  return { ...state, genres: [...action.payload] };
};
