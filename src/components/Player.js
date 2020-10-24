import "./player.css";
import { Component } from "../utils/elements";

const Name = Component("h3", {
  innerText: "Al Horford",
  className: "player__name",
});
const Infos = Component("p");
const InfoContainer = Component("div", {
  className: "player__infos",
  children: [
    Infos({ innerText: "Position: ", className: "player__position" }),
    Infos({ innerText: " Team", className: "player__team" }),
    Infos({ innerText: "city", className: "player__city" }),
  ],
});
const Player = Component("article", {
  className: "container",
  children: [Name(), InfoContainer()],
});

export default Player;
