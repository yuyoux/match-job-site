import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Logo from "./Assets/Logo.jpg";
import { Card, Row, Col, Media } from "reactstrap";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetail";

function App() {
  return (
    <div className="App">
      <Row className="header__wrapper">
        <Col xs="6" md="2" className="text-left align-self-center header__logo">
          <Media
            style={{ width: "100%", height: "auto" }}
            src={Logo}
            alt="logo"
          />
        </Col>
        <Col
          xs="6"
          md="10"
          className="text-right align-self-center header__user"
        >
          <h5 className="mb-0">Jim Rose</h5>
        </Col>
      </Row>
      <Router>
        <Switch>
          <Route exact path="/" component={JobList} />
          <Route path="/details/:id" component={JobDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
