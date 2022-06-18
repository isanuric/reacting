import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { blueGrey, white } from "@mui/material/colors";
import GeneralPage from "./_GeneralPage";

const style = {
  typography: {
    m: "8rem",
    fontSize: "5rem",
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
      Welcome to React JS and MUI Playground Website
      </Typography>
  </Fragment>
);
