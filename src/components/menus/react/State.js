
import React, { Fragment } from "react";
import ImageChanger from "./ImageChanger";
import GeneralPage from "./GeneralPage";
import { Typography } from "@mui/material";

export default function State() {
  return <GeneralPage title={"State"} content={content} />;
}

const content =
<Fragment>
<ImageChanger />
<Typography sx={{m:2}}>
  Image Carrossel
</Typography>
</Fragment>
