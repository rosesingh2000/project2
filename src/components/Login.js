import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  bton: {
    marginTop: 20,
  },
  // full: {
  //   backgroundColor: "primary",
  // },
});

export default function Login() {
  const classes = useStyles();

  return (
    < >
      <form noValidate >
        <Container>
          {/* <AppBar>
            <Toolbar>
              <Typography variant="h8"> 
              user details
              </Typography>
            </Toolbar>
          </AppBar> */}
          <TextField
            className={classes.field}
            label="firstname"
            variant="outlined"
            color="secondary"
            required
          />
          <TextField
            className={classes.field}
            label="lastname"
            variant="outlined"
            color="secondary"
            required
          />
          <br />
          <TextField
            className={classes.field}
            label="email"
            variant="outlined"
            color="secondary"
            required
          />
          <br />
          <TextField
            className={classes.field}
            label="bio"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
          />
          <Button
            className={classes.bton}
            onClick={() => console.log("you clicked")}
            type="submit"
            color="primary"
            variant="contained"
            label="continue"
          >
            Continue
          </Button>
        </Container>
      </form>
    </>
  );
}
