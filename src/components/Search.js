import "./search.css";
import { Component } from "../utils/elements";
import Button from "./Button";

const Input = Component("input");
const SearchBtn = Button({ className: "search__btn", innerText: "🔍🏀" });
const Search = Component("form", {
  children: [
    Input({ placeholder: "Search for player", className: "search__input" }),
    SearchBtn,
  ],
});

export default Search;
