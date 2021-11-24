import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Rating } from "@mui/material";
import { embedMovie } from "../../api/embed";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./PlayMovie.css";

PlayMovie.propTypes = {};

function PlayMovie({ id, category, item }) {
  const [src, setSrc] = useState();
  useEffect(() => {
    const getVideo = async () => {
      const response = await embedMovie(id);
      setSrc(response);
      console.log(response);
    };
    getVideo();
  }, []);
  return (
    <Container
      style={{
        marginTop: "50px",
      }}
    >
      <iframe
        id="iframe"
        src={src}
        width="100%"
        height="500px"
        frameborder="0"
        title="play"
        allowFullScreen
      ></iframe>
      <h3 style={{ marginTop: "20px" }}>{item && item.title}</h3>
      <p style={{ margin: "20px 0" }}>
        {item ? "Release date: " + item.release_date : "Comming soon"}
      </p>
      <Rating
        name="customized-10"
        defaultValue={item ? Math.ceil(item.vote_average) : 4}
        max={10}
        readOnly
        emptyIcon={<StarBorderIcon color="primary" />}
      />
      <span>{item && `(${item.vote_count} votes)`}</span>
    </Container>
  );
}

export default PlayMovie;
