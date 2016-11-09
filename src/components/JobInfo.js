import React, { PropTypes } from 'react';
import './JobInfo.css';

const JobInfo = ({ className }) => {
  return(
    <div className={`${className} JobInfo`}>
      <h2>Job Completed</h2>
      <p>Your <strong>Full Service Deluxe</strong> visit at <strong>1234 Main St</strong> has been completed on <strong>Monday, November 7th, 2016.</strong></p>
    </div>
  );
};

JobInfo.defaultProps = {
  className: "",
};

JobInfo.propTypes = {
  className: PropTypes.string,
};

export default JobInfo;
