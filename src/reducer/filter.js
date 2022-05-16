
export const FilterData = (state, action) => {
  const { videos } = state;
  return {
    ...state,
    filterData:
      action.payload !== "All"
        ? videos.filter(({ categoryName }) => categoryName === action.payload)
        : videos,
    filter: action.payload,
  };
};
