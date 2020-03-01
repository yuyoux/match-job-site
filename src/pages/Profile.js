import React, { useState, useEffect } from "react";
import { Card, Row, Col, CardBody, CardFooter } from "reactstrap";
import { withRouter } from "react-router";
import axios from "axios";
import { API_Address } from "../common/config";

const Profile = props => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios({
      url:
        API_Address +
        "/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile",
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        setProfile(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="detailedcard-wrapper">
      <Card className="rounded-0">
        <CardBody>
          <Row>
            <Col xs="12" className="text-left card-text__title">
              {profile.firstName + " " + profile.lastName}
            </Col>
            <Col xs="12" className="text-left card-text__subtitle2">
              {"Tel: " + profile.phoneNumber}
            </Col>
            <Col xs="12" className="text-left card-text__subtitle2">
              {"Email: " + profile.email}
            </Col>
            <Col xs="12" className="text-left card-text__subtitle2">
              {profile.address
                ? "Address: " + profile.address.formattedAddress
                : null}
            </Col>
          </Row>
        </CardBody>

        <CardFooter
          onClick={() => props.history.push({ pathname: "/" })}
          className="button-content"
        >
          Back
        </CardFooter>
      </Card>
    </div>
  );
};

export default withRouter(Profile);
