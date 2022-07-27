import { useNavigate } from "react-router-dom";
import { CardForDelete, Header, Sidebar } from "../../Components/index";
import { useData } from "../../context/data";
import { unlikeVideo } from "../../reducer/like";
import { reverseArrayFunc } from "../../utility/reverseArray/reverseArray";
export const LikedPage = () => {
  const { liked, dispatch } = useData();
  const DeleteHandler = (videoId, setShow) => {
    setShow(false);
    unlikeVideo({ _id: videoId, token }, dispatch);
  };
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const reverseArray = reverseArrayFunc(liked);
  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        {token !== null ? (
          <div className="video-wrapper">
            {reverseArray.length > 0 ? (
              reverseArray.map((data) => {
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
