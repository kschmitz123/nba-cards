import "./player.css";
import { createElement } from "../utils/elements";

function createPlayer({ ...props }) {
  const Name = createElement("h3", {
    innerText: props.name,
    className: "player__name",
  });
  const Position = createElement("p", {
    innerText: "Position: " + props.position,
  });
  const Team = createElement("p", {
    innerText: props.team.full_name,
    className: "player__team",
  });
  const City = createElement("p", { innerText: props.team.city });
  const InfoContainer = createElement("div", {
    className: "player__infos",
    children: [Position, Team, City],
  });
  const container = createElement("article", {
    className: "container",
    children: [Name, InfoContainer],
  });

  return container;
}
export default createPlayer;
