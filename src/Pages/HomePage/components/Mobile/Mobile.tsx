import "./Mobile.scss";

export const Mobile = () => {
  return (
    <section id="mobile">
      <div className="discount">
        <h2>
          To Get 15% Discount
          <br />
          Download The App
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy
          <br />
          text ever since the 1500s.
        </p>
        <div className="apps">
          <a href="index.html">
            <img src="/assets/google-play-template.svg" alt="Google Play" />
          </a>
          <a href="index.html">
            <img src="/assets/app-store-template.svg" alt="App Store" />
          </a>
        </div>
      </div>
      <div className="mobile-app">
        <img src="assets/phone-app.png" alt="" />
      </div>
    </section>
  );
};
