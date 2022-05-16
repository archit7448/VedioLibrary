import { useNavigate } from "react-router-dom";
import { Header, Sidebar, CardForDelete } from "../../Components/index";
import { useData } from "../../context/data";
import { RemoveWatchLater } from "../../reducer/watchLater";

export const WatchLaterPage = () => {
  const { watchLater, dispatch } = useData();
  const DeleteHandler = (id, setShow) => {
    setShow(false);
    RemoveWatchLater(id, dispatch);
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
            {watchLater.length > 0 ? (
              watchLater.map((data) => {
                return (
                  <CardForDelete
                    prop={{
                      data,
                      DeleteHandler,
                      DeleteName: "Remove Video",
                    }}
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
              You have to log in to see Watch Later.
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
