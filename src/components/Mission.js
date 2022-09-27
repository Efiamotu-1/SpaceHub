/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
const Mission = (props) => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const { mission } = props;
  const {
    mission_id, mission_name, description,
  } = mission;

  const handleRemove = () => {
  // dispatch(asyncJoinMission(id));
  };

  return (
    <li key={mission_id}>
      <div className="missionLi">
        <div className="description">
          <div className="main-description">
            <p className="author">{mission_id}</p>
            <p className="author">{mission_name}</p>
            <p className="author">{description}</p>
          </div>
          <div className="buttons-div">
            <button type="button" className="button" onClick={handleRemove}>Remove</button>
          </div>
        </div>
      </div>
    </li>
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
