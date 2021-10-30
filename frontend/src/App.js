import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      
        <Switch>
          <Route path="/"><SearchPage /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
