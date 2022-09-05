import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, IMG } from "../../Const/Constant";
import "./Banner.css";

function Banner() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => {
        const moviee = res.data.results;
        console.log(moviee);
        const film = moviee[Math.floor(Math.random() * moviee.length)];

        setMovies(film);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movies ? IMG + movies.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movies ? movies.title : ""}</h1>
        <div className="buttons">
          <button className="button">play</button>
          <button className="button">my list</button>
        </div>
        <h1 className="description">{movies ? movies.overview : ""}</h1>
      </div>
    </div>
  );
}

export default Banner;
