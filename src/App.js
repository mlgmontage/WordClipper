import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splash from "./components/pages/splash";
import Navigation from "./components/navigation";
import Train from "./components/pages/train";
import Create from "./components/pages/create";
import Explore from "./components/pages/explore";
import Archive from "./components/pages/archive";
import { GridRow, Grid } from "semantic-ui-react";

/**
 * TODO: Transition to Semantic UI
 * * First step is using only CSS, second transitioning to styled components
 */

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/" component={Splash} exact />
      <Route path="/train" component={Train} />
      <Route path="/create" component={Create} />
      <Route path="/explore" component={Explore} />
      <Route path="/archive" component={Archive} />
    </Switch>
  </Router>
);

export default App;
