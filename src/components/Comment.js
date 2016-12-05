import React, { PropTypes } from 'react';
import './Comment.css';

const Comment = ({
  clickHandler,
  item
}) => {
  return(
    <li className="Comment type">
      { item.type === "tech"
        ?<div>
          <h4>Tech: <strong>{item.author}</strong></h4>
          <div>
            <button
              aria-label="Delete Comment"
              title="Delete Comment"
              id={item.id}
              onClick={clickHandler}>
              <i className="fa fa-2x fa-trash-o" aria-hidden="true"></i>
            </button>
            <p>{item.body}</p>
          </div>
        </div>
        :<div>
          <h4>Customer: <strong>{item.author}</strong></h4>
          <div>
            <p className="customer">{item.body}</p>
          </div>
        </div>
      }
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
