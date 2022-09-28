import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelReservation } from '../redux/rockets/rockets';

const Rockets = (props) => {
  const dispatch = useDispatch();

  const {
    singleRocket,
  } = props;
  const {
    id, name, description, image, reserved,
  } = singleRocket;

  const reserveRocket = (id) => {
    dispatch(bookRocket(id));
  };

  const cancelRocket = () => {
    dispatch(cancelReservation(id));
  };

  return (
    <div key={id} className="md:flex space-x-4 py-5 border-b border-green-800">
      <div className="md:w-1/4 ">
        <img src={image} alt="rocket " className="object-contain rounded" />
      </div>
      <div className="flex-col md:w-3/4">
        <p className="text-gray-700">{name}</p>
        <h2 className="mb-5">
          {reserved && <button className="button bg-sky-500 hover:bg-sky-600 active:bg-sky-900 py-1 px-2 rounded-lg text-stone-100 mr-2" type="submit">reserved</button>}
          {description}
        </h2>
        {reserved ? <button className="button border border-blue-500 hover:text-stone-600 active:text-stone-900 py-2 px-3 rounded  text-stone-400" type="submit" onClick={() => cancelRocket(id)}>Cancel Reservation</button>
          : <button className="button bg-blue-500 hover:bg-blue-600 active:bg-blue-900 py-2 px-3 rounded text-stone-100" type="submit" onClick={() => reserveRocket(id)}>Reserve Rockets</button> }
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
      reserved: PropTypes.bool,
    }).isRequired,
};
