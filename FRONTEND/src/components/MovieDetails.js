import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  console.log(props);

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      let res = await Axios.get(
        `http://localhost:5000/movies/${props.match.params.id}`
      );
      console.log(res);
      setMovie(res.data);
    }
    fetchData();
  }, [props]); //or [] if useEffect doesn't need props or state

  console.log(movie);

  const showStars = () => {
    return movie.stars?.map((element) => {
      return <div>{element}</div>;
    });
  };

  const showShowtimes = () => {
    return movie.showtimes?.map((element) => {
      return <span>{element} | </span>;
    });
  };

  return (
    <div>
      <img src={movie.image}></img>
      <Link to="/movies">Go back</Link>
      <br />
      {movie.title}
      <h2>Director: {movie.director}</h2>
      <h4>Stars</h4>
      {showStars()}
      <p>{movie.description}</p>
      {showShowtimes()}
    </div>
  );
};

export default MovieDetails;
