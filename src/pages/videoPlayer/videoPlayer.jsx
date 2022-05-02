import { useParams } from "react-router-dom";
import { useData } from "../../context/data";
import { Header, Sidebar } from "../../Components/index";
import { AiFillHome, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import "./videoPlayer.css";
import { useState } from "react";
export const VideoPage = () => {
  const { videoId } = useParams();
  const { videos } = useData();
  const [show, setShow] = useState(false);
  const videoForPage = videos.find(({ _id }) => _id === videoId);
  const { _id, description, MovieName, categoryName } = videoForPage;
  return (
    <main>
      <Sidebar />
      <aside>
        <Header />
        <div className="iframe-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${_id}`}
            allowFullScreen="allowFullScreen"
          />
          <h2 className="category-tag">{`#${categoryName}`}</h2>
          <h1 className="movie-tag">{MovieName}</h1>
          <div className="flex-row ">
            <div className="func-wrapper">
              <AiOutlineLike />
              Like
            </div>
            <div className="func-wrapper">
              <MdWatchLater /> WatchLater
            </div>
            <div className="func-wrapper">
              <IoIosShareAlt />
              Share
            </div>
            <div className="func-wrapper">
              <MdPlaylistAdd />
              Playlist
            </div>
          </div>
          {!show && (
            <h1 className="description-tag" onClick={() => setShow(() => true)}>
              description
            </h1>
          )}
          {show && (
            <div>
              <h3 className="description-para">{description}</h3>
              <h2
                className="description-tag"
                onClick={() => setShow(() => false)}
              >
                show-less
              </h2>
            </div>
          )}
        </div>
      </aside>
    </main>
  );
};
