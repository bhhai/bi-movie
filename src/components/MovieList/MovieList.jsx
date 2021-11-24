import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import tmdbApi from "../../api/tmdbApi";
import { Swiper, SwiperSlide } from "swiper/react";
import apiConfig from "../../api/apiConfig";
import "./MovieList.css";
import MovieSekeleton from "../MovieSekeleton/MovieSekeleton";
import MovieCard from "../MovieCard/MovieCard";
MovieList.propTypes = {
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

function MovieList(props) {
  const { type, category, id } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      let response = null;
      const params = {};
      try {
        if (type !== "similar") {
          switch (category) {
            case "tv":
              response = await tmdbApi.getTvList(type, { params });
              break;

            default:
              response = await tmdbApi.getMoviesList(type, { params });
              break;
          }
        } else {
          response = await tmdbApi.similar(category, id);
        }

        setItems(response.results);
        window.scrollTo(0, 0);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="movie-item">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <MovieCard item={item} categories={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieList;
