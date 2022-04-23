export const IntialGenres = (state, action) => {
  return { ...state, genres: [...action.payload] };
};

export const IntialVedio = (state, action) => {
  return {
    ...state,
    vedios: [...action.payload],
    filterData: [...action.payload],
  };
};
