import { CardStars } from "../CardSrars/CardStars";
import "./CardItem.scss";
import share from "./assets/share-btn.svg";
import basket from "./assets/shopping-basket-btn.svg";

//TODO add ability to refresh rating and refill stars from backend

interface CardItemProps {
  img: string;
  name: string;
  description: string;
  rating: number;
  price: string;
}

export const CardItem = (props: CardItemProps) => {
  return (
    <div className="card-item">
      <img src={props.img} className="food-img" alt="" />
      <CardStars rating={props.rating}/>
      <p className="item-name">${props.name}</p>
      <p className="item-description">${props.description}</p>
      <div className="info">
        <p className="price">${props.price}</p>
        <div className="card-buttons">
          <img src={basket} alt="" />
          <img src={share} alt="" />
        </div>
      </div>
    </div>
  );
};
