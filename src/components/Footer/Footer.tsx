import './Footer.scss';

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
            Lorem Ipsum is simply dummy text of the printing<br />
            and typesetting industry. Lorem Ipsum has been<br />
            the industry's standard dummy text ever since<br />
            the 1500s.
          </p>
          <div className="social-media">
            <a href="index.html">
              <img src="./assets/facebook-fill.svg" alt="" />
            </a>
            <div className="vertical-line"></div>
            <a href="index.html">
              <img src="./assets/instagram-fill.svg" alt="" />
            </a>
            <div className="vertical-line"></div>
            <a href="index.html">
              <img src="./assets/twitter-fill.svg" alt="" />
            </a>
            <div className="vertical-line"></div>
            <a href="index.html">
              <img src="./assets/youtube-fill.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <p className="headline">quick link</p>
          <a href="index.html" className="nav-link">About Us</a>
          <a href="index.html" className="nav-link">Menu</a>
          <a href="index.html" className="nav-link">Blog</a>
          <a href="index.html" className="nav-link">Contact Us</a>
        </div>
        <div className="footer-subscribe">
          <p className="headline">news letter</p>
          <p className="text">
            Subscribe our newsletter to get our latest<br />
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
              <img src="./assets/send-plane-2-fill.svg" alt="Subscribe!" />
            </div>
          </div>
        </div>
      </div>
      <div className="line"><hr /></div>
      <div className="copyright">
        <img src="./assets/copyright-line.svg" alt="copyright" />
        <div>Copyright 2021 .Tammy Food. All Right Reserved.</div>
      </div>
    </footer>
  )}