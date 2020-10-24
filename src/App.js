import "./app.css";
import AppBar from "./components/AppBar";
import createPlayer from "./components/Player";
import { createElement } from "./utils/elements";
import { getAllPlayers } from "./utils/api";

function App() {
  const main = createElement("main", {
    className: "main",
  });

  async function loadPlayers(name) {
    const players = await getAllPlayers(name);
    console.log(players);
    const playerElements = players.map((player) =>
      createPlayer({
        name: player.first_name,
        position: player.position,
        team: player.team,
        city: player.team,
      })
    );
    main.append(...playerElements);
  }

  loadPlayers();

  const container = createElement("div", {
    children: [AppBar(), main],
  });
  return container;
  //   const App = () =>
  //     Container({
  //       children: [AppBar(), Main()],
  //     });
}
export default App;
