/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './mission.css';

const Mission = (props) => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const { mission } = props;
  const {
    mission_id, mission_name, description,
  } = mission;

  const handleRemove = () => {
  };

  return (
    <>
    <p className='big-red'>Hello</p>
      <li className="missions-li" key={mission_id}>
        <div className="missionLi">
          <div className="m_mission">
            <p>{mission_name}</p>
          </div>
          <div className="m_description">
            <p>{description}</p>
          </div>
          <div className="m_status">
            <p>Active Member</p>
          </div>
          <div className="m_button">
            <button type="button" className="button" onClick={handleRemove}>Join Mission</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Mission;

Mission.defaultProps = {
  mission: {
    mission_id: '',
    mission_name: '',
    description: '',
  },
};

Mission.propTypes = {
  mission:
    PropTypes.shape(
      {
        mission_id: PropTypes.string,
        mission_name: PropTypes.string,
        description: PropTypes.string,
      },
    ),
};
