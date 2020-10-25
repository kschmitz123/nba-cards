import "./search.css";
import { Component, createElement } from "../utils/elements";

function Search({ onchange }) {
  const input = createElement("input", {
    placeholder: "Search for player",
  });
  const Button = Component("button", {
    innerText: "🔍🏀",
  });
  const container = createElement("form", {
    className: "searchbar",
    children: [input, Button()],
    onsubmit: (event) => {
      event.preventDefault();
      onchange(input.value);
    },
  });
  return container;
}
export default Search;
