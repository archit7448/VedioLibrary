import { CardForDelete, Header, Sidebar } from "../../Components/index";
import { useData } from "../../context/data";
import { UnlikeVideo } from "../../reducer/like";
export const LikedPage = () => {
  const { liked, dispatch } = useData();
  const DeleteHandler = (videoId,setShow) => {
    setShow(false)
    UnlikeVideo(videoId, dispatch);
  };
  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        <div className="video-wrapper">
          {liked.map((data) => {
            return (
              <CardForDelete
                prop={{ data, DeleteHandler, DeleteName: "Remove Video" }}
              />
            );
          })}
        </div>
      </aside>
    </main>
  );
};
