import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./components/splash";
import Navigation from "./components/navigation";
import Train from "./components/train";
import Create from "./components/create";

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
      </Switch>
    </Router>
  </div>
);

export default App;
