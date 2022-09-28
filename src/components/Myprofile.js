import React from 'react';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const missions = useSelector((state) => state.stMissions);
  const rockets = useSelector((state) => state.stRockets.rockets);
  return (
    <div>
      <div className="mt-5 flex mx-auto w-11/12 space-x-5">
        {/* Missions Filter & render */}
        <div className="w-1/2">
          <p className="font-thin text-3xl"> My Rockets </p>
          <div className="border mt-3 rounded">
            {missions.filter((mission) => mission.reserved === true).map((mission) => (mission && <div className="px-4 py-2 border">{mission.mission_name}</div>))}

          </div>
        </div>

        {/* Rockets Filter & render */}
        <div className="w-1/2">
          <p className="font-thin text-3xl">My Rockets</p>
          <div className="border mt-3 rounded">
            {rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (rocket && <div className="px-4 py-2 border">{rocket.name}</div>))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
