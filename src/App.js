import React from "react";
import "./App.css";
import Drama from "./components/Drama";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import TopTv from "./components/TopTv";
import Search from "./components/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <br></br>
      <Search />
      <h5>Popular Movies</h5>
      <Popular />
      <h5>Top Rated Movies</h5>
      <TopRated />
      <h5>Trending</h5>
      <Drama />
      <h5>Upcoming Movies</h5>
      <Upcoming />
      <h5>Top Rated Tv Program</h5>
      <TopTv />
    </div>
  );
}

export default App;
