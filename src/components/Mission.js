import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './mission.css';
import { toggleReservation } from '../redux/missions/missions';

const Mission = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, status,
  } = props;

  const handleJoin = () => {
    dispatch(toggleReservation(id));
  };

  const badge = status
    ? { style: 'm_status', text: 'Active Member' }
    : { style: 'm_status1', text: 'Not A Member' };

  return (
    <>
      <li className="missions-li" key={id}>
        <div className="missionLi">
          <div className="m_mission">
            <p>
              {name}
            </p>
          </div>
          <div className="m_description">
            <p>{description}</p>
          </div>
          <div className={badge.style}>
            <p>{badge.text}</p>
          </div>
          <div className="m_button">
            <button type="button" className="button" onClick={handleJoin}>
              Join Mission
              {status}
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Mission;

Mission.defaultProps = {
  id: '',
  name: '',
  description: '',
  status: false,
};

Mission.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.bool,
};
