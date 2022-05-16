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

export const IntialPlayList = (state, action) => {
  return {
    ...state,
    playlist: [...action.payload],
  };
};

export const AddVideoToPlaylist = (state, action) => {
  const { playlistData, playlistId } = action.payload;
  return {
    ...state,
    playlist: state.playlist.map((playlistToCheck) =>
      playlistToCheck._id !== playlistId ? playlistToCheck : playlistData
    ),
  };
};

export const AddLiked = (state, action) => {
  return { ...state, liked: [...action.payload] };
};

export const AddWatchLater = (state, action) => {
  return { ...state, watchLater: [...action.payload] };
};
