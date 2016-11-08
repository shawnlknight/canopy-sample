import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import ScheduledItem from '../components/ScheduledItem';

class ScheduledItems extends Component {
  render() {
    const { items } = this.props;

    return(
      <div>
        <h3>Scheduled Services</h3>
        <ul>
          { map(items, item => <ScheduledItem item={item} key={item.id} />) }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  items: state.scheduledItems,
});

ScheduledItems.propTypes = {
  items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ScheduledItems);
