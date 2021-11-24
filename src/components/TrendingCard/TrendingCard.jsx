import React from "react";
import PropTypes from "prop-types";
import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button, Grid, Rating } from "@mui/material";
import "./TrendingCard.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";

TrendingCard.propTypes = {};

function TrendingCard({ item, categories, className }) {
  const link = "/" + category[categories] + "/" + item.id;
  const bg = apiConfig.w500Image(
    item.poster_path ||
      item.backdrop_path ||
      "https://image.tmdb.org/t/p/w500//3QTp0Vu3t3ZfHwMvOOLpCUkJHZN.jpg"
  );
  return (
    <Link to={link} className="trending">
      <Grid container spacing={2}>
        <Grid item sm={5} className="poster__trending">
          <img className="image" src={bg} alt="" />
          <Button title={<YouTubeIcon />}></Button>
        </Grid>
        <Grid item sm={7} className="title">
          <h4>{item.title || item.name}</h4>
          <Rating
            name="read-only"
            value={(Math.ceil(item.vote_average) / 10) * 5}
            readOnly
            emptyIcon={<StarBorderIcon color="primary" />}
          />
        </Grid>
      </Grid>
    </Link>
  );
}

export default TrendingCard;
