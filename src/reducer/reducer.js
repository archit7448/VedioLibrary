import { filterData } from "./filter";
import {
  intialGenres,
  intialVideo,
  intialPlaylist,
  addVideoToPlaylist,
  addLiked,
  updateWatchLater,
  updateHistory,
} from "./intializeData";

const toggleModal = (state, action) => {
  return {
    ...state,
    setModal: !state.setModal,
    dataVideoPlaylist: action.payload,
  };
};

const updateToken = (state, action) => {
  return {
    ...state,
    token: action.payload,
  };
};

const reducer = {
  ADD_GENRES: intialGenres,
  ADD_VIDEOS: intialVideo,
  ADD_FILTER: filterData,
  ADD_PLAYLIST: intialPlaylist,
  TOGGLE_MODAL: toggleModal,
  UPDATE_VIDEO_PLAYLIST: addVideoToPlaylist,
  UPDATE_LIKES: addLiked,
  UPDATE_WATCHLATER: updateWatchLater,
  UPDATE_HISTORY: updateHistory,
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
