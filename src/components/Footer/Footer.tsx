import "./Footer.scss";
import { SocialMediaImg } from "./components/SocialMediaImg";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import facebook from "./assets/facebook-fill.svg";
import instagram from "./assets/instagram-fill.svg";
import twitter from "./assets/twitter-fill.svg";
import youtube from "./assets/youtube-fill.svg";
import senEmail from "./assets/send-plane-2-fill.svg";
import copyright from "./assets/copyright-line.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-item">
          <div className="footer-logo">
            <a href="index.html">
              Tammy
              <span className="accent">Food</span>
            </a>
          </div>
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing
            <br />
            and typesetting industry. Lorem Ipsum has been
            <br />
            the industry's standard dummy text ever since
            <br />
            the 1500s.
          </p>
          <div className="social-media">
            <SocialMediaImg href={"facebook"} src={facebook} />
            <div className="vertical-line"></div>
            <SocialMediaImg href={"instagram"} src={instagram} />
            <div className="vertical-line"></div>
            <SocialMediaImg href={"twitter"} src={twitter} />
            <div className="vertical-line"></div>
            <SocialMediaImg href={"youtube"} src={youtube} />
          </div>
        </div>
        <div className="footer-links">
          <p className="headline">quick link</p>
          <NavigationLink name={"About Us"} url={"about"} />
          <NavigationLink name={"Menu"} url={"menu"} />
          <NavigationLink name={"Blog"} url={"blog"} />
          <NavigationLink name={"Contact Us"} url={"contact"} />
        </div>
        <div className="footer-subscribe">
          <p className="headline">news letter</p>
          <p className="text">
            Subscribe our newsletter to get our latest
            <br />
            update & news
          </p>
          <div className="subscription">
            <input
              type="email"
              name=""
              id="email"
              placeholder="Your email address"
            />
            <div className="send-button">
              <img src={senEmail} alt="Subscribe!" />
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="copyright">
        <img src={copyright} alt="copyright" />
        <div>Copyright 2021 .Tammy Food. All Right Reserved.</div>
      </div>
    </footer>
  );
};
