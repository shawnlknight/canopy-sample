import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Comment from '../components/Comment';

class Comments extends Component {
  render() {
    const {
      className,
      items,
    } = this.props;

    return(
      <div className={`${className} Comments`}>
        <h3><i className="fa fa-comments-o" aria-hidden="true"></i> Comments</h3>
        <ul>
          { map(items, item => <Comment item={item} key={item.id} />) }
        </ul>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  className: ownProps.className || "",
  items: state.comments,
});

Comments.propTypes = {
  className: PropTypes.string,
  items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Comments);
