import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { asyncJoinMission } from '../redux/missions/missions';

const Mission = (props) => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const { mission } = props;
  const {
    // eslint-disable-next-line no-unused-vars
    id, name, description,
  } = mission;

  // const handleRemove = () => {
  //   dispatch(asyncJoinMission(id));
  // };

  // const progress = Math.floor(Math.random() * 100);
  // const chapter = Math.floor(Math.random() * 20);

  return (
    <li key={id} />
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
