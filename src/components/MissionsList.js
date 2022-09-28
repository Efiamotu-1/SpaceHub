import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { asyncMissionsFromAPI } from '../redux/missions/missions';

let firstTime = true;
const MissionsList = () => {
  const missionsArray = useSelector((state) => state.stMissions);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstTime) return;
    firstTime = false;

    dispatch(asyncMissionsFromAPI());
  }, [dispatch]);

  return (
    <div className="mission-container">
      <div className="m_line"> </div>
      <div className="m_header">
        <div className="mu_mission"><p>Mission</p></div>
        <div className="mu_description"><p>Description</p></div>
        <div className="mu_status"><p>Status</p></div>
        <div className="mu_button"> </div>
      </div>
      <ul className="ul-container">
        {missionsArray.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.mission_name}
            description={mission.description}
            status={mission.reserved}
          />
        ))}
      </ul>
    </div>
  );
};

export default MissionsList;
