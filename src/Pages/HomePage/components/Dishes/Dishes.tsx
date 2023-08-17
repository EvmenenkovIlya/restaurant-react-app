import "./Dishes.scss";
import { CardItem } from "./components/CardItem/CardItem";
import salmon from "./assets/salmon.png";
import frenchFries from "./assets/french-fries.png";
import noodles from "./assets/noodles.png";
import bowl from "./assets/bowl.png";
import pizza from "./assets/pizza.png";
import anotherBowl from "./assets/another-bowl.png";
import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";

const cards = [
  {
    id: 1,
    img: salmon,
    name: "Salmon",
    description:
      "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "7.10",
    rating: 5,
  },
  {
    id: 2,
    img: frenchFries,
    name: "French Fries",
    description:
      "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.30",
    rating: 4,
  },
  {
    id: 3,
    img: noodles,
    name: "Noodles",
    description:
      "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "4.20",
    rating: 5,
  },
  {
    id: 4,
    img: bowl,
    name: "Bowl",
    description:
      "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "6.50",
    rating: 3,
  },
  {
    id: 5,
    img: noodles,
    name: "Pasta",
    description:
      "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "3.90",
    rating: 5,
  },
  {
    id: 6,
    img: pizza,
    name: "Pizza",
    description:
      "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "4.99",
    rating: 4,
  },
  {
    id: 7,
    img: salmon,
    name: "York Vega",
    description:
      "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.10",
    rating: 5,
  },
  {
    id: 8,
    img: anotherBowl,
    name: "Another-bowl",
    description:
      "Lorem Ipsum is simply dummy text of<br>the printing and typesetting....",
    price: "5.75",
    rating: 5,
  },
];

export const Dishes = () => {
  const clearActivePagination = () => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((element) => {
      element.classList.remove("active");
    });
  };

  const getPageWithNumber = () => {
    clearActivePagination();

    //let activeButton = event!.target;
    //activeButton.classList.add('active');
    //clearOldCards();
    //renderCards(Number(activeButton.textContent));
  };

  return (
    <section id="dishes">
      <h2>Our Delicious Dish</h2>
      <p className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <br />
        industry. Lorem Ipsum has been the industry
      </p>
      <div className="cards-container">
        {cards.map((item) => (
          <CardItem
            key={`category-${item.id}`}
            img={item.img}
            name={item.name}
            description={item.description}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="pagination">
        <div className="circle btn arrow-left" /*onClick="getPages(-1)"*/>
          <img src={arrowLeft} alt="arrow-left" />
        </div>
        <div className="circle btn arrow-right" /*onClick="getPages(1)*/>
          <img src={arrowRight} alt="arrow-right" />
        </div>
        <div className="circle btn active" onClick={getPageWithNumber}>
          1
        </div>
        <div className="circle btn" onClick={getPageWithNumber}>
          2
        </div>
        <div className="circle btn" onClick={getPageWithNumber}>
          3
        </div>
        <div className="circle btn computer-only" onClick={getPageWithNumber}>
          4
        </div>
        <div className="circle btn computer-only" onClick={getPageWithNumber}>
          5
        </div>
      </div>
    </section>
  );
};
