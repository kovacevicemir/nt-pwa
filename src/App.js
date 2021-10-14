import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RoomPicker from "./components/RoomPicker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RoomDetails from "./components/RoomDetails";

function App() {
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
