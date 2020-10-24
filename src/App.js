import "./app.css";
import Button from "./components/Button";
import AppBar from "./components/AppBar";
import { Component } from "./utils/elements";

const Main = Component("main", {
  innerText: "👋",
});
const Container = Component("div");

const App = () =>
  Container({
    children: [AppBar(), Main(), Button({ innerText: "Hello" })],
  });

export default App;
