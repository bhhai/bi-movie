import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import Button from "../Button";
import "./MovieCard.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

MovieCard.propTypes = {};

function MovieCard({ item, categories, className }) {
  const link = "/" + category[categories] + "/" + item.id;
  const bg = apiConfig.w500Image(
    item.poster_path ||
      item.backdrop_path ||
      "https://image.tmdb.org/t/p/w500//3QTp0Vu3t3ZfHwMvOOLpCUkJHZN.jpg"
  );
  return (
    <Link to={link} className={`movie-card ${className ? "trending" : ""}`}>
      <div className="poster" style={{ backgroundImage: `url(${bg})` }}>
        <Button title={<YouTubeIcon />}></Button>
      </div>
      <h3 className="title">{item.title || item.name}</h3>
    </Link>
  );
}

export default MovieCard;
