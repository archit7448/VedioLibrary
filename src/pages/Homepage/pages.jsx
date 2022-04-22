import { Header } from "../../Components/header/header";
import { Sidebar } from "../../Components/sidebar/sidebar";
import mainImage from "../../assets/homepage.jpg";
import "./pages.css";
import { Link } from "react-router-dom";
import { useData } from "../../context/data";
export const HomePage = () => {
  const { genres } = useData();
  return (
    <main>
      <Sidebar />
      <aside className="flex-col">
        <Header />
        <div className="content-wrapper">
          <img src={mainImage} className="image-homepage" />
          <div className="flex-col flex-center content-explore-wrapper">
            <h1 className="text-l">
              All types of movies available to watch , get start binge watch it
            </h1>
            <Link to="/explore">
              <button className="button-primary button-explore">EXPLORE</button>
            </Link>
          </div>
        </div>
        <div className="genres-wrapper">
          <h1 className="text-l">Browse Genres</h1>
          <div className="images-wrapper">
            {genres.map(({ _id, imageSrc, categoryName }) => {
              return (
                <div key={_id} className="genres-card">
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
