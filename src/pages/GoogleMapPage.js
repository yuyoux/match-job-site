import React from "react";
import { Card, Row, Col, CardBody, CardFooter } from "reactstrap";
import { withRouter } from "react-router";

function GoogleMapPage(props) {
  return (
    <div className="detailedcard-wrapper">
      <Card className="rounded-0">
        <CardBody>
          <Row>
            <Col xs="12" className="text-left card-text__title">
              Lack of longitude and latitude Information.
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
