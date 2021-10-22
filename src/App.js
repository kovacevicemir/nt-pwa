import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RoomPicker from "./components/RoomPicker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoomDetails from "./components/RoomDetails";
import CDB from "./services/CDB";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await CDB.get("/ntdb/_all_docs",{
        responseType:"json"
      })
      console.log(res.data.rows);
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
            render={(props) => <RoomDetails />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
