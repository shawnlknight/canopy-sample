import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import ScheduledItem from '../components/ScheduledItem';
import { updateScheduledItem } from '../actions';

class ScheduledItems extends Component {
  render() {
    const {
      className,
      items,
      updateScheduledItem,
    } = this.props;

    return(
      <div className={`${className} ScheduledItems`}>
        <h3><i className="fa fa-calendar-o" aria-hidden="true"></i> Scheduled Services</h3>
        <ul className="fa-ul contents">
          { map(items, item => (
            <ScheduledItem
              clickHandler={updateScheduledItem.bind(null, item)}
              item={item}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  className: ownProps.className || "",
  items: state.scheduledItems,
});

const mapDispatchToProps = (dispatch) => ({
  updateScheduledItem: (item) => {
    dispatch(updateScheduledItem(item.id, { completed: !item.completed }));
  },
});

ScheduledItems.propTypes = {
  className: PropTypes.string,
  items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduledItems);
