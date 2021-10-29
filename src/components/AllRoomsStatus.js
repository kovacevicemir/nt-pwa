import { Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "3%",
    margin: "2%",
  },
}));

const AllRoomsStatus = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        Total users <CountUp style={{color:"green"}} end={2} duration={1} />
      </Typography>
      <Typography variant="h6">
        Total Rooms <CountUp style={{color:"red"}} end={4} duration={1} />
      </Typography>
      <Typography variant="h6">
        Total patients <CountUp style={{color:"orange"}} end={127} duration={1} />
      </Typography>
    </div>
  );
};

export default AllRoomsStatus;
