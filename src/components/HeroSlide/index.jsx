import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import Button, { ButtonOutline } from "../Button/index";
import "./HeroSlide.css";

HeroSlide.propTypes = {};

function HeroSlide(props) {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        var response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 4));
      } catch (error) {
        console.log("Fetch data error: ", error);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movieItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const HeroSlideItem = ({ item, className }) => {
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const handleButtonClick = () => {
    const trailer = document.getElementById(`#dialog__${item.id}`);
    console.log(trailer);
  };

  const [open, setOpen] = React.useState(false);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const video = await tmdbApi.getVideos(category.movie, item.id);
        setVideos(video.results[0].key);
      } catch (error) {
        console.log("Fetch data error: ", error);
      }
    };

    getVideos();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      className={`hero-slide__item ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__content">
        <div className="hero-slide__info">
          <h4>{item.title}</h4>
          <span className="hero-slide__info__overview">{item.overview}</span>
          <div className="btns">
            <Button onClick={handleButtonClick} title="Watch now" />
            <ButtonOutline onClick={handleClickOpen} title="Watch trailer" />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent style={{ marginTop: "20px" }}>
                <DialogContentText>
                  <iframe
                    width="520"
                    src={`https://www.youtube.com/embed/${videos}`}
                    height="315"
                    title="trailer"
                  ></iframe>
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="hero-slide__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
