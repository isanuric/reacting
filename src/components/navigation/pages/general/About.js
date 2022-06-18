import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import { blueGrey } from "@mui/material/colors";
import GeneralPage from "./_GeneralPage";

const style = {
  typography: {
    p: "2rem",
    fontSize: "3rem",
  },
  text: {
    m:"2rem",
    fontSize: "1rem",
  },
};

const backgroundColor = blueGrey[600];

export default function Pager() {
  return <GeneralPage content={content} backgroundColor={backgroundColor} />;
}

const content = (
  <Fragment>
    <Typography sx={style.typography}>About</Typography>
    <Typography sx={style.text}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </Typography>
  </Fragment>
);
