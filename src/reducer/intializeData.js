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
  console.log(playlistData,playlistId)
  return {
    ...state,
    playlist: state.playlist.map((playlistToCheck) =>
      playlistToCheck._id !== playlistId ? playlistToCheck : playlistData
    ),
  };
};
