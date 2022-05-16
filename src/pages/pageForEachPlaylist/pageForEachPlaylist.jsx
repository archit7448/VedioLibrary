import { useParams } from "react-router-dom";
import { Header, Sidebar, VideoCard ,PlaylistModal} from "../../Components/index";
import { useData } from "../../context/data";

export const PageForEachPlaylist = () => {
  const { playlistId } = useParams();
  const { playList, setModal, dataVideoPlaylist } = useData();
  const pagePlaylist = playList.find(({ _id }) => _id === playlistId);
  const { videos } = pagePlaylist;
  return (
    <main>
      <Sidebar />
      {setModal && <PlaylistModal prop={dataVideoPlaylist} />}
      <aside>
        <Header />
        <div className="video-wrapper">
          {videos.map((data) => {
            const { _id } = data;
            return <VideoCard prop={{ data }} key={_id} />;
          })}
        </div>
      </aside>
    </main>
  );
};
