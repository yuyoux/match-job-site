import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetail";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import GoogleMapPage from "./pages/GoogleMapPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={JobList} />
          <Route exact path="/details/:id" component={JobDetails} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/details/:id/map" component={GoogleMapPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
