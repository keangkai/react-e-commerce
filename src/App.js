import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop_data from "./pages/shop/shop.component";

const HatsPage = props => {
  console.log("props :: ", props);

  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop_data} />
      </Switch>
    </div>
  );
}

export default App;
