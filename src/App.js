import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Logo from "./Assets/Logo.jpg";
import { Card, Row, Col, CardBody } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Row className="header__wrapper">
        <Col xs="6" className="text-left header__logo">
          <img src={Logo} alt="logo" className="logo" />
        </Col>
        <Col xs="6" className="text-right align-self-center header__user">
          <h5>Jim Rose</h5>
        </Col>
      </Row>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={AirportList} />
          <Route path="/details/:name" component={AirportDetail} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
