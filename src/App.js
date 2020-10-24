import "./app.css";
import AppBar from "./components/AppBar";
import Player from "./components/Player";
import { Component } from "./utils/elements";

const Main = Component("main");
const Container = Component("div");

const App = () =>
  Container({
    children: [AppBar(), Main(), Player()],
  });

export default App;
