import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";


export default function GeneralPage (props) {
  const {  backgroundColor } = props;
  const style = {
    gridContainer: {
      textAlign: "center",
      height: "100vh",
      backgroundColor: backgroundColor
    },
  };

  
  return (
    <Fragment>
      <Grid container sx={style.gridContainer}>
        <Grid item xs={0} sm={1} md={2}></Grid>
        <Grid item xs={12} sm={10} md={8}>
         {props.content}
        </Grid>
      </Grid>
    </Fragment>
  );
};