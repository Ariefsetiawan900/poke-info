import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPokemon from "./pages/DetailPokemon";
import NotFound from "./pages/NotFound";

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
