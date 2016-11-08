import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Comment from '../components/Comment';

class Comments extends Component {
  render() {
    const { items } = this.props;

    return(
      <div>
        <h3>Comments</h3>
        <ul>
          { map(items, item => <Comment item={item} key={item.id} />) }
        </ul>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  items: state.comments,
});

Comments.propTypes = {
  items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Comments);
