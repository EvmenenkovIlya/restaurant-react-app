import "./Main.scss";
import playIcon from "./assets/play-icon.svg";
import mainImg from "./assets/main-img.png";

export const Main = () => {
  const text = document.getElementById("get-started")?.innerHTML;
  let count = 0;

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getStarted = () => {
    let el = document.getElementById("get-started");
    count += 1;
    el!.innerHTML = `${text} ${count}`;
    el!.style.backgroundColor = getRandomColor();
  };

  return (
    <section id="main">
      <div className="main-info">
        <div>
          <button className="fast-delivery">Fast Delivery</button>
        </div>
        <h1>
          Discover Your Favourite
          <br />
          Food and <span className="accent">Test Forever</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy
          <br />
          text ever since the 1500s.
        </p>
        <div className="start">
          <div>
            <button
              className="get-started"
              id="get-started"
              onClick={getStarted}
            >
              Get Started
            </button>
          </div>
          <div className="information">
            <div className="play-circle">
              <img src={playIcon} alt="" />
            </div>
            <a href="index.html" id="more-info">
              More Information
            </a>
          </div>
        </div>
      </div>
      <div className="main-img">
        <img src={mainImg} alt="" className="main-img" />
      </div>
    </section>
  );
};
