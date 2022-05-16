import { useNavigate } from "react-router-dom";
import { CardForDelete, Header, Sidebar } from "../../Components/index";
import { useData } from "../../context/data";
import { UnlikeVideo } from "../../reducer/like";
export const LikedPage = () => {
  const { liked, dispatch } = useData();
  const DeleteHandler = (videoId, setShow) => {
    setShow(false);
    UnlikeVideo(videoId, dispatch);
  };
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        {token !== null ? (
          <div className="video-wrapper">
            {liked.length ? (
              liked.map((data) => {
                return (
                  <CardForDelete
                    prop={{ data, DeleteHandler, DeleteName: "Remove Video" }}
                  />
                );
              })
            ) : (
              <div className="flex-center flex-col flex-width">
                <h2 className="text-md text-center">Explore Videos</h2>
                <button
                  className="button-primary"
                  onClick={() => navigate("/explore")}
                >
                  Explore
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-center flex-col flex-width">
            <h2 className="text-md text-center">
              You have to log in to see Liked Videos.
            </h2>
            <button
              className="button-primary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        )}
      </aside>
    </main>
  );
};
