import { Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import CDB from "../services/CDB";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "3%",
    margin: "2%",
  },
  textFieldClass: {
    marginTop: "10px",
    width: "320px",
  },
  detailsSection: {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
    marginTop: "50px",
    maxWidth: "400px",
  },
  gridClass: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const RoomDetails = ({ props }) => {
  //
  const options = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5],
    },
  };
  //

  let params = useParams();
  const [heatMapData, setHeatMapData] = useState([
    {
      name: "0",
      data: [
        { x: "W1", y: 22 },
        { x: "W2", y: 29 },
        { x: "W3", y: 13 },
        { x: "W4", y: 32 },
      ],
    },
    {
      name: "1",
      data: [
        { x: "W1", y: 43 },
        { x: "W2", y: 43 },
        { x: "W3", y: 43 },
        { x: "W4", y: 43 },
      ],
    },
  ]);
  const [roomData, setRoomData] = useState({
    enteringRoom: [
      {
        Date: "",
        EnterTime: "",
        RoomID: "",
        UserID: "",
        UserName: "",
        UserType: "",
      },
    ],

    leavingRoom: [
      {
        Date: "",
        ExitTime: "",
        RoomID: "",
        UserID: "",
        UserName: "",
        UserType: "",
      },
    ],
  });

  console.log("PROPS:", props);

  async function fetchHeatMapData(dbName) {
    let res = await CDB.get(`/${dbName}/_all_docs`, {
      responseType: "json",
    });

    console.log("this is res: ", res);

    //get last heat map entry
    let lastHeatMapData = await CDB.get(
      `/${dbName}/${res.data.rows[res.data.rows.length - 1].id}`,
      {
        responseType: "json",
      }
    );

    console.log(res.data);
    console.log("lastHeatMapData: ", lastHeatMapData);

    // setHeatMapData(lastHeatMapData.data.room);

    setHeatMapData([
      {
        name: "0",
        data: [
          { x: "W1", y: lastHeatMapData.data.Room[0][0] },
          { x: "W2", y: lastHeatMapData.data.Room[0][1] },
          { x: "W3", y: lastHeatMapData.data.Room[0][2] },
          { x: "W4", y: lastHeatMapData.data.Room[0][3] },
          { x: "W5", y: lastHeatMapData.data.Room[0][4] },
        ],
      },
      {
        name: "1",
        data: [
          { x: "W1", y: lastHeatMapData.data.Room[1][0] },
          { x: "W2", y: lastHeatMapData.data.Room[1][1] },
          { x: "W3", y: lastHeatMapData.data.Room[1][2] },
          { x: "W4", y: lastHeatMapData.data.Room[1][3] },
          { x: "W5", y: lastHeatMapData.data.Room[1][4] },
        ],
      },
      {
        name: "2",
        data: [
          { x: "W1", y: lastHeatMapData.data.Room[2][0] },
          { x: "W2", y: lastHeatMapData.data.Room[2][1] },
          { x: "W3", y: lastHeatMapData.data.Room[2][2] },
          { x: "W4", y: lastHeatMapData.data.Room[2][3] },
          { x: "W5", y: lastHeatMapData.data.Room[2][4] },
        ],
      },
      {
        name: "3",
        data: [
          { x: "W1", y: lastHeatMapData.data.Room[3][0] },
          { x: "W2", y: lastHeatMapData.data.Room[3][1] },
          { x: "W3", y: lastHeatMapData.data.Room[3][2] },
          { x: "W4", y: lastHeatMapData.data.Room[3][3] },
          { x: "W5", y: lastHeatMapData.data.Room[3][4] },
        ],
      },
      {
        name: "4",
        data: [
          { x: "W1", y: lastHeatMapData.data.Room[3][0] },
          { x: "W2", y: lastHeatMapData.data.Room[3][1] },
          { x: "W3", y: lastHeatMapData.data.Room[3][2] },
          { x: "W4", y: lastHeatMapData.data.Room[3][3] },
          { x: "W5", y: lastHeatMapData.data.Room[3][4] },
        ],
      },
    ]);

    alert(JSON.stringify(lastHeatMapData.data.Room, null, 2));
  }

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await CDB.get(`/iab330/${props[props.length - 1].id}`, {
        responseType: "json",
      });

      let res2 = await CDB.get(`/iab330/${props[props.length - 2].id}`, {
        responseType: "json",
      });

      const ourData1 = JSON.parse(res.data.payload);
      const ourData2 = JSON.parse(res2.data.payload);

      console.log(ourData1);

      switch (params.id) {
        case "1":
          //fetch heat map
          fetchHeatMapData("room_1_heatmap");

          setRoomData({
            enteringRoom: [ourData1.entering_room_1, ourData2.entering_room_1],
            leavingRoom: [ourData1.leaving_room_1, ourData2.leaving_room_1],
          });
          break;
        case "2":
          //fetch heat map
          fetchHeatMapData("room_2_heatmap");

          setRoomData({
            enteringRoom: [ourData1.entering_room_2, ourData2.entering_room_2],
            leavingRoom: [ourData1.leaving_room_2, ourData2.leaving_room_2],
          });
          break;
        case "3":
          //fetch heat map
          fetchHeatMapData("room_3_heatmap");

          setRoomData({
            enteringRoom: [ourData1.entering_room_3, ourData2.entering_room_3],
            leavingRoom: [ourData1.leaving_room_3, ourData2.leaving_room_3],
          });
          break;
        case "4":
          //fetch heat map
          fetchHeatMapData("room_4_heatmap");

          setRoomData({
            enteringRoom: [ourData1.entering_room_4, ourData2.entering_room_4],
            leavingRoom: [ourData1.leaving_room_4, ourData2.leaving_room_4],
          });
          break;

        default:
          break;
      }
    }

    fetchMyAPI();
  }, []);

  const renderRoomEntries = () => {
    return roomData.enteringRoom.map((entry) => {
      return (
        <div className={classes.detailsSection}>
          <Typography variant="h6">Entering Details</Typography>
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.Date}
            label="entering date"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.EnterTime}
            label="entering time"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.UserID}
            label="user ID"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.UserName}
            label="userName"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.UserType}
            label="title"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </div>
      );
    });
  };

  const renderRoomExits = () => {
    return roomData.leavingRoom.map((entry) => {
      return (
        <div className={classes.detailsSection}>
          <Typography variant="h6">Leaving Details</Typography>
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.Date}
            label="leaving date"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.ExitTime}
            label="leaving time"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.UserID}
            label="user ID"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.UserName}
            label="userName"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            className={classes.textFieldClass}
            id="filled-read-only-input"
            value={entry.UserType}
            label="title"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </div>
      );
    });
  };

  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <Grid
        className={classes.gridClass}
        container
        spacing={2}
        style={{ margin: "20px" }}
      >
        <Grid item xs={12}>
          <Typography variant="h4">Room {params.id}#</Typography>
          <br />
        </Grid>
        <Grid item md={3} xs={0}></Grid>
        <Grid item md={3} xs={12}>
          {renderRoomEntries()}
        </Grid>
        <Grid item md={3} xs={12}>
          {renderRoomExits()}
        </Grid>
        <Grid item md={3} xs={0}></Grid>

        <Grid item md={4} xs={0}></Grid>
        <Grid md={4} xs={12}>
          <br/>
          <Typography variant="h5">Room Heat Map</Typography>
          <Chart
            options={options}
            series={heatMapData}
            type="heatmap"
            width={500}
            height={320}
          />
        </Grid>
        <Grid item md={4} xs={0}></Grid>
      </Grid>
    </Paper>
  );
};

export default RoomDetails;
