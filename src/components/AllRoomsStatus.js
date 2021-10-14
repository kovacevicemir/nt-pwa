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
        Available <CountUp style={{color:"green"}} end={11} duration={1} />
      </Typography>
      <Typography variant="h6">
        Occupied <CountUp style={{color:"red"}} end={44} duration={1} />
      </Typography>
      <Typography variant="h6">
        Reserved <CountUp style={{color:"orange"}} end={27} duration={1} />
      </Typography>
    </div>
  );
};

export default AllRoomsStatus;
