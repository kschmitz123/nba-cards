import "./player.css";
import { Component } from "../utils/elements";

const Name = Component("h3", {
  innerText: "Al Horford",
  className: "player__name",
});
const Infos = Component("p", { innerText: "position" });
const InfoContainer = Component("div", {
  className: "player__infos",
  children: [
    Infos({ className: "player__position" }),
    Infos({ className: "player__team" }),
    Infos({ className: "player__city" }),
  ],
});
const Player = Component("article", {
  className: "container",
  children: [Name(), InfoContainer()],
});

export default Player;
