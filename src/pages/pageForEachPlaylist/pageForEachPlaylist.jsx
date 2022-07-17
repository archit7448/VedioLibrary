import { useParams } from "react-router-dom";
import {
  Header,
  Sidebar,
  VideoCard,
  PlaylistModal,
  CardForDelete,
} from "../../Components/index";
import { useData } from "../../context/data";
import { removeVideoFromPlaylist } from "../../reducer";

export const PageForEachPlaylist = () => {
  const { playlistId } = useParams();
  const { playList, token, dispatch } = useData();
  const pagePlaylist = playList.find(({ _id }) => _id === playlistId);
  const { videos } = pagePlaylist;
  const DeleteHandler = (prop, setShow) => {
    setShow(false);
    removeVideoFromPlaylist({ videoId: prop, playlistId, token }, dispatch);
  };
  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        <div className="video-wrapper">
          {videos.map((data) => {
            const { _id } = data;
            return (
              <CardForDelete
                prop={{ data, DeleteHandler, DeleteName: "Remove Video" }}
                key={_id}
              />
            );
          })}
        </div>
      </aside>
    </main>
  );
};
