import { Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    margin:"2%"
  },
  textFieldClass: {
    marginTop: "15px",
    width: "380px",
  },
}));

const RoomDetails = () => {
  let params = useParams();
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h4">Room {params.id}#</Typography>
      <br />
      <TextField
        className={classes.textFieldClass}
        id="filled-read-only-input"
        label="Read Only"
        defaultValue="Hello Worldddddddddddddd"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <TextField
        className={classes.textFieldClass}
        id="filled-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <TextField
        className={classes.textFieldClass}
        id="filled-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <TextField
        className={classes.textFieldClass}
        id="filled-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />

    </Paper>
  );
};

export default RoomDetails;
