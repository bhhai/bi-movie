import React from "react";
import { useParams } from "react-router";
import { category } from "../../api/tmdbApi";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import PageHeader from "../../components/PageHeader/PageHeader";

Movie.propTypes = {};

function Movie(props) {
  const { cate } = useParams();
  return (
    <div>
      <PageHeader title="Movies" />
      <MovieGrid category={category.movie} />
    </div>
  );
}

export default Movie;
