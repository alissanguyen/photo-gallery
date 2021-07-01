import * as React from "react";
import logo from "../design/galerie.svg";

function SearchBar(props) {
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <div className="top_bar">
      <div className="app_logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="app_name">alerie</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit(searchInput);
        }}
      >
        <input
          placeholder="Search for keywords..     Ex: cats"
          className="search_bar_input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default SearchBar;
