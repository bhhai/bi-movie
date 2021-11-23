import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import { Grid, Skeleton } from "@mui/material";

MovieSekeleton.propTypes = {
  length: PropTypes.number,
};

MovieSekeleton.defaultProps = {
  length: 6,
};

function MovieSekeleton({ length }) {
  return (
    <Grid container>
      <Grid item>
        <Box padding={1}>
          <Skeleton
            style={{ backgroundColor: "#ccc" }}
            variant="rect"
            width="140px"
            height={200}
          />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default MovieSekeleton;
