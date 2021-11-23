import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/material";
import { embedMovie } from "../../api/embed";

PlayMovie.propTypes = {};

function PlayMovie({ id, category }) {
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
        height: "100%",
        width: "100%",
        marginBottom: "200px",
        position: "relative",
        paddingBottom: "30%",
        marginTop: "50px",
      }}
    >
      <iframe
        id="iframe"
        src={src}
        width="100%"
        frameborder="0"
        title="play"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </Container>
  );
}

export default PlayMovie;
