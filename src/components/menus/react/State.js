
import React from "react";
import ImageChanger from "./ImageChanger";
import GeneralPage from "./GeneralPage";

export default function State() {
  return <GeneralPage title={"State"} content={<ImageChanger />} />;
}
