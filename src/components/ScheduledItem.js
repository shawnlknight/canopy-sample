import React, { PropTypes } from 'react';
import './ScheduledItem.css';

const ScheduledItem = ({ item }) => {
  return(
    <li
      className={`ScheduledItem ${ item.completed ? "completed" : "" }`}
      id={item.id}
    >
      { item.completed
        ? <i className="fa-li fa fa-check-circle-o"></i>
        : <i className="fa-li fa fa-circle-o"></i>
      }
      {item.name}
    </li>
  );
}

ScheduledItem.propTypes = {
  item: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ScheduledItem;
