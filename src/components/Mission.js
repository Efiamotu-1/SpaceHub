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

  const button = status
    ? { style: 'm_button', text: 'Leave Mission' }
    : { style: 'm_button1', text: 'Join Mission' };

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
          <div className="m_statusAndButton">
            <div className={status ? ('m_status') : ('m_status1')}>
              <p>
                {status ? 'Active Member' : 'Not a Member'}
              </p>
            </div>
            <div className={button.style}>
              <button type="button" className="button" onClick={handleJoin}>
                {button.text}
              </button>
            </div>
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
