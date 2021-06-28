import * as React from "react";
import { queryImages } from "../api/queryImages";
import logo from "../design/galerie.svg";

const SearchBar = () => {
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <div className="top_bar">
      <div className="app_logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="app_name">alerie</h1>
      </div>
      <input
        placeholder="Search for keywords..     Ex: cats"
        className="search_bar_input"
        onChange={(value) => setSearchInput(value)}
        onSubmit={queryImages(searchInput)}
      ></input>
    </div>
  );
};

export default SearchBar;
