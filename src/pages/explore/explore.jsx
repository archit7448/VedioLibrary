import { Header } from "../../Components/header/header";
import { Sidebar } from "../../Components/sidebar/sidebar";
import { VedioCard } from "../../Components/VedioCard/vedioCard";
import { useData } from "../../context/data";
import "./explore.css";
export const ExplorePage = () => {
  const { genres, dispatch, filter } = useData();
  return (
    <main>
      <Sidebar />
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
        <div className="vedio-wrapper">
          <VedioCard />
        </div>
      </aside>
    </main>
  );
};
