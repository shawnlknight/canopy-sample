import React, { PropTypes } from 'react';
import './Technician.css';

const Technician = ({
  imageUrl,
  jobCount,
  name,
  rating,
}) => {
  return (
    <div className="Technician">
      <h3>Your Technician</h3>
      <img alt={name} src={imageUrl} />
      <h4>{name}</h4>
    </div>
  );
};

Technician.defaultProps = {
  imageUrl: "http://www.fillmurray.com/150/150",
  jobCount: 317,
  name: "Travis N",
  rating: 4.6,
};

Technician.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  jobCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Technician;
