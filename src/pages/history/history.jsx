import { Header, Sidebar, CardForDelete } from "../../Components/index";
import { useData } from "../../context/data";
import { RemoveHistory } from "../../reducer/history";
import { useNavigate } from "react-router-dom";
export const HistoryPage = () => {
  const { history, dispatch, token } = useData();
  const DeleteHandler = (videoId, setShow) => {
    setShow(false);
    RemoveHistory({ token, videoId }, dispatch);
  };
  const navigate = useNavigate();
  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        {token !== null ? (
          <div className="video-wrapper">
            {history.length ? (
              history.map((data) => {
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
              You have to log in to see History.
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
