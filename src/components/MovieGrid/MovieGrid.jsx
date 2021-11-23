import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import tmdbApi, { movieType, tvType } from "../../api/tmdbApi";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";
import { Container, Grid } from "@mui/material";
import { ButtonOutline } from "../Button";
import MovieSekeleton from "../MovieSekeleton/MovieSekeleton";

MovieGrid.propTypes = {};

function MovieGrid({ keyword, category }) {
  const [items, setItems] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      try {
        let response = null;
        if (keyword === undefined) {
          const params = {};
          switch (category) {
            case "tv":
              response = await tmdbApi.getTvList(tvType.popular, { params });
              break;
            default:
              response = await tmdbApi.getMoviesList(movieType.upcoming, {
                params,
              });
          }
        } else {
          const params = {
            query: keyword,
          };
          switch (category) {
            case "tv":
              response = await tmdbApi.getTvList(tvType.popular, { params });
              break;
            default:
              response = await tmdbApi.getMoviesList(movieType.upcoming, {
                params,
              });
          }
        }

        setItems(response.results);
        setTotalPage(response.total_pages);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getList();
  }, []);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (category) {
        case "tv":
          response = await tmdbApi.getTvList(tvType.popular, { params });
          break;
        default:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <Container>
      <div className="movie-grid">
        <Grid container spacing={2}>
          {items.map((item, i) => (
            <Grid key={i} item xs={6} md={3} lg={2}>
              {loading ? (
                <MovieSekeleton />
              ) : (
                <MovieCard item={item} categories={category} />
              )}
            </Grid>
          ))}
        </Grid>
        {page < totalPage ? (
          <div className="movie-grid__loadmore">
            <ButtonOutline
              className="small"
              title="Load more"
              onClick={loadMore}
            ></ButtonOutline>
          </div>
        ) : null}
      </div>
    </Container>
  );
}

export default MovieGrid;
