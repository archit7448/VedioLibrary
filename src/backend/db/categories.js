import { v4 as uuid } from "uuid";
import { Images } from "../Images/images";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Action",
    imageSrc: Images.action,
  },
  {
    _id: uuid(),
    categoryName: "Animation",
    imageSrc: Images.animation,
  },
  {
    _id: uuid(),
    categoryName: "Comedy",
    imageSrc: Images.comedy,
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    imageSrc: Images.drama,
  },
  {
    _id: uuid(),
    categoryName: "Fantasy",
    imageSrc: Images.fantasy,
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    imageSrc: Images.horror,
  },
  {
    _id: uuid(),
    categoryName: "Romance",
    imageSrc: Images.romance,
  },
  {
    _id: uuid(),
    categoryName: "Science-Fiction",
    imageSrc: Images.scienceFiction,
  },
];
