import React from "react";
import "../App.scss";
import Logo from "../Assets/Logo.jpg";
import { Row, Col, Media } from "reactstrap";
import { withRouter } from "react-router";

function Header(props) {
  return (
    <Row className="header__wrapper">
      <Col xs="6" md="2" className="text-left align-self-center header__logo">
        <Media
          style={{ width: "100%", height: "auto", cursor: "pointer" }}
          src={Logo}
          alt="logo"
          onClick={() => props.history.push({ pathname: "/" })}
        />
      </Col>
      <Col xs="6" md="10" className="text-right align-self-center header__user">
        <h5
          className="mb-0"
          style={{ cursor: "pointer" }}
          onClick={() => props.history.push({ pathname: "/profile" })}
        >
          Jim Rose
        </h5>
      </Col>
    </Row>
  );
}

export default withRouter(Header);
