import React from "react";
import "./ComponentStyle.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/";

const MainHeader = function () {
  return (
    <div className="Mainheader">
      <Grid spacing={0}>
        <Grid item>
          <Item> Hi </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainHeader;
