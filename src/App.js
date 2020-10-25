import "./app.css";
import AppBar from "./components/AppBar";
import Search from "./components/Search";
import Button from "./components/Button";
import createPlayer from "./components/Player";
import { createElement } from "./utils/elements";
import { getAllPlayers } from "./utils/api";

function App() {
  let lastName = null;
  let nextPage = null;

  const main = createElement("main", {
    className: "main",
  });
  const loadMoreBtn = Button({
    innerText: "Load more",
    onclick: () => {
      loadPlayers(lastName, nextPage);
    },
  });

  async function loadPlayers(name, page) {
    const players = await getAllPlayers(name, page);
    const playerElements = players.data.map((player) =>
      createPlayer({
        name: `${player.first_name} ${player.last_name}`,
        position: player.position,
        team: player.team,
        city: player.team,
      })
    );
    main.append(...playerElements);
    nextPage = players.meta.next_page?.match(/\d+/)[0];
    loadMoreBtn.disabled = !players.meta.next_page;
    lastName = name;
  }
  const searchBar = Search({
    onchange: (value) => {
      main.innerHTML = "";
      loadPlayers(value);
    },
  });
  loadPlayers();

  const container = createElement("div", {
    children: [AppBar(), searchBar, main, loadMoreBtn],
  });
  return container;
}
export default App;
