import React from "react";
import { AppBar, Box, Toolbar, Typography, Button, Grid } from "@mui/material";
import NavLinkCustom from "./NavLinkCustom";
import ReactMenu from "../menus/react/ReactMenu";
import { purple, red, grey, brown } from '@mui/material/colors';



const style ={
  appBar :{
    backgroundColor: grey[600],
   
  }
}
export const AppBarCuston = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={style.appBar}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <NavLinkCustom to={"/"} text={"HOME"} />
              <NavLinkCustom to={"/about"} text={"ABOUT"} />
              <NavLinkCustom to={"/contact"} text={"CONTACT"} />
            </Box>

            <Box>
              <ReactMenu />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
