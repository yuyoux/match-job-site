import React from "react";
import "./JobDetail.scss";
import { Card, Row, Col, CardBody, CardFooter } from "reactstrap";
import location from "../Assets/location.jpg";
import report from "../Assets/report.jpg";
import require from "../Assets/require.jpg";
import shift from "../Assets/shift.jpg";
import moment from "moment-timezone/builds/moment-timezone-with-data";

const formatDate = (start, end) => {
  return (
    moment(start).format("MMM D, ddd HH:mm A") +
    moment(end).format(" - h:mm A z") +
    moment(end)
      .tz("Australia/Sydney")
      .format("z")
  );
};

const JobDetail = props => {
  const job = props.location.state.item || {};
  return (
    <div className="detailedcard-wrapper">
      <Card className="rounded-0 detailedcard">
        <CardBody className="detailedcard-imagewrapper">
          <Row>
            <Col xs="12" className="detailedcard-image">
              <img
                src={job.jobTitle.imageUrl}
                alt="logo"
                className="detailedcard-image"
              />
            </Col>
          </Row>
        </CardBody>

        <CardBody className="detailedcard-metawrapper">
          <Row>
            <Col xs="12" className="text-left card-text__title">
              {job.jobTitle.name}
            </Col>
            <Col xs="12" className="text-left detailcard-text__subtitle">
              {job.company.name}
            </Col>
          </Row>
        </CardBody>

        <CardBody className="detailedcard-tiffanywrapper">
          <Row>
            <Col xs="6" className="text-left detailcard-text__smalltitle">
              {"Distance"}
            </Col>
            <Col xs="6" className="text-right detailcard-text__smalltitle">
              {"Hourly Rate"}
            </Col>
            <Col xs="6" className="text-left detailcard-text__title">
              {job.milesToTravel + " miles"}
            </Col>
            <Col xs="6" className="text-right detailcard-text__title">
              <p className="mb-0" style={{ fontSize: "1rem" }}>
                $
                <span style={{ fontSize: "1.5rem" }}>
                  {" " + job.wagePerHourInCents / 100}
                </span>
              </p>
            </Col>
          </Row>
        </CardBody>

        <CardBody className="detailedcard-metawrapper2">
          <Row className="detailedcard-metarow">
            <Col xs="2" className="text-left pl-0 align-self-center">
              <img height={32} width={32} src={shift} alt="logo" />
            </Col>
            <Col xs="10" className="text-left  pl-0">
              <Row>
                <Col xs="12" className="text-left detailcard-text__subtitle2">
                  Shift Dates
                </Col>
                <Col
                  xs="12"
                  className="text-left detailcard-text__normalsubtitle pr-0"
                >
                  {job.shifts.map((item, index) => {
                    return formatDate(item.startDate, item.endDate);
                  })}
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="detailedcard-metarow">
            <Col xs="2" className="text-left  pl-0 align-self-center">
              <img height={32} width={32} src={location} alt="logo" />
            </Col>
            <Col xs="10" className="text-left  pl-0">
              <Row>
                <Col xs="12" className="text-left detailcard-text__subtitle2">
                  Location
                </Col>
                <Col
                  xs="12"
                  className="text-left detailcard-text__normalsubtitle pr-0"
                >
                  {job.company.address.formattedAddress}
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="detailedcard-metarow">
            <Col xs="2" className="text-left  pl-0 align-self-center">
              <img height={32} width={32} src={require} alt="logo" />
            </Col>
            <Col xs="10" className="text-left  pl-0">
              <Row>
                <Col xs="12" className="text-left detailcard-text__subtitle2">
                  Requirements
                </Col>
                <Col
                  xs="12"
                  className="text-left detailcard-text__normalsubtitle pr-0"
                >
                  {job.shifts.map((item, index) => {
                    return formatDate(item.startDate, item.endDate);
                  })}
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="detailedcard-metarow" style={{ border: "none" }}>
            <Col xs="2" className="text-left  pl-0 align-self-center">
              <img height={32} width={32} src={report} alt="logo" />
            </Col>
            <Col xs="10" className="text-left  pl-0">
              <Row>
                <Col xs="12" className="text-left detailcard-text__subtitle2">
                  Report To
                </Col>
                <Col
                  xs="12"
                  className="text-left detailcard-text__normalsubtitle pr-0"
                >
                  {job.shifts.map((item, index) => {
                    return formatDate(item.startDate, item.endDate);
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobDetail;
