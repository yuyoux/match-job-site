import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_Address } from "../common/config";
import ListCard from "../components/ListCard";
import "./JobList.scss";

const JobList = props => {
  const [joblist, setJoblist] = useState([]);

  useEffect(() => {
    axios({
      url:
        API_Address +
        "/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches",
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        setJoblist(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const selectJob = item => {
    props.history.push({
      pathname: `/details/${item.jobId}`,
      state: {
        item: item
      }
    });
  };

  return (
    <React.Fragment>
      {joblist.map((job, index) => (
        <div
          key={job.jobId}
          className="card-background"
          data-testid="job-fetch"
        >
          <ListCard job={job} selectJob={selectJob}></ListCard>
        </div>
      ))}
    </React.Fragment>
  );
};

export default JobList;
