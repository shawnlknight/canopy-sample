import React, { PropTypes } from 'react';
import './Photos.css';

const Photos = ({ items }) => {
  return(
    <div className="Photos">
      <h3>Photos</h3>
      <div className="grid">
      { items.map(item => {
        return(
          <div className="image-tile">
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
  items: [
    {
      title: "Picture One",
      url: "http://lorempixel.com/output/food-q-c-406-325-10.jpg",
    },
    {
      title: "Picture Two",
      url: "http://lorempixel.com/output/transport-q-c-406-325-9.jpg",
    },
  ],
};

Photos.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Photos;
