export const IntialGenres = (state, action) => {
  return { ...state, genres: [...action.payload] };
};

export const Intialvideo = (state, action) => {
  return {
    ...state,
    videos: [...action.payload],
    filterData: [...action.payload],
  };
};
