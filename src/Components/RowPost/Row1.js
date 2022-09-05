import React, { useEffect, useState } from "react";

import { API_KEY, IMG } from "../../Const/Constant";
import axios from "../../axios";
import "./RowPost.css";
function Row1() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
      )
      .then((res) => {
        setMovie(res.data.results);
      });
  }, []);
  return (
    <div className="row">
      <h2>Actions</h2>
      <div className="posters">
        {movie.map((film) => (
          <img
            className="poster1"
            src={`${IMG + film.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Row1;
