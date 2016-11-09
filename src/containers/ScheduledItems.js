import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import ScheduledItem from '../components/ScheduledItem';

class ScheduledItems extends Component {
  render() {
    const {
      className,
      items,
    } = this.props;

    return(
      <div className={`${className} ScheduledItems`}>
        <h3>Scheduled Services</h3>
        <ul className="fa-ul">
          { map(items, item => <ScheduledItem item={item} key={item.id} />) }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({
  className: ownProps.className || "",
  items: state.scheduledItems,
});

ScheduledItems.propTypes = {
  className: PropTypes.string,
  items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ScheduledItems);
