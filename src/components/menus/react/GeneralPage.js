import { Box, Grid, Typography } from "@mui/material";
import { blueGrey } from '@mui/material/colors';

import React, { Fragment } from "react";

const style = {
  gridContainer: {
    textAlign: "center",
    backgroundColor: blueGrey[400],
    height: "100vh",
  },
  typography: {
    m: "3rem",
    fontSize: "30px",
    fontFamily: ["Lucida Console"].join(","),
    fontSize: "40px",
  },
};

export default function General(props) {
  return (
    <Fragment>
      <Grid container sx={style.gridContainer}>
        <Grid item xs={0} sm={1} md={2}></Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Typography sx={style.typography}>{props.title}</Typography>

          <Box>
            {props.content}
          </Box>
          
       
        </Grid>
      </Grid>
    </Fragment>
  );
}
