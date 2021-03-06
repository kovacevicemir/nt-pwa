import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RoomPicker from "./components/RoomPicker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoomDetails from "./components/RoomDetails";
import CDB from "./services/CDB";
import { useEffect,useState } from "react";

function App() {
  const [allData, setAllData] = useState()

  //Fetch all id`s of users entering/leaving on component-render,
  //and pass that data to RoomDetails component
  useEffect(() => {
    async function fetchMyAPI() {
      let res = await CDB.get("/iab330/_all_docs",{
        responseType:"json"
      })
      console.log(res.data.rows);
      setAllData(res.data.rows);
    }

    fetchMyAPI()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <RoomPicker />} />
          <Route
            exact
            path="/room-details/:id"
            render={(props) => <RoomDetails props={allData} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
