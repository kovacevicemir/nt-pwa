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
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
  },
  centered:{
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
  }
}));

const RoomDetails = ({ props }) => {
  //Heat map options state [ref: react-apex docs]
  const [options, setOptions] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5],
    },
    plotOptions: { heatmap: { colorScale: { ranges: [{ from: 0, to: 10, color: '#0054ff', name: 'cold', }, {from: 10, to: 20, color: '#0084ff', name: 'cool'}, {from: 30, to: 40, color: '#FFe600', name: "warm"}, { from: 36.1, to: 37.2, color: '#FFbe00', name: 'human', }, { from: 37.2, to: 50, color: '#FF4600', name: 'hot', } ] } } }
  })

  const classes = useStyles();
  let params = useParams();

  //Heat map data local state
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

  //Entries and exits data local state for each user
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

  //Helper function to fetch heatMapData for room.
  async function fetchHeatMapData(dbName) {
    //First we fetch all docs id`s
    let res = await CDB.get(`/${dbName}/_all_docs`, {
      responseType: "json",
    });

    //get last heat map entry
    let lastHeatMapData = await CDB.get(
      `/${dbName}/${res.data.rows[res.data.rows.length - 1].id}`,
      {
        responseType: "json",
      }
    );

    // console.log(res.data);
    // console.log("lastHeatMapData: ", lastHeatMapData);
    // setHeatMapData(lastHeatMapData.data.room);

    
    if(params.id === "2"){ //If room id is 2, which means 7x7 size
      setOptions({
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7],
        },
      })
      setHeatMapData([
        {
          name: "1",
          data: [
            { x: "W1", y: lastHeatMapData.data.Room[0][0] },
            { x: "W2", y: lastHeatMapData.data.Room[0][1] },
            { x: "W3", y: lastHeatMapData.data.Room[0][2] },
            { x: "W4", y: lastHeatMapData.data.Room[0][3] },
            { x: "W5", y: lastHeatMapData.data.Room[0][4] },
            { x: "W6", y: lastHeatMapData.data.Room[0][5] },
            { x: "W7", y: lastHeatMapData.data.Room[0][6] },
          ],
        },
        {
          name: "2",
          data: [
            { x: "W1", y: lastHeatMapData.data.Room[1][0] },
            { x: "W2", y: lastHeatMapData.data.Room[1][1] },
            { x: "W3", y: lastHeatMapData.data.Room[1][2] },
            { x: "W4", y: lastHeatMapData.data.Room[1][3] },
            { x: "W5", y: lastHeatMapData.data.Room[1][4] },
            { x: "W6", y: lastHeatMapData.data.Room[1][5] },
            { x: "W7", y: lastHeatMapData.data.Room[1][6] },
          ],
        },
        {
          name: "3",
          data: [
            { x: "W1", y: lastHeatMapData.data.Room[2][0] },
            { x: "W2", y: lastHeatMapData.data.Room[2][1] },
            { x: "W3", y: lastHeatMapData.data.Room[2][2] },
            { x: "W4", y: lastHeatMapData.data.Room[2][3] },
            { x: "W5", y: lastHeatMapData.data.Room[2][4] },
            { x: "W6", y: lastHeatMapData.data.Room[2][5] },
            { x: "W7", y: lastHeatMapData.data.Room[2][6] },
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
            { x: "W6", y: lastHeatMapData.data.Room[3][5] },
            { x: "W7", y: lastHeatMapData.data.Room[3][6] },
          ],
        },
        {
          name: "5",
          data: [
            { x: "W1", y: lastHeatMapData.data.Room[4][0] },
            { x: "W2", y: lastHeatMapData.data.Room[4][1] },
            { x: "W3", y: lastHeatMapData.data.Room[4][2] },
            { x: "W4", y: lastHeatMapData.data.Room[4][3] },
            { x: "W5", y: lastHeatMapData.data.Room[4][4] },
            { x: "W6", y: lastHeatMapData.data.Room[4][5] },
            { x: "W7", y: lastHeatMapData.data.Room[4][6] },
          ],
        },
        {
          name: "6",
          data: [
            { x: "W1", y: lastHeatMapData.data.Room[5][0] },
            { x: "W2", y: lastHeatMapData.data.Room[5][1] },
            { x: "W3", y: lastHeatMapData.data.Room[5][2] },
            { x: "W4", y: lastHeatMapData.data.Room[5][3] },
            { x: "W5", y: lastHeatMapData.data.Room[5][4] },
            { x: "W6", y: lastHeatMapData.data.Room[5][5] },
            { x: "W7", y: lastHeatMapData.data.Room[5][6] },
          ],
        },
        {
          name: "7",
          data: [
            { x: "W1", y: lastHeatMapData.data.Room[6][0] },
            { x: "W2", y: lastHeatMapData.data.Room[6][1] },
            { x: "W3", y: lastHeatMapData.data.Room[6][2] },
            { x: "W4", y: lastHeatMapData.data.Room[6][3] },
            { x: "W5", y: lastHeatMapData.data.Room[6][4] },
            { x: "W6", y: lastHeatMapData.data.Room[6][5] },
            { x: "W7", y: lastHeatMapData.data.Room[6][6] },
          ],
        },
      ]);
    }else{//In case of rooms: 1,3,4   size 5x5
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
            { x: "W1", y: lastHeatMapData.data.Room[4][0] },
            { x: "W2", y: lastHeatMapData.data.Room[4][1] },
            { x: "W3", y: lastHeatMapData.data.Room[4][2] },
            { x: "W4", y: lastHeatMapData.data.Room[4][3] },
            { x: "W5", y: lastHeatMapData.data.Room[4][4] },
          ],
        },
      ]);
    }
  }

  //On component render:
  //Fetch last 2 user entries from database.
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

      //console.log(ourData1);

      //Fetch more data based on room ID:
      switch (params.id) {
        case "1":
          //fetch heat map
          fetchHeatMapData("room_1_heatmap");

          //Set local state for entering and leaving details for last 2 users.
          setRoomData({
            enteringRoom: [ourData1.entering_room_1, ourData2.entering_room_1],
            leavingRoom: [ourData1.leaving_room_1, ourData2.leaving_room_1],
          });
          break;
        case "2":
          fetchHeatMapData("room_2_heatmap");
          setRoomData({
            enteringRoom: [ourData1.entering_room_2, ourData2.entering_room_2],
            leavingRoom: [ourData1.leaving_room_2, ourData2.leaving_room_2],
          });
          break;
        case "3":
          fetchHeatMapData("room_3_heatmap");
          setRoomData({
            enteringRoom: [ourData1.entering_room_3, ourData2.entering_room_3],
            leavingRoom: [ourData1.leaving_room_3, ourData2.leaving_room_3],
          });
          break;
        case "4":
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

  //Helper function, render room entries for each user
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

  //Helper function, render room exits for each user
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

  //Render RoomDetails component [using Grid system, ref: material UI]
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
        </Grid>
        <Grid xs={12}><hr/></Grid>
        <Grid item md={3} xs={0}></Grid>
        <Grid item md={2} xs={12}>
          {renderRoomEntries()}
        </Grid>
        <Grid item md={2} xs={12}>
          {renderRoomExits()}
        </Grid>
        <Grid item md={3} xs={0}></Grid>

        <Grid xs={12}><hr/></Grid>
        <Grid md={12} xs={12} className={classes.centered} style={{marginBottom:"10px"}}>
          <br/>
          <Typography variant="h5" >Room Heat Map</Typography>
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
