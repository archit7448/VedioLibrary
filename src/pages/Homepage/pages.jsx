import { Header, Sidebar } from "../../Components/index";
import mainImage from "../../assets/homepage.jpg";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/data";
import { Loader } from "../../utility/loader/loader";
export const HomePage = () => {
  const { genres, dispatch, loaderState, setLoaderState } = useData();
  const navigate = useNavigate();
  const GenresHanler = (categoryName) => {
    if (categoryName) {
      setLoaderState(true);
      setTimeout(() => setLoaderState(false), 800);
      navigate("/explore");
      dispatch({ type: "ADD_FILTER", payload: categoryName });
    } else {
      setLoaderState(true);
      setTimeout(() => setLoaderState(false), 800);
      navigate("explore");
    }
  };
  return loaderState ? (
    <Loader />
  ) : (
    <main>
      <Sidebar />
      <aside className="flex-col">
        <Header />
        <div className="content-wrapper">
          <img src={mainImage} className="image-homepage" />
          <div className="flex-col flex-center content-explore-wrapper">
            <h1 className="text-l text-center">
              All types of movies available to watch , get start binge watch it
            </h1>
            <button
              className="button-primary button-explore"
              onClick={() => GenresHanler()}
            >
              EXPLORE
            </button>
          </div>
        </div>
        <div className="genres-wrapper">
          <h1 className="text-l">Browse Genres</h1>
          <div className="images-wrapper">
            {genres.map(({ _id, imageSrc, categoryName }) => {
              return (
                <div
                  key={_id}
                  className="genres-card"
                  onClick={() => GenresHanler(categoryName)}
                >
                  <img
                    src={imageSrc}
                    alt={categoryName}
                    className="image-genres"
                  />
                  <h3 className="genres-overlay">{categoryName}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </main>
  );
};
