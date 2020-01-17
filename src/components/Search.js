import React, { Component } from "react";
import { api } from "./Config";

export class Search extends Component {
  state = {
    movies: [],
    search: ""
  };
  handleChange = e => {
    this.setState({ search: e.target.value });
  };
  handelSubmit = e => {
    e.preventDefault();

    const queryData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${this.state.search}`
      );
      const data = await response.json();
      console.log(data);
      this.setState({ movies: [...data.results] });
    };
    queryData();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input
            type="search"
            onChange={this.handleChange}
            style={{
              width: "400px",
              marginRight: "600px",
              color: "wheat",
              borderBottom: "1px solid red"
            }}
            placeholder="Search for a movie, tv show"
          />
          <br></br>
        </form>
        {this.state.movies.map(name => {
          return (
            <div style={{ display: "inline-flex" }}>
              <div className="cards-list">
                <div className="card" key={name.id}>
                  <div className="card_image">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + name.poster_path
                      }
                      alt="pic"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Search;
