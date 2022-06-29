import { FilterData } from "./filter";
import {
  IntialGenres,
  Intialvideo,
  IntialPlayList,
  AddVideoToPlaylist,
  AddLiked,
  UpdateWatchLater,
  UpdateHistory,
} from "./intializeData";

const ToggleModal = (state, action) => {
  return {
    ...state,
    setModal: !state.setModal,
    dataVideoPlaylist: action.payload,
  };
};

const updateToken = (state) => {
  return {
    ...state,
    token: localStorage.getItem("token"),
  };
};

const reducer = {
  ADD_GENRES: IntialGenres,
  ADD_VIDEOS: Intialvideo,
  ADD_FILTER: FilterData,
  ADD_PLAYLIST: IntialPlayList,
  TOGGLE_MODAL: ToggleModal,
  UPDATE_VIDEO_PLAYLIST: AddVideoToPlaylist,
  UPDATE_LIKES: AddLiked,
  UPDATE_WATCHLATER: UpdateWatchLater,
  UPDATE_HISTORY: UpdateHistory,
  UPDATE_TOKEN: updateToken,
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
  liked: [],
  watchLater: [],
  dataVideoPlaylist: {},
  history: [],
  token: null,
};
