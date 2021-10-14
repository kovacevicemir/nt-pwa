import { Button, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import AllRoomsStatus from "./AllRoomsStatus";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "5%",
    justifyContent:"center"
  },
  gridSize:{
    maxWidth:"1000px"
  }
}));

const RoomPicker = () => {
  const classes = useStyles();
  const history = useHistory();

  const onRoomClickHandler = (roomId) => {
    history.push(`/room-details/${roomId}`);
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.gridSize} container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h3">Hospital Map</Typography>
          <p>testing pipeline...</p>
          <br />
        </Grid>
          <Grid item xs={12} md={4}>
            <Button
              onClick={() => onRoomClickHandler(1)}
              size="large"
              variant="contained"
              color="primary"
            >
              Room 1
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              onClick={() => onRoomClickHandler(2)}
              size="large"
              variant="contained"
              color="primary"
            >
              Room 2
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              onClick={() => onRoomClickHandler(3)}
              size="large"
              variant="contained"
              color="primary"
            >
              Room 3
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              onClick={() => onRoomClickHandler(4)}
              size="large"
              variant="contained"
              color="primary"
            >
              Room 4
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              onClick={() => onRoomClickHandler(5)}
              size="large"
              variant="contained"
              color="primary"
            >
              Room 5
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              onClick={() => onRoomClickHandler(6)}
              size="large"
              variant="contained"
              color="primary"
            >
              Room 6
            </Button>
          </Grid>
          <Grid item xs={12}>
            <AllRoomsStatus />
          </Grid>
      </Grid>
    </div>
  );
};

export default RoomPicker;
