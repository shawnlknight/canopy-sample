import React, { PropTypes } from 'react';
import './Comment.css';

const Comment = ({
  clickHandler,
  item
}) => {
  return(
    <li className="Comment type">
      <h4>{item.author}</h4>
      <div>
        { item.type === "tech" &&
          <span
            aria-label="Delete Comment"
            title="Delete Comment"
            id={item.id}
            onClick={clickHandler}>
            <i className="fa fa-lg fa-trash-o" aria-hidden="true"></i>
          </span>
        }
        <p>{item.body}</p>
      </div>
    </li>
  );
}

Comment.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired, // { customer | tech }
  }).isRequired,
};

export default Comment;
