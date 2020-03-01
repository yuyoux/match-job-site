import React from "react";
import { Card, Row, Col, CardBody, CardFooter } from "reactstrap";
import "./ListCard.scss";

const ListCard = ({ job, selectJob }) => {
  return (
    <Card className="rounded-0">
      <CardBody>
        <Row>
          <Col xs="12" className="text-left card-text__title">
            {job.jobTitle.name}
          </Col>
          <Col xs="12" className="text-left card-text__subtitle">
            {job.company.name}
          </Col>
        </Row>
      </CardBody>

      <CardBody className="text-right">
        <Row>
          <Col xs="12" className="text-right card-text__title">
            {job.branch}
          </Col>
          <Col xs="12" className="text-right card-text__subtitle2">
            {job.company.address.zoneId}
          </Col>
        </Row>
      </CardBody>
      <CardFooter onClick={() => selectJob(job)} className="button-content">
        View Details
      </CardFooter>
    </Card>
  );
};

export default ListCard;
