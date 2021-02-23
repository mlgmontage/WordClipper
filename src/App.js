import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./components/pages/splash";
import Navigation from "./components/navigation";
import Train from "./components/pages/train";
import Create from "./components/pages/create";
import Explore from "./components/pages/explore";
import Archive from "./components/pages/archive";

const App = () => (
  <div className="container">
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Splash />
        </Route>
        <Route path="/train">
          <Train />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/archive">
          <Archive />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
