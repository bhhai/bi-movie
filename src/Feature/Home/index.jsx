import { Container, Grid } from "@mui/material";
import React from "react";
import { category, movieType, tvType } from "../../api/tmdbApi";
import { ButtonOutline } from "../../components/Button";
import HeroSlide from "../../components/HeroSlide";
import MovieList from "../../components/MovieList/MovieList";
import "./Home.css";

Home.propTypes = {};

function Home(props) {
  return (
    <div>
      <HeroSlide />
      <Container style={{ marginTop: "50px" }}>
        <Grid
          container
          style={{
            display: "felx",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Grid item style={{ fontSize: "22px" }}>
            <h3 className="home__title">Trending Movie</h3>
          </Grid>
          <Grid>
            <ButtonOutline title="View more" className="small"></ButtonOutline>
          </Grid>
        </Grid>
        <MovieList category={category.movie} type={movieType.popular} />
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Grid
          container
          style={{
            display: "felx",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Grid item style={{ fontSize: "22px" }}>
            <h3 className="home__title">Top Rated Movie</h3>
          </Grid>
          <Grid>
            <ButtonOutline title="View more" className="small"></ButtonOutline>
          </Grid>
        </Grid>
        <MovieList category={category.movie} type={movieType.top_rated} />
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Grid
          container
          style={{
            display: "felx",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Grid item style={{ fontSize: "22px" }}>
            <h3 className="home__title">Trending TV</h3>
          </Grid>
          <Grid>
            <ButtonOutline title="View more" className="small"></ButtonOutline>
          </Grid>
        </Grid>
        <MovieList category={category.tv} type={tvType.popular} />
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Grid
          container
          style={{
            display: "felx",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Grid item style={{ fontSize: "22px" }}>
            <h3 className="home__title">Top Rated TV</h3>
          </Grid>
          <Grid>
            <ButtonOutline title="View more" className="small"></ButtonOutline>
          </Grid>
        </Grid>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </Container>
    </div>
  );
}

export default Home;
