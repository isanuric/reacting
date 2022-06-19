import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { blueGrey } from "@mui/material/colors";
import GeneralPage from "./_GeneralPage";

const style = {
  typography: {
    m: "8rem",
    fontSize: "4rem",
    color: blueGrey[100]
  },
};

const backgroundColor = blueGrey[900];

export const Home = () => {
  return <GeneralPage content={content} backgroundColor={backgroundColor} />;
};

const content = (
  <Fragment>
    <Typography sx={style.typography}>
      React JS and MUI Playground 
      </Typography>
  </Fragment>
);
