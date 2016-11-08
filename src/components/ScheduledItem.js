import React, { PropTypes } from 'react';

const ScheduledItem = ({ item }) => {
  return(
    <li
      className={ item.completed ? "completed" : null }
      id={item.id}
    >
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
