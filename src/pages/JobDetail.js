import React, { useState } from "react";
import { API_Address } from "../common/config";
import "./JobDetail.scss";
import { Card, Row, Col, CardBody, Button } from "reactstrap";
import location from "../Assets/location.jpg";
import report from "../Assets/report.jpg";
import require from "../Assets/require.jpg";
import shift from "../Assets/shift.jpg";
import Go from "../Assets/go.jpg";
import moment from "moment-timezone/builds/moment-timezone-with-data";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

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
  //state used to change the button style
  const [actionFlag, setActionflag] = useState("");
  // for notification
  const { addToast } = useToasts();

  //for button actions
  const ApplyAction = (flag, id) => {
    let url;
    if (flag === "accept") {
      url =
        "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/job/5775d8e18a488e6c5bb08333/accept";
    } else {
      url =
        API_Address +
        "/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/job/" +
        id +
        "/reject";
    }
    console.log(url);
    axios({
      url: url,
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.data.success) {
          addToast("success!", {
            appearance: "success",
            autoDismiss: true
          });
          setActionflag(flag);
        } else {
          addToast(res.data.message, {
            appearance: "error",
            autoDismiss: true
          });
        }
      })
      .catch(err => {
        addToast("Network Error", {
          appearance: "error",
          autoDismiss: true
        });
      });
  };

  return (
    <div className="detailedcard-wrapper">
      <Card className="rounded-0 detailedcard">
        <CardBody className="detailedcard-imagewrapper">
          <Row>
            <Col xs="12" className="detailedcard-image">
              <img
                src={job.jobTitle ? job.jobTitle.imageUrl : null}
                alt="logo"
                className="detailedcard-image"
              />
            </Col>
          </Row>
        </CardBody>

        <CardBody className="detailedcard-metawrapper">
          <Row>
            <Col xs="12" className="text-left card-text__title">
              {job.jobTitle ? job.jobTitle.name : null}
            </Col>
            <Col xs="12" className="text-left detailcard-text__subtitle">
              {job.jobTitle ? job.company.name : null}
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
              {job.milesToTravel
                ? job.milesToTravel.toFixed(1) + " miles"
                : null}
            </Col>
            <Col xs="6" className="text-right detailcard-text__title">
              <p className="mb-0" style={{ fontSize: "1rem" }}>
                $
                <span style={{ fontSize: "1.5rem" }}>
                  {" " + (job.wagePerHourInCents / 100).toFixed(2)}
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
                  {job.shifts
                    ? job.shifts.map((item, index) => {
                        return (
                          <div key={index}>
                            {formatDate(item.startDate, item.endDate)}
                            <br />
                          </div>
                        );
                      })
                    : null}
                </Col>
              </Row>
            </Col>
          </Row>

          <Row
            className="detailedcard-metarow"
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.history.push({
                pathname: `/details/${job.jobId}/map`,
                state: {
                  job: job
                }
              });
            }}
          >
            <Col xs="2" className="text-left  pl-0 align-self-center">
              <img height={32} width={32} src={location} alt="logo" />
            </Col>
            <Col xs="9" className="text-left  pl-0">
              <Row>
                <Col xs="12" className="text-left detailcard-text__subtitle2">
                  Location
                </Col>
                <Col
                  xs="12"
                  className="text-left detailcard-text__normalsubtitle pr-0"
                >
                  {job.company
                    ? job.company.address.formattedAddress.split(",")[0] +
                      ", " +
                      job.company.address.formattedAddress.split(",")[1] +
                      ", " +
                      job.company.address.formattedAddress.split(",")[2]
                    : null}
                </Col>
                <Col
                  xs="12"
                  className="text-left detailcard-text__smallsubtitle pr-0"
                >
                  {job.milesToTravel + "miles from your job search location"}
                </Col>
              </Row>
            </Col>
            <Col xs="1" className="text-right px-0 align-self-center">
              <img height={32} width={32} src={Go} alt="go" />
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
                  {job.requirements ? (
                    job.requirements.map((r, index) => (
                      <Col
                        xs="12"
                        className="text-left detailcard-text__normalsubtitle pr-0"
                      >
                        {"- " + r}
                      </Col>
                    ))
                  ) : (
                    <Col
                      xs="12"
                      className="text-left detailcard-text__normalsubtitle pr-0"
                    >
                      No
                    </Col>
                  )}
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
                  {job.company
                    ? job.company.reportTo.name.split(" ")[0] + " "
                    : null}
                  {job.company && job.company.reportTo.phone
                    ? job.company.reportTo.phone
                    : "(Branch Phone) " + job.branchPhoneNumber}
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="detailedcard-metarow" style={{ border: "none" }}>
            {actionFlag === "reject" ? (
              <React.Fragment>
                <Col xs="6" className="text-center pl-0 pr-1 align-self-center">
                  Rejected
                </Col>
                <Col xs="6" className="text-center pr-0 pl-1 align-self-center">
                  <Button
                    className="detailcard-button__inverted"
                    onClick={() => {
                      ApplyAction("accept", job.jobId);
                    }}
                  >
                    I'll Take it
                  </Button>
                </Col>
              </React.Fragment>
            ) : actionFlag === "accepted" ? (
              <React.Fragment>
                <Col xs="6" className="text-center pl-0 pr-1 align-self-center">
                  <Button
                    outline
                    color="secondary"
                    className="detailcard-button"
                    onClick={() => {
                      ApplyAction("reject", job.jobId);
                    }}
                  >
                    No Thanks
                  </Button>
                </Col>
                <Col xs="6" className="text-center pr-0 pl-1 align-self-center">
                  Accepted
                </Col>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Col xs="6" className="text-center pl-0 pr-1 align-self-center">
                  <Button
                    outline
                    color="secondary"
                    className="detailcard-button"
                    onClick={() => {
                      ApplyAction("reject", job.jobId);
                    }}
                  >
                    No Thanks
                  </Button>
                </Col>
                <Col xs="6" className="text-center pr-0 pl-1 align-self-center">
                  <Button
                    className="detailcard-button__inverted"
                    onClick={() => {
                      ApplyAction("accept", job.jobId);
                    }}
                  >
                    I'll Take it
                  </Button>
                </Col>
              </React.Fragment>
            )}
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default JobDetail;
