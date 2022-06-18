import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { color } from "@mui/system";
import NavLinkCustom from "../NavLinkCustom";
import State from "./State";
import { Link } from "react-router-dom";

export default function ReactMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        React
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to="/state" onClick={handleClose}>State</MenuItem>
        <MenuItem disabled onClick={handleClose}>My account</MenuItem>
   
        {/* <NavLinkCustom onClick={handleClose} to={"/state"} text={"State"} /> */}
      </Menu>
    </div>
  );
}
