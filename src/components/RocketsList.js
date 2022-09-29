import React from 'react';
import { useSelector } from 'react-redux';
import Rockets from './Rockets';

const RocketsList = () => {
  const rockets = useSelector((state) => state.stRockets.rockets);

  return (
    <div className="w-11/12 mx-auto">
      {rockets.map((rocket) => <Rockets key={rocket.id} singleRocket={rocket} />)}
    </div>
  );
};

export default RocketsList;
