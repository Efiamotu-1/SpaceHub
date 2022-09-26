import React from 'react';
import PropTypes from 'prop-types';
import './missions.css';
import { useDispatch } from 'react-redux';
import { asyncJoinMission } from '../redux/missions/missions';

const Mission = (props) => {
  const dispatch = useDispatch();
  const { mission } = props;
  const {
    id, name, description,
  } = mission;

  const handleRemove = () => {
    dispatch(asyncJoinMission(id));
  };

  // const progress = Math.floor(Math.random() * 100);
  // const chapter = Math.floor(Math.random() * 20);

  return (
    <li key={id}>
      <div className="missionLi">
        <div className="description">
          <div className="main-description">
            <p className="title">{name}</p>
            <p className="author">{description}</p>
          </div>
          <div className="buttons-div">
            <button type="button" className="button">Comments</button>
            <div className="divider"> </div>
            <button type="button" className="button" onClick={handleRemove}>Remove</button>
            <div className="divider"> </div>
            <button type="button" className="button">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-stat">
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
            </div>
            <div>
              <button className="primary-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Mission;

Mission.defaultProps = {
  mission: {
    id: '',
    name: '',
    description: '',
  },
};

Mission.propTypes = {
  mission:
    PropTypes.shape(
      {
        id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
      },
    ),
};
