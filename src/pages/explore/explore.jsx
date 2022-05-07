import {
  Header,
  PlaylistModal,
  Sidebar,
  VideoCard,
} from "../../Components/index";
import { useData } from "../../context/data";
import "./explore.css";
export const ExplorePage = () => {
  const { genres, dispatch, filter, filterData, setModal, dataVideoPlaylist } =
    useData();
  return (
    <main>
      <Sidebar />
      {setModal && <PlaylistModal prop={dataVideoPlaylist} />}
      <aside>
        <Header />
        <div className="flex-row filter-wrapper">
          <div
            className={
              filter === "All"
                ? "filter-button background-color-primary"
                : "filter-button"
            }
            onClick={() => dispatch({ type: "ADD_FILTER", payload: "All" })}
          >
            All
          </div>
          {genres.map(({ categoryName, _id }) => {
            return (
              <div
                key={_id}
                className={
                  filter === categoryName
                    ? "filter-button background-color-primary"
                    : "filter-button"
                }
                onClick={() =>
                  dispatch({ type: "ADD_FILTER", payload: categoryName })
                }
              >
                {categoryName}
              </div>
            );
          })}
        </div>
        <div className="video-wrapper">
          {filterData.map((data) => {
            const { _id } = data;
            return <VideoCard prop={{ data }} key={_id} />;
          })}
        </div>
      </aside>
    </main>
  );
};
