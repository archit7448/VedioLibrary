import { useParams } from "react-router-dom";
import { Header, Sidebar, CardForDelete } from "../../Components/index";
import { useData } from "../../context/data";
import { removeVideoFromPlaylist } from "../../reducer";
import { reverseArrayFunc } from "../../utility/reverseArray/reverseArray";
export const PageForEachPlaylist = () => {
  const { playlistId } = useParams();
  const { playList, token, dispatch } = useData();
  const pagePlaylist = playList.find(({ _id }) => _id === playlistId);
  const { videos } = pagePlaylist;
  const DeleteHandler = (prop, setShow) => {
    setShow(false);
    removeVideoFromPlaylist({ videoId: prop, playlistId, token }, dispatch);
  };
  const reverseArray = reverseArrayFunc(videos);
  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        <div className="video-wrapper">
          {reverseArray.map((data) => {
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
