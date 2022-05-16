import { Header, Sidebar, CardForDelete } from "../../Components/index";
import { useData } from "../../context/data";
import { RemoveWatchLater } from "../../reducer/watchLater";

export const WatchLaterPage = () => {
  const { watchLater, dispatch } = useData();
  const DeleteHandler = (id, setShow) => {
    setShow(false);
    RemoveWatchLater(id, dispatch);
  };
  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        <div className="video-wrapper">
          {watchLater.map((data) => {
            return (
              <CardForDelete
                prop={{
                  data,
                  DeleteHandler,
                  DeleteName: "Remove Video",
                }}
              />
            );
          })}
        </div>
      </aside>
    </main>
  );
};
