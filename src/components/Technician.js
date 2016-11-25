import React, { PropTypes } from 'react';
import './Technician.css';

const Technician = ({
  className,
  imageUrl,
  jobCount,
  name,
  rating,
}) => {
  return (
    <div className={`${className} Technician`}>
      <h3><i className="fa fa-wrench" aria-hidden="true"></i> Your Technician</h3>
      <div className="inline-block">
        <img alt={name} src={imageUrl} />
      </div>
      <div className="inline-block details">
        <ul>
          <li><strong>{name}</strong></li>
          <li>Rating: {rating}</li>
          <li>Jobs Performed: {jobCount}</li>
        </ul>
      </div>
    </div>
  );
};

Technician.defaultProps = {
  className: "",
  imageUrl: "http://www.fillmurray.com/150/150",
  jobCount: 317,
  name: "Travis N",
  rating: 4.6,
};

Technician.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  jobCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Technician;
