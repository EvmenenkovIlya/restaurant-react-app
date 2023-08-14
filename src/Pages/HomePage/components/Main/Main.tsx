import "./Main.scss";

export const Main = () => {
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
              id="get-started" /*onClick="getStarted()"*/
            >
              Get Started
            </button>
          </div>
          <div className="information">
            <div className="play-circle">
              <img src="./assets/play-icon.svg" alt="" />
            </div>
            <a href="index.html" id="more-info">
              More Information
            </a>
          </div>
        </div>
      </div>
      <div className="main-img">
        <img src="./assets/main-img.png" alt="" className="main-img" />
      </div>
    </section>
  );
};
