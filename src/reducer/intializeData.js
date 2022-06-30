export const intialGenres = (state, action) => {
  return { ...state, genres: [...action.payload] };
};

export const intialVideo = (state, action) => {
  return {
    ...state,
    videos: [...action.payload],
    filterData: [...action.payload],
  };
};

export const intialPlaylist = (state, action) => {
  return {
    ...state,
    playlist: [...action.payload],
  };
};

export const addVideoToPlaylist = (state, action) => {
  const { playlistData, playlistId } = action.payload;
  return {
    ...state,
    playlist: state.playlist.map((playlistToCheck) =>
      playlistToCheck._id !== playlistId ? playlistToCheck : playlistData
    ),
  };
};

export const addLiked = (state, action) => {
  return { ...state, liked: [...action.payload] };
};

export const updateWatchLater = (state, action) => {
  return { ...state, watchLater: [...action.payload] };
};

export const updateHistory = (state, action) => {
  return { ...state, history: [...action.payload] };
};
