import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { asyncMissionsFromAPI } from '../redux/missions/missions';

const MissionsList = () => {
  const missionsArray = useSelector((state) => state.stMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncMissionsFromAPI());
  }, [dispatch]);

  return (
    <ul className="ul-container">
      {missionsArray.map((mission) => (
        <Mission
          key={mission.id}
          mission={mission}
        />
      ))}
    </ul>
  );
};

export default MissionsList;
