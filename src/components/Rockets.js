import React from 'react';
import PropTypes from 'prop-types';

const Rockets = (props) => {
  const {
    singleRocket,
  } = props;
  const {
    id, name, description, image,
  } = singleRocket;
  return (
    <div key={id} className="flex space-x-4 py-5  border-b border-green-800">
      <div>
        <img src={image} alt="rocket" className="rounded" />
      </div>
      <div className="flex-col ">
        <p className="text-gray-700">{name}</p>
        <h2 className="mb-5">{description}</h2>
        <button className="button bg-blue-500 hover:bg-blue-600 active:bg-blue-900 py-2 px-3 rounded text-stone-100" type="submit">Reserve Rockets</button>
      </div>
    </div>
  );
};
export default Rockets;

Rockets.propTypes = {
  singleRocket:
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
};
