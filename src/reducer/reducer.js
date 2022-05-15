import { FilterData } from "./filter";
import {
  IntialGenres,
  Intialvideo,
  IntialPlayList,
  AddVideoToPlaylist,
} from "./intializeData";

const ToggleModal = (state, action) => {
  return {
    ...state,
    setModal: !state.setModal,
    dataVideoPlaylist: action.payload,
  };
};

const reducer = {
  ADD_GENRES: IntialGenres,
  ADD_VIDEOS: Intialvideo,
  ADD_FILTER: FilterData,
  ADD_PLAYLIST: IntialPlayList,
  TOGGLE_MODAL: ToggleModal,
  UPDATE_VIDEO_PLAYLIST: AddVideoToPlaylist,
};

export const reducerFunction = (state, action) => {
  return reducer[action.type](state, action);
};

export const IntialState = {
  genres: [],
  videos: [],
  playlist: [],
  filter: "All",
  setModal: false,
  filterData: [],
  dataVideoPlaylist: {},
};
