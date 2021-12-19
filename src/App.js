import React,{useEffect} from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import DetailPokemon from "./pages/DetailPokemon";
import { useDispatch } from "react-redux";
import { payloadRenderGetPokemon } from './redux/actions/Pokemon'

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
