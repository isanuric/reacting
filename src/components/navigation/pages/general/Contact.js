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
    m: "2rem",
    fontSize: "1rem",
  },
};

const backgroundColor = blueGrey[400];

export default function Pager() {
  return <GeneralPage content={content} backgroundColor={backgroundColor} />;
}

const content = (
  <Fragment>
    <Typography sx={style.typography}>Contact</Typography>
    <Typography sx={style.text}>Email</Typography>
    <Typography sx={style.text}>Instagram</Typography>
    <Typography sx={style.text}>Twitter</Typography>
    <Typography sx={style.text}>Facebook</Typography>
  </Fragment>
);
