import "./appBar.css";
import logoSrc from "../assets/nba-logo.png";
import { Component } from "../utils/elements";

const HeaderText = Component("h1");
const Logo = Component("img");
const Header = Component("header", {
  className: "header",
});
const AppBar = () =>
  Header({
    children: [
      Logo({
        src: logoSrc,
        alt: "Logo",
      }),
      HeaderText({
        innerText: "NBA Player Stats",
      }),
    ],
  });

export default AppBar;
