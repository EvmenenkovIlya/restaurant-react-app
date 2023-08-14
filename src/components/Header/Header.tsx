import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="index.html">
          Tammy
          <span className="accent">Food</span>
        </a>
      </div>
      <nav className="unvisible">
        <a href="index.html" className="nav-link active-link">
          Home
        </a>
        <a href="index.html" className="nav-link">
          About us
        </a>
        <a href="index.html" className="nav-link">
          Menu
        </a>
        <a href="index.html" className="nav-link">
          Blog
        </a>
        <a href="index.html" className="nav-link">
          Contact Us
        </a>
      </nav>
      <button className="icon-btn mobile-only">
        <img src="./burger-menu.svg" alt="menu" />
      </button>
    </header>
  );
};
