import "./Mobile.scss";
import { StoreImg } from "./StoreImg/StoreImg";
import googlePlay from "./assets/google-play-template.svg";
import appStore from "./assets/app-store-template.svg";
import phoneApp from "./assets/phone-app.png";

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
          <StoreImg url="google-play" alt="Google Play" src={googlePlay} />
          <StoreImg url="app-store" alt="App Store" src={appStore} />
        </div>
      </div>
      <div className="mobile-app">
        <img src={phoneApp} alt="" />
      </div>
    </section>
  );
};
