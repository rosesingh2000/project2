import React from "react";
import Login from "./Login";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountBoxIcon from '@material-ui/icons/AccountBox'



export default function Main() {
  return (
      <>
        <AppBar position="static" >
          <Toolbar>
              {<AccountBoxIcon style= {{marginLeft:20, marginRight:20 }} />}
              <Typography variant="h5"> RESUME BUILDER </Typography>
              
          </Toolbar>
        </AppBar>
        <Login />
      </>
   
  );
}
