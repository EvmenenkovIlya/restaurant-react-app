
interface CardStarsProps {
    rating: number;
  }

export const CardStars = (props: CardStarsProps) => {

  return (
    <div className="stars">
      <i className="fa-solid fa-star fill"></i>
      <i className="fa-solid fa-star fill"></i>
      <i className="fa-solid fa-star fill"></i>
      <i className="fa-solid fa-star fill"></i>
      <i className="fa-solid fa-star"></i>
    </div>
  );
};
