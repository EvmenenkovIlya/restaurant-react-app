import { NavigationLink } from "../NavigationLink/NavigationLink";
import "./Header.scss";
import burgerMenu from './assets/burger-menu.svg';

export const Header = () => {
const showMenu = () => {
  let el = document.querySelector("nav");
  el?.classList.toggle("unvisible");
};

  return (
    <header>
      <div className="logo">
        <a href="index.html">
          Tammy
          <span className="accent">Food</span>
        </a>
      </div>
      <nav className="unvisible">
        <NavigationLink name={"Home"} url={"home"} />
        <NavigationLink name={"About us"} url={"about"} />
        <NavigationLink name={"Menu"} url={"menu"} />
        <NavigationLink name={"Blog"} url={"blog"} />
        <NavigationLink name={"Contact Us"} url={"contact"} />
      </nav>
      <button className="icon-btn mobile-only" onClick={showMenu}>
        <img src={burgerMenu} alt="menu" />
      </button>
    </header>
  );
};
