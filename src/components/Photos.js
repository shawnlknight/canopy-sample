import React, { PropTypes } from 'react';
import './Photos.css';

const Photos = ({
  className,
  items,
}) => {
  return(
    <div className={`${className} Photos`}>
      <h3><i className="fa fa-picture-o" aria-hidden="true"></i> Photos</h3>
      <div className="grid">
      { items.map(item => {
        return(
          <div className="image-tile" key={item.id}>
            <h4>{item.title}</h4>
            <img alt={item.title} src={item.url} />
          </div>
        );
      })
      }
      </div>
    </div>
  );
};

Photos.defaultProps = {
  className: "",
  items: [
    {
      id: 1,
      title: "Picture One",
      url: "http://lorempixel.com/output/food-q-c-406-325-10.jpg",
    },
    {
      id: 2,
      title: "Picture Two",
      url: "http://lorempixel.com/output/transport-q-c-406-325-9.jpg",
    },
  ],
};

Photos.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Photos;
