import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Container, Grid, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import Casts from "../Casts/Casts";
import PlayMovie from "../PlayMovie/PlayMovie";
import Similar from "../../components/SimilarMovie/SimilarMovie";
import "./Detail.css";

Detail.propTypes = {};

function Detail(props) {
  const { category, id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await tmdbApi.detail(category, id, { params: {} });
        setItem(response);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }
    };

    getDetail();
  }, [category, id]);

  return (
    <div>
      {item && (
        <div
          className="banner"
          style={{
            backgroundImage: `url(${apiConfig.originalImage(
              item.backdrop_path || item.poster_path
            )})`,
          }}
        ></div>
      )}
      {item && (
        <Container>
          <Grid container className="detail" spacing={5}>
            <Grid item xs={0} sm={4} className="detail__poster">
              <img
                src={apiConfig.originalImage(
                  item.poster_path || item.backdrop_path
                )}
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={8} className="detail__right">
              <div className="detail__title">{item.title || item.name}</div>
              <div className="detail__genres">
                {item.genres &&
                  item.genres
                    .slice(0, 5)
                    .map((genre, i) => <span key={i}>{genre.name}</span>)}
              </div>
              <div className="detail__overview">{item.overview}</div>
              <div className="detal__release">
                <span>Release date:</span>
                <span>{item.release_date}</span>
              </div>
              <div className="detail__rating">
                <Rating
                  name="customized-10"
                  defaultValue={Math.ceil(item.vote_average)}
                  max={10}
                  readOnly
                  emptyIcon={<StarBorderIcon color="primary" />}
                />
                <span>{`(${item.vote_count} votes)`}</span>
              </div>
              <div className="detail__budget">
                <span>
                  Budget:{" "}
                  {item.budget
                    ? new Intl.NumberFormat().format(item.budget) + "$"
                    : "không biết :)"}
                </span>
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
      <div className="casts">
        <Casts category={category} id={id} />
      </div>

      <PlayMovie id={id} category={category} />
      <Similar />
    </div>
  );
}

export default Detail;
