import { useData } from "../../context/data";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import "./videoCard.css";
export const VideoCard = () => {
  const { filterData } = useData();
  return filterData.map(({ _id, MovieName }) => {
    return (
      <div key={_id} className="video-card">
        <img src={`https://i.ytimg.com/vi/${_id}/maxresdefault.jpg`} />
        <div className="flex-row flex-space-between">
          <h1 className="text-sm">{MovieName}</h1>
          <AiOutlineLike />
        </div>
      </div>
    );
  });
};
