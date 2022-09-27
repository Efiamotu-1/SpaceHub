// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './Mission';
import { asyncMissionsFromAPI } from '../redux/missions/missions';

const MissionsList = () => {
  // const [hasRender, setHasRender] = useState(false);
  // const [inputText, setInputText] = useState({ title: '', author: '' });

  const missionsArray = useSelector((state) => state.stMissions);
  // if (missionsArray.length !== 0) {
  //   console.log('Has Render');
  // }

  const dispatch = useDispatch();

  useEffect(() => {
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
            mission={mission}
          />
        ))}
      </ul>
    </div>
  );
};

export default MissionsList;
