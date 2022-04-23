export const FilterData = (state, action) => {
  const { vedios } = state;
  return {
    ...state,
    filterData:
      action.payload !== "All"
        ? vedios.filter(({ categoryName }) => categoryName === action.payload)
        : vedios,
    filter: action.payload,
  };
};
