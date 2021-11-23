import React from "react";
import { category } from "../../api/tmdbApi";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import PageHeader from "../../components/PageHeader/PageHeader";

Tv.propTypes = {};

function Tv(props) {
  console.log({ category });
  return (
    <div>
      <PageHeader title="TV Series" />
      <MovieGrid category="tv" />
    </div>
  );
}

export default Tv;
