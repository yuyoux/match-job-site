import React from "react";
import { Card, Row, Col, CardBody, CardFooter } from "reactstrap";
import { withRouter } from "react-router";

function GoogleMapPage(props) {
  const addr = props.location.state.job.company.address || {};
  return (
    <div className="detailedcard-wrapper">
      <Card className="rounded-0">
        <CardBody>
          <Row>
            <Col
              xs="12"
              className="text-left card-text__title"
              style={{ cursor: "pointer" }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "https://www.google.com/maps/place/" +
                  addr.formattedAddress.replace(" ", "+")
                }
              >
                {addr.formattedAddress}
              </a>
            </Col>
            <Col xs="12" className="text-left card-text__subtitle2">
              {addr.zoneId}
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="text-left card-text__subtitle2">
              (Lack of longitude and latitude Information)
            </Col>
          </Row>
        </CardBody>

        <CardFooter
          onClick={() => props.history.goBack()}
          className="button-content"
        >
          Back
        </CardFooter>
      </Card>
    </div>
  );
}

export default withRouter(GoogleMapPage);
