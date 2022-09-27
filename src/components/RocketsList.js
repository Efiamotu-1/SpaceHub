import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rockets from './Rockets';

const RocketsList = () => {
  const rockets = useSelector((state) => state.stRockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="w-11/12 mx-auto">
      {rockets.map((rocket) => <Rockets key={rocket.id} singleRocket={rocket} />)}
    </div>
  );
};

export default RocketsList;
