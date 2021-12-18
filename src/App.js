import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPokemon from "./pages/DetailPokemon";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/pokemon/:id" component={DetailPokemon} />
      </Switch>
    </Router>
  );
};

export default App;
