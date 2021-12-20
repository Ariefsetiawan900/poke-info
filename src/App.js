import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage,DetailPokemon,NotFound } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/pokemon/:id" component={DetailPokemon} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
