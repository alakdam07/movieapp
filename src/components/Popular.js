/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import { api } from "./Config";

const Movie = () => {
  React.useEffect(() => {
    fetchdata();
  }, []);
  const [movie, setmovie] = React.useState([]);

  const fetchdata = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`
    );
    const data = await response.json();
    //console.log(data.results);
    setmovie(data.results);
  };

  return (
    <StyleRoot>
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
      >
        {movie.map(name => {
          return (
            <div style={{ display: "inline-flex" }}>
              <div className="cards-list">
                <div className="card">
                  <div className="card_image" key={name.id}>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w500/" + name.poster_path
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Coverflow>
    </StyleRoot>
  );
};

export default Movie;
