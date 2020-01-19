import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = props => {
  console.log("props :: ", props);

  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

// const HomePage = props => {
//   console.log("props HomePage :: ", props);

//   return (
//     <div>
//       <button onClick={() => props.history.push("/topics")}>Toppics</button>
//     </div>
//   );
// };

// const ToppicList = props => {
//   console.log("props ToppicList :: ", props);

//   return (
//     <div>
//       <h1>Toppic List PAGE</h1>
//       <Link to={`${props.match.url}/13`}>TO Topic 13</Link>
//       <Link to={`${props.match.url}/17`}>TO Topic 17</Link>
//       <Link to={`${props.match.url}/21`}>TO Topic 21</Link>
//     </div>
//   );
// };

// const ToppicDetailt = props => {
//   console.log("props ToppicDetailt :: ", props);
//   return (
//     <div>
//       <h1>Toppic Detailt PAGE : {props.match.params.topicId}</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
