import { Header, PlaylistCard, Sidebar } from "../../Components/index";
import { useData } from "../../context/data";
export const PlaylistPage = () => {
  const { playList } = useData();

  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        <div className="video-wrapper">
          {playList.length > 0 ? (
            playList.map((playlistEach) => {
              const { _id } = playlistEach ;
              return <PlaylistCard prop={{ playlistEach }}key={_id} />;
            })
          ) : (
            <div></div>
          )}
        </div>
      </aside>
    </main>
  );
};
