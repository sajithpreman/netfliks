import React, { useEffect, useState } from "react";

import { API_KEY, IMG } from "../../Const/Constant";
import axios from "../../axios";
import "./RowPost.css";
function RowPost() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
      )
      .then((res) => {
        setMovie(res.data.results);
      });
  }, []);
  return (
    <div className="row">
      <h2>Originals</h2>
      <div className="posters">
        {movie.map((film) => (
          <img
            className="poster"
            src={`${IMG + film.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
    </div>
  );
}

export default RowPost;
