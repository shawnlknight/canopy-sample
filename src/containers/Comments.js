import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Comment from '../components/Comment';
import { deleteComment } from '../actions';

class Comments extends Component {
  render() {
    const {
      className,
      items,
      deleteComment,
    } = this.props;

    return(
      <div className={`${className} Comments`}>
        <h3><i className="fa fa-comments-o" aria-hidden="true"></i> Comments</h3>
        <ul className="content-aligned">
          { map(items, item => (
            <Comment
              clickHandler={deleteComment.bind(null, item)}
              item={item}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  className: ownProps.className || "",
  items: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (item) => {
    dispatch(deleteComment((item.id)));
  },
});

Comments.propTypes = {
  className: PropTypes.string,
  items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
