import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { Container, Grid } from "@mui/material";
import "./Casts.css";

Casts.propTypes = {};

function Casts({ id, category }) {
  const [casts, setCasts] = useState();

  useEffect(() => {
    const getList = async () => {
      const response = await tmdbApi.credits(category, id);
      setCasts(response.cast.slice(0, 6));
    };
    console.log(casts);

    getList();
  }, [category, id]);
  return (
    <Container className="casts">
      <h3>Casts</h3>
      <Grid container spacing={2}>
        {casts !== undefined &&
          casts.map((cast, i) => (
            <Grid item xs={6} md={2} key={i} className="cast__item">
              <img
                src={apiConfig.w500Image(cast.profile_path)}
                className="cast__item__img"
                alt=""
              />
              <div className="cast__item__name">{cast.name}</div>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Casts;
