import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AnimeDetail from "./components/AnimeDetail";
import Header from "./components/Header";
import Login from "./components/Login";
import SearchPage from "./components/SearchPage";
import Registration from './components/Registration';

function App() {

  //productions
  // axios.defaults.baseURL = "https://trackify-us.herokuapp.com/";

  //development
  axios.defaults.baseURL = "http://127.0.0.1:8000";

  return (
    <Router>
      <div className="App">
        <Header />
      
        <Switch>
          <Route exact path="/"><SearchPage /></Route>
          <Route exact path="/anime/:id" component={AnimeDetail}></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/register"><Registration /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
